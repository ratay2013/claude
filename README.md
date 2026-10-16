# Лендинг: 7-денний практикум від болю в попереку

Файли: `index.html`, `styles.css`, `script.js`, `assets/`. Збірка не потрібна — відкрийте `index.html` або залийте папку на хостинг.

Усі налаштування — у `COURSE_CONFIG` на початку `script.js`.

1. **Checkout URL** — `checkoutUrl` (усі кнопки CTA беруть його звідти).
2. **Instagram** — `instagramUrl` (і `href` у `index.html` біля `data-instagram` як запасний).
3. **Ціна** — `currentPrice`, `currency`.
4. **Стара ціна** — `oldPrice`.
5. **Дата завершення акції** — `offerEndDate`, формат `2026-10-31T23:59:59+03:00`. Поки стоїть заглушка, таймер прихований; після дати показується «Акція завершена».
6. **Фото** — зараз це кадри, вирізані з PNG-референсів (`assets/photos/*.webp`, іконки в `assets/icons/`). Вони невеликої роздільної здатності, тому для фінального сайту замініть їх оригіналами з тими самими іменами (`yulia-hero`, `yulia-expert`, `faq-yulia`, `pain-1…7`, `today-1…4`, `zone-1…6`, `review-1…3`, `pain-person`, `happy-person`, `after-woman`, `why-woman`, `shield`, `og-image`). Для hero потрібне фото Юлії зі скелетом на білому тлі.
7. **Термін доступу** — `accessPeriod`.
8. **Meta Pixel** — вставте код піксела в `<head>` `index.html` на місце коментаря «Аналітика». Кліки по CTA відправляють `InitiateCheckout`.
9. **GA4 / GTM** — вставте gtag.js або GTM-сніпет туди ж. Кліки відправляють `cta_click` з `cta_place` (`hero`, `pain`, `week`, `results`, `guarantee`, `reviews`, `faq`, `sticky`).

Також замініть `og:url` у `<head>` на адресу сайту.
