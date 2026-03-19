<script setup lang="ts">
import { site } from '~/data/site'

// Иконки категорий: ключ — название категории, значение — id варианта (см. варианты ниже)
const categoryIconId: Record<string, string> = {
  'Шиномонтаж': 'tire-wheel',
  'Хранение шин': 'storage-box',
}
</script>

<template>
  <section class="px-4 py-16 md:py-20">
    <div class="mx-auto max-w-6xl">
      <h2 class="text-center text-3xl font-bold text-white md:text-4xl">
        Цены
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-center text-site-muted">
        Ориентировочные цены. Уточняйте по телефону.
      </p>
      <div class="mt-12 space-y-8">
        <div
          v-for="(cat, ci) in site.serviceCategories"
          :key="ci"
          class="overflow-hidden rounded-2xl border border-site-border bg-site-surface"
        >
          <div class="flex items-center gap-3 border-b border-site-border bg-site-card/50 px-6 py-3">
            <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-site-accent/20 text-site-accent">
              <!-- Шиномонтаж: колесо/диск -->
              <svg v-if="categoryIconId[cat.name] === 'tire-wheel'" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12" />
              </svg>
              <!-- Шиномонтаж вариант 2: покрышка в профиль -->
              <svg v-else-if="categoryIconId[cat.name] === 'tire-profile'" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 12h16M6 10v4M10 9v6M14 9v6M18 10v4" />
                <ellipse cx="12" cy="12" rx="10" ry="4" />
              </svg>
              <!-- Шиномонтаж вариант 3: гаечный ключ + круг -->
              <svg v-else-if="categoryIconId[cat.name] === 'tire-wrench'" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              <!-- Хранение: коробка/склад -->
              <svg v-else-if="categoryIconId[cat.name] === 'storage-box'" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
              </svg>
              <!-- Хранение вариант 2: палета/штабель -->
              <svg v-else-if="categoryIconId[cat.name] === 'storage-stack'" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <path d="M3 6h18M16 10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2" />
              </svg>
              <!-- Хранение вариант 3: складское здание -->
              <svg v-else-if="categoryIconId[cat.name] === 'storage-warehouse'" class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <path d="M9 22V12h6v10" />
              </svg>
              <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></svg>
            </span>
            <h3 class="text-lg font-semibold text-site-accent">
              {{ cat.name }}
            </h3>
          </div>
          <ul class="divide-y divide-site-border">
            <li
              v-for="(s, i) in cat.services"
              :key="i"
              class="flex items-center justify-between gap-4 px-6 py-3 md:px-8 md:py-4"
            >
              <span class="min-w-0 flex-1 text-white">{{ s.name }}</span>
              <span class="shrink-0 text-site-accent">{{ s.price }}</span>
            </li>
          </ul>
        </div>
      </div>
      <p class="mt-6 text-center text-sm text-site-muted">
        Точные цены уточняйте по телефону.
      </p>
    </div>
  </section>
</template>
