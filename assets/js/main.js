(function () {
  const COMPETITION_DATE = new Date("2026-05-30T00:00:00");
  const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

  function formatDateCN(date) {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    return `${y}年${m}月${d}日`;
  }

  function initPoster() {
    const poster = document.getElementById("daily-poster");
    if (!poster) return;

    const dateEl = poster.querySelector("[data-poster-date]");
    const statusEl = poster.querySelector("[data-poster-status]");
    const now = new Date();
    const diff = COMPETITION_DATE.getTime() - now.getTime();
    const withinWeek = diff > 0 && diff <= ONE_WEEK_MS;

    if (withinWeek) {
      dateEl.textContent = formatDateCN(COMPETITION_DATE);
      statusEl.textContent = "赛前一周 · 固定日期海报";
      poster.classList.add("is-competition-week");
    } else {
      dateEl.textContent = formatDateCN(now);
      statusEl.textContent = "今日新疆 · 打卡海报";
    }
  }

  function initSmoothScroll() {
    const isProducts = document.body.dataset.page === "products";
    const scrollOffset = isProducts ? 144 : 88;

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const id = link.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        if (isProducts) {
          const cat = getCatFromHash(id);
          if (cat) {
            document.querySelectorAll(".product-cat-item").forEach((btn) => {
              const active = btn.dataset.cat === cat;
              btn.classList.toggle("is-active", active);
              btn.setAttribute("aria-pressed", active ? "true" : "false");
            });
            document.querySelectorAll(".product-panel").forEach((panel) => {
              const active = panel.dataset.panel === cat;
              panel.classList.toggle("is-active", active);
              panel.hidden = !active;
            });
          }
          history.pushState(null, "", id);
        }
        const top = target.getBoundingClientRect().top + window.scrollY - scrollOffset;
        window.scrollTo({ top, behavior: "smooth" });
        target.classList.add("is-highlight");
        setTimeout(() => target.classList.remove("is-highlight"), 2000);
      });
    });
  }

  const PRODUCT_CAT_MAP = {
    home: ["home-bedding", "home-pillow", "home-rug", "home-cloth", "home-coaster", "home-bag"],
    travel: ["travel-tissue", "travel-towel", "travel-cap", "travel-hand-towel", "travel-pad"],
    heritage: [
      "heritage-coaster",
      "heritage-placemat",
      "heritage-art",
      "heritage-tissue-bag",
      "heritage-headband",
      "heritage-lid-cover",
    ],
    custom: ["custom-tee", "custom-tote"],
  };

  function getCatFromHash(hash) {
    if (!hash || hash === "#") return null;
    const id = hash.replace("#", "");
    for (const [cat, ids] of Object.entries(PRODUCT_CAT_MAP)) {
      if (ids.includes(id)) return cat;
    }
    return null;
  }

  function initProductsPage() {
    if (document.body.dataset.page !== "products") return;

    const catButtons = [...document.querySelectorAll(".product-cat-item")];
    const panels = [...document.querySelectorAll(".product-panel")];

    function activateCat(cat) {
      catButtons.forEach((btn) => {
        const active = btn.dataset.cat === cat;
        btn.classList.toggle("is-active", active);
        btn.setAttribute("aria-pressed", active ? "true" : "false");
      });
      panels.forEach((panel) => {
        const active = panel.dataset.panel === cat;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
    }

    catButtons.forEach((btn) => {
      btn.addEventListener("click", () => activateCat(btn.dataset.cat));
    });

    const hash = window.location.hash;
    const catFromHash = getCatFromHash(hash);
    if (catFromHash) {
      activateCat(catFromHash);
      requestAnimationFrame(() => {
        const target = document.querySelector(hash);
        if (target) {
          const offset = 88 + 56;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
          target.classList.add("is-highlight");
          setTimeout(() => target.classList.remove("is-highlight"), 2000);
        }
      });
    }

    window.addEventListener("hashchange", () => {
      const nextCat = getCatFromHash(window.location.hash);
      if (nextCat) activateCat(nextCat);
    });
  }

  function initHeritageNav() {
    if (document.body.dataset.page !== "heritage") return;
    const navLinks = document.querySelectorAll(".heritage-side-nav a");
    const sections = [...document.querySelectorAll(".heritage-section[id]")];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((a) => {
            a.classList.toggle("is-active", a.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
  }

  initPoster();
  initSmoothScroll();
  initProductsPage();
  initHeritageNav();
})();
