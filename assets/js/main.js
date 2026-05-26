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
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const id = link.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        const offset = 88;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
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
  initSmoothScroll();
  initHeritageNav();
})();
