<script setup lang="ts">
import { site } from '~/data/site'
const nav = [
  { label: 'Цены', hash: '#services' },
  { label: 'Возможности', hash: '#features' },
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
          class="logo-on-dark h-10 w-auto rounded-2xl object-contain md:h-12"
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
          <Icon name="lucide:phone" class="h-4 w-4 shrink-0" aria-hidden="true" />
          {{ site.contacts.phone }}
        </a>
      </nav>

      <button
        type="button"
        class="md:hidden rounded-2xl p-2 text-site-muted hover:text-white"
        aria-label="Меню"
        @click="open = !open"
      >
        <Icon :name="open ? 'lucide:x' : 'lucide:menu'" class="h-6 w-6" aria-hidden="true" />
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
          <Icon name="lucide:phone" class="h-4 w-4 shrink-0" aria-hidden="true" />
          {{ site.contacts.phone }}
        </a>
      </nav>
    </div>
  </header>
</template>
