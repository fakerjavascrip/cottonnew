(function () {
  const COMPETITION_DATE = new Date("2026-05-30T00:00:00");
  const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

  function formatDateCN(date) {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    return `${y}年${m}月${d}日`;
  }

  const POSTER_IMAGES = {
    daily: "./data/溯源图/新疆棉_image1.jpeg",
    competition: "./data/溯源图/棉田_image3.jpeg",
  };

  function initPoster() {
    const poster = document.getElementById("daily-poster");
    if (!poster) return;

    const dateEl = poster.querySelector("[data-poster-date]");
    const statusEl = poster.querySelector("[data-poster-status]");
    const bgEl = poster.querySelector("[data-poster-bg]");
    const competitionDateEl = document.querySelector("[data-competition-date]");
    const now = new Date();
    const diff = COMPETITION_DATE.getTime() - now.getTime();
    const withinWeek = diff > 0 && diff <= ONE_WEEK_MS;

    if (competitionDateEl) {
      competitionDateEl.textContent = formatDateCN(COMPETITION_DATE);
    }

    if (withinWeek) {
      dateEl.textContent = formatDateCN(COMPETITION_DATE);
      statusEl.textContent = "新棉红途 · 赛事打卡";
      poster.classList.add("is-competition-week");
      if (bgEl) bgEl.src = POSTER_IMAGES.competition;
    } else {
      dateEl.textContent = formatDateCN(now);
      statusEl.textContent = "玛纳斯棉田 · 每日打卡";
      if (bgEl) bgEl.src = POSTER_IMAGES.daily;
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
      "heritage-tissue-bag",
      "heritage-headband",
      "heritage-lid-cover",
      "heritage-art",
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

  function initDocPlayer() {
    const player = document.getElementById("doc-player");
    const tabs = document.querySelectorAll("[data-doc-page]");
    if (!player || !tabs.length) return;

    const base =
      "https://player.bilibili.com/player.html?bvid=BV1Gh411D739&high_quality=1&danmaku=0&autoplay=0";

    tabs.forEach((btn) => {
      btn.addEventListener("click", () => {
        const page = btn.dataset.docPage;
        player.src = `${base}&page=${page}`;
        tabs.forEach((b) => {
          const active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-selected", active ? "true" : "false");
        });
      });
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
  initDocPlayer();
  initSmoothScroll();
  initProductsPage();
  initHeritageNav();
})();
