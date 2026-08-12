# 收集规范

面向维护者与 Agent。规范依据：`docs/superpowers/specs/2026-08-12-fitness-collection-design.md`。

## 原则

1. 先粗扫建地图，再细扫落 raw，最后才合成 `content/`。
2. 默认用**本地浏览器**（Cursor Browse）采集；禁止以破解、绕过付费为主手段。
3. 落库写**要点摘要 + 链接 + 必要截图**，禁止整段搬运文案/字幕当正文。
4. 出处优先本人/官方向；二创/搬运号不得标为官方。
5. 遇登录墙：暂停，请维护者在自动化浏览器登录后再继续。
6. 遇风控/验证码：写入 `research/coarse/blocked.md`（细扫阶段可写在 raw 的 status/notes），换公开入口，不中断整批硬刚。

## 状态枚举（细扫 raw）

`captured` | `noted` | `curated` | `abandoned` | `blocked`

## 粗扫操作手册

目标文件：

- `research/coarse/taxonomy.md` — 主题地图（A）
- `research/coarse/source-map.md` — 账号/栏目（B）
- `research/coarse/anchors.md` — 每类 3～5 代表锚点（C）
- `research/coarse/blocked.md` — 未拿到的项
- `research/coarse/assets/YYYYMMDD-简短说明.png` — 截图

平台范围（第一轮）：抖音/视频号、B 站、小红书、微信公众号；关键词含「谭成义」健身相关公开内容。

步骤：

1. 打开本地 Chrome（Browse），搜索官方向账号与公开主页。
2. 归纳临时二级类目写入 taxonomy（`status: draft`）。
3. 记录账号/栏目到 source-map，标注 `official_likelihood`: `high` | `medium` | `low` | `unknown`。
4. 每类挑选 3～5 条代表作：标题、平台、URL、入选原因（一句话）；不写长摘录。
5. 列表页/主页可截图存 assets。
6. 失败项写入 blocked。
7. 请维护者审阅；通过后在 taxonomy 增加 `taxonomy-v0` 冻结说明（仍允许日后修改）。

## 细扫操作手册（粗扫通过后再做）

1. 复制 `templates/raw-entry.md` → `inbox/raw/<id>.md`。
2. 截图放入 `inbox/assets/`，在正文引用。
3. 状态从 `captured` 推进；整理进正式条目后标 `curated` 并链接到 `content/`。

## 禁止事项

- 搭建 VitePress（本阶段）
- 将「出处与截图」做成顶层导航类目
- 定死深层部位/周期目录树
- 付费全文搬运或破解
