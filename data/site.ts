// Данные шиномонтажа Avtoweld — https://yandex.com/maps/org/avtoweld/163230388862/
import priceList from './price-list.json'

export type ServiceItem = { name: string; price: string }
export type ServiceCategory = { name: string; services: ServiceItem[] }

export const site = {
  name: 'Avtoweld',
  tagline: 'Шиномонтаж и ремонт дисков в Санкт-Петербурге',

  address: {
    city: 'Санкт-Петербург',
    street: 'Большой Смоленский пр., 10Б',
    full: 'Санкт-Петербург, Большой Смоленский пр., 10Б, этаж 1',
  },

  contacts: {
    phone: '+7 (963) 246-77-75',
    phoneRaw: '+79632467775',
    telegram: '',
  },

  scheduleLines: ['Ежедневно: 09:00–20:00'] as const,
  scheduleNote: '',

  serviceCategories: priceList as ServiceCategory[],

  features: [
    'Шиномонтаж легковых',
    'Балансировка колёс',
    'Прокатка литых и стальных дисков',
    'Аргонная сварка дисков',
    'Сезонное хранение шин',
    'Вулканизация',
    'Предварительная запись',
  ],

  payment: '', // отображаем фиксированно: Наличными, Картой

  /** Награда Яндекс.Карт */
  award: 'Хорошее место 2026',
  rating: 4.7,
  reviewsCount: 55,

  yandexMapOrgId: '163230388862',
  mapCenter: [30.417333, 59.898309] as [number, number],
  mapZoom: 16,
  yandexMapLink: 'https://yandex.com/maps/org/avtoweld/163230388862/',

  metro: 'м. Елизаровская, 520 м',

  siteUrl: 'https://fr33ek.github.io/avtoweld/',
}

export type SiteData = typeof site
