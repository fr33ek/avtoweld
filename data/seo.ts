import { site } from './site'

export function siteMetaDescription(): string {
  const sched = `${site.scheduleLines.join('. ')}. ${site.scheduleNote}.`
  return `Шиномонтаж ${site.name} на ${site.address.street}. ${sched} Балансировка, прокатка дисков, ремонт. Тел. ${site.contacts.phone}.`
}

export function organizationJsonLd(): Record<string, unknown> {
  const base = site.siteUrl.replace(/\/$/, '')
  const [lon, lat] = site.mapCenter

  const json: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'AutoRepair',
    '@id': `${base}/#organization`,
    name: site.name,
    description: siteMetaDescription(),
    url: base,
    telephone: site.contacts.phoneRaw,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      longitude: lon,
      latitude: lat,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '11:00',
        closes: '20:00',
      },
    ],
    sameAs: [...(site.contacts.telegram ? [site.contacts.telegram] : []), site.yandexMapLink],
  }
  if (site.rating != null && site.reviewsCount != null) {
    json.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: site.rating,
      reviewCount: site.reviewsCount,
      bestRating: 5,
    }
  }
  return json
}
