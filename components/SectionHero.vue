<script setup lang="ts">
import { site } from '~/data/site'
const baseURL = useRuntimeConfig().app.baseURL || '/'
</script>

<template>
  <section class="relative overflow-hidden border-b border-site-border bg-site-surface px-4 py-16 md:py-24">
    <div class="mx-auto max-w-6xl text-center">
      <img
        :src="`${baseURL}logo.png`"
        :alt="site.name"
        width="200"
        height="64"
        class="logo-on-dark mx-auto mb-6 h-20 w-auto rounded-2xl object-contain md:h-28"
      />
      <h1 class="sr-only">{{ site.name }}</h1>
      <div
        v-if="site.award"
        class="mb-4 inline-flex items-center gap-2"
        role="img"
        :aria-label="site.award"
      >
        <span class="flex shrink-0" aria-hidden="true">
          <svg class="h-6 w-auto" viewBox="0 0 28 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.593 14.635c.886-.949 3.343-2.48 6.016-.147-1.435 1.592-3.899 2.131-6.016.147z" fill="#FC0" />
            <path d="M19.593 14.635c.886-.949 3.343-2.48 6.016-.147-1.435 1.592-3.899 2.131-6.016.147z" fill="url(#award-g1-aw)" />
            <path d="M22.52 12.129c.723-2.305 3.107-3.077 5.027-1.928-.509 1.999-2.89 3.238-5.027 1.928z" fill="#FC0" />
            <path d="M22.52 12.129c.723-2.305 3.107-3.077 5.027-1.928-.509 1.999-2.89 3.238-5.027 1.928z" fill="url(#award-g2-aw)" />
            <path d="M24.33 9.17c-.306-2.703 1.432-4.177 3.552-4.044.49 2.38-1.294 4.147-3.551 4.044z" fill="#FC0" />
            <path d="M24.33 9.17c-.306-2.703 1.432-4.177 3.552-4.044.49 2.38-1.294 4.147-3.551 4.044z" fill="url(#award-g3-aw)" />
            <path d="M24.476 5.666c-1.525-2.12-1.229-3.942.89-5.467 1.526 2.119 1.23 3.941-.89 5.467z" fill="#FC0" />
            <path d="M24.476 5.666c-1.525-2.12-1.229-3.942.89-5.467 1.526 2.119 1.23 3.941-.89 5.467z" fill="url(#award-g4-aw)" />
            <path d="M8.407 14.635c-.886-.949-3.343-2.48-6.016-.147 1.435 1.592 3.899 2.131 6.016.147z" fill="#FC0" />
            <path d="M8.407 14.635c-.886-.949-3.343-2.48-6.016-.147 1.435 1.592 3.899 2.131 6.016.147z" fill="url(#award-g5-aw)" />
            <path d="M5.48 12.129C4.756 9.824 2.372 9.052.452 10.2c.509 1.999 2.89 3.238 5.026 1.928z" fill="#FC0" />
            <path d="M5.48 12.129C4.756 9.824 2.372 9.052.452 10.2c.509 1.999 2.89 3.238 5.026 1.928z" fill="url(#award-g6-aw)" />
            <path d="M3.67 9.17C3.975 6.467 2.237 4.993.117 5.126c-.49 2.38 1.294 4.147 3.551 4.044z" fill="#FC0" />
            <path d="M3.67 9.17C3.975 6.467 2.237 4.993.117 5.126c-.49 2.38 1.294 4.147 3.551 4.044z" fill="url(#award-g7-aw)" />
            <path d="M3.524 5.666c1.525-2.12 1.229-3.942-.89-5.467-1.526 2.119-1.23 3.941.89 5.467z" fill="#FC0" />
            <path d="M3.524 5.666c1.525-2.12 1.229-3.942-.89-5.467-1.526 2.119-1.23 3.941.89 5.467z" fill="url(#award-g8-aw)" />
            <path d="M14 .667a6.001 6.001 0 0 0-4.244 10.24c1.086 1.087 3.644 2.66 3.796 4.311.022.247.202.449.448.449s.426-.202.448-.449c.152-1.651 2.707-3.22 3.793-4.307A6.001 6.001 0 0 0 14 .667z" fill="url(#award-pin-aw)" />
            <path d="M14 8.72a2.053 2.053 0 1 1 0-4.106 2.053 2.053 0 0 1 0 4.105z" fill="#fff" />
            <defs>
              <linearGradient id="award-g1-aw" x1="25.59" y1="14.697" x2="19.587" y2="14.925" gradientUnits="userSpaceOnUse"><stop stop-color="#FC0" /><stop offset="1" stop-color="#FE9B21" /></linearGradient>
              <linearGradient id="award-g2-aw" x1="27.541" y1="10.207" x2="22.634" y2="12.445" gradientUnits="userSpaceOnUse"><stop stop-color="#FC0" /><stop offset="1" stop-color="#FE9B21" /></linearGradient>
              <linearGradient id="award-g3-aw" x1="27.809" y1="5.072" x2="24.649" y2="9.444" gradientUnits="userSpaceOnUse"><stop stop-color="#FC0" /><stop offset="1" stop-color="#FE9B21" /></linearGradient>
              <linearGradient id="award-g4-aw" x1="25.319" y1=".198" x2="24.87" y2="5.73" gradientUnits="userSpaceOnUse"><stop stop-color="#FC0" /><stop offset="1" stop-color="#FE9B21" /></linearGradient>
              <linearGradient id="award-g5-aw" x1="2.41" y1="14.697" x2="8.413" y2="14.925" gradientUnits="userSpaceOnUse"><stop stop-color="#FC0" /><stop offset="1" stop-color="#FE9B21" /></linearGradient>
              <linearGradient id="award-g6-aw" x1=".459" y1="10.207" x2="5.366" y2="12.445" gradientUnits="userSpaceOnUse"><stop stop-color="#FC0" /><stop offset="1" stop-color="#FE9B21" /></linearGradient>
              <linearGradient id="award-g7-aw" x1=".191" y1="5.072" x2="3.351" y2="9.444" gradientUnits="userSpaceOnUse"><stop stop-color="#FC0" /><stop offset="1" stop-color="#FE9B21" /></linearGradient>
              <linearGradient id="award-g8-aw" x1="2.681" y1=".198" x2="3.13" y2="5.73" gradientUnits="userSpaceOnUse"><stop stop-color="#FC0" /><stop offset="1" stop-color="#FE9B21" /></linearGradient>
              <linearGradient id="award-pin-aw" x1="14" y1=".667" x2="14" y2="15.667" gradientUnits="userSpaceOnUse"><stop stop-color="#FF6122" /><stop offset="1" stop-color="#F22411" /></linearGradient>
            </defs>
          </svg>
        </span>
        <span class="text-base font-medium text-white md:text-lg">{{ site.award }}</span>
      </div>
      <p class="mt-4 text-xl text-site-muted">
        {{ site.tagline }}
      </p>
      <p v-if="site.rating != null" class="mt-2 flex items-center justify-center gap-2 text-site-muted">
        <span class="inline-flex items-center gap-0.5 font-medium text-white">
          <template v-for="n in 5" :key="n">
            <svg class="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="#FC0" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </template>
          <span class="ml-1 text-base">{{ Number(site.rating).toFixed(1) }}</span>
        </span>
        <span>·</span>
        <span>{{ site.reviewsCount }} отзывов</span>
      </p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          :href="`tel:${site.contacts.phoneRaw}`"
          class="inline-flex items-center gap-2 rounded-2xl bg-site-accent px-6 py-3 font-medium text-white shadow-neon transition hover:bg-site-accent-hover hover:shadow-neon"
        >
          <svg class="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {{ site.contacts.phone }}
        </a>
        <a
          href="#contacts"
          class="inline-flex items-center gap-2 rounded-2xl border border-site-border bg-site-card px-6 py-3 font-medium text-white transition hover:border-site-accent/50"
        >
          <svg class="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          Адрес и карта
        </a>
      </div>
      <div class="mt-8 mx-auto inline-flex items-center gap-3 rounded-2xl border border-site-border bg-site-card px-4 py-3">
        <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-site-accent/20 text-site-accent">
          <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </span>
        <span class="flex min-w-0 flex-col gap-0.5 text-left text-sm leading-snug text-white">
          <span v-for="(line, i) in site.scheduleLines" :key="i">{{ line }}</span>
          <span v-if="site.scheduleNote" class="text-site-muted">{{ site.scheduleNote }}</span>
        </span>
      </div>
    </div>
  </section>
</template>
