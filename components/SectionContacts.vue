<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <section class="px-4 py-16 md:py-20">
    <div class="mx-auto max-w-6xl">
      <h2 class="text-center text-3xl font-bold text-white md:text-4xl">
        Контакты
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-center text-site-muted">
        Свяжитесь с нами удобным способом
      </p>
      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:max-w-4xl lg:mx-auto">
        <div class="rounded-2xl border border-site-border bg-site-surface p-6">
          <p class="text-sm font-medium text-site-muted">Телефон</p>
          <a
            :href="`tel:${site.contacts.phoneRaw}`"
            class="mt-2 flex items-center gap-2 text-lg font-medium text-white hover:text-site-accent"
          >
            <Icon name="lucide:phone" class="h-5 w-5 shrink-0" aria-hidden="true" />
            {{ site.contacts.phone }}
          </a>
        </div>
        <div class="rounded-2xl border border-site-border bg-site-surface p-6">
          <p class="text-sm font-medium text-site-muted">Адрес</p>
          <p class="mt-2 text-white">
            {{ site.address.full }}
          </p>
          <p v-if="site.metro" class="mt-1 text-sm text-site-muted">{{ site.metro }}</p>
        </div>
        <div class="rounded-2xl border border-site-border bg-site-surface p-6">
          <p class="text-sm font-medium text-site-muted">График</p>
          <div class="mt-2 space-y-0.5 text-white">
            <p v-for="(line, i) in site.scheduleLines" :key="i">
              {{ line }}
            </p>
            <p v-if="site.scheduleNote" class="text-sm text-site-muted">
              {{ site.scheduleNote }}
            </p>
          </div>
        </div>
        <div v-if="site.contacts.telegram" class="rounded-2xl border border-site-border bg-site-surface p-6">
          <p class="text-sm font-medium text-site-muted">Telegram</p>
          <a
            :href="site.contacts.telegram"
            target="_blank"
            rel="noopener"
            class="mt-2 inline-flex items-center gap-2 text-site-accent hover:underline"
          >
            <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            Написать в Telegram
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
