<script setup lang="ts">
import { site } from '~/data/site'

const config = useRuntimeConfig()
const apiKey = (config.public.yandexMapsApiKey as string) || ''

const mapContainer = ref<HTMLElement | null>(null)
const mapError = ref(false)
const mapReady = ref(false)
const mapActive = ref(false)
let initStarted = false

function loadYmapsScript(key: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('SSR'))
      return
    }
    if ((window as unknown as { ymaps3?: unknown }).ymaps3) {
      resolve()
      return
    }
    const script = document.createElement('script')
    script.src = `https://api-maps.yandex.ru/v3/?apikey=${encodeURIComponent(key)}&lang=ru_RU`
    script.async = true
    // Referer только origin — совпадает с ограничением ключа в кабинете Яндекса (см. README)
    script.referrerPolicy = 'origin'
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Yandex Maps script load failed'))
    document.head.appendChild(script)
  })
}

function createMarkerElement(): HTMLElement {
  const el = document.createElement('div')
  el.style.cssText = 'width:40px;height:40px;border-radius:50%;background:#b03050;display:flex;align-items:center;justify-content:center;box-shadow:0 0 12px rgba(176,48,80,0.6);'
  el.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`
  return el
}

function initMap(container: HTMLElement) {
  if (initStarted) return
  initStarted = true
  loadYmapsScript(apiKey)
    .then(() => {
      const ymaps3 = (window as unknown as { ymaps3: { ready: Promise<void> } }).ymaps3
      return ymaps3.ready
    })
    .then(() => {
      if (!container || !container.isConnected) return
      const ymaps3 = (window as unknown as {
        ymaps3: {
          YMap: new (el: HTMLElement, opts: object, children?: unknown[]) => object
          YMapDefaultSchemeLayer: new (o?: object) => object
          YMapDefaultFeaturesLayer: new (o?: object) => object
          YMapMarker: new (opts: { coordinates: [number, number] }, el: HTMLElement) => object
        }
      }).ymaps3
      const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } = ymaps3
      const map = new YMap(
        container,
        {
          location: {
            center: site.mapCenter,
            zoom: site.mapZoom,
          },
          behaviors: ['drag', 'pinchZoom', 'dblClick'],
        },
        [
          new YMapDefaultSchemeLayer({}),
          new YMapDefaultFeaturesLayer({}),
        ]
      )
      const marker = new YMapMarker(
        { coordinates: site.mapCenter },
        createMarkerElement()
      )
      map.addChild(marker)
      mapReady.value = true
    })
    .catch(() => {
      mapError.value = true
      mapReady.value = true
      initStarted = false
    })
}

// Контейнер появляется после ClientOnly; flush: 'post' — ref уже на смонтированном DOM (как на ТехПарке)
watch(
  () => mapContainer.value,
  (el) => {
    if (apiKey && el) initMap(el)
  },
  { immediate: true, flush: 'post' },
)

onMounted(() => {
  if (!apiKey) mapReady.value = true
})
</script>

<template>
  <section class="border-t border-site-border bg-site-surface px-4 py-16 md:py-20">
    <div class="mx-auto max-w-6xl">
      <h2 class="text-center text-3xl font-bold text-white md:text-4xl">
        Как нас найти
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-center text-site-muted">
        {{ site.address.full }}
        <template v-if="site.metro"> · {{ site.metro }}</template>
      </p>

      <ClientOnly>
        <div
          v-if="apiKey && !mapError"
          class="relative mt-8 w-full"
        >
          <div class="rounded-[20px] border-[6px] border-[#1a1a1f] bg-[#0c0c10] p-2 shadow-[inset_0_2px_8px_rgba(0,0,0,0.5),0_4px_20px_rgba(0,0,0,0.4)]">
            <div
              class="relative overflow-hidden rounded-xl border border-site-border/80 bg-site-card"
              style="height: 400px; min-height: 400px"
            >
              <div
                ref="mapContainer"
                class="absolute inset-0 h-full w-full"
              />
              <div
                v-if="!mapReady"
                class="absolute inset-0 flex items-center justify-center bg-site-card text-site-muted"
              >
                Загрузка карты…
              </div>
              <div
                v-if="mapReady && !mapActive"
                class="absolute inset-0 flex cursor-pointer items-center justify-center bg-site-bg/70 backdrop-blur-[2px] transition hover:bg-site-bg/50"
                role="button"
                tabindex="0"
                aria-label="Активировать карту"
                @click="mapActive = true"
                @keydown.enter.space.prevent="mapActive = true"
              >
                <span class="rounded-lg bg-site-card/90 px-4 py-2 text-sm font-medium text-site-muted shadow-lg ring-1 ring-site-border">
                  Нажмите, чтобы управлять картой
                </span>
              </div>
            </div>
          </div>
        </div>
        <a
          v-if="!apiKey || mapError"
          :href="site.yandexMapLink"
          target="_blank"
          rel="noopener"
          class="mt-8 flex flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-site-border bg-site-card py-12 transition hover:border-site-accent/50"
        >
          <span class="text-site-muted">
            <Icon name="lucide:map-pin" class="mx-auto h-14 w-14" aria-hidden="true" />
          </span>
          <span class="text-lg font-medium text-white">
            {{ mapError ? 'Открыть карту в Яндекс.Картах' : 'Открыть в Яндекс.Картах' }}
          </span>
          <span class="text-sm text-site-muted">{{ site.address.full }} · построить маршрут</span>
        </a>
        <template #fallback>
          <div class="mt-8 h-[400px] w-full rounded-2xl border border-site-border bg-site-card" />
        </template>
      </ClientOnly>

      <p class="mt-4 text-center text-site-muted">
        <a
          :href="site.yandexMapLink"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center justify-center gap-2 rounded-2xl bg-site-accent px-4 py-2 font-medium text-white hover:bg-site-accent-hover"
        >
          <Icon name="lucide:map-pin" class="h-5 w-5 shrink-0" aria-hidden="true" />
          Открыть в Яндекс.Картах
        </a>
      </p>
    </div>
  </section>
</template>
