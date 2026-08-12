# 健身资料收集库骨架与粗扫 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 建立可开源的 Markdown 收集仓库骨架，并用本地浏览器跑通第一轮粗扫（主题地图 + 账号栏目图 + 代表锚点）。

**Architecture:** 无应用运行时。以 Git 仓库中的 Markdown 为唯一数据面：`research/coarse/` 存粗扫地图，`inbox/` 为细扫预留，`content/` 为正式条目占位。采集默认走 Cursor Browse 本地 Chrome；遇登录墙暂停由维护者放行。第一版不做 VitePress。

**Tech Stack:** Markdown + YAML frontmatter；Git；Cursor Browse（Playwright 本地 Chrome）；可选 Node（仅脚手架校验脚本，用 pnpm）。

**Spec:** `docs/superpowers/specs/2026-08-12-fitness-collection-design.md`

## Global Constraints

- 第一版不做 VitePress / 任何 SSG。
- 免责说明只写在 `README.md`，不建 `DISCLAIMER.md`。
- 出处与截图挂在条目详情内，不做顶层「出处」类目。
- 粗扫完成标准：A `taxonomy.md` + B `source-map.md` + C `anchors.md` 初稿齐全；另有 `blocked.md`。
- 采集默认本地浏览器；不承诺打穿反爬；失败记 `blocked`，不硬刚。
- 不做整段文案/字幕搬运；不做付费破解。
- 第三方截图与引述版权归原权利人；自撰结构可用 MIT。
- Node 包管理使用 pnpm（若加校验脚本）。
- 对话与仓库面向中文文档。

---

## File Structure

| Path | Responsibility |
|------|----------------|
| `README.md` | 项目说明 + 醒目免责 + 目录导航 |
| `LICENSE` | MIT（仅覆盖自撰文档与结构） |
| `.gitignore` | OS/编辑器/浏览器临时档、过大本地缓存 |
| `docs/collecting.md` | Agent/人共用收集规范与粗扫/细扫操作手册 |
| `templates/raw-entry.md` | 细扫原料母版 |
| `templates/curated-entry.md` | 正式条目母版 |
| `research/coarse/*.md` | 粗扫交付物 |
| `research/coarse/assets/` | 粗扫截图 |
| `inbox/raw/`, `inbox/assets/` | 细扫预留 |
| `content/plans\|technique\|nutrition/` | 正式条目占位（各放 README） |
| `scripts/check-scaffold.mjs` | 校验骨架文件与 README 免责关键词 |
| `package.json` | 仅提供 `pnpm check` 入口 |

---

### Task 1: 根说明、许可与忽略规则

**Files:**
- Create: `README.md`
- Create: `LICENSE`
- Create: `.gitignore`
- Test: 用 shell 断言文件存在且 README 含免责关键词

**Interfaces:**
- Consumes: 无
- Produces: 开源访客可见的项目入口与 MIT 许可文本

- [ ] **Step 1: 写失败校验（骨架尚不存在时应失败）**

Run:

```bash
test -f README.md && grep -q '不是谭成义本人' README.md && test -f LICENSE && test -f .gitignore
```

Expected: 非零退出（当前仓库仅有 design spec，尚无这些文件）。

- [ ] **Step 2: 创建 `README.md`**

写入完整内容：

```markdown
# 谭成义健身资料整理（非官方）

## 免责声明

- 本仓库为**个人学习向**公开资料整理，便于维护者日后查阅与跟练。
- **维护者不是谭成义本人**，亦与谭成义及其团队、品牌、账号**无任何官方关联或授权关系**。
- 内容来自公开渠道的笔记、摘要与理解辅助截图，**不保证**完整、准确或与原作者最新表述一致。
- **不构成**医疗、营养或训练指导；跟练与实践风险由读者自行承担。
- 出处链接优先指向**本人/官方向**公开内容；截图仅作理解辅助。
- 第三方媒体、文案、商标等权利归原权利人所有；本仓库 MIT 许可**不覆盖**这些材料。
- 若权利方希望删除某条摘录或截图，请通过 GitHub Issues 联系，维护者将配合处理。

## 本仓库是什么

用 Markdown 落库，按「粗扫建地图 → 细扫收原料 → 再整理正式条目」收集与谭成义相关的健身公开内容。

**当前阶段：** 粗扫与落库规范（不做网站）。

## 目录速览

| 路径 | 用途 |
|------|------|
| `docs/collecting.md` | 收集规范（Agent/人共用） |
| `research/coarse/` | 粗扫：主题地图、账号图、锚点 |
| `inbox/` | 细扫原料（一条源内容一篇） |
| `content/` | 正式整理条目（计划/技术/饮食） |
| `templates/` | 复制用模板 |

## 许可

自撰文档与仓库结构见 [LICENSE](./LICENSE)（MIT）。第三方内容版权归原权利人。
```

- [ ] **Step 3: 创建 `LICENSE`**

写入标准 MIT 文本，Copyright 行使用：

`Copyright (c) 2026 tanchengyi-fitness maintainers`

（全文其余部分用标准 MIT 英文正文即可。）

- [ ] **Step 4: 创建 `.gitignore`**

```gitignore
.DS_Store
*.log
.idea/
.vscode/
node_modules/
.chrome-profile/
*.tmp
.env
.env.*
```

- [ ] **Step 5: 再跑 Step 1 的校验**

Expected: 退出码 0。

- [ ] **Step 6: Commit**

```bash
git add README.md LICENSE .gitignore
git commit -m "$(cat <<'EOF'
docs: add README disclaimer, MIT license, and gitignore

Establish the public-facing non-affiliation notice and root project entry before collection scaffolding.
EOF
)"
```

---

### Task 2: 目录占位与收集规范

**Files:**
- Create: `docs/collecting.md`
- Create: `research/coarse/assets/.gitkeep`
- Create: `inbox/raw/.gitkeep`
- Create: `inbox/assets/.gitkeep`
- Create: `content/plans/README.md`
- Create: `content/technique/README.md`
- Create: `content/nutrition/README.md`
- Test: 路径存在性检查

**Interfaces:**
- Consumes: `README.md` 中的目录约定
- Produces: Agent 执行粗扫/细扫时必须遵循的操作手册；Git 可跟踪的空目录

- [ ] **Step 1: 创建占位目录与 content README**

```bash
mkdir -p research/coarse/assets inbox/raw inbox/assets \
  content/plans content/technique content/nutrition
```

每个 `content/*/README.md` 写入（三份内容相同，仅标题类目名不同）：

`content/plans/README.md`:

```markdown
# 训练计划（占位）

正式条目将在细扫后写入此目录。类目以 `research/coarse/taxonomy.md` 为准，可调整，勿提前深挖子目录。
```

`content/technique/README.md` 标题改为 `# 动作技术（占位）`，正文同上。  
`content/nutrition/README.md` 标题改为 `# 饮食与补剂（占位）`，正文同上。

三个 `.gitkeep` 为空文件。

- [ ] **Step 2: 创建 `docs/collecting.md`**

写入完整内容：

```markdown
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
```

- [ ] **Step 3: 校验**

```bash
test -f docs/collecting.md && \
test -f research/coarse/assets/.gitkeep && \
test -f inbox/raw/.gitkeep && \
test -f content/plans/README.md && \
test -f content/technique/README.md && \
test -f content/nutrition/README.md && \
grep -q '本地浏览器' docs/collecting.md
```

Expected: 退出码 0。

- [ ] **Step 4: Commit**

```bash
git add docs/collecting.md research/coarse/assets/.gitkeep \
  inbox/raw/.gitkeep inbox/assets/.gitkeep \
  content/plans/README.md content/technique/README.md content/nutrition/README.md
git commit -m "$(cat <<'EOF'
docs: add collecting guide and content placeholders

Document Agent browser workflow and reserve shallow dirs for coarse/fine collection.
EOF
)"
```

---

### Task 3: 条目模板

**Files:**
- Create: `templates/raw-entry.md`
- Create: `templates/curated-entry.md`
- Test: 校验 frontmatter 关键字段名存在

**Interfaces:**
- Consumes: `docs/collecting.md` 状态枚举
- Produces: 细扫/整理时复制用的母版字段名（后续 Agent 必须沿用这些 key）

- [ ] **Step 1: 创建 `templates/raw-entry.md`**

```markdown
---
id: "YYYYMMDD-platform-short-slug"
platform: "bilibili" # douyin | bilibili | xiaohongshu | wechat | other
title: ""
url: ""
account: ""
official_likelihood: "unknown" # high | medium | low | unknown
captured_at: "YYYY-MM-DD"
status: "captured" # captured | noted | curated | abandoned | blocked
taxonomy_hints: []
screenshots: []
---

## 要点摘要

- （3～8 条，勿整段粘贴字幕/文案）

## 出处与截图

- 官方/本人链接：
- 截图：（相对路径，如 `../assets/....png`）

## Agent 备注

- 
```

- [ ] **Step 2: 创建 `templates/curated-entry.md`**

```markdown
---
title: ""
type: "plans" # plans | technique | nutrition
status: "draft" # draft | active | archived
sources:
  - title: ""
    url: ""
    official_likelihood: "unknown"
screenshots: []
updated_at: "YYYY-MM-DD"
---

## 要点

- 

## 出处与截图

| 来源 | 链接 | 官方向 | 截图 |
|------|------|--------|------|
|  |  |  |  |

## 相关 raw

- `inbox/raw/...`
```

- [ ] **Step 3: 校验关键字段名**

```bash
grep -q 'official_likelihood' templates/raw-entry.md && \
grep -q 'taxonomy_hints' templates/raw-entry.md && \
grep -q 'type: "plans"' templates/curated-entry.md && \
grep -q '出处与截图' templates/curated-entry.md
```

Expected: 退出码 0。

- [ ] **Step 4: Commit**

```bash
git add templates/raw-entry.md templates/curated-entry.md
git commit -m "$(cat <<'EOF'
docs: add raw and curated entry templates

Lock frontmatter field names for Agent-driven fine sweep and later curated pages.
EOF
)"
```

---

### Task 4: 粗扫文件骨架 + 脚手架校验脚本

**Files:**
- Create: `research/coarse/taxonomy.md`
- Create: `research/coarse/source-map.md`
- Create: `research/coarse/anchors.md`
- Create: `research/coarse/blocked.md`
- Create: `scripts/check-scaffold.mjs`
- Create: `package.json`
- Test: `pnpm check`

**Interfaces:**
- Consumes: Task 1–3 产生的路径与 README 免责文案
- Produces: 粗扫可填写的空表头；`pnpm check` 作为回归门槛

- [ ] **Step 1: 写入四份粗扫骨架**

`research/coarse/taxonomy.md`:

```markdown
---
status: draft
version: ""
updated_at: ""
---

# 主题地图（粗扫 A）

> 临时二级类目，细扫前可改。维护者审阅通过后将 `version` 设为 `taxonomy-v0`。

## 类目

| ID | 名称 | 一句话定义 | 备注 |
|----|------|------------|------|
|  |  |  |  |

## 缺口

- （尚不清楚的板块）
```

`research/coarse/source-map.md`:

```markdown
---
status: draft
updated_at: ""
---

# 账号与栏目图（粗扫 B）

| 平台 | 账号名 | 主页 URL | official_likelihood | 主要栏目/系列 | 备注 |
|------|--------|----------|---------------------|---------------|------|
|  |  |  | unknown |  |  |
```

`research/coarse/anchors.md`:

```markdown
---
status: draft
updated_at: ""
---

# 代表锚点（粗扫 C）

按 `taxonomy.md` 类目分组。每类目标 3～5 条；不足在「缺口」说明。

## ＜类目名称＞

| 标题 | 平台 | URL | 入选原因 |
|------|------|-----|----------|
|  |  |  |  |

## 缺口

- 
```

`research/coarse/blocked.md`:

```markdown
---
updated_at: ""
---

# 粗扫未取得项

| 时间 | 平台/URL | 原因 | 下一步 |
|------|----------|------|--------|
|  |  | login_wall / captcha / not_found / other |  |
```

- [ ] **Step 2: 创建 `package.json`**

```json
{
  "name": "tanchengyi-fitness",
  "private": true,
  "type": "module",
  "scripts": {
    "check": "node scripts/check-scaffold.mjs"
  }
}
```

- [ ] **Step 3: 创建 `scripts/check-scaffold.mjs`**

```javascript
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const requiredFiles = [
  'README.md',
  'LICENSE',
  'docs/collecting.md',
  'templates/raw-entry.md',
  'templates/curated-entry.md',
  'research/coarse/taxonomy.md',
  'research/coarse/source-map.md',
  'research/coarse/anchors.md',
  'research/coarse/blocked.md',
  'content/plans/README.md',
  'content/technique/README.md',
  'content/nutrition/README.md',
];

const missing = requiredFiles.filter((f) => !fs.existsSync(path.join(root, f)));
if (missing.length) {
  console.error('Missing files:\n' + missing.map((m) => ` - ${m}`).join('\n'));
  process.exit(1);
}

const readme = fs.readFileSync(path.join(root, 'README.md'), 'utf8');
for (const needle of ['不是谭成义本人', '无任何官方关联', 'MIT']) {
  if (!readme.includes(needle)) {
    console.error(`README.md missing required phrase: ${needle}`);
    process.exit(1);
  }
}

const taxonomy = fs.readFileSync(path.join(root, 'research/coarse/taxonomy.md'), 'utf8');
if (!/status:\s*draft/.test(taxonomy) && !/version:\s*taxonomy-v0/.test(taxonomy)) {
  console.error('taxonomy.md must have status: draft or version: taxonomy-v0');
  process.exit(1);
}

console.log('scaffold check OK');
```

- [ ] **Step 4: 运行校验**

```bash
pnpm check
```

Expected: 打印 `scaffold check OK`，退出码 0。若本机无 pnpm，先 `corepack enable` 或安装 pnpm；无 Node 时用 `node scripts/check-scaffold.mjs` 等价。

- [ ] **Step 5: Commit**

```bash
git add research/coarse/taxonomy.md research/coarse/source-map.md \
  research/coarse/anchors.md research/coarse/blocked.md \
  scripts/check-scaffold.mjs package.json
git commit -m "$(cat <<'EOF'
chore: add coarse-scan stubs and scaffold checker

Provide empty A/B/C/blocked templates and a pnpm check gate for repo shape.
EOF
)"
```

---

### Task 5: 执行第一轮粗扫（浏览器）

**Files:**
- Modify: `research/coarse/taxonomy.md`
- Modify: `research/coarse/source-map.md`
- Modify: `research/coarse/anchors.md`
- Modify: `research/coarse/blocked.md`
- Create: `research/coarse/assets/*.png`（按需）
- Test: 内容验收命令 + 维护者人工审阅

**Interfaces:**
- Consumes: `docs/collecting.md` 粗扫手册；Browse MCP（`browser_navigate` / `browser_snapshot` / `browser_screenshot` / `browser_get`）
- Produces: 可审阅的 A/B/C 初稿；可选截图；blocked 清单

**REQUIRED SKILL when executing:** browser-automation（Cursor Browse）

- [ ] **Step 1: 启动前确认**

向维护者确认：可打开本地自动化 Chrome；若需登录抖音/小红书/B 站等，维护者可在弹窗中扫码登录。

- [ ] **Step 2: 检索官方向账号（B）**

用 Browse 依次检索（示例查询，可按结果调整）：

- Web/B 站：`谭成义 健身`
- 记录疑似本人/官方向账号主页 URL、栏目名称
- 截图主页列表（命名 `research/coarse/assets/YYYYMMDD-bilibili-home.png` 等）
- 登录墙 → 暂停请维护者登录 → 继续；仍失败 → `blocked.md`

写入 `source-map.md` 至少若干行真实数据（允许 `official_likelihood: unknown`）。

- [ ] **Step 3: 归纳主题地图（A）**

根据可见内容标题/栏目，写入临时二级类目（建议从计划/技术/饮食延伸出更细的二级，但保持浅）。`status` 保持 `draft`，填写 `updated_at`。

- [ ] **Step 4: 填充代表锚点（C）**

每个类目尽量 3～5 条；不足在「缺口」写明。每条必须有可点击 URL。禁止长摘录。

- [ ] **Step 5: 自动化验收**

```bash
pnpm check
# 粗扫非空：表格中不应只剩表头空行
grep -c '|' research/coarse/taxonomy.md
grep -c 'http' research/coarse/source-map.md
grep -c 'http' research/coarse/anchors.md
```

Expected:

- `pnpm check` OK
- `source-map.md` 与 `anchors.md` 至少各含 **1 个以上** `http` 链接（理想：anchors 每类 ≥3；做不到则缺口说明非空）
- `taxonomy.md` 类目表至少 **2** 个非空类目行

- [ ] **Step 6: 请维护者审阅（人闸）**

停下来请维护者回复是否认可地图与锚点。**在未明确同意前，不要把 `version` 改成 `taxonomy-v0`，也不要开始细扫。**

- [ ] **Step 7: 若维护者同意冻结 v0**

在 `taxonomy.md` frontmatter 设置：

```yaml
status: draft
version: taxonomy-v0
updated_at: "YYYY-MM-DD"
```

并在文首加一句：`已审阅冻结为 taxonomy-v0，细扫入口以此为准（仍可后续修订）。`

- [ ] **Step 8: Commit 粗扫结果**

```bash
git add research/coarse/
git commit -m "$(cat <<'EOF'
research: complete first coarse scan map

Record taxonomy, source map, anchors, and blocked items from local-browser collection.
EOF
)"
```

若维护者尚未同意冻结，commit 信息改为 `research: draft coarse scan for review`，且不要写 `taxonomy-v0`。

---

## Spec Coverage Self-Review

| Spec 要求 | Task |
|-----------|------|
| README 免责、非本人 | Task 1 |
| MIT + 第三方版权说明 | Task 1 |
| collecting 规范 + 浏览器流程 | Task 2 |
| 目录：coarse / inbox / content 占位 | Task 2 |
| raw / curated 模板字段 | Task 3 |
| taxonomy / source-map / anchors / blocked | Task 4–5 |
| 粗扫 A+B+C + 本地浏览器 | Task 5 |
| 不做 VitePress / 不定死深层 IA | Global + Task 2 文案 |
| 出处在详情内 | templates curated + collecting |
| 冻结 taxonomy-v0 需人审 | Task 5 Step 6–7 |
| 细扫批量 | **刻意不在本计划**（spec：粗扫通过后再开） |

## Placeholder Scan

已消除 TBD/空泛步骤；浏览器查询词给出可执行示例；校验命令含期望。

---

## Execution Handoff

Plan complete and saved to `docs/superpowers/plans/2026-08-12-fitness-collection.md`.

**Two execution options:**

1. **Subagent-Driven（推荐）** — 每任务派一个新子代理，任务间复查，迭代快  
2. **Inline Execution** — 本会话按 executing-plans 连续执行，设检查点  

选哪种？
