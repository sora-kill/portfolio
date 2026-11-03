# PROGRESS.md — Trạng thái sống (cập nhật cuối MỖI phiên)

- Cập nhật lần cuối: 2026-11-03
- Chế độ vận hành: A (Chat)

## Vị trí hiện tại
- Phase: 1 (đưa site vào cấu trúc)
- Bước đang làm: P1.4b XONG. Chưa bắt đầu bước mới.
- Bước kế tiếp: P1.4c — About (xem "Việc đầu tiên của phiên sau").

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

## Đang dở (kiểm tra ở đầu phiên sau)
- Favicon: Console báo `favicon.ico` 404. Làm ở P1.6 (ảnh hưởng Lighthouse Best Practices).
- Ngắt dòng JP dùng `word-break: auto-phrase`: Chrome/Edge hỗ trợ; Safari/Firefox có thể chưa. Kiểm ở P1.7, quyết định có cần đánh dấu cụm từ trong `ja.json` không.
- Header dính ở đầu trang (mobile 375px che dòng đầu khi bấm anchor): cần `scroll-margin-top` cho từng section. Giá trị phụ thuộc chiều cao header, chưa có token (xem câu hỏi mở).

## Blocker / câu hỏi mở
- Cần quyết định cách khai báo `scroll-margin-top` mà không hardcode: thêm token `--header-height` vào `tokens.css` (đụng tokens, cần Thanh duyệt) hay cách khác. Hỏi ở P1.4c.
- Nội dung thật cho các section sau hỏi khi viết: About, AI Workflow, Projects, Skills, email, link GitHub, CV, mô tả dự án.

## Quyết định đã chốt (không bàn lại)
- Tài khoản GitHub chính: sora-kill.
- Repo là portfolio cá nhân (phương án A), một trang, song ngữ EN/JP. Bản mira cũ còn ở commit `ddb59be`.
- Tên hiển thị: ThanhDN (brand ở Header). `meta.title`/`meta.description` EN/JP: định vị lập trình viên frontend làm việc với vibe coding + AI Agent (bản đang dùng trong `en.json`/`ja.json`, có thể chỉnh).
- Hero (đã chốt 2026-11-03): bỏ câu nêu quốc tịch/việc học ở Nhật và bỏ dòng trạng thái "Open to frontend roles". Phần giới thiệu chỉ còn 1 câu về vibe coding + AI agent. Vai trò, h1, 2 CTA giữ nguyên bản nháp. Khóa: `hero.role`, `hero.title`, `hero.intro`, `hero.ctaPrimary`, `hero.ctaSecondary`. BEM: `hero`, `hero__inner/role/title/intro/actions/cta`, `hero__cta--primary/--secondary`.
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
- Trước Phase 3 chưa có `npm run verify`: bằng chứng Phase 1 là thủ công (Console, ảnh EN/JP desktop + mobile, lệnh `Select-String` kiểm quy ước).

## Trạng thái kiểm chứng gần nhất
- `npm run verify`: chưa chạy (chưa tồn tại)
- Lighthouse (P/A/BP/SEO): -
- Task đang mở: -

## Tóm tắt phiên gần nhất (≤5 dòng)
- Chốt nội dung Hero (bỏ 2 mục), viết `hero.css`, khóa `hero.*` EN/JP và section Hero.
- Ảnh JP lần 1 bị ngắt dòng giữa cụm từ; sửa bằng `word-break: auto-phrase`, ảnh JP lần 2 đạt.
- Commit `feat: add hero section`; PROGRESS + CLAUDE.md §5 đã đồng bộ.
- Chưa viết code P1.4c.

## Việc đầu tiên của phiên sau
- P1.4c: About. Bước 1: hỏi Thanh nội dung thật của About (không đoán) và chốt câu hỏi mở về `scroll-margin-top`/`--header-height`. Bước 2 (sau khi duyệt): tạo `src/css/about.css` (BEM `about`, chỉ dùng token), thêm khóa `about.*` vào `en.json` và `ja.json`, thêm `<section class="about" id="about">` trong `<main>` sau Hero, link `about.css` sau `hero.css`. Bằng chứng: ảnh EN/JP × 1440/375, Console không lỗi (trừ favicon), `Select-String` hex/`style=`/`!important` không in gì, commit.
- Sau About: AI Workflow, Projects, Skills, Contact (mỗi cái một bước), rồi P1.6 favicon, P1.7 rà cuối.

## Ghi chú cho docs/interventions.md (P5.4)
- PowerShell chặn `npm.ps1`: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.
- `npm init -y` thêm `"type": "commonjs"` gây trùng khóa với `"type": "module"`.
- Live Server báo `favicon.ico` 404 khi site chưa có favicon.
- Console báo CSP chặn `eval` và `Range.expand()` deprecated (`contentScript.js`): do extension trình duyệt; cửa sổ ẩn danh báo No Issues.
- Thiếu rule `body` trong `style.css`: trang hiện nền trắng và margin 8px quanh header. Đã sửa ở `e8a238e`.
- Agent viết `header.css` trước khi thấy `tokens.css` nên hardcode font-weight. Bài học: dán danh sách token trước khi viết CSS (đã ghi danh sách token ở "Quyết định đã chốt").
- `hero.css` bản đầu chưa xử lý ngắt dòng JP: trình duyệt ngắt giữa cụm từ (`一歩ず/つ`, `Web/UI`). Sửa bằng `word-break: auto-phrase`. Bài học: ảnh JP ở mọi section phải kiểm riêng; section mới có chữ JP dài thì thêm quy tắc này ngay từ đầu.
