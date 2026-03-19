<script setup lang="ts">
import { site } from '~/data/site'
const nav = [
  { label: 'Услуги', hash: '#services' },
  { label: 'Преимущества', hash: '#features' },
  { label: 'Контакты', hash: '#contacts' },
]
const open = ref(false)
const baseURL = useRuntimeConfig().app.baseURL || '/'
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-site-border bg-site-bg/95 backdrop-blur"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
      <NuxtLink to="/" class="flex items-center gap-3">
        <img
          :src="`${baseURL}logo.png`"
          :alt="site.name"
          width="140"
          height="44"
          class="logo-on-dark h-10 w-auto object-contain md:h-12"
          fetchpriority="high"
        />
      </NuxtLink>

      <nav class="hidden items-center gap-8 md:flex">
        <a
          v-for="item in nav"
          :key="item.hash"
          :href="item.hash"
          class="text-site-muted transition hover:text-site-accent"
        >
          {{ item.label }}
        </a>
        <a
          :href="`tel:${site.contacts.phoneRaw}`"
          class="inline-flex items-center gap-2 rounded-2xl bg-site-accent px-4 py-2 text-sm font-medium text-white shadow-neon transition hover:bg-site-accent-hover"
        >
          <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {{ site.contacts.phone }}
        </a>
      </nav>

      <button
        type="button"
        class="md:hidden rounded-2xl p-2 text-site-muted hover:text-white"
        aria-label="Меню"
        @click="open = !open"
      >
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            v-if="!open"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            v-else
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <div
      v-show="open"
      class="border-t border-site-border bg-site-surface px-4 py-4 md:hidden"
    >
      <nav class="flex flex-col gap-4">
        <a
          v-for="item in nav"
          :key="item.hash"
          :href="item.hash"
          class="text-site-muted hover:text-site-accent"
          @click="open = false"
        >
          {{ item.label }}
        </a>
        <a
          :href="`tel:${site.contacts.phoneRaw}`"
          class="inline-flex items-center justify-center gap-2 rounded-2xl bg-site-accent px-4 py-2 font-medium text-white"
          @click="open = false"
        >
          <svg class="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {{ site.contacts.phone }}
        </a>
      </nav>
    </div>
  </header>
</template>
