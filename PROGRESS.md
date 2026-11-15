# PROGRESS.md — Trạng thái sống (cập nhật cuối MỖI phiên)

- Cập nhật lần cuối: 2026-11-15
- Chế độ vận hành: A (Chat)

## Vị trí hiện tại
- Phase: 1 (đưa site vào cấu trúc)
- Bước đang làm: P1.6b XONG. Chưa bắt đầu bước mới.
- Bước kế tiếp: P1.7 — Rà cuối Phase 1.

## Đã xong (kèm bằng chứng)
- P0.1–P0.6: repo `https://github.com/sora-kill/portfolio`, `main` đã push.
- P1.1: site nằm trong `src/`; `package.json` chỉ còn `"type": "module"`. Commit `05bb4ce`, `ddb59be`.
- P1.1b: bỏ nội dung mira, `src/` chỉ còn khung. Commit `a3e6aff`.
- P1.2: `src/css/tokens.css` (vàng/đen, Roboto, spacing, radius, shadow). Commit `effe593`.
- P1.2b: nạp Roboto + Noto Sans JP qua Google Fonts CDN trong `index.html`. Commit `e951db0`.
- P1.4a: nền tảng i18n + Header. Commit `0a3de4c`, `e8a238e` (fix: base styles + dùng token trong header); `7c18ae6` (docs: PROGRESS + đồng bộ roadmap).
  - Bằng chứng: ảnh EN/JP × 1440/375 đúng; Network `en.json`, `ja.json` 200; `lang` lưu qua F5; ẩn danh không có Issues; `Select-String` hex/`style=`/`!important` không in gì.
- P1.4b: Hero. `src/css/hero.css`, khóa `hero.*` trong `en.json`/`ja.json`, `<main>` + section Hero trong `index.html`. Commit `feat: add hero section` (xem `git log`).
  - Bằng chứng: ảnh EN/JP × 1440/375 đúng (JP đúng sau khi thêm `word-break: auto-phrase`); Network `en.json`, `ja.json` 200; Console chỉ có `favicon.ico` 404; `Select-String` hex/`!important`/`style=` không in gì.
- P1.4c: About. `src/css/about.css`, khóa `about.*` trong `en.json`/`ja.json`, section About trong `index.html` (sau Hero), link `about.css` sau `hero.css`. Commit `feat: add about section` (xem `git log`).
  - Bằng chứng: ảnh EN/JP × 1440/375 đúng (JP ngắt dòng đạt ngay lần 1 nhờ `word-break: auto-phrase` đặt từ đầu); Network `en.json`, `ja.json` 200; Console chỉ có `favicon.ico` 404; `Select-String` `!important`/`style=` không in gì, hex chỉ nằm trong `tokens.css` (được phép).
- P1.4d: AI Workflow. `src/css/workflow.css`, khóa `workflow.*` (20 khóa) trong `en.json`/`ja.json`, section AI Workflow trong `index.html` (sau About), link `workflow.css` sau `about.css`. Commit `2912632` `feat: add AI workflow section`.
  - Bằng chứng (kiểm bằng Playwright MCP, 2026-11-09): ảnh EN/JP × 1440/375 đúng (1440px lưới 2×4, 375px 1 cột, không tràn ngang); `workflow.css` và `en.json` 200, `ja.json` parse được; khóa `workflow.*` EN/JP khớp 100%; trên `workflow.css` không hex/`!important`, trang không có `style=`, class đều đúng BEM; lần tải sạch Console 0 lỗi.
- P1.4e: Projects. `src/css/projects.css`, khóa `projects.*` (4 khóa) trong `en.json`/`ja.json`, section Projects trong `index.html` (sau AI Workflow), link `projects.css` sau `workflow.css`. Commit `277c835` `feat: add projects section`.
  - Bằng chứng (Playwright MCP, không chụp ảnh, 2026-11-10): EN/JP × 1440/375 đúng số liệu (1440px lưới 2 cột 504px, 375px 1 cột 328px, không tràn ngang, tiêu đề 1 dòng); nhãn EN "In development", JP 開発中; khóa `projects.*` EN/JP khớp; `projects.css` không hex/`!important`, trang không có `style=`, class đúng BEM; Console chỉ có `favicon.ico` 404. Thanh đã chạy bộ lệnh `Select-String`/JSON/`Compare-Object` quét toàn bộ `src/css`: đều trống/đạt. Chưa xem ảnh thật của viền nét đứt, độ tương phản thẻ/nền, nhãn trạng thái.
  - P1.4f: Skills. `src/css/skills.css`, khóa `skills.*` (5 khóa) trong `en.json`/`ja.json`, section Skills trong `index.html` (sau Projects), link `skills.css` sau `projects.css`. Commit `feat: add skills section` (xem `git log`).
  - Bằng chứng (ảnh Thanh chụp, 2026-11-11): EN/JP × 1440/375 đúng (chip HTML, CSS, VS Code, Git, không tràn ngang); tiêu đề khớp Projects sau khi thêm `@media (min-width: 48rem)` cỡ `--font-size-3xl`; 7 lệnh kiểm quy ước trống/đạt; Console chỉ còn cảnh báo từ extension.
  - P1.4g: Contact. `src/css/contact.css`, khóa `contact.*` (3 khóa) trong `en.json`/`ja.json`, section Contact trong `index.html` (sau Skills), link `contact.css` sau `skills.css`. Commit `feat: add contact section` (xem `git log`).
  - Bằng chứng (ảnh Thanh chụp, 2026-11-11): EN/JP × 1440/375 đúng, không tràn ngang; 2 liên kết hoạt động (mailto, GitHub mở tab mới); Console sạch (trừ cảnh báo extension); lệnh kiểm quy ước trống/đạt. Lỗi vùng bấm kéo hết chiều ngang đã sửa bằng `align-items: flex-start` ở `.contact__item`.
  - P1.6: Favicon. `src/favicon.svg` (nền vàng, chữ T đen), khai báo `<link rel="icon" href="favicon.svg" type="image/svg+xml">` trong `src/index.html`. Commit `feat: add favicon`.
  - Bằng chứng (2026-11-15): màu SVG khớp `tokens.css` (`--color-accent` #ffd400, `--color-on-accent` #111111); Console và Network ổn (cửa sổ ẩn danh); ảnh tab hiện icon; `Select-String` `style=` trống.
  - P1.6b: Chừa khoảng cuộn dưới header dính. Token `--header-height` trong `src/css/tokens.css` (<768px: `calc(var(--space-2) * 3 + 88px + 1px)`; ≥768px: `calc(var(--space-2) * 2 + 44px + 1px)`) và `html { scroll-padding-top: var(--header-height); }` ở đầu `src/css/header.css`. Commit `fix: offset anchor targets below sticky header`.
  - Bằng chứng (2026-11-15): header đo được 60.8px (≥768px) và 112.8px (<768px), EN = JP; `scroll-padding-top` tính ra 61px / 113px; ảnh trước/sau ở 375px (tiêu đề Projects từ bị che sang hiện đủ), 375px bấm Contact, 1440px bấm Projects: tiêu đề không bị che; 3 lệnh kiểm quy ước trống.

## Đang dở (kiểm tra ở đầu phiên sau)
- Favicon mới chỉ có SVG; chưa có ICO và `apple-touch-icon`. Kiểm trên Safari ở P1.7; thêm ICO/apple-touch-icon khi thật sự cần.
- Ngắt dòng JP dùng `word-break: auto-phrase`: Chrome/Edge hỗ trợ; Safari/Firefox có thể chưa. Kiểm ở P1.7, quyết định có cần đánh dấu cụm từ trong `ja.json` không.
- Câu intro AI Workflow bản JP ở 1440px có dòng cuối chỉ còn "設計します。" (`max-width: 60ch`). Thanh chọn giữ nguyên (2026-11-09).
- Xem bằng mắt (ảnh thật EN/JP × 1440/375) phần Projects: thẻ nét đứt, nhãn trạng thái. Làm ở P1.7.

## Blocker / câu hỏi mở
- Link repo/lịch sử commit làm bằng chứng cho AI Workflow: hoãn tới khi có link (Thanh chốt 2026-11-09); thêm sau thành bước riêng.
- Nội dung thật còn thiếu: Projects (mô tả, công nghệ, link) và nút CV (file PDF, khớp P10.7). Thêm thành bước riêng khi có.

## Quyết định đã chốt (không bàn lại)
- Tài khoản GitHub chính: sora-kill.
- Repo là portfolio cá nhân (phương án A), một trang, song ngữ EN/JP. Bản mira cũ còn ở commit `ddb59be`.
- Tên hiển thị: ThanhDN (brand ở Header). `meta.title`/`meta.description` EN/JP: định vị lập trình viên frontend làm việc với vibe coding + AI Agent (bản đang dùng trong `en.json`/`ja.json`, có thể chỉnh).
- Hero (đã chốt 2026-11-03): bỏ câu nêu quốc tịch/việc học ở Nhật và bỏ dòng trạng thái "Open to frontend roles". Phần giới thiệu chỉ còn 1 câu về vibe coding + AI agent. Vai trò, h1, 2 CTA giữ nguyên bản nháp. Khóa: `hero.role`, `hero.title`, `hero.intro`, `hero.ctaPrimary`, `hero.ctaSecondary`. BEM: `hero`, `hero__inner/role/title/intro/actions/cta`, `hero__cta--primary/--secondary`.
- About (đã chốt 2026-11-06): nội dung do Thanh tự viết (4 đoạn: quan hệ người–AI, AI là hệ thống tự chủ chứ không chỉ công cụ, tinh thần thử nghiệm, AI là mô hình giải quyết vấn đề mới), giữ nguyên, không thêm câu cụ thể. Bản JP dùng văn phong です・ます, tiêu đề 自己紹介. Khóa: `about.title`, `about.p1`–`about.p4`. BEM: `about`, `about__inner/title/text`. Nền `--color-surface` (xen kẽ với Hero dùng `--color-bg`).
- AI Workflow (đã chốt 2026-11-09): nội dung do Thanh cung cấp: 1 câu giới thiệu, 8 nguyên tắc (Clear Objectives, Task Decomposition, Structured I/O, Quality Control, Error Handling, Observability, Resource Optimization, Scalability) trình bày bằng card, và 1 câu triết lý cuối ("Core Philosophy"). Bản JP là bản đề xuất, tiêu đề AIワークフロー, nhãn 基本理念. Lưới 2×4 từ 48rem, 1 cột dưới đó. Khóa: `workflow.title`, `workflow.intro`, `workflow.<id>Title`/`<id>Text` với id = `objectives`, `decomposition`, `io`, `quality`, `errors`, `observability`, `resources`, `scalability`, và `workflow.philosophyLabel`, `workflow.philosophy`. BEM: `workflow`, `workflow__inner/title/intro/grid/card/card-title/card-text/philosophy/philosophy-label/quote`. Nền `--color-bg`, card `--color-surface` với viền trên `--color-accent`. Phần bằng chứng (CLAUDE.md + PROGRESS.md, link repo/commit) hoãn tới khi có link.
- Projects (đã chốt 2026-11-10): chưa có dự án hoàn chỉnh, tạm hiển thị 2 thẻ giữ chỗ (AnimeSky Shop, Portfolio) chỉ có tên và nhãn trạng thái "In development"/開発中, viền nét đứt, không mô tả/công nghệ/link. Khi có dự án thật: bổ sung mô tả, công nghệ, link. Khóa: `projects.title`, `projects.animeskyName`, `projects.portfolioName`, `projects.status` (JP: プロジェクト, AnimeSky Shop, ポートフォリオ, 開発中). BEM: `projects`, `projects__inner/title/grid/card/card-title/status`. Nền `--color-surface`, thẻ `--color-bg`, lưới 2 cột từ 48rem.
- Mẫu cho section mới (từ Hero/About/Workflow): `<section class="X" id="..." aria-labelledby="X-title">` + `<h2 class="X__title" id="X-title">`; chữ mặc định EN nằm sẵn trong HTML; `word-break: auto-phrase` cho title/text ngay từ đầu; `max-width: 64rem` cho inner, `60ch` cho đoạn văn; media query `48rem`; khóa i18n phẳng 2 cấp (`section.key`), không lồng sâu hơn.
- Thiết kế kiểu gaming (cảm hứng RedMagic; không dùng logo/ảnh/văn bản của RedMagic): nền `#111111`, accent vàng `#FFD400`, font Roboto + Noto Sans JP fallback. Chữ/nút trên nền vàng dùng `--color-on-accent`. Chữ nhỏ trên nền tối dùng `--color-text`/`--color-text-muted`, không dùng accent cho chữ nhỏ.
- Token có sẵn (`src/css/tokens.css`), CSS chỉ dùng token, không hardcode: màu (`--color-accent`, `-accent-hover`, `-on-accent`, `-bg`, `-surface`, `-surface-raised`, `-border`, `-text`, `-text-muted`, `-bg-light`, `-surface-light`, `-border-light`, `-text-on-light`, `-text-muted-on-light`); `--space-1..8`; `--font-sans`; `--font-weight-regular/medium/bold`; `--font-size-sm/md/lg/xl/2xl/3xl`; `--line-height-tight/base`; `--radius-sm/md/lg/pill`; `--shadow-sm/md/glow`.
- Cấu trúc trang (đã duyệt): Hero → About → AI Workflow → Projects → Skills → Contact. Nav: About, AI Workflow, Projects, Skills, Contact + nút EN/JP. Anchor: `#about`, `#workflow`, `#projects`, `#skills`, `#contact`; `<body id="top">`.
  - AI Workflow là phần nhấn mạnh: vibe coding và làm việc với AI Agent như quy trình có kiểm soát (xem quyết định AI Workflow ở trên).
  - Projects: AnimeSky Shop và chính portfolio này; thêm sau khi dự án lên GitHub.
- i18n: `data-i18n` (text), `data-i18n-label` (aria-label), `data-i18n-content` (meta content). Khóa lồng trong `src/i18n/en.json`/`ja.json`. Nút đổi ngôn ngữ `data-lang-toggle`, lưu `localStorage` key `lang`, mặc định `en`. `<title>` và `<meta name="description">` giữ bản EN tĩnh trong HTML cho SEO, i18n ghi đè khi chạy.
- Mỗi section là một bước riêng (HTML + khóa i18n + CSS BEM, file CSS riêng).
- Header mobile: nav cuộn ngang trong chính nó; menu hamburger hoãn lại (cần JS).
- Stack: HTML/CSS/JS thuần + Node tooling; deploy Netlify; test Playwright; Lighthouse CI. Font qua Google Fonts CDN.
- Môi trường: Windows + PowerShell, Node v24.22.0 (CI dùng Node 24). Live Server để xem site (cần HTTP), URL `http://127.0.0.1:3000/src/index.html`. Playwright MCP đã nối (2026-11-09): Claude có thể mở trang, đổi EN/JP, đổi kích thước, chụp ảnh, đọc Console/Network để kiểm bằng chứng; không dùng tham số `filename` khi chụp (thư mục làm việc của MCP là `C:\Windows\System32`, ghi file bị EPERM).
- `.prettierrc` có `endOfLine: auto`.
- Trước Phase 3 chưa có `npm run verify`: bằng chứng Phase 1 là thủ công (Console, ảnh EN/JP desktop + mobile, lệnh kiểm quy ước). Lệnh kiểm quy ước (PowerShell, kết quả trống là đạt):
  - Hex ngoài tokens: `Get-ChildItem src\css -Filter *.css | Where-Object Name -ne 'tokens.css' | Select-String -Pattern '#[0-9a-fA-F]{3,8}\b'`
  - `Select-String -Path src\css\*.css -Pattern '!important'`
  - `Select-String -Path src\index.html -Pattern 'style='`
  - JSON hợp lệ + khóa khớp: `Get-Content src\i18n\en.json -Raw | ConvertFrom-Json | Out-Null` (tương tự `ja.json`), so khóa bằng `Compare-Object` trên `PSObject.Properties.Name` của khối mới.
  - Skills (đã chốt 2026-11-11): danh sách phẳng 4 chip (HTML, CSS, VS Code, Git), chưa nhóm theo loại, chưa có mức độ; bổ sung sau. Khóa: `skills.title`, `skills.html`, `skills.css`, `skills.vscode`, `skills.git` (JP: スキル, tên công nghệ giữ nguyên). BEM: `skills`, `skills__inner/title/list/item`. Nền `--color-bg`.
  - Contact (đã chốt 2026-11-11): chỉ có tiêu đề + 2 liên kết thật: Email `tdo27999@gmail.com` (`mailto:`) và GitHub `https://github.com/sora-kill` (mở tab mới, `rel="noopener noreferrer"`). Chưa có câu giới thiệu. Nút CV thêm sau thành bước riêng khi có file PDF (khớp P10.7). Địa chỉ email/URL để literal trong HTML, nhãn và tiêu đề qua i18n. Khóa: `contact.title`, `contact.emailLabel`, `contact.githubLabel` (JP: お問い合わせ, メール, GitHub). BEM: `contact`, `contact__inner/title/list/item/label/link`. Nền `--color-surface`.
  - Favicon (đã chốt 2026-11-15): chỉ `src/favicon.svg`, nền `--color-accent`, chữ T `--color-on-accent`. Hex nằm trong SVG vì SVG favicon không đọc được `var(--...)`, nên phải khớp `tokens.css` khi token đổi. Khai báo bằng đường dẫn tương đối (`favicon.svg`, không dùng `/favicon.svg`: Live Server phục vụ từ gốc repo nên sẽ 404). Chưa làm ICO/apple-touch-icon.
  - Khoảng cuộn dưới header dính (đã chốt 2026-11-15): một rule `html { scroll-padding-top: var(--header-height) }` trong `header.css`, không dùng `scroll-margin-top` từng section. `--header-height` viết bằng `calc` theo `--space-2` cộng `44px` và `1px` (khớp `header.css`), đổi giá trị ở ngưỡng `768px` giống `header.css`. Hai nguồn sự thật: đổi chiều cao header thì phải đổi token. Đề xuất (chưa duyệt): Phase 3 thêm test Playwright so sánh chiều cao header với `scroll-padding-top`.

## Trạng thái kiểm chứng gần nhất
- `npm run verify`: chưa chạy (chưa tồn tại)
- Lighthouse (P/A/BP/SEO): -
- Task đang mở: -

## Tóm tắt phiên gần nhất (≤5 dòng)
- P1.6 Favicon xong (`feat: add favicon`): chỉ SVG, ICO/apple-touch-icon hoãn.
- P1.6b xong (`fix: offset anchor targets below sticky header`): `--header-height` + `scroll-padding-top` trên `html`.
- Đo thật: header 60.8px / 112.8px, EN = JP; ảnh trước/sau xác nhận tiêu đề không bị che.
- Blocker `--header-height` đã gỡ; link repo/commit AI Workflow vẫn hoãn.

## Việc đầu tiên của phiên sau
- P1.7 rà cuối Phase 1 (gồm kiểm favicon và `auto-phrase` trên Safari/Firefox, xem ảnh thật Projects). Sau đó: nội dung Projects thật, bằng chứng AI Workflow, nút CV (P10.7).


## Ghi chú cho docs/interventions.md (P5.4)
- PowerShell chặn `npm.ps1`: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.
- `npm init -y` thêm `"type": "commonjs"` gây trùng khóa với `"type": "module"`.
- Live Server báo `favicon.ico` 404 khi site chưa có favicon.
- Console báo CSP chặn `eval` và `Range.expand()` deprecated (`contentScript.js`): do extension trình duyệt; cửa sổ ẩn danh báo No Issues.
- Thiếu rule `body` trong `style.css`: trang hiện nền trắng và margin 8px quanh header. Đã sửa ở `e8a238e`.
- Agent viết `header.css` trước khi thấy `tokens.css` nên hardcode font-weight. Bài học: dán danh sách token trước khi viết CSS (đã ghi danh sách token ở "Quyết định đã chốt").
- `hero.css` bản đầu chưa xử lý ngắt dòng JP: trình duyệt ngắt giữa cụm từ (`一歩ず/つ`, `Web/UI`). Sửa bằng `word-break: auto-phrase`. Bài học: ảnh JP ở mọi section phải kiểm riêng; section mới có chữ JP dài thì thêm quy tắc này ngay từ đầu (đã áp dụng ở `about.css` và `workflow.css`, ảnh JP đạt lần 1).
- `Select-String ... -Exclude tokens.css` không loại `tokens.css` (vẫn in các dòng hex của file đó), gây nhầm là có vi phạm. Dùng `Get-ChildItem src\css -Filter *.css | Where-Object Name -ne 'tokens.css' | Select-String ...`.
- Ảnh JP mobile có popup nổi "複雑": nhiều khả năng là tiện ích từ điển/dịch của trình duyệt, không phải code site. Chụp ảnh bằng cửa sổ ẩn danh để tránh.
- Live Server tải lại trang khi đang gõ dở (`<link href="about.cs">`, JSON chưa đóng) gây 404 và lỗi JSON parse tạm trong Console. Đọc Console sau khi tải lại trang sạch, không đọc log tích lũy cả phiên.
- Playwright MCP chạy với thư mục làm việc `C:\Windows\System32`: `browser_take_screenshot` có `filename` bị EPERM. Bỏ `filename`, ảnh lưu ở thư mục Temp của MCP. Ảnh chụp element bị header dính che dòng đầu: chụp full-page hoặc cuộn trước nếu cần ảnh bằng chứng đẹp.
- `skills.css` bản đầu thiếu `@media (min-width: 48rem)` cho tiêu đề nên nhỏ hơn Projects ở 1440px. Bài học: dán cả `@media` của section mẫu khi viết section mới. Nếu lặp lại lần 2, thêm vào mẫu section hoặc stylelint.
- `.contact__item` flex cột mặc định `align-items: stretch` làm thẻ `<a>` giãn hết chiều ngang (vùng bấm và viền focus quá rộng). Sửa bằng `align-items: flex-start`. Bài học: khi item flex cột chứa link/nút, đặt `align-items` ngay từ đầu.

## Mẫu cho section mới
- @media (min-width: 48rem) đặt font-size: var(--font-size-3xl) cho X__title.
