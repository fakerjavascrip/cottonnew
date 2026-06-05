(function () {
  const root = document.documentElement.dataset.root || ".";
  const isHome = document.body.dataset.page === "home";

  const navItems = [
    { label: "首页", href: `${root}/index.html`, page: "home" },
    {
      label: "关于新疆棉",
      href: `${root}/pages/about.html`,
      page: "about",
      children: [
        { label: "新疆棉田", href: `${root}/pages/about.html#fields` },
        { label: "棉花原料", href: `${root}/pages/about.html#material` },
        { label: "非遗匠人", href: `${root}/pages/about.html#artisans` },
        { label: "本地智造", href: `${root}/pages/about.html#manufacturing` },
      ],
    },
    {
      label: "产品中心",
      href: `${root}/pages/products.html`,
      page: "products",
      mega: true,
      columns: [
        {
          title: "生活家居类",
          items: [
            { label: "新疆棉四件套", href: `${root}/pages/products.html#home-bedding` },
            { label: "棉麻抱枕", href: `${root}/pages/products.html#home-pillow` },
            { label: "纯棉地毯", href: `${root}/pages/products.html#home-rug` },
            { label: "厨房纯棉抹布", href: `${root}/pages/products.html#home-cloth` },
            { label: "纯棉隔热杯垫", href: `${root}/pages/products.html#home-coaster` },
            { label: "纯棉收纳袋", href: `${root}/pages/products.html#home-bag` },
          ],
        },
        {
          title: "便携出行类",
          items: [
            { label: "一次性棉柔巾", href: `${root}/pages/products.html#travel-tissue` },
            { label: "一次性浴巾", href: `${root}/pages/products.html#travel-towel` },
            { label: "一次性浴帽", href: `${root}/pages/products.html#travel-cap` },
            { label: "一次性毛巾", href: `${root}/pages/products.html#travel-hand-towel` },
            { label: "便携化妆棉", href: `${root}/pages/products.html#travel-pad` },
          ],
        },
        {
          title: "非遗文创类",
          items: [
            { label: "艾德莱斯杯垫", href: `${root}/pages/products.html#heritage-coaster` },
            { label: "艾德莱斯餐垫", href: `${root}/pages/products.html#heritage-placemat` },
            { label: "艾德莱斯餐巾纸定位", href: `${root}/pages/products.html#heritage-tissue-bag` },
            { label: "艾德莱斯发带", href: `${root}/pages/products.html#heritage-headband` },
            { label: "艾德莱斯锅盖隔热把手", href: `${root}/pages/products.html#heritage-lid-cover` },
            { label: "艾德莱斯桌面摆画", href: `${root}/pages/products.html#heritage-art` },
          ],
        },
        {
          title: "企业定制类",
          items: [
            { label: "基础款白T", href: `${root}/pages/products.html#custom-tee` },
            { label: "帆布袋（企业/机构批量定制）", href: `${root}/pages/products.html#custom-tote` },
          ],
        },
      ],
    },
    {
      label: "非遗文化",
      href: `${root}/pages/heritage.html`,
      page: "heritage",
      children: [
        { label: "纹样里的新疆", href: `${root}/pages/heritage.html#atlas-intro` },
        { label: "非遗历史溯源", href: `${root}/pages/heritage.html#history` },
        { label: "非遗技艺详解", href: `${root}/pages/heritage.html#craft` },
        { label: "四大经典色系", href: `${root}/pages/heritage.html#colors` },
        { label: "传承匠人故事", href: `${root}/pages/heritage.html#masters` },
        { label: "创新作品展示", href: `${root}/pages/heritage.html#works` },
        { label: "文化价值", href: `${root}/pages/heritage.html#culture-value` },
      ],
    },
    {
      label: "走进丝路棉韵",
      href: `${root}/pages/brand.html`,
      page: "brand",
      children: [
        { label: "品牌故事", href: `${root}/pages/brand.html#story` },
        { label: "新闻动态", href: `${root}/pages/brand.html#news` },
      ],
    },
    {
      label: "国家政策",
      href: `${root}/pages/policy.html`,
      page: "policy",
      children: [
        { label: "乡村全面振兴意见", href: `${root}/pages/policy.html#rural` },
        { label: "纺织服装产业规划", href: `${root}/pages/policy.html#industry` },
      ],
    },
    { label: "联系我们", href: `${root}/pages/contact.html`, page: "contact" },
  ];

  const currentPage = document.body.dataset.page || "";

  function renderDropdown(children) {
    return `<ul class="dropdown">${children
      .map((c) => `<li><a href="${c.href}">${c.label}</a></li>`)
      .join("")}</ul>`;
  }

  function renderMega(columns) {
    return `<div class="mega-panel" role="menu">
      <div class="mega-grid">
        ${columns
          .map(
            (col) => `<div class="mega-col">
            <p class="mega-title">${col.title}</p>
            <ul>${col.items.map((i) => `<li><a href="${i.href}">${i.label}</a></li>`).join("")}</ul>
          </div>`
          )
          .join("")}
      </div>
    </div>`;
  }

  const navHtml = navItems
    .map((item) => {
      const active = item.page === currentPage ? ' class="is-active"' : "";
      if (item.mega) {
        return `<li class="has-mega"${active}>
          <a href="${item.href}">${item.label}</a>
          ${renderMega(item.columns)}
        </li>`;
      }
      if (item.children) {
        return `<li class="has-dropdown"${active}>
          <a href="${item.href}">${item.label}</a>
          ${renderDropdown(item.children)}
        </li>`;
      }
      return `<li${active}><a href="${item.href}">${item.label}</a></li>`;
    })
    .join("");

  const brandHref = isHome ? "#top" : `${root}/index.html`;

  const header = document.getElementById("site-header");
  if (!header) return;

  header.innerHTML = `
    <div class="container nav-wrap">
      <a href="${brandHref}" class="brand">
        <span class="brand-badge">丝路棉韵</span>
        <span class="brand-sub">XINJIANG COTTON</span>
      </a>
      <button class="nav-toggle" type="button" aria-label="打开菜单" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <nav class="main-nav" aria-label="主导航">
        <ul>${navHtml}</ul>
      </nav>
    </div>`;

  const toggle = header.querySelector(".nav-toggle");
  const mainNav = header.querySelector(".main-nav");
  toggle?.addEventListener("click", () => {
    const open = mainNav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
