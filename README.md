# 丝路棉韵 · 新疆棉主题网站

静态多页面站点，默认进入首页首屏，全站固定顶部导航。

## 站点结构

```
├── index.html                 # 首页（Hero / 纪录片 / 今日新疆打卡）
├── pages/
│   ├── about.html             # 关于新疆棉
│   ├── products.html          # 产品中心（四层分类）
│   ├── heritage.html          # 非遗文化（单页锚点下滑）
│   ├── brand.html             # 走进丝路棉韵（品牌故事 + 新闻）
│   ├── policy.html            # 国家政策
│   └── contact.html           # 联系我们
└── assets/
    ├── css/styles.css
    └── js/
        ├── nav.js             # 全局导航（含野兽派式产品 mega 菜单）
        └── main.js            # 海报日期、平滑滚动、非遗侧栏高亮
```

## 本地预览

直接用浏览器打开 `index.html`，或使用本地静态服务：

```bash
npx serve .
```

## 可配置项

- **比赛日期**：`assets/js/main.js` 中的 `COMPETITION_DATE`（赛前一周自动显示固定日期海报）
- **新闻链接**：`pages/brand.html` 中各卡片的 `href`
- **纪录片视频**：`index.html` 中 `.video-placeholder` 替换为 `<video>` 或 iframe

## 部署

推送到 `main` 分支后，GitHub Actions 自动部署至 GitHub Pages。
