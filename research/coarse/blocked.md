---
updated_at: "2026-08-12"
---

# 粗扫未取得项

| 时间 | 平台/URL | 原因 | 下一步 |
|------|----------|------|--------|
| 2026-08-12 | https://space.bilibili.com/521903482/ | other | **已恢复可读（登录态）**：标题「谭成义的个人空间」；粉丝约 16.2 万、投稿约 169；截图 `assets/20260812-bilibili-space-521903482-retry2.png`，raw `20260812-bilibili-space-521903482.md`。 |
| 2026-08-12 | B 站视频页（Browse MCP）如 `BV1qF6wBaEWu` | other | 曾触发 412（`assets/20260812-bilibili-BV-412.png`）。**登录后已恢复**：透视学①–④与三分化①–⑤已 captured。本人空间仍可能 412。 |
| 2026-08-12 | 小红书无 token 的 explore 直链 | other | 无 `xsec_token` 时仍可能验证/无法浏览（error_code=300031）。**已验证解法**：从本人主页点入，URL 带 `xsec_token`/`xsec_source=pc_user` 后可截详情。 |
| 2026-08-12 | 微信公众号搜索「谭成义 健身」 | not_found | 仍未找到可核验本人/官方公众号入口。 |
| 2026-08-12 | 小红书高频点选 | other | 曾「点击成功但不跳转」。改用降频 + 完整 token 直链后，本轮已补通用计划/四分化收官/下肢（见 `inbox/raw/20260812-xhs-general-plan.md` 等）。 |
| 2026-08-12 | 小红书居家下肢+腕腰不适 | captured | 降频直链：`20260812-xhs-home-leg.md`、`wrist.md`、`waist.md`。 |
| 2026-08-12 | 小红书肩部疼痛+三分化拉日 | captured | 降频直链：`20260812-xhs-shoulder.md`、`split3-pull.md`。 |
| 2026-08-12 | B 站减脂第10/15天碳水循环锚点 | captured | 凯圣王账号：`20260812-bilibili-fatloss-day10-carb.md`、`day15-carb.md`（low）。 |
| 2026-08-12 | 小红书主页缺口续扫 `6a3e7af2…` | other | 完整 token 直链后仍 load 超时/黑屏；已单次 reload 仍空页。**停扫 XHS**，冷却 ≥15–30 分钟。未捕获 ID 队列：`6a3e7af2`、`6a3bd8b5`、`6a366ff0`、`6a158e5a`、`6a0d0153`、`6a02d4c4`、`6a008bf4`、`69ec7763`（及主页更早页）。 |
| 2026-08-12 | B 站本人空间恢复 + 近作技术片 | captured | 空间 raw + 本人 RDL/`BV1hauq6EEfW`、划船反飞鸟/`BV1E8un61EVg`、卧推推肩/`BV1T6GG6mEo9`。 |
| 2026-08-12 | B 站本人睡眠/高位下拉/一体机 | captured | `BV1w53J6REfW`、`BV14QKF6FEkP`、`BV1PcNQ6AE3f`。 |
| 2026-08-12 | B 站本人硬减日/手臂安排/私教腿 | captured | `BV1ysNn65EJ8`、`BV1wvMF6ZEqL`、`BV1RjTT6FEKo`。 |

## 小红书细扫降频约定（经验，非绕过）

- 只从本人主页点入详情，保留 `xsec_token`/`xsec_source=pc_user`；禁止无 token explore 直链。
- **优先**：主页慢滚加载后，复制完整 `user/profile/.../<noteId>?xsec_token=...` 再 `navigate`（避免高频 click）；token 必须完整，截断会 `error_code=300017`。
- 节奏：每条间隔约 45–90s；单轮最多 2～3 条；慢速滚动加载网格。
- 成功判据：最终 URL 为 `/explore/<id>?xsec_token=...`；媒体黑屏可 **单次** reload，仍失败则记 blocked 并停。
- 仍停在 profile / 点击不跳转 / 验证码：立即停，冷却 ≥15–30 分钟或交人工。
- 单条闭环：打开 → 截图 → 落 raw → 间隔 → 再下一条。

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
| 2026-08-12 | B 站透视学①–④ + 三分化①–⑤ | captured | 登录后细扫：`inbox/raw/20260812-bilibili-{bench,ohp,rdl,pulldown}-perspective.md`、`split3-{plan,chest,terms,back,leg}.md`。 |
| 2026-08-12 | B 站视频 `BV1EkV96nEyg`（拉伸） | 页面可读，截图 `assets/20260812-bilibili-BV1EkV96nEyg.png` |
| 2026-08-12 | B 站视频 `BV1GzEg6wEVb`（手臂私教） | HTTP 200，UP 主谭成义，截图 `assets/20260812-bilibili-BV1GzEg6wEVb.png` |
| 2026-08-12 | B 站凯圣王主页 | 可见粉丝/投稿/代表作，截图 `assets/20260812-bilibili-space-2100737396-kaisw.png` |
| 2026-08-12 | 抖音 `shipin/7625835031486859291` | 可打开但为二创跟练账号「鹦鹉螺」，非官方 |
