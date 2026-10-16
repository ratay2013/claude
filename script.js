/* ===== ЄДИНЕ МІСЦЕ ДЛЯ НАЛАШТУВАНЬ ===== */
const COURSE_CONFIG = {
  checkoutUrl: "ВСТАВИТИ_ПОСИЛАННЯ_НА_ОПЛАТУ",
  instagramUrl: "https://www.instagram.com/yoga_prostir_prana/",
  currentPrice: 399,
  oldPrice: 2999,
  currency: "грн",
  accessPeriod: "6 місяців",
  // Формат: "2026-10-31T23:59:59+03:00". Поки стоїть заглушка — таймер прихований.
  offerEndDate: "ВСТАВИТИ_ДАТУ"
};
const CHECKOUT_URL = COURSE_CONFIG.checkoutUrl;
/* ======================================= */

(function () {
  var C = COURSE_CONFIG;
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };

  // Ціни, доступ, посилання
  $$("[data-price-now]").forEach(function (e) { e.textContent = C.currentPrice + " " + C.currency; });
  $$("[data-price-old]").forEach(function (e) { e.textContent = C.oldPrice + " " + C.currency; });
  $$("[data-access]").forEach(function (e) { e.textContent = C.accessPeriod; });
  $$("[data-checkout]").forEach(function (a) { a.setAttribute("href", CHECKOUT_URL); a.setAttribute("target", "_self"); });
  $$("[data-instagram]").forEach(function (a) { a.setAttribute("href", C.instagramUrl); });

  // Аналітика: подія кліку по CTA (працює, якщо підключені fbq / gtag / dataLayer)
  $$(".cta-buy").forEach(function (a) {
    a.addEventListener("click", function () {
      var place = a.getAttribute("data-cta");
      if (window.fbq) window.fbq("track", "InitiateCheckout", { content_name: place });
      if (window.gtag) window.gtag("event", "cta_click", { cta_place: place });
      if (window.dataLayer) window.dataLayer.push({ event: "cta_click", cta_place: place });
    });
  });

  // FAQ accordion (можна відкрити кілька)
  $$(".faq__q").forEach(function (b) {
    b.addEventListener("click", function () {
      var open = b.getAttribute("aria-expanded") === "true";
      b.setAttribute("aria-expanded", String(!open));
      b.closest(".faq__item").classList.toggle("open", !open);
    });
  });

  // Таймер: реальна дата, без скидання при оновленні
  var block = document.getElementById("timer-block");
  var timer = document.getElementById("timer");
  var ended = document.getElementById("offer-ended");
  var end = Date.parse(C.offerEndDate);
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  if (isNaN(end)) {
    block.hidden = true;
  } else {
    var tick = function () {
      var left = end - Date.now();
      if (left <= 0) {
        timer.hidden = true; ended.hidden = false; clearInterval(iv); return;
      }
      var s = Math.floor(left / 1000);
      document.getElementById("t-h").textContent = pad(Math.floor(s / 3600));
      document.getElementById("t-m").textContent = pad(Math.floor(s % 3600 / 60));
      document.getElementById("t-s").textContent = pad(s % 60);
    };
    var iv = setInterval(tick, 1000); tick();
  }

  // Sticky CTA після першого екрана
  var sticky = document.getElementById("sticky");
  var onScroll = function () {
    var show = window.scrollY > window.innerHeight * 0.8;
    sticky.classList.toggle("show", show);
    sticky.setAttribute("aria-hidden", String(!show));
    sticky.tabIndex = show ? 0 : -1;
  };
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // Fade-in при появі
  var items = $$(".card,.zone,.big-card,.review,.accent-box,.today,.after,.compare figure");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    items.forEach(function (e) { e.classList.add("reveal"); io.observe(e); });
  }
})();
