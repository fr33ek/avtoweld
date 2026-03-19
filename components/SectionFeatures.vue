<script setup lang="ts">
import { computed } from 'vue'
import { site } from '~/data/site'

const featureIconId: Record<string, string> = {
  'Шиномонтаж легковых': 'tire',
  'Балансировка колёс': 'balance',
  'Прокатка литых и стальных дисков': 'disk',
  'Аргонная сварка дисков': 'welding',
  'Сезонное хранение шин': 'storage',
  'Вулканизация': 'vulcanization',
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
  tire: { paths: ['circle cx=12 cy=12 r=9', 'circle cx=12 cy=12 r=5'] },
  balance: { paths: ['circle cx=12 cy=12 r=8', 'circle cx=12 cy=3.5 r=1.5', 'circle cx=20.5 cy=12 r=1.5', 'circle cx=12 cy=20.5 r=1.5', 'circle cx=3.5 cy=12 r=1.5'] },
  disk: { paths: ['circle cx=12 cy=12 r=8', 'M12 12L12 4', 'M12 12L19 10', 'M12 12L17 19', 'M12 12L7 19', 'M12 12L5 10', 'circle cx=12 cy=12 r=2'] },
  welding: { paths: ['M19 5L10 14L6 18', 'M6 18L4 22', 'M6 18L6 23', 'M6 18L8 22', 'M5 17L5 21', 'M7 17L7 21'] },
  storage: { paths: ['M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M9 22V12h6v10'] },
  nitrogen: { paths: ['M12 2v4M12 18v4', 'M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83', 'M2 12h4M18 12h4', 'M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83', 'circle cx=12 cy=12 r=3'] },
  vulcanization: { paths: ['M12 2a10 10 0 0 1 0 20 10 10 0 0 1 0-20z', 'M9 10h6v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4z'] },
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

const paymentItems = [
  { name: 'Наличными', icon: 'cash', bgClass: 'bg-payment-cash', textClass: 'text-payment-cash' },
  { name: 'Картой', icon: 'card', bgClass: 'bg-payment-card', textClass: 'text-payment-card' },
] as const
</script>

<template>
  <section class="border-t border-site-border bg-site-surface px-4 py-16 md:py-20">
    <div class="mx-auto max-w-6xl">
      <h2 class="text-center text-3xl font-bold text-white md:text-4xl">
        Возможности
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-center text-site-muted">
        Что мы делаем
      </p>
      <ul class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(row, i) in featuresWithIcons"
          :key="i"
          class="flex items-center gap-4 rounded-2xl border border-site-border bg-site-card px-5 py-4"
        >
          <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-soft text-teal">
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

      <div class="mt-14 pt-10 border-t border-site-border">
        <p class="mb-6 text-center text-sm font-medium uppercase tracking-wider text-site-muted">
          Оплата
        </p>
        <ul class="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto">
          <li
            v-for="(item, i) in paymentItems"
            :key="i"
            class="flex items-center gap-3 rounded-2xl border border-site-border bg-site-card px-5 py-4"
          >
            <span :class="['flex h-12 w-12 shrink-0 items-center justify-center rounded-full', item.bgClass, item.textClass]">
              <svg v-if="item.icon === 'cash'" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 8h20v12H2V8z" />
                <path d="M12 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                <path d="M2 12h2M20 12h2" />
              </svg>
              <svg v-else-if="item.icon === 'card'" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </span>
            <span class="text-white">{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
