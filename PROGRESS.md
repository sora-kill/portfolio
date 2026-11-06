# PROGRESS.md — Trạng thái sống (cập nhật cuối MỖI phiên)

- Cập nhật lần cuối: 2026-11-06
- Chế độ vận hành: A (Chat)

## Vị trí hiện tại
- Phase: 1 (đưa site vào cấu trúc)
- Bước đang làm: P1.4c XONG. Chưa bắt đầu bước mới.
- Bước kế tiếp: P1.4d — AI Workflow (xem "Việc đầu tiên của phiên sau").

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

## Đang dở (kiểm tra ở đầu phiên sau)
- Favicon: Console báo `favicon.ico` 404. Làm ở P1.6 (ảnh hưởng Lighthouse Best Practices).
- Ngắt dòng JP dùng `word-break: auto-phrase`: Chrome/Edge hỗ trợ; Safari/Firefox có thể chưa. Kiểm ở P1.7, quyết định có cần đánh dấu cụm từ trong `ja.json` không.
- Header dính ở đầu trang (mobile 375px che dòng đầu khi bấm anchor): cần `scroll-margin-top` cho từng section. Giá trị phụ thuộc chiều cao header, chưa có token. Đã hoãn (xem blocker).

## Blocker / câu hỏi mở
- `scroll-margin-top` mà không hardcode: Thanh chọn chưa đụng `tokens.css` (2026-11-06), hoãn tới khi xong các section, hỏi lại trước P1.7. Đề xuất vẫn là token `--header-height` (cần Thanh duyệt); header cao khác nhau giữa desktop (1 hàng) và mobile (2 hàng) nên token cần 2 giá trị theo media query, đo bằng DevTools.
- Nội dung thật cho các section sau hỏi khi viết: AI Workflow, Projects, Skills, email, link GitHub, CV, mô tả dự án.

## Quyết định đã chốt (không bàn lại)
- Tài khoản GitHub chính: sora-kill.
- Repo là portfolio cá nhân (phương án A), một trang, song ngữ EN/JP. Bản mira cũ còn ở commit `ddb59be`.
- Tên hiển thị: ThanhDN (brand ở Header). `meta.title`/`meta.description` EN/JP: định vị lập trình viên frontend làm việc với vibe coding + AI Agent (bản đang dùng trong `en.json`/`ja.json`, có thể chỉnh).
- Hero (đã chốt 2026-11-03): bỏ câu nêu quốc tịch/việc học ở Nhật và bỏ dòng trạng thái "Open to frontend roles". Phần giới thiệu chỉ còn 1 câu về vibe coding + AI agent. Vai trò, h1, 2 CTA giữ nguyên bản nháp. Khóa: `hero.role`, `hero.title`, `hero.intro`, `hero.ctaPrimary`, `hero.ctaSecondary`. BEM: `hero`, `hero__inner/role/title/intro/actions/cta`, `hero__cta--primary/--secondary`.
- About (đã chốt 2026-11-06): nội dung do Thanh tự viết (4 đoạn: quan hệ người–AI, AI là hệ thống tự chủ chứ không chỉ công cụ, tinh thần thử nghiệm, AI là mô hình giải quyết vấn đề mới), giữ nguyên, không thêm câu cụ thể. Bản JP dùng văn phong です・ます, tiêu đề 自己紹介. Khóa: `about.title`, `about.p1`–`about.p4`. BEM: `about`, `about__inner/title/text`. Nền `--color-surface` (xen kẽ với Hero dùng `--color-bg`).
- Mẫu cho section mới (từ Hero/About): `<section class="X" id="..." aria-labelledby="X-title">` + `<h2 class="X__title" id="X-title">`; chữ mặc định EN nằm sẵn trong HTML; `word-break: auto-phrase` cho title/text ngay từ đầu; `max-width: 64rem` cho inner, `60ch` cho đoạn văn; media query `48rem`.
- Thiết kế kiểu gaming (cảm hứng RedMagic; không dùng logo/ảnh/văn bản của RedMagic): nền `#111111`, accent vàng `#FFD400`, font Roboto + Noto Sans JP fallback. Chữ/nút trên nền vàng dùng `--color-on-accent`. Chữ nhỏ trên nền tối dùng `--color-text`/`--color-text-muted`, không dùng accent cho chữ nhỏ.
- Token có sẵn (`src/css/tokens.css`), CSS chỉ dùng token, không hardcode: màu (`--color-accent`, `-accent-hover`, `-on-accent`, `-bg`, `-surface`, `-surface-raised`, `-border`, `-text`, `-text-muted`, `-bg-light`, `-surface-light`, `-border-light`, `-text-on-light`, `-text-muted-on-light`); `--space-1..8`; `--font-sans`; `--font-weight-regular/medium/bold`; `--font-size-sm/md/lg/xl/2xl/3xl`; `--line-height-tight/base`; `--radius-sm/md/lg/pill`; `--shadow-sm/md/glow`.
- Cấu trúc trang (đã duyệt): Hero → About → AI Workflow → Projects → Skills → Contact. Nav: About, AI Workflow, Projects, Skills, Contact + nút EN/JP. Anchor: `#about`, `#workflow`, `#projects`, `#skills`, `#contact`; `<body id="top">`.
  - AI Workflow là phần nhấn mạnh: vibe coding và làm việc với AI Agent như quy trình có kiểm soát (CLAUDE.md + PROGRESS.md, từng bước nhỏ có bằng chứng, người quyết định thiết kế/duyệt thay đổi, link tới repo và lịch sử commit làm bằng chứng).
  - Projects: AnimeSky Shop và chính portfolio này; thêm sau khi dự án lên GitHub.
- i18n: `data-i18n` (text), `data-i18n-label` (aria-label), `data-i18n-content` (meta content). Khóa lồng trong `src/i18n/en.json`/`ja.json`. Nút đổi ngôn ngữ `data-lang-toggle`, lưu `localStorage` key `lang`, mặc định `en`. `<title>` và `<meta name="description">` giữ bản EN tĩnh trong HTML cho SEO, i18n ghi đè khi chạy.
- Mỗi section là một bước riêng (HTML + khóa i18n + CSS BEM, file CSS riêng).
- Header mobile: nav cuộn ngang trong chính nó; menu hamburger hoãn lại (cần JS).
- Stack: HTML/CSS/JS thuần + Node tooling; deploy Netlify; test Playwright; Lighthouse CI. Font qua Google Fonts CDN.
- Môi trường: Windows + PowerShell, Node v24.22.0 (CI dùng Node 24). Live Server để xem site (cần HTTP).
- `.prettierrc` có `endOfLine: auto`.
- Trước Phase 3 chưa có `npm run verify`: bằng chứng Phase 1 là thủ công (Console, ảnh EN/JP desktop + mobile, lệnh kiểm quy ước). Lệnh kiểm quy ước (PowerShell, kết quả trống là đạt):
  - Hex ngoài tokens: `Get-ChildItem src\css -Filter *.css | Where-Object Name -ne 'tokens.css' | Select-String -Pattern '#[0-9a-fA-F]{3,8}\b'`
  - `Select-String -Path src\css\*.css -Pattern '!important'`
  - `Select-String -Path src\index.html -Pattern 'style='`
  - JSON hợp lệ + khóa khớp: `Get-Content src\i18n\en.json -Raw | ConvertFrom-Json | Out-Null` (tương tự `ja.json`), so khóa bằng `Compare-Object` trên `PSObject.Properties.Name` của khối mới.

## Trạng thái kiểm chứng gần nhất
- `npm run verify`: chưa chạy (chưa tồn tại)
- Lighthouse (P/A/BP/SEO): -
- Task đang mở: -

## Tóm tắt phiên gần nhất (≤5 dòng)
- Nhận nội dung About do Thanh tự viết, giữ nguyên; dùng bản dịch JP đề xuất.
- Viết `about.css`, khóa `about.*` EN/JP, section About; `word-break: auto-phrase` đặt từ đầu nên ảnh JP đạt ngay.
- Lệnh `Select-String -Exclude tokens.css` không loại được `tokens.css`; đã đổi sang `Where-Object Name -ne`.
- Hoãn `--header-height`; `tokens.css` không đổi.
- Commit `feat: add about section`; PROGRESS + CLAUDE.md §5 đã đồng bộ.

## Việc đầu tiên của phiên sau
- P1.4d: AI Workflow. Bước 1: hỏi Thanh nội dung thật (quy trình làm việc với AI agent: các bước, vai trò người/AI, bằng chứng, link repo/commit; không đoán). Bước 2 (sau khi duyệt): tạo `src/css/workflow.css` (BEM `workflow`, chỉ dùng token, có `word-break: auto-phrase` ngay từ đầu), thêm khóa `workflow.*` vào `en.json` và `ja.json`, thêm `<section class="workflow" id="workflow">` trong `<main>` sau About, link `workflow.css` sau `about.css`. Bằng chứng: ảnh EN/JP × 1440/375, Console không lỗi (trừ favicon), các lệnh kiểm quy ước ở trên trống, commit.
- Sau AI Workflow: Projects, Skills, Contact (mỗi cái một bước), rồi chốt `scroll-margin-top`, P1.6 favicon, P1.7 rà cuối.

## Ghi chú cho docs/interventions.md (P5.4)
- PowerShell chặn `npm.ps1`: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.
- `npm init -y` thêm `"type": "commonjs"` gây trùng khóa với `"type": "module"`.
- Live Server báo `favicon.ico` 404 khi site chưa có favicon.
- Console báo CSP chặn `eval` và `Range.expand()` deprecated (`contentScript.js`): do extension trình duyệt; cửa sổ ẩn danh báo No Issues.
- Thiếu rule `body` trong `style.css`: trang hiện nền trắng và margin 8px quanh header. Đã sửa ở `e8a238e`.
- Agent viết `header.css` trước khi thấy `tokens.css` nên hardcode font-weight. Bài học: dán danh sách token trước khi viết CSS (đã ghi danh sách token ở "Quyết định đã chốt").
- `hero.css` bản đầu chưa xử lý ngắt dòng JP: trình duyệt ngắt giữa cụm từ (`一歩ず/つ`, `Web/UI`). Sửa bằng `word-break: auto-phrase`. Bài học: ảnh JP ở mọi section phải kiểm riêng; section mới có chữ JP dài thì thêm quy tắc này ngay từ đầu (đã áp dụng ở `about.css`, ảnh JP đạt lần 1).
- `Select-String ... -Exclude tokens.css` không loại `tokens.css` (vẫn in các dòng hex của file đó), gây nhầm là có vi phạm. Dùng `Get-ChildItem src\css -Filter *.css | Where-Object Name -ne 'tokens.css' | Select-String ...`.
- Ảnh JP mobile có popup nổi "複雑": nhiều khả năng là tiện ích từ điển/dịch của trình duyệt, không phải code site. Chụp ảnh bằng cửa sổ ẩn danh để tránh.
