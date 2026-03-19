<script setup lang="ts">
import { site } from '~/data/site'

const featureIconId: Record<string, string> = {
  'Шиномонтаж легковых': 'lucide:circle',
  'Балансировка колёс': 'lucide:scale',
  'Прокатка литых и стальных дисков': 'lucide:circle-dashed',
  'Аргонная сварка дисков': 'lucide:flame',
  'Сезонное хранение шин': 'lucide:warehouse',
  'Вулканизация': 'lucide:bandage',
  'Предварительная запись': 'lucide:calendar-days',
}

function featureIcon(label: string): string {
  return featureIconId[label] ?? 'lucide:check'
}

const paymentItems = [
  { name: 'Наличными', icon: 'lucide:banknote', bgClass: 'bg-payment-cash', textClass: 'text-payment-cash' },
  { name: 'Картой', icon: 'lucide:credit-card', bgClass: 'bg-payment-card', textClass: 'text-payment-card' },
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
          v-for="(label, i) in site.features"
          :key="i"
          class="flex items-center gap-4 rounded-2xl border border-site-border bg-site-card px-5 py-4"
        >
          <span class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal-soft text-teal">
            <Icon :name="featureIcon(label)" class="h-6 w-6" aria-hidden="true" />
          </span>
          <span class="text-white">{{ label }}</span>
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
              <Icon :name="item.icon" class="h-6 w-6" aria-hidden="true" />
            </span>
            <span class="text-white">{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
