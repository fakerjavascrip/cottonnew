(function () {
  const ROOT = document.documentElement.dataset.root || "..";
  const IMG = `${ROOT}/data/产品图`;

  const COMMON_QUALITY = [
    { name: "纤维长度", value: "38.5mm", note: "远超国标长绒棉 35mm 标准，更柔软、更耐用" },
    { name: "断裂比强度", value: "4.8cN/dtex", note: "高强力指标，不易起球、不易变形" },
    { name: "马克隆值", value: "A 级（3.8–4.2）", note: "新疆棉顶级等级，纤维粗细均匀，亲肤性佳" },
    { name: "异纤含量", value: "L 级", note: "棉包标注等级，杂质含量远低于行业平均水平" },
    { name: "回潮率", value: "6.5%–8.5%", note: "国标最优区间，不易发霉、不易泛黄" },
  ];

  const COMMON_DOCS = [
    { label: "第三方质检报告", file: "质检报告.pdf" },
    { label: "新疆棉产地证明", file: "产地证明.pdf" },
    { label: "碳足迹核算报告", file: "碳足迹报告.pdf" },
    { label: "跨境出口合规文件", file: "出口合规.pdf" },
  ];

  const PRODUCTS = {
    bedding: {
      name: "新疆长绒棉四件套",
      image: `${IMG}/家居/新疆棉四件套1.png`,
      packageId: "包号 124133",
      batchId: "批号 65489251130",
      chainHash: "0x7f3a…c91e2b",
      chainTime: "2026-01-10 14:32:08",
      production: {
        origin: "新疆乌苏",
        factory: "乌苏利华棉业有限公司",
        date: "2025.11.20",
        weight: "230.0 KG",
        grade: "L 级",
      },
      heritage: false,
      farmer: { name: "买买提·艾山", coords: "44.4186°N, 84.6732°E", pickDate: "2025.10.08" },
      timeline: [
        {
          title: "棉田种植",
          time: "2025.10.15",
          chainTime: "2025.10.15 09:18:42",
          image: `${IMG}/家居/新疆棉四件套2.png`,
          facts: [
            "产地：新疆塔城地区乌苏市（北纬 44° 黄金产棉带）",
            "北斗导航无人农机播种，每亩节水 40%",
            "亩均碳排放约 200kg，纳入碳监测体系",
            "棉农：买买提·艾山 · 地块 44.4186°N, 84.6732°E",
          ],
        },
        {
          title: "轧花加工",
          time: "2025.11.20",
          chainTime: "2025.11.20 16:05:11",
          image: `${IMG}/家居/毛巾.JPG`,
          facts: [
            "加工单位：乌苏利华棉业有限公司",
            "全自动轧花生产线 · 异纤检测 · 品质分级",
            "本批毛重 230.0 KG · 异纤等级 L 级",
          ],
        },
        {
          title: "纺纱织造",
          time: "2025.12.05",
          chainTime: "2025.12.05 11:22:33",
          image: `${IMG}/家居/睡衣.JPG`,
          facts: [
            "合作工厂：新疆库尔勒智能纺织车间",
            "全自动黑灯车间 · 万锭纱线节电 60%",
            "60 支长绒棉精梳 · 300 根高密织造",
          ],
        },
        {
          title: "成品出厂",
          time: "2026.01.10",
          chainTime: "2026.01.10 14:32:08",
          image: `${IMG}/家居/新疆棉四件套1.png`,
          facts: [
            "检测机构：新疆自治区纤维质量监督检验中心",
            "质检合格编号：XJ-FZ-2026-0110-8842",
            "出厂时间：2026.01.10",
          ],
        },
      ],
      diary: {
        title: "棉农日记 · 乌苏十月",
        text: "十月清晨，棉田披着薄霜。天山雪水沿渠入田，今年日照足、温差大，棉桃开得饱满。我们用北斗农机精准播种，节水四成，心里踏实——好棉，从土地里长出来。",
      },
      brandStory:
        "丝路棉韵以一根棉线连接乌苏棉田与千家万户的卧室。四件套选用同批新疆长绒棉，让棉农增收、让消费者睡得安心。",
    },
    pillow: {
      name: "棉麻抱枕",
      image: `${IMG}/家居/棉麻抱枕1.png`,
      packageId: "包号 128901",
      batchId: "批号 65489251882",
      chainHash: "0x2b8c…f04a19",
      chainTime: "2026-01-08 10:15:44",
      production: {
        origin: "新疆乌苏",
        factory: "乌苏利华棉业有限公司",
        date: "2025.11.18",
        weight: "185.0 KG",
        grade: "L 级",
      },
      heritage: false,
      farmer: { name: "古丽娜尔·哈力克", coords: "44.3921°N, 84.7015°E", pickDate: "2025.10.06" },
      timeline: [
        {
          title: "棉田种植",
          time: "2025.10.12",
          chainTime: "2025.10.12 08:40:15",
          image: `${IMG}/家居/棉麻抱枕.JPG`,
          facts: [
            "产地：乌苏市优质棉区",
            "棉麻混纺原料配比经田间分级采收",
            "棉农：古丽娜尔·哈力克",
          ],
        },
        {
          title: "轧花加工",
          time: "2025.11.18",
          chainTime: "2025.11.18 15:30:00",
          image: `${IMG}/家居/毛巾.JPG`,
          facts: ["乌苏利华棉业有限公司 · 异纤 L 级", "毛重 185.0 KG"],
        },
        {
          title: "纺纱织造",
          time: "2025.12.01",
          chainTime: "2025.12.01 13:08:22",
          image: `${IMG}/家居/棉麻抱枕1.png`,
          facts: ["阿克苏合作车间 · 棉麻混纺纱线", "环保活性染料染色"],
        },
        {
          title: "成品出厂",
          time: "2026.01.08",
          chainTime: "2026.01.08 10:15:44",
          image: `${IMG}/家居/棉麻抱枕.JPG`,
          facts: ["质检编号：XJ-FZ-2026-0108-7721", "出厂：2026.01.08"],
        },
      ],
      diary: {
        title: "棉农日记 · 混纺之选",
        text: "抱枕要软也要挺，我们按订单标准分地块采收。麻纤维来自合作农场，棉与麻在同一条产业链里完成分级，送到车间时标签清清楚楚。",
      },
      brandStory: "一只抱枕，是客厅里的新疆风景。棉麻交织，透气亲肤，把产地阳光带进日常起居。",
    },
    tissue: {
      name: "一次性棉柔巾",
      image: `${IMG}/便携/一次性棉柔巾.png`,
      packageId: "包号 131205",
      batchId: "批号 65489252001",
      chainHash: "0x9e41…8d3c77",
      chainTime: "2026-01-05 09:48:21",
      production: {
        origin: "新疆乌苏",
        factory: "乌苏利华棉业有限公司",
        date: "2025.11.22",
        weight: "120.0 KG",
        grade: "L 级",
      },
      heritage: false,
      farmer: { name: "赵建国", coords: "44.4055°N, 84.6890°E", pickDate: "2025.10.10" },
      timeline: [
        {
          title: "棉田种植",
          time: "2025.10.14",
          chainTime: "2025.10.14 10:02:18",
          image: `${IMG}/便携/一次性洗脸巾.png`,
          facts: ["乌苏优质长绒棉区 · 适合高柔度无纺原料", "亩均节水 40%"],
        },
        {
          title: "轧花加工",
          time: "2025.11.22",
          chainTime: "2025.11.22 14:20:55",
          image: `${IMG}/便携/一次性浴巾.png`,
          facts: ["乌苏利华 · L 级 · 毛重 120.0 KG"],
        },
        {
          title: "纺纱织造",
          time: "2025.12.08",
          chainTime: "2025.12.08 09:15:40",
          image: `${IMG}/便携/一次性棉柔巾.png`,
          facts: [
            "库尔勒一次性用品合作集群",
            "纯棉水刺无纺布 · 无荧光增白剂",
            "单片独立包装 · 符合卫生标准",
          ],
        },
        {
          title: "成品出厂",
          time: "2026.01.05",
          chainTime: "2026.01.05 09:48:21",
          image: `${IMG}/便携/便携化妆棉.png`,
          facts: ["检测机构：自治区产品质量监督检验研究院", "合格编号：XJ-WJ-2026-0105-3309"],
        },
      ],
      diary: {
        title: "棉农日记 · 出行好物",
        text: "出差的年轻人买棉柔巾，问是不是新疆棉。我说你扫码看，从哪块地、哪个厂出来的都有。好棉做成日用品，走到哪都是家乡的味道。",
      },
      brandStory: "轻装出行，依然用得上新疆好棉。棉柔巾以可溯源原料，守护旅途中的洁净与安心。",
    },
    "tissue-bag": {
      name: "艾德莱斯非遗纸巾袋",
      image: `${IMG}/文创/艾德莱斯餐巾纸定位.png`,
      packageId: "包号 135678",
      batchId: "批号 65489253088",
      chainHash: "0x4d17…a82f60",
      chainTime: "2026-01-12 16:20:00",
      production: {
        origin: "新疆乌苏 / 和田设计",
        factory: "乌苏利华棉业有限公司 · 和田非遗工坊",
        date: "2025.12.28",
        weight: "—",
        grade: "L 级",
      },
      heritage: true,
      farmer: { name: "买买提·艾山", coords: "44.4186°N, 84.6732°E", pickDate: "2025.10.08" },
      timeline: [
        {
          title: "棉田种植",
          time: "2025.10.15",
          chainTime: "2025.10.15 09:18:42",
          image: `${IMG}/家居/新疆棉四件套2.png`,
          facts: ["新疆乌苏棉田 · 长绒棉原料", "北斗播种 · 节水 40%"],
        },
        {
          title: "轧花加工",
          time: "2025.11.20",
          chainTime: "2025.11.20 16:05:11",
          image: `${IMG}/文创/艾德莱斯餐垫.png`,
          facts: ["乌苏利华棉业有限公司"],
        },
        {
          title: "纺纱织造",
          time: "2025.12.05",
          chainTime: "2025.12.05 11:22:33",
          image: `${IMG}/文创/艾德莱斯杯垫.png`,
          facts: ["库尔勒无纺基材加工", "食品级油墨环保印刷"],
        },
        {
          title: "非遗设计 / 生产",
          time: "2025.12.20",
          chainTime: "2025.12.20 15:40:18",
          image: `${IMG}/文创/艾德莱斯餐巾纸定位.png`,
          facts: [
            "非遗产地：新疆和田地区",
            "传承人：图尔逊·肉孜 · 国家级非遗艾德莱斯绸技艺",
            "纹样：巴旦木纹（丰收）+ 石榴纹（团结）",
          ],
        },
        {
          title: "成品出厂",
          time: "2026.01.12",
          chainTime: "2026.01.12 16:20:00",
          image: `${IMG}/文创/艾德莱斯餐巾纸定位.png`,
          facts: ["质检编号：XJ-FZ-2026-0112-9012", "非遗文创合格认证"],
        },
      ],
      diary: {
        title: "棉农日记 · 从棉田到纹样",
        text: "纸巾袋上的花纹，和田老师傅说每一道色都是扎出来的。我们供棉，他们赋形——棉与绸，在一张纸巾袋里相遇。",
      },
      heritageBlock: {
        history:
          "艾德莱斯绸源于古代丝绸之路上的扎经染色技艺，被誉为「丝路上的彩虹」。和田非遗传承基地完整保存传统织造工序。",
        master: "图尔逊·肉孜",
        masterTitle: "国家级非物质文化遗产代表性传承人",
        patterns: [
          { name: "巴旦木花纹", meaning: "象征丰收与富饶" },
          { name: "石榴花纹", meaning: "象征团结与多子多福" },
        ],
        craft:
          "本产品纹样由传承人审定，经数码复刻与环保印刷结合，保留艾德莱斯典型色阶与流动韵律。",
      },
      brandStory:
        "一根棉线、一缕艾德莱斯，让非遗走进餐桌与旅途。丝路棉韵以文创载体带动传承人增收、让技艺被看见。",
    },
    art: {
      name: "艾德莱斯桌面摆画",
      image: `${IMG}/文创/艾德莱斯桌面摆画.png`,
      packageId: "包号 136902",
      batchId: "批号 65489253156",
      chainHash: "0x1a9f…e55b03",
      chainTime: "2026-01-15 11:08:33",
      production: {
        origin: "新疆乌苏 / 和田",
        factory: "和田非遗文创工坊",
        date: "2026.01.05",
        weight: "—",
        grade: "L 级",
      },
      heritage: true,
      farmer: { name: "古丽娜尔·哈力克", coords: "44.3921°N, 84.7015°E", pickDate: "2025.10.06" },
      timeline: [
        {
          title: "棉田种植",
          time: "2025.10.12",
          chainTime: "2025.10.12 08:40:15",
          image: `${IMG}/家居/棉麻抱枕.JPG`,
          facts: ["乌苏长绒棉 · 画布基材原料"],
        },
        {
          title: "轧花加工",
          time: "2025.11.18",
          chainTime: "2025.11.18 15:30:00",
          image: `${IMG}/文创/艾德莱斯发带.png`,
          facts: ["乌苏利华棉业 · L 级原料"],
        },
        {
          title: "纺纱织造",
          time: "2025.12.02",
          chainTime: "2025.12.02 10:18:00",
          image: `${IMG}/文创/艾德莱斯桌面摆画.png`,
          facts: ["棉麻画布基材 · 防潮涂层处理"],
        },
        {
          title: "非遗设计 / 生产",
          time: "2025.12.22",
          chainTime: "2025.12.22 14:55:07",
          image: `${IMG}/文创/艾德莱斯桌面摆画.png`,
          facts: [
            "和田非遗传承基地监制",
            "传承人：阿依古丽·买买提",
            "手工描金勾边 + 数码主纹复刻",
          ],
        },
        {
          title: "成品出厂",
          time: "2026.01.15",
          chainTime: "2026.01.15 11:08:33",
          image: `${IMG}/文创/艾德莱斯桌面摆画.png`,
          facts: ["文创艺术品合格证：HT-WC-2026-0115", "出厂：2026.01.15"],
        },
      ],
      diary: {
        title: "匠人手记 · 摆画里的丝路",
        text: "每一幅摆画，纹样来自祖传的扎经图样。巴旦木纹蜿蜒，是沙漠里的绿洲；石榴纹饱满，是市集里的欢笑。",
      },
      heritageBlock: {
        history: "艾德莱斯技艺已列入国家级非物质文化遗产名录，和田地区为重要传承地。",
        master: "阿依古丽·买买提",
        masterTitle: "自治区级非遗传承人",
        patterns: [
          { name: "流水纹", meaning: "象征丝路商队绵延不绝" },
          { name: "菱形纹", meaning: "象征天地四方、和谐安定" },
        ],
        craft: "摆画采用棉麻画布，经非遗纹样描摹、环保颜料固色，配实木画框。",
      },
      brandStory: "让艾德莱斯从织物走向陈设艺术，把非遗之美留在书桌与茶席之间。",
    },
    tee: {
      name: "基础款白T（企业定制）",
      image: `${IMG}/定制/T恤.JPG`,
      packageId: "包号 140011",
      batchId: "批号 65489254002",
      chainHash: "0x6c22…b19e88",
      chainTime: "2026-01-18 08:30:12",
      production: {
        origin: "新疆乌苏",
        factory: "乌苏利华棉业有限公司",
        date: "2025.11.25",
        weight: "210.0 KG",
        grade: "L 级",
      },
      heritage: false,
      farmer: { name: "赵建国", coords: "44.4055°N, 84.6890°E", pickDate: "2025.10.10" },
      timeline: [
        {
          title: "棉田种植",
          time: "2025.10.14",
          chainTime: "2025.10.14 10:02:18",
          image: `${IMG}/定制/帆布袋.JPG`,
          facts: ["乌苏长绒棉 · 适合高支针织面料"],
        },
        {
          title: "轧花加工",
          time: "2025.11.25",
          chainTime: "2025.11.25 13:45:20",
          image: `${IMG}/定制/T恤.JPG`,
          facts: ["乌苏利华 · 毛重 210.0 KG · L 级"],
        },
        {
          title: "纺纱织造",
          time: "2025.12.10",
          chainTime: "2025.12.10 16:22:11",
          image: `${IMG}/定制/T恤.JPG`,
          facts: [
            "阿克苏智能针织车间",
            "32 支精梳纱 · 活性染料染整",
            "支持企业 LOGO 定制印花",
          ],
        },
        {
          title: "成品出厂",
          time: "2026.01.18",
          chainTime: "2026.01.18 08:30:12",
          image: `${IMG}/定制/帆布袋.JPG`,
          facts: [
            "检测机构：新疆纺织服装产品质量检测中心",
            "合格编号：XJ-FZ-2026-0118-5560",
            "附出口合规文件包（B 端报关可用）",
          ],
        },
      ],
      diary: {
        title: "棉农日记 · 一件白T",
        text: "企业订制的白T，要求每一批棉都能溯源。我说没问题，扫码从棉田看到成衣，出海报关也有据可查。",
      },
      brandStory:
        "基础款白T是品牌传播的载体。以可溯源新疆棉，助力企业履行社会责任叙事与跨境合规。",
    },
  };

  const DEFAULT_ID = "bedding";

  function getProductId() {
    const params = new URLSearchParams(window.location.search);
    const id = (params.get("id") || params.get("product") || DEFAULT_ID).trim().toLowerCase();
    return PRODUCTS[id] ? id : DEFAULT_ID;
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderTimeline(nodes) {
    return `<ol class="trace-timeline">
      ${nodes
        .map(
          (n, i) => `<li class="trace-timeline-item">
          <div class="trace-timeline-marker" aria-hidden="true">${i + 1}</div>
          <article class="trace-timeline-card">
            <header class="trace-timeline-head">
              <h3>${escapeHtml(n.title)}</h3>
              <time datetime="${escapeHtml(n.time)}">上链 ${escapeHtml(n.chainTime || n.time)}</time>
            </header>
            <img class="trace-timeline-img" src="${escapeHtml(n.image)}" alt="${escapeHtml(n.title)}" loading="lazy" />
            <ul class="trace-facts">${n.facts.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul>
          </article>
        </li>`
        )
        .join("")}
    </ol>`;
  }

  function renderQuality(rows) {
    return `<div class="trace-quality-table-wrap">
      <table class="trace-quality-table">
        <thead>
          <tr><th>指标项</th><th>实测数值</th><th>说明</th></tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (r) => `<tr>
              <td>${escapeHtml(r.name)}</td>
              <td><strong>${escapeHtml(r.value)}</strong></td>
              <td>${escapeHtml(r.note)}</td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </div>`;
  }

  function renderDocs(docs, productName) {
    return `<ul class="trace-docs">
      ${docs
        .map(
          (d) => `<li>
          <button type="button" class="trace-doc-btn" data-doc="${escapeHtml(d.file)}" data-product="${escapeHtml(productName)}">
            <span class="trace-doc-icon" aria-hidden="true">↓</span>
            ${escapeHtml(d.label)}
          </button>
        </li>`
        )
        .join("")}
    </ul>`;
  }

  function renderHeritage(h) {
    if (!h) return "";
    return `<section class="trace-section trace-heritage-extra" id="heritage-detail">
      <h2 class="trace-section-title">艾德莱斯非遗溯源</h2>
      <p>${escapeHtml(h.history)}</p>
      <div class="trace-master-card">
        <p class="trace-master-name">${escapeHtml(h.master)}</p>
        <p class="trace-master-title">${escapeHtml(h.masterTitle)}</p>
        <p>${escapeHtml(h.craft)}</p>
      </div>
      <h3 class="trace-subtitle">纹样寓意</h3>
      <ul class="trace-patterns">
        ${h.patterns
          .map(
            (p) => `<li>
            <strong>${escapeHtml(p.name)}</strong>
            <span>${escapeHtml(p.meaning)}</span>
          </li>`
          )
          .join("")}
      </ul>
    </section>`;
  }

  function renderProduct(id, p) {
    const prod = p.production;
    return `
      <section class="trace-hero" aria-label="产品信任锚区">
        <div class="trace-hero-visual">
          <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" />
        </div>
        <div class="trace-hero-body">
          <p class="trace-hero-label">丝路棉韵 · 正品溯源</p>
          <h1>${escapeHtml(p.name)}</h1>
          <dl class="trace-ids">
            <div><dt>溯源码</dt><dd>${escapeHtml(p.packageId)}</dd></div>
            <div><dt>批次</dt><dd>${escapeHtml(p.batchId)}</dd></div>
          </dl>
          <div class="trace-chain-badge">
            <span class="trace-chain-icon" aria-hidden="true">⛓</span>
            <div>
              <p class="trace-chain-title">本页面数据已上链存证，不可篡改</p>
              <p class="trace-chain-meta">哈希 ${escapeHtml(p.chainHash)} · 存证 ${escapeHtml(p.chainTime)}</p>
            </div>
          </div>
          <dl class="trace-prod-info">
            <div><dt>产地</dt><dd>${escapeHtml(prod.origin)}</dd></div>
            <div><dt>加工单位</dt><dd>${escapeHtml(prod.factory)}</dd></div>
            <div><dt>生产日期</dt><dd>${escapeHtml(prod.date)}</dd></div>
            ${prod.weight !== "—" ? `<div><dt>毛重</dt><dd>${escapeHtml(prod.weight)}</dd></div>` : ""}
            <div><dt>异纤等级</dt><dd>${escapeHtml(prod.grade)}</dd></div>
          </dl>
        </div>
      </section>

      <section class="trace-section" id="timeline">
        <h2 class="trace-section-title">全链路溯源时间轴</h2>
        <p class="trace-section-lead">从棉田到成品 · 每一节点真实数据、实拍与上链时间戳</p>
        ${renderTimeline(p.timeline)}
      </section>

      <section class="trace-section trace-section-alt" id="quality">
        <h2 class="trace-section-title">品质硬实力</h2>
        <h3 class="trace-subtitle">新疆棉核心品质指标</h3>
        ${renderQuality(COMMON_QUALITY)}
        <h3 class="trace-subtitle">权威合规文件</h3>
        <p class="trace-section-lead">支持下载，B 端客户可用于报关与合规审查（演示占位）</p>
        ${renderDocs(COMMON_DOCS, p.name)}
      </section>

      <section class="trace-section" id="culture">
        <h2 class="trace-section-title">文化共情叙事</h2>
        <article class="trace-diary">
          <h3 class="trace-subtitle">${escapeHtml(p.diary.title)}</h3>
          <p>${escapeHtml(p.diary.text)}</p>
          ${p.farmer ? `<p class="trace-diary-meta">棉农 ${escapeHtml(p.farmer.name)} · 采摘 ${escapeHtml(p.farmer.pickDate)} · ${escapeHtml(p.farmer.coords)}</p>` : ""}
        </article>
        ${renderHeritage(p.heritageBlock)}
        <article class="trace-brand-narrative">
          <h3 class="trace-subtitle">丝路棉韵 · 品牌使命</h3>
          <p>${escapeHtml(p.brandStory)}</p>
        </article>
      </section>

      <section class="trace-section trace-actions-section" id="actions">
        <h2 class="trace-section-title">互动功能</h2>
        <div class="trace-actions">
          <button type="button" class="trace-action-btn" id="btn-share">分享溯源</button>
          <button type="button" class="trace-action-btn trace-action-btn--accent" id="btn-donate">棉田公益捐赠</button>
          <button type="button" class="trace-action-btn" id="btn-feedback">意见反馈</button>
        </div>
        <p class="trace-action-hint" id="action-hint" hidden></p>
      </section>

      <nav class="trace-switcher" aria-label="切换演示产品">
        <p class="trace-switcher-label">演示：切换其他产品溯源</p>
        <div class="trace-switcher-links">
          ${Object.entries(PRODUCTS)
            .map(
              ([key, item]) =>
                `<a href="trace.html?id=${key}" class="trace-switch-link${key === id ? " is-active" : ""}">${escapeHtml(item.name)}</a>`
            )
            .join("")}
        </div>
      </nav>
    `;
  }

  function bindInteractions(productName) {
    document.querySelectorAll(".trace-doc-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const file = btn.dataset.doc;
        showHint(`「${file}」为演示占位，正式环境可替换为真实 PDF 下载链接。（${productName}）`);
      });
    });

    const hint = document.getElementById("action-hint");
    function showHint(msg) {
      if (!hint) return;
      hint.textContent = msg;
      hint.hidden = false;
    }

    document.getElementById("btn-share")?.addEventListener("click", async () => {
      const url = window.location.href;
      const text = `【丝路棉韵溯源】${productName}`;
      if (navigator.share) {
        try {
          await navigator.share({ title: productName, text, url });
          return;
        } catch (_) {
          /* fall through */
        }
      }
      try {
        await navigator.clipboard.writeText(url);
        showHint("链接已复制到剪贴板，可分享给好友。");
      } catch {
        showHint("请手动复制浏览器地址栏链接进行分享。");
      }
    });

    document.getElementById("btn-donate")?.addEventListener("click", () => {
      showHint("棉田公益捐赠功能对接中。您可关注「丝路棉韵」公众号参与助农计划。");
    });

    document.getElementById("btn-feedback")?.addEventListener("click", () => {
      window.location.href = `${ROOT}/pages/contact.html?from=trace&product=${encodeURIComponent(productName)}`;
    });
  }

  function init() {
    const id = getProductId();
    const product = PRODUCTS[id];
    const root = document.getElementById("trace-root");
    const loading = document.getElementById("trace-loading");
    const footerId = document.getElementById("trace-footer-id");

    if (!root || !product) return;

    document.title = `${product.name} · 溯源 · 丝路棉韵`;

    if (loading) loading.remove();
    root.innerHTML = renderProduct(id, product);

    if (footerId) {
      footerId.textContent = `${product.packageId} · ${product.batchId}`;
    }

    bindInteractions(product.name);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
