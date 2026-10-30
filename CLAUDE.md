# CLAUDE.md — Portfolio do AI quản lý (phong cách Lauren Tan)

> Đọc toàn bộ file này ở đầu MỖI phiên. Sau đó đọc `PROGRESS.md`.
> Mỗi phiên: làm ĐÚNG 1 bước nhỏ → có bằng chứng → cập nhật `PROGRESS.md`.

## 1. Dự án & mục tiêu
- Dự án: website portfolio song ngữ EN/JP cho nhà tuyển dụng Nhật (Thanh, sinh viên 専門学校, Frontend + UI/UX).
- Stack: HTML, CSS (BEM, Flexbox/Grid), JavaScript thuần (fetch, array methods), VS Code. Tooling: Node 20+ (máy hiện tại: v24).
- Môi trường: Windows + PowerShell (mọi lệnh viết cho PowerShell, không dùng `mkdir -p`, `touch`, `grep`, `&&`). GitHub chính: `sora-kill`, repo `https://github.com/sora-kill/portfolio`.
- Mục tiêu 100%: site chạy tốt, kiểm chứng tự động, README + GitHub Profile song ngữ, CV link thật, không còn placeholder.
- Vai trò: Thanh = bếp trưởng (chọn thực đơn, chịu trách nhiệm). AI = đầu bếp (thực thi, tự kiểm chứng, đưa bằng chứng).

## 2. Chế độ vận hành
- **Chế độ A – Chat (hiện tại):** Claude viết nội dung file + lệnh, Thanh dán vào VS Code, chạy lệnh, dán kết quả lại.
- **Chế độ B – Claude Code (sau Phase 5):** agent tự sửa file, tự chạy `npm run verify`, tự mở PR. Quy tắc vẫn y hệt.

## 3. Quy ước bất biến (agent KHÔNG tự đổi)
1. Không file JS nào quá 300 dòng (ESLint chặn). CSS quá 300 dòng thì tách file.
2. Màu/spacing/font chỉ nằm trong `src/css/tokens.css`; nơi khác dùng `var(--...)`. Cấm hex trong CSS khác.
3. Class theo BEM. Không dùng `!important`, không inline style.
4. Mọi chữ hiển thị nằm trong `src/i18n/en.json` + `ja.json`, key phải khớp 100%.
5. Không thêm dependency khi chưa hỏi. Không bỏ qua test/lint.
6. "Xong việc" = `npm run verify` xanh + ảnh trước/sau + tiêu chí task đạt. Test xanh một mình KHÔNG đủ.
7. Lỗi lặp lại lần 2 → không nhắc nữa, thêm lint rule / test / tool (ghi vào `docs/interventions.md`).
8. Giao tiếp: ngắn, thẳng, tiếng Việt; code & commit bằng tiếng Anh.

## 4. Cấu trúc đích
```
portfolio/
├─ CLAUDE.md                  # file này (luật + roadmap)
├─ PROGRESS.md                # trạng thái sống, cập nhật cuối mỗi phiên
├─ package.json
├─ eslint.config.js  .stylelintrc.json  .htmlhintrc  .prettierrc
├─ playwright.config.js  lighthouserc.json
├─ src/                       # toàn bộ site (thư mục được deploy)
│  ├─ index.html
│  ├─ css/ tokens.css  style.css  (tách thêm khi >300 dòng)
│  ├─ js/  main.js  i18n.js
│  ├─ i18n/ en.json  ja.json
│  └─ assets/
├─ tools/  i18n-check.mjs  screenshot.mjs
├─ tests/e2e/  smoke.spec.js  a11y.spec.js  regression-*.spec.js
├─ tasks/  _template.md  T-001.md ...
├─ docs/
│  ├─ evidence/               # ảnh trước/sau (không commit)
│  ├─ prompts/ inner-loop.md intake.md reviewer.md tracker.md scout.md
│  ├─ findings.md  interventions.md  debug-protocol.md
│  ├─ daily/  trends/
└─ .github/ workflows/ci.yml  pull_request_template.md  ISSUE_TEMPLATE/
```

## 5. Roadmap (đánh dấu [x] khi XONG và có bằng chứng)

### Phase 0 — Nền móng repo
- [x] **P0.1** Terminal: `mkdir portfolio; cd portfolio; git init -b main`
- [x] **P0.2** `node -v` (cần ≥ 20). `npm init -y`, mở `package.json` thêm `"type": "module"`.
- [x] **P0.3** Tạo `.gitignore`:
  ```
  node_modules/
  .lighthouseci/
  playwright-report/
  test-results/
  .DS_Store
  docs/evidence/*
  !docs/evidence/.gitkeep
  ```
- [x] **P0.4** PowerShell:
  ```powershell
  New-Item -ItemType Directory -Force src/css,src/js,src/i18n,src/assets,tools,tests/e2e,tasks,docs/evidence,docs/prompts,docs/daily,docs/trends,.github/workflows,.github/ISSUE_TEMPLATE
  New-Item docs/evidence/.gitkeep -ItemType File -Force
  ```
- [x] **P0.5** Đặt `CLAUDE.md` và `PROGRESS.md` ở thư mục gốc.
- [x] **P0.6** Tạo repo `portfolio` trên GitHub. `git remote add origin <url>`, `git add -A && git commit -m "chore: init"`, `git push -u origin main`. Lỗi 403 = Windows đang nhớ tài khoản GitHub khác: xóa mục `git:https://github.com` trong Credential Manager rồi push lại.
- **Xong khi:** repo trên GitHub có CLAUDE.md và PROGRESS.md.

### Phase 1 — Đưa site hiện tại vào cấu trúc
- [x] **P1.1** Chuyển `index.html` → `src/index.html`, `style.css` → `src/css/style.css`, `script.js` → `src/js/main.js`. Lệnh: `Move-Item <đường-dẫn-cũ>\index.html src\index.html` (tương tự `style.css` → `src\css\style.css`, `script.js` → `src\js\main.js`). Sửa đường dẫn `<link>`/`<script>` (script dùng `type="module"`). Commit `refactor: move site into src/`.
- [x] **P1.2** Tạo `src/css/tokens.css`: khai báo trong `:root` toàn bộ màu (`--color-bg`, `--color-text`, `--color-accent: #FFD400`...), spacing (`--space-1..8`), font (`--font-sans: 'Roboto', 'Noto Sans JP', sans-serif`), radius, shadow. Trong `style.css` thay mọi giá trị hardcode bằng `var(--...)`. Thêm `<link>` tokens.css TRƯỚC style.css.
- [ ] **P1.3** Rà class theo BEM (`block__element--modifier`). Nếu `style.css` >300 dòng, tách theo section.
- [ ] **P1.4** i18n:
  - Tạo `src/i18n/en.json`, `ja.json` (cấu trúc lồng: `hero.title`, `nav.about`...).
  - HTML: mỗi chữ hiển thị gắn `data-i18n="hero.title"`. Nút đổi ngôn ngữ có thuộc tính `data-lang-toggle`.
  - `src/js/i18n.js`: dùng `fetch('./i18n/${lang}.json')`, áp text vào `[data-i18n]`, set `document.documentElement.lang`, lưu `localStorage` key `lang`, mặc định `en`.
  - `src/js/main.js`: chỉ khởi tạo (import i18n, gắn sự kiện).
- [ ] **P1.5** Điền thật các placeholder: GitHub username, email, CV link, AnimeSky demo URL. Không để `TODO`.
- **Xong khi:** `npx serve src -l 4173` mở được site, đổi EN/JP hoạt động, không lỗi console.

### Phase 2 — Luật cứng bằng máy
- [ ] **P2.1** `npm i -D eslint @eslint/js globals prettier stylelint stylelint-config-standard htmlhint`
- [ ] **P2.2** `eslint.config.js`:
  ```js
  import js from '@eslint/js';
  import globals from 'globals';
  export default [
    { ignores: ['playwright-report/**', 'test-results/**', '.lighthouseci/**'] },
    js.configs.recommended,
    {
      files: ['src/js/**/*.js'],
      languageOptions: { globals: globals.browser, sourceType: 'module' },
      rules: {
        'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
        'max-lines-per-function': ['warn', 60],
        'no-var': 'error', 'prefer-const': 'error', eqeqeq: 'error', 'no-console': 'warn'
      }
    },
    { files: ['tools/**/*.mjs', 'tests/**/*.js', '*.config.js'], languageOptions: { globals: globals.node } }
  ];
  ```
- [ ] **P2.3** `.stylelintrc.json`:
  ```json
  {
    "extends": "stylelint-config-standard",
    "rules": {
      "color-no-hex": true,
      "selector-class-pattern": "^[a-z][a-z0-9-]*(__[a-z0-9-]+)?(--[a-z0-9-]+)?$"
    },
    "overrides": [{ "files": ["src/css/tokens.css"], "rules": { "color-no-hex": null } }]
  }
  ```
- [ ] **P2.4** `.htmlhintrc`: `{"tagname-lowercase":true,"attr-lowercase":true,"attr-value-double-quotes":true,"doctype-first":true,"id-unique":true,"alt-require":true,"title-require":true}`
- [ ] **P2.5** `.prettierrc`: `{"singleQuote":true,"printWidth":100,"endOfLine":"auto"}`
- [ ] **P2.6** `tools/i18n-check.mjs`:
  ```js
  import { readFileSync } from 'node:fs';
  const flat = (o, p = '') =>
    Object.entries(o).flatMap(([k, v]) => (typeof v === 'object' ? flat(v, `${p}${k}.`) : [`${p}${k}`]));
  const load = (f) => flat(JSON.parse(readFileSync(`src/i18n/${f}.json`, 'utf8')));
  const en = load('en'), ja = load('ja');
  const miss = [
    ...en.filter((k) => !ja.includes(k)).map((k) => `ja thiếu: ${k}`),
    ...ja.filter((k) => !en.includes(k)).map((k) => `en thiếu: ${k}`)
  ];
  if (miss.length) { console.error(miss.join('\n')); process.exit(1); }
  console.log('i18n OK');
  ```
- [ ] **P2.7** Thêm vào `package.json`:
  ```json
  "scripts": {
    "dev": "serve src -l 4173",
    "lint:js": "eslint .",
    "lint:css": "stylelint \"src/css/**/*.css\"",
    "lint:html": "htmlhint src/index.html",
    "format": "prettier --write .",
    "i18n": "node tools/i18n-check.mjs",
    "lint": "npm run lint:js && npm run lint:css && npm run lint:html",
    "test": "playwright test",
    "shot": "node tools/screenshot.mjs",
    "lh": "lhci autorun",
    "verify": "npm run lint && npm run i18n && npm test && npm run lh"
  }
  ```
- **Xong khi:** `npm run lint` và `npm run i18n` xanh. Lỗi nào còn → sửa, ghi nguyên nhân gốc vào `docs/findings.md`.

### Phase 3 — Công cụ kiểm chứng (để AI tự nhìn thấy kết quả)
- [ ] **P3.1** `npm i -D @playwright/test @axe-core/playwright serve @lhci/cli` rồi `npx playwright install chromium`
- [ ] **P3.2** `playwright.config.js`:
  ```js
  import { defineConfig, devices } from '@playwright/test';
  export default defineConfig({
    testDir: 'tests/e2e',
    webServer: { command: 'npx serve src -l 4173', url: 'http://localhost:4173', reuseExistingServer: true },
    use: { baseURL: 'http://localhost:4173' },
    projects: [
      { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
      { name: 'mobile', use: { ...devices['Pixel 7'] } }
    ]
  });
  ```
- [ ] **P3.3** `tests/e2e/smoke.spec.js`:
  ```js
  import { test, expect } from '@playwright/test';
  test('không có lỗi console', async ({ page }) => {
    const errors = [];
    page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
    await page.goto('/');
    expect(errors).toEqual([]);
  });
  test('đổi EN/JP', async ({ page }) => {
    await page.goto('/');
    const h1 = page.locator('h1');
    const before = await h1.textContent();
    await page.locator('[data-lang-toggle]').click();
    await expect(page.locator('html')).toHaveAttribute('lang', 'ja');
    expect(await h1.textContent()).not.toBe(before);
  });
  test('nút CV và GitHub có link thật', async ({ page }) => {
    await page.goto('/');
    for (const a of await page.locator('a[href="#"], a[href=""]').all()) {
      expect(await a.getAttribute('data-allow-empty')).not.toBeNull();
    }
  });
  ```
- [ ] **P3.4** `tests/e2e/a11y.spec.js`:
  ```js
  import { test, expect } from '@playwright/test';
  import AxeBuilder from '@axe-core/playwright';
  for (const lang of ['en', 'ja']) {
    test(`axe ${lang}`, async ({ page }) => {
      await page.addInitScript((l) => localStorage.setItem('lang', l), lang);
      await page.goto('/');
      const r = await new AxeBuilder({ page }).analyze();
      expect(r.violations).toEqual([]);
    });
  }
  ```
- [ ] **P3.5** `tools/screenshot.mjs` (chạy khi `npm run dev` đang mở ở terminal khác):
  ```js
  import { chromium } from '@playwright/test';
  import { mkdirSync } from 'node:fs';
  const [task = 'adhoc', label = 'after'] = process.argv.slice(2);
  const dir = `docs/evidence/${task}`;
  mkdirSync(dir, { recursive: true });
  const browser = await chromium.launch();
  const sizes = { desktop: { width: 1440, height: 900 }, mobile: { width: 375, height: 812 } };
  for (const [name, viewport] of Object.entries(sizes)) {
    for (const lang of ['en', 'ja']) {
      const ctx = await browser.newContext({ viewport });
      await ctx.addInitScript((l) => localStorage.setItem('lang', l), lang);
      const page = await ctx.newPage();
      await page.goto('http://localhost:4173');
      await page.screenshot({ path: `${dir}/${label}-${name}-${lang}.png`, fullPage: true });
      await ctx.close();
    }
  }
  await browser.close();
  ```
  Dùng: `npm run shot -- T-001 before` (trước khi sửa), `npm run shot -- T-001 after` (sau khi sửa).
- [ ] **P3.6** `lighthouserc.json`:
  ```json
  {
    "ci": {
      "collect": { "staticDistDir": "src", "numberOfRuns": 1 },
      "assert": {
        "assertions": {
          "categories:performance": ["error", { "minScore": 0.9 }],
          "categories:accessibility": ["error", { "minScore": 1 }],
          "categories:best-practices": ["error", { "minScore": 0.95 }],
          "categories:seo": ["error", { "minScore": 0.95 }]
        }
      }
    }
  }
  ```
- **Xong khi:** `npm run verify` xanh trên bản hiện tại (baseline). Chưa xanh → sửa site tới khi xanh, mỗi lỗi ghi vào `docs/findings.md`. Commit `chore: add verification tooling`.

### Phase 4 — CI & preview
- [ ] **P4.1** `.github/workflows/ci.yml`:
  ```yaml
  name: CI
  on: [pull_request]
  jobs:
    verify:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with: { node-version: 24, cache: npm }
        - run: npm ci
        - run: npx playwright install --with-deps chromium
        - run: npm run verify
  ```
- [ ] **P4.2** `.github/pull_request_template.md`:
  ```md
  ## Task
  T-___ (Closes #)
  ## Thay đổi (≤3 dòng)
  ## Bằng chứng
  - [ ] Ảnh trước/sau (desktop + mobile, EN + JP) — kéo thả vào PR
  - [ ] `npm run verify` xanh
  - [ ] Lighthouse: P __ / A __ / BP __ / SEO __
  ## Rủi ro & cách revert
  ```
- [ ] **P4.3** Netlify (miễn phí): kết nối repo, Publish directory = `src`, không build command, bật Deploy Previews.
- [ ] **P4.4** GitHub → Settings → Branches: bảo vệ `main` (bắt buộc PR, bắt buộc CI xanh).
- [ ] **P4.5** Tạo label: `bug` `feature` `design` `content` `a11y` `perf` `needs-human`.
- **Xong khi:** PR thử có CI xanh và link preview.

### Phase 5 — Vòng trong: agent đầu tiên
- [ ] **P5.1** `tasks/_template.md`:
  ```md
  # T-XXX: <tên>
  - Loại: bug | feature | design | content | a11y | perf
  - Mức quyền: L0 | L1 | L2
  ## Mục tiêu (1-2 câu)
  ## Tiêu chí chấp nhận (kiểm chứng được)
  - [ ] ...
  ## Ngoài phạm vi
  ## Files được phép đụng
  ## Bằng chứng cần có
  ```
- [ ] **P5.2** `docs/prompts/inner-loop.md`:
  ```
  Bạn là engineer thực thi 1 task.
  1. Đọc CLAUDE.md §3 và tasks/T-XXX.md. Viết kế hoạch ≤5 dòng. Mức L2 thì chờ mình OK.
  2. Nhánh: agent/T-XXX.
  3. `npm run shot -- T-XXX before`.
  4. Sửa code, chỉ trong phạm vi task.
  5. `npm run verify`, rồi `npm run shot -- T-XXX after`.
  6. Tự chấm từng tiêu chí: PASS/FAIL + bằng chứng. FAIL → quay lại bước 4.
  7. Soạn mô tả PR theo template.
  Cấm: thêm dependency, hardcode màu/spacing, sửa ngoài phạm vi, bỏ qua test.
  ```
- [ ] **P5.3** Viết `tasks/T-001.md` thật (gợi ý: "Section Skills hiển thị đúng ở 375px, không tràn ngang"). Chạy trọn quy trình bằng `inner-loop.md`.
- [ ] **P5.4** Tạo `docs/interventions.md`; mỗi lần Thanh phải sửa tay / giải thích lại thì ghi: ngày | việc phải can thiệp | nên biến thành (lint/test/tool/quy ước).
- **Xong khi:** 1 PR được merge, có bằng chứng, `interventions.md` có ít nhất 1 dòng (hoặc ghi "không cần can thiệp").

### Phase 6 — Vòng ngoài: Intake, Reviewer, Tracker
- [ ] **P6.1** `.github/ISSUE_TEMPLATE/bug.yml` và `feature.yml` (trường: mô tả, bước tái hiện, mong đợi, thực tế, trình duyệt/thiết bị, ảnh).
- [ ] **P6.2** `docs/prompts/intake.md`: đọc issue mới → phân loại (label), tìm trùng, gắn bối cảnh (file liên quan), tạo `tasks/T-xxx.md` theo template, đề xuất mức quyền.
- [ ] **P6.3** `docs/prompts/reviewer.md`: phiên RIÊNG, chỉ nhận diff + bằng chứng + task. Checklist: đạt tiêu chí? vi phạm §3? có đường tắt/hack? có ảnh hưởng JP layout? Trả `PASS` hoặc `FAIL` + lý do.
- [ ] **P6.4** `docs/findings.md`: mỗi phát hiện 1 dòng: ngày | triệu chứng | nghi nguyên nhân | task liên quan. Lịch: 3–4 ngày/lần đọc lại, gom nguyên nhân gốc chung, tạo 1 task sửa tận gốc.
- [ ] **P6.5** `docs/prompts/tracker.md`: báo cáo ngắn mỗi ngày vào `docs/daily/YYYY-MM-DD.md` (đang làm / kẹt / đã merge / token đã dùng nếu biết).
- **Xong khi:** 3 task đi hết chuỗi Intake → Inner → Reviewer → Merge.

### Phase 7 — Debug & hồi quy
- [ ] **P7.1** `docs/debug-protocol.md`:
  1. Tái hiện trước: viết test Playwright FAIL (`tests/e2e/regression-<id>.spec.js`).
  2. Sửa. Chạy lại đúng test đó → PASS. Test ở lại vĩnh viễn.
  3. Ghi `findings.md`. Không vá từng cái nếu nhiều lỗi cùng gốc.
  4. Lỗi lặp lần 2 → thêm lint rule/test/tool, ghi `interventions.md`.
- [ ] **P7.2** Thực hành 1 bug thật hoặc cố ý (ví dụ thiếu key JP) đi hết giao thức.
- **Xong khi:** có ≥1 test hồi quy trong repo do chính giao thức này sinh ra.

### Phase 8 — Scout xu hướng
- [ ] **P8.1** `docs/prompts/scout.md`: quét hằng tuần/2 tuần — web.dev, MDN, Chrome Developers blog, CSS-Tricks, Smashing Magazine, Qiita/Zenn (xu hướng JP). Ghi `docs/trends/YYYY-MM-DD.md`, mỗi mục: tính năng | lợi ích | rủi ro | công sức | cần đo gì.
- [ ] **P8.2** Thanh chọn 1–2 mục → tạo task thử nghiệm trên nhánh riêng, đo LCP/kích thước trước-sau, có số liệu mới đề xuất merge.
- [ ] **P8.3** Mục được chấp nhận → thêm vào CLAUDE.md §3. Gu thẩm mỹ do Thanh quyết, Scout chỉ cấp nguyên liệu.
- **Xong khi:** 1 xu hướng đi từ Scout → thử nghiệm → có số đo → quyết định.

### Phase 9 — Mở rộng quyền & lấy mẫu
- [ ] **P9.1** Ma trận quyền (ghi vào CLAUDE.md khi áp dụng):
  - **L0** tự merge sau CI xanh: copy, i18n, style nhỏ, test, docs.
  - **L1** merge sau Reviewer PASS: component mới, refactor JS nhỏ.
  - **L2** Thanh duyệt: dependency, CI, tokens, cấu hình tooling, cấu trúc thư mục.
  - **L3** agent cấm: secrets, domain/DNS, force-push, xóa nhánh `main`.
- [ ] **P9.2** Lấy mẫu sau merge (~20% PR): soi đường tắt, hack tạm, code trùng, né quy ước. Thấy lỗi lặp → sửa hệ thống sinh ra nó.
- [ ] **P9.3** Retro hằng tháng: lấy top 3 dòng của `interventions.md` → biến thành lint rule/tool/quy ước.
- **Xong khi:** ≥70% PR nhỏ merge không cần Thanh đọc trước, và chất lượng lấy mẫu không tụt.

### Phase 10 — Hoàn thiện 100%
- [ ] **P10.1** Lighthouse mobile: Performance ≥90, Accessibility 100, Best Practices ≥95, SEO ≥95. Axe 0 lỗi (EN + JP).
- [ ] **P10.2** i18n khớp 100%; đọc lại bản JP (câu chữ lịch sự, thuật ngữ đúng chuẩn IT Nhật).
- [ ] **P10.3** Không còn `TODO`/placeholder: `Get-ChildItem src -Recurse -File | Select-String -Pattern "TODO|placeholder"` không ra kết quả.
- [ ] **P10.4** `README.md` song ngữ cho repo portfolio (mô tả, stack, cách chạy, ảnh chụp).
- [ ] **P10.5** Repo AnimeSky Shop có README chuẩn; ghim các repo tốt nhất trên GitHub.
- [ ] **P10.6** Tạo repo `<username>/<username>` với Profile README song ngữ (EN/JP).
- [ ] **P10.7** CV (PDF) link thật trong site; demo link live (Netlify production).
- [ ] **P10.8** Tag `v1.0.0`, ghi `PROGRESS.md`: "HOÀN THÀNH".

## 6. Mỗi phiên làm việc
**Đầu phiên:** đọc CLAUDE.md + PROGRESS.md → tóm tắt ≤5 dòng (phase, bước tiếp, việc dở, blocker) → chờ Thanh xác nhận.
**Trong phiên:** 1 bước nhỏ, nêu rõ: file nào, đường dẫn nào, nội dung gì, lệnh gì, bằng chứng cần dán lại. Mâu thuẫn hoặc thiếu thông tin → hỏi, không đoán.
**Cuối phiên:** xuất `PROGRESS.md` cập nhật đầy đủ + 1 dòng `git commit -m "..."`.
