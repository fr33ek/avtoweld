<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section class="px-4 py-16 md:py-20">
    <div class="mx-auto max-w-6xl">
      <h2 class="text-center text-3xl font-bold text-white md:text-4xl">
        Услуги и цены
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-center text-site-muted">
        Шиномонтаж, балансировка, ремонт и прокатка дисков. Цены — ориентировочные.
      </p>
      <div class="mt-12 space-y-8">
        <div
          v-for="(cat, ci) in site.serviceCategories"
          :key="ci"
          class="overflow-hidden rounded-2xl border border-site-border bg-site-surface"
        >
          <h3 class="border-b border-site-border bg-site-card/50 px-6 py-3 text-lg font-semibold text-site-accent">
            {{ cat.name }}
          </h3>
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
