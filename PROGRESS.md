# PROGRESS.md — Trạng thái sống (cập nhật cuối MỖI phiên)

- Cập nhật lần cuối: 2026-10-29
- Chế độ vận hành: A (Chat)

## Vị trí hiện tại
- Phase: 1 (đưa site vào cấu trúc)
- Bước đang làm: P1.2 XONG. Chưa bắt đầu bước mới.
- Bước kế tiếp: nạp font (Roboto + Noto Sans JP), rồi viết HTML/CSS/nội dung mới.

## Đã xong (kèm bằng chứng)
- P0.1–P0.6: repo `https://github.com/sora-kill/portfolio`, `main` đã push.
- P1.1: site nằm trong `src/` (`index.html`, `css/style.css`, `js/main.js`); `package.json` chỉ còn `"type": "module"`; `.gitignore` không chặn `docs/evidence/.gitkeep`. Commit `05bb4ce`, `ddb59be`.
- P1.1b: đã bỏ nội dung mira. `src/` chỉ còn 3 file rỗng/khung (`index.html` khung trống, `style.css`, `main.js` rỗng). Network 200, Console không lỗi. Commit `a3e6aff`, `git status` sạch.
- P1.2: `src/css/tokens.css` (màu vàng/đen, Roboto, spacing, radius, shadow); `index.html` link tokens.css trước style.css; Console `--color-accent` ra `#ffd400`; Network tokens.css 304 (cache, OK).

## Đang dở (kiểm tra ở đầu phiên sau)
- Không có.

## Blocker / câu hỏi mở
- Cách nạp font (Google Fonts hay tự lưu trong repo) chưa chọn.
- Cấu trúc section chưa chốt (cần nhấn mạnh vibe coding và làm việc với AI Agent).

## Quyết định đã chốt (không bàn lại)
- Tài khoản GitHub chính: sora-kill.
- Làm lại site từ đầu (phương án A). Thiết kế đổi, không dùng hướng navy/`#0057FF`/`<dev/>` cũ. Bản mira cũ còn ở commit `ddb59be`.
- Thứ tự: tokens.css (P1.2), rồi viết HTML/CSS mới dùng `var(--...)`, BEM, `data-i18n` + `en.json`/`ja.json` ngay từ đầu (gộp P1.3, P1.4, P1.5 vào việc viết nội dung). Nút đổi ngôn ngữ có `data-lang-toggle`, lưu `localStorage` key `lang`.
- Site là MỘT trang (single page).
- Stack: HTML/CSS/JS thuần + Node tooling; deploy Netlify; test Playwright; Lighthouse CI.
- Môi trường: Windows + PowerShell, Node v24.22.0 (CI dùng Node 24). Đã chạy `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` để `npm` chạy được.
- `.prettierrc` có `endOfLine: auto`.
- Repo là portfolio cá nhân (phương án A), một trang, song ngữ. Thiết kế kiểu gaming (cảm hứng RedMagic): nền `#111111`, accent vàng `#FFD400`, trắng/trung tính cho nội dung, font Roboto + Noto Sans JP làm fallback. Nút/chữ trên nền vàng dùng chữ `#111111`, không dùng chữ trắng.
- Nội dung portfolio nhấn mạnh vibe coding và làm việc với AI Agent.

## Trạng thái kiểm chứng gần nhất
- `npm run verify`: chưa chạy
- Lighthouse (P/A/BP/SEO): -
- Task đang mở: -

## Tóm tắt phiên gần nhất (≤5 dòng)
- Xong P1.1 (đổi tên main.js, sửa đường dẫn, sửa package.json trùng khóa type, sửa execution policy) và P1.1b (bỏ nội dung mira). Chọn làm lại từ đầu, đổi thiết kế. Chưa chốt hướng thiết kế mới.

## Việc đầu tiên của phiên sau
- Chọn cách nạp font, rồi chốt cấu trúc section.

## Ghi chú cho docs/interventions.md (P5.4)
- PowerShell chặn `npm.ps1`: sửa bằng `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.
- `npm init -y` thêm `"type": "commonjs"` gây trùng khóa với `"type": "module"`.