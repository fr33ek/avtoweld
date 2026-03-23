<script setup lang="ts">
import { site } from '~/data/site'
import { organizationJsonLd, siteMetaDescription, siteMetaKeywords } from '~/data/seo'

const title = `${site.name} — ${site.tagline}`
const desc = siteMetaDescription()
const siteBase = site.siteUrl.replace(/\/$/, '')
const ogImage = `${siteBase}/og-image.png`

useHead({
  title,
  meta: [
    { name: 'description', content: desc },
    { name: 'keywords', content: siteMetaKeywords() },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: site.siteUrl },
    { property: 'og:title', content: title },
    { property: 'og:description', content: desc },
    { property: 'og:image', content: ogImage },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:locale', content: 'ru_RU' },
  ],
  link: [
    { rel: 'canonical', href: site.siteUrl },
    { rel: 'sitemap', type: 'application/xml', href: `${siteBase}/sitemap.xml` },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(organizationJsonLd()),
    },
  ],
})

const SECTION_IDS = ['services', 'features', 'contacts'] as const
const TOP_THRESHOLD = 180

onMounted(() => {
  let ticking = false
  function updateHash() {
    if (typeof window === 'undefined') return
    const scrollY = window.scrollY
    if (scrollY < TOP_THRESHOLD) {
      if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search)
      }
      return
    }
    let current = ''
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id)
      if (!el) continue
      const top = el.getBoundingClientRect().top + scrollY
      if (scrollY >= top - 100) current = id
    }
    const newHash = current ? `#${current}` : ''
    if (newHash !== window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search + newHash)
    }
  }
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateHash()
        ticking = false
      })
      ticking = true
    }
  }, { passive: true })
  updateHash()
})
</script>

<template>
  <div>
    <SectionHero />
    <SectionServices id="services" />
    <SectionFeatures id="features" />
    <SectionContacts id="contacts" />
    <SectionMap />
    <SectionCta />
  </div>
</template>
