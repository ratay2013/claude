# Лендинг: 7-денний практикум від болю в попереку

Файли: `index.html`, `styles.css`, `script.js`, `assets/`. Збірка не потрібна — відкрийте `index.html` або залийте папку на хостинг.

Усі налаштування — у `COURSE_CONFIG` на початку `script.js`.

1. **Checkout URL** — `checkoutUrl` (усі кнопки CTA беруть його звідти).
2. **Instagram** — `instagramUrl` (і `href` у `index.html` біля `data-instagram` як запасний).
3. **Ціна** — `currentPrice`, `currency`.
4. **Стара ціна** — `oldPrice`.
5. **Дата завершення акції** — `offerEndDate`, формат `2026-10-31T23:59:59+03:00`. Поки стоїть заглушка, таймер прихований; після дати показується «Акція завершена».
6. **Фото** — замініть файли в `assets/photos/` (зараз там сірі SVG-заглушки з тими самими іменами: `yulia-hero`, `yulia-expert`, `pain-1…7`, `pain-person`, `happy-person`, `review-*`, `og-image`). Якщо розширення інше (`.webp`), змініть його в `index.html`. Рекомендовано WebP, hero ~4:5.
7. **Термін доступу** — `accessPeriod`.
8. **Meta Pixel** — вставте код піксела в `<head>` `index.html` на місце коментаря «Аналітика». Кліки по CTA відправляють `InitiateCheckout`.
9. **GA4 / GTM** — вставте gtag.js або GTM-сніпет туди ж. Кліки відправляють `cta_click` з `cta_place` (`hero`, `pain`, `week`, `results`, `guarantee`, `reviews`, `faq`, `sticky`).

Також замініть `og:url` у `<head>` на адресу сайту.
