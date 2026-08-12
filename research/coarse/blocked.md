---
updated_at: "2026-08-12"
---

# 粗扫未取得项

| 时间 | 平台/URL | 原因 | 下一步 |
|------|----------|------|--------|
| 2026-08-12 | Cursor Browse / Playwright MCP | other | 本云环境无 Cursor Browse/Playwright MCP；本轮未使用本地 Chrome，也未声称有浏览器截图。维护者若需截图，请在可用 Browse 环境重跑主页/列表页采集。 |
| 2026-08-12 | https://space.bilibili.com/521903482/ | other | B 站主页搜索可见，但 WebFetch 对 HTML 返回 412；本轮改用 B 站公开 API 验证视频 owner 与标题，未能截图主页。 |
| 2026-08-12 | https://www.bilibili.com/video/BV1EkV96nEyg/ 等 B 站 HTML 视频页 | other | WebFetch 直接抓 HTML 返回 412；公开 API `api.bilibili.com/x/web-interface/view?bvid=...` 可取得标题/owner/合集信息。细扫需浏览器打开页面并截图。 |
| 2026-08-12 | https://www.douyin.com/ | login_wall | 抖音公开搜索索引可见若干 `shipin` 页面片段，但无法在本轮确认本人主页、抖音号、合集和完整视频页面。需维护者登录/本地浏览器复核。 |
| 2026-08-12 | https://www.douyin.com/shipin/7625835031486859291 | login_wall | 搜索索引显示“凯圣王-谭成义三分化”片段与 @谭成义，但无浏览器/登录无法核验完整页面、账号归属与截图。 |
| 2026-08-12 | https://www.douyin.com/shipin/7644746457920194623 | login_wall | 搜索索引显示 IFBB PRO 背景片段，账号和完整内容待登录环境确认。 |
| 2026-08-12 | 小红书搜索“谭成义 健身/账号” | login_wall | WebSearch 未给出可核验本人官方主页；小红书常见登录墙，本轮不把任何小红书结果写为官方来源。 |
| 2026-08-12 | 微信公众号搜索“谭成义 健身” | not_found | 未找到可核验本人/官方公众号入口；仅出现 B 站、抖音公开索引。 |
| 2026-08-12 | research/coarse/assets/*.png | other | 无 Browse/截图工具可实际捕获页面；本轮按要求跳过 assets，并在本清单记录。 |
