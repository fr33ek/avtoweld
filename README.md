# Avtoweld — лендинг шиномонтажа

Лендинг шиномонтажа [Avtoweld](https://yandex.com/maps/org/avtoweld/163230388862/) (СПб, Большой Смоленский пр., 10Б). Nuxt 4, Tailwind 4, тёмно-бордовая тема.

**Репозиторий:** https://github.com/fr33ek/avtoweld  
**Деплой:** GitHub Pages → https://fr33ek.github.io/avtoweld/ · на свой хостинг по FTP — workflow `Deploy to hosting (FTP)` (см. ниже).

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

### Карта Яндекса на сайте

Без ключа в блоке «Как нас найти» показывается только **ссылка** на Яндекс.Карты, не встраиваемая карта.

1. Секрет **`NUXT_PUBLIC_YANDEX_MAPS_API_KEY`** в **Settings → Secrets and variables → Actions** (тот же ключ можно использовать, что и для ТехПарка, если ограничения по Referer это допускают).
2. В [кабинете разработчика Яндекса](https://developer.tech.yandex.ru/) для ключа **JavaScript API** в **HTTP Referer** укажите:
   - для **GitHub Pages:** `https://fr33ek.github.io` (или полный URL с путём, если так настроено в кабинете);
   - для **своего домена** (например `https://avtoweld.ru`): добавьте этот origin;
   - для **localhost** — для разработки.
3. Локально: скопируйте `.env.example` в `.env` и задайте `NUXT_PUBLIC_YANDEX_MAPS_API_KEY=...`, затем `npm run dev` / `npm run generate`.

В коде загрузка скрипта карты с **`referrerPolicy: origin`**, чтобы Referer совпадал с настройкой ключа по домену без пути (как на ТехПарке).

## Деплой на свой хостинг по FTP

После `push` в `main` (или вручную: **Actions → Deploy to hosting (FTP) → Run workflow**) выполняется `.github/workflows/deploy-ftp.yml`: `npm ci` → `npm run generate` → содержимое **`.output/public`** заливается на FTP.

Сборка для FTP идёт с **корневым** `baseURL` (`/`), как для своего домена. Для выкладки в **подпапку** на сервере добавьте в шаг `Generate static site` в `deploy-ftp.yml` переменную окружения `NUXT_APP_BASE_URL: /имя_папки/` (по аналогии с GitHub Pages).

### Секреты (Settings → Secrets and variables → Actions)

| Секрет | Описание |
|--------|----------|
| `FTP_SERVER` | Хост FTP **без** `ftp://` |
| `FTP_USERNAME` | Логин FTP |
| `FTP_PASSWORD` | Пароль FTP |
| `FTP_REMOTE_DIR` | Каталог на сервере от корня FTP-аккаунта (например `www/домен/public_html/`); в конце желательно **`/`** |

Опционально: **`NUXT_PUBLIC_YANDEX_MAPS_API_KEY`** — карта в прод-сборке.

`dangerous-clean-slate` выключен: лишние файлы на сервере не удаляются. Для **FTPS** в шаге `Upload to FTP` добавьте в `with:` строку `protocol: ftps-legacy` или `ftps` — см. [FTP-Deploy-Action](https://github.com/SamKirkland/FTP-Deploy-Action).
