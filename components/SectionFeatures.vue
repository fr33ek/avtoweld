<script setup lang="ts">
import { computed } from 'vue'
import { site } from '~/data/site'

const featureIconId: Record<string, string> = {
  'Шиномонтаж легковых': 'tire',
  'Балансировка колёс': 'balance',
  'Прокатка литых и стальных дисков': 'disk',
  'Аргонная сварка дисков': 'welding',
  'Сезонное хранение шин': 'storage',
  'Вулканизация': 'nitrogen',
  'Предварительная запись': 'calendar',
}

const svgAttrs = {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  'stroke-width': 2,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
} as const

const iconDefs: Record<string, { d?: string; paths?: string[] }> = {
  tire: { paths: ['M12 4v16', 'M6 8h12v8H6z', 'M9 12h6'] },
  balance: { paths: ['M12 2v4M12 18v4M2 12h4M18 12h4', 'm4.93 4.93 2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83', 'M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z'] },
  disk: { paths: ['M12 2v4M12 18v4M2 12h4M18 12h4', 'M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83', 'circle cx=12 cy=12 r=6'] },
  welding: { paths: ['M12 2v6l4 2', 'M12 22v-6l4-2', 'M4 8l4 2v4L4 16', 'M20 8l-4 2v4l4 2', 'M12 12a3 3 0 1 1 0 6 3 3 0 0 1 0-6z'] },
  storage: { paths: ['M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M9 22V12h6v10'] },
  nitrogen: { paths: ['M12 2v4M12 18v4', 'M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83', 'M2 12h4M18 12h4', 'M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83', 'circle cx=12 cy=12 r=3'] },
  calendar: { paths: ['M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z', 'M16 2v4M8 2v4M3 10h18'] },
  fallback: { d: 'M5 13l4 4L19 7' },
}

function getIconPaths(label: string): { tag: string; attrs: Record<string, unknown> }[] {
  const id = featureIconId[label] ?? 'fallback'
  const def = iconDefs[id] ?? iconDefs.fallback
  if (def.d) {
    return [{ tag: 'path', attrs: { d: def.d } }]
  }
  const shapes: { tag: string; attrs: Record<string, unknown> }[] = []
  for (const p of def.paths || []) {
    if (p.startsWith('circle ')) {
      const tokens = p.split(' ')
      const attrs: Record<string, unknown> = { fill: 'none', stroke: 'currentColor' }
      for (let i = 1; i < tokens.length; i++) {
        const [k, v] = tokens[i].split('=')
        if (k && v !== undefined) attrs[k] = Number(v) || v
      }
      shapes.push({ tag: 'circle', attrs })
    } else {
      shapes.push({ tag: 'path', attrs: { d: p } })
    }
  }
  return shapes
}

const featuresWithIcons = computed(() =>
  site.features.map(label => ({
    label,
    shapes: getIconPaths(label),
  })),
)

const paymentItems = computed(() => {
  const s = site.payment || ''
  if (!s) return []
  return s.split(/[, и]+/).map((name: string) => name.trim()).filter(Boolean)
})
</script>

<template>
  <section class="border-t border-site-border bg-site-surface px-4 py-16 md:py-20">
    <div class="mx-auto max-w-6xl">
      <h2 class="text-center text-3xl font-bold text-white md:text-4xl">
        В сервисе
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-center text-site-muted">
        Услуги и возможности
      </p>
      <ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(row, i) in featuresWithIcons"
          :key="i"
          class="flex items-center gap-4 rounded-2xl border border-site-border bg-site-card px-5 py-4"
        >
          <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-site-accent/20 text-site-accent">
            <svg class="h-6 w-6" v-bind="svgAttrs">
              <template v-for="(shape, si) in row.shapes" :key="si">
                <path v-if="shape.tag === 'path'" v-bind="shape.attrs" />
                <circle v-else-if="shape.tag === 'circle'" v-bind="shape.attrs" />
              </template>
            </svg>
          </span>
          <span class="text-white">{{ row.label }}</span>
        </li>
      </ul>

      <div v-if="paymentItems.length" class="mt-14 pt-10 border-t border-site-border">
        <p class="mb-6 text-center text-sm font-medium uppercase tracking-wider text-site-muted">
          Оплата
        </p>
        <ul class="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
          <li
            v-for="(name, i) in paymentItems"
            :key="i"
            class="flex items-center gap-3 rounded-2xl border border-site-border bg-site-card px-5 py-4"
          >
            <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-site-accent/20 text-site-accent">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M12 8v8M8 12h8" />
              </svg>
            </span>
            <span class="text-white">{{ name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
