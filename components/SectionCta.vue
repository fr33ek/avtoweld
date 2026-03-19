<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section class="px-4 py-16 md:py-20">
    <div class="mx-auto max-w-2xl rounded-2xl border border-site-border bg-site-surface p-8 text-center md:p-12">
      <h2 class="text-2xl font-bold text-white md:text-3xl">
        Записаться или уточнить цены
      </h2>
      <p class="mt-4 text-site-muted">
        Позвоните нам — подберём удобное время для шиномонтажа.
      </p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          v-if="site.contacts.telegram"
          :href="site.contacts.telegram"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 rounded-2xl bg-site-accent px-6 py-3 font-medium text-white transition hover:bg-site-accent-hover"
        >
          <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
          Telegram
        </a>
        <a
          :href="`tel:${site.contacts.phoneRaw}`"
          class="inline-flex items-center gap-2 rounded-2xl border border-site-border bg-site-card px-6 py-3 font-medium text-white transition hover:border-site-accent/50"
        >
          <svg class="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Позвонить
        </a>
      </div>
    </div>
  </section>
</template>
