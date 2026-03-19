# Avtoweld — лендинг шиномонтажа

Лендинг шиномонтажа [Avtoweld](https://yandex.com/maps/org/avtoweld/163230388862/) (СПб, Большой Смоленский пр., 10Б). Nuxt 4, Tailwind 4, тёмно-бордовая тема.

**Репозиторий:** https://github.com/fr33ek/avtoweld  
**Деплой:** GitHub Pages → https://fr33ek.github.io/avtoweld/

## Сборка и запуск

```bash
npm install
npm run dev
```

Статическая сборка (для Pages в workflow используется `NUXT_APP_BASE_URL=/avtoweld/`):

```bash
npm run generate
```

В `public/` положите `logo.png` и при необходимости фавиконки.

## Деплой на GitHub Pages

1. В настройках репозитория: **Settings → Pages → Build and deployment** — Source: **GitHub Actions**.
2. При пуше в `main` workflow `Deploy to GitHub Pages` собирает сайт и публикует его.

Опционально в секретах репозитория задайте `NUXT_PUBLIC_YANDEX_MAPS_API_KEY` для интерактивной карты (без ключа показывается ссылка на Яндекс.Карты).
