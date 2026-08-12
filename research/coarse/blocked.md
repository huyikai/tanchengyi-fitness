---
updated_at: "2026-08-12"
---

# 粗扫未取得项

| 时间 | 平台/URL | 原因 | 下一步 |
|------|----------|------|--------|
| 2026-08-12 | https://space.bilibili.com/521903482/ | other | 本机 Chrome 仍 HTTP 412/出错页；20260812 再试仍 title「出错啦」且截图空白（`assets/20260812-bilibili-space-521903482-retry.png`）。视频页可核验 UP 主。 |
| 2026-08-12 | B 站视频页（Browse MCP）如 `BV1qF6wBaEWu` | other | Browse MCP 打开本人/合作视频亦触发安全风控 412（`assets/20260812-bilibili-BV-412.png`）。需人工本机浏览器或登录态后再扫。 |
| 2026-08-12 | 小红书无 token 的 explore 直链 | other | 无 `xsec_token` 时仍可能验证/无法浏览（error_code=300031）。**已验证解法**：从本人主页点入，URL 带 `xsec_token`/`xsec_source=pc_user` 后可截详情。 |
| 2026-08-12 | 微信公众号搜索「谭成义 健身」 | not_found | 仍未找到可核验本人/官方公众号入口。 |
| 2026-08-12 | 小红书高频点选 | other | 冷却后可再开 1 条（居家胸三头已 captured）；随后再次「点击成功但不跳转」。继续暂停点选。 |

## 本轮已补到（可从 blocked 降级）

| 时间 | 项 | 结果 |
|------|----|------|
| 2026-08-12 | Cursor Browse MCP（Windows） | **已修复并验证**：`browse.exe` 硬链接、named pipe、导航 `domcontentloaded`。 |
| 2026-08-12 | 抖音本人主页（登录后） | 抖音号 `nishitiantan`；合集 5 个已截图；置顶减脂计划 URL 已落 raw |
| 2026-08-12 | 小红书本人主页（登录后） | 小红书号 `1014738441`；主页/搜索截图已存；置顶减脂计划已记 raw |
| 2026-08-12 | 小红书单篇（主页点入） | 减脂/手臂/RDL/拉伸/私教背/赛前2周等已 captured；截图在 `inbox/assets/20260812-xhs-note-*.png` |
| 2026-08-12 | 小红书私教分集 | 胸/肩/臂/腿/腹已 captured；见 `inbox/raw/20260812-xhs-pt-*.md` |
| 2026-08-12 | 小红书动作/恢复笔记 | 高位下拉、哑铃划船/反飞鸟、哑铃卧推推肩、器械一体机、手臂安排、睡眠减脂已 captured |
| 2026-08-12 | 小红书三分化/备赛/恢复 | 三分化收官、AGP 职业卡、真空腹、上肢关节已 captured |
| 2026-08-12 | 小红书三分化续扫/居家 | 第一期讲解、第一期上、新手跟练、居家安排、居家背二头已 captured |
| 2026-08-12 | 小红书继续点选详情 | other | 高频采集后出现「点击成功但不跳转 explore」；体态纠正已 captured。暂停点选，稍后重试或换平台。 |
| 2026-08-12 | 小红书居家胸三头 | captured | 冷却后重试成功：`inbox/raw/20260812-xhs-home-chest-triceps.md`；随后再次软风控。 |
| 2026-08-12 | B 站视频 `BV1EkV96nEyg`（拉伸） | 页面可读，截图 `assets/20260812-bilibili-BV1EkV96nEyg.png` |
| 2026-08-12 | B 站视频 `BV1GzEg6wEVb`（手臂私教） | HTTP 200，UP 主谭成义，截图 `assets/20260812-bilibili-BV1GzEg6wEVb.png` |
| 2026-08-12 | B 站凯圣王主页 | 可见粉丝/投稿/代表作，截图 `assets/20260812-bilibili-space-2100737396-kaisw.png` |
| 2026-08-12 | 抖音 `shipin/7625835031486859291` | 可打开但为二创跟练账号「鹦鹉螺」，非官方 |
