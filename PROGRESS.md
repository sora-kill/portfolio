# PROGRESS.md — Trạng thái sống (cập nhật cuối MỖI phiên)

- Cập nhật lần cuối: 2026-10-30
- Chế độ vận hành: A (Chat)

## Vị trí hiện tại
- Phase: 1 (đưa site vào cấu trúc)
- Bước đang làm: P1.2b XONG. Chưa bắt đầu bước mới.
- Bước kế tiếp: P1.4a — nền tảng i18n + Header (xem "Việc đầu tiên của phiên sau").

## Đã xong (kèm bằng chứng)
- P0.1–P0.6: repo `https://github.com/sora-kill/portfolio`, `main` đã push.
- P1.1: site nằm trong `src/`; `package.json` chỉ còn `"type": "module"`. Commit `05bb4ce`, `ddb59be`.
- P1.1b: bỏ nội dung mira, `src/` chỉ còn khung. Commit `a3e6aff`.
- P1.2: `src/css/tokens.css` (vàng/đen, Roboto, spacing, radius, shadow); Console `--color-accent` ra `#ffd400`. Commit `effe593`.
- P1.2b: nạp Roboto + Noto Sans JP qua Google Fonts CDN trong `index.html` (preconnect, display=swap, wght 400/500/700); Network css2 200. Commit `e951db0`. Chưa có `.woff2` nào tải vì trang chưa có chữ (bình thường); việc kiểm tra font hiển thị làm ở bước viết nội dung.

## Đang dở (kiểm tra ở đầu phiên sau)
- Favicon: Console báo `favicon.ico` 404. Làm bước riêng sau (ảnh hưởng Lighthouse Best Practices).
- Cảnh báo CSP/`eval` trong Console: không đến từ code (nghi extension/Live Server). Tùy chọn: mở cửa sổ ẩn danh để xác nhận.

## Blocker / câu hỏi mở
- Không có. (Nội dung thật cho từng section sẽ hỏi khi viết: tên hiển thị, vai trò, câu giới thiệu, email, link GitHub, CV, mô tả dự án.)

## Quyết định đã chốt (không bàn lại)
- Tài khoản GitHub chính: sora-kill.
- Repo là portfolio cá nhân (phương án A), một trang, song ngữ EN/JP. Bản mira cũ còn ở commit `ddb59be`.
- Thiết kế kiểu gaming (cảm hứng RedMagic; không dùng logo/ảnh/văn bản của RedMagic): nền `#111111`, accent vàng `#FFD400`, trắng/trung tính cho nội dung, font Roboto + Noto Sans JP fallback. Nút/chữ trên nền vàng dùng chữ `#111111`, không dùng chữ trắng. Chữ nhỏ trên nền tối dùng `--color-text`/`--color-text-muted`.
- Cấu trúc trang (đã duyệt): Hero → About → AI Workflow → Projects → Skills → Contact. Nav: About, AI Workflow, Projects, Skills, Contact + nút EN/JP.
  - AI Workflow là phần nhấn mạnh: vibe coding và làm việc với AI Agent như quy trình có kiểm soát (CLAUDE.md + PROGRESS.md, từng bước nhỏ có bằng chứng, người quyết định thiết kế/duyệt thay đổi, link tới repo và lịch sử commit làm bằng chứng).
  - Projects: AnimeSky Shop và chính portfolio này; thêm sau khi dự án lên GitHub.
- Viết nội dung trực tiếp với `data-i18n` + `en.json`/`ja.json` từ đầu (gộp P1.3, P1.4, P1.5 vào việc viết từng section). Nút đổi ngôn ngữ có `data-lang-toggle`, lưu `localStorage` key `lang`, mặc định `en`.
- Mỗi section là một bước riêng (HTML + khóa i18n + CSS BEM).
- Stack: HTML/CSS/JS thuần + Node tooling; deploy Netlify; test Playwright; Lighthouse CI. Font qua Google Fonts CDN.
- Môi trường: Windows + PowerShell, Node v24.22.0 (CI dùng Node 24). Đã chạy `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.
- `.prettierrc` có `endOfLine: auto`.

## Trạng thái kiểm chứng gần nhất
- `npm run verify`: chưa chạy
- Lighthouse (P/A/BP/SEO): -
- Task đang mở: -

## Tóm tắt phiên gần nhất (≤5 dòng)
- Xong P1.1b, P1.2, P1.2b (dọn mira, tokens vàng/đen, nạp font CDN). Chốt hướng thiết kế gaming vàng/đen và cấu trúc 6 section với AI Workflow là phần nhấn mạnh. Chưa viết nội dung.

## Việc đầu tiên của phiên sau
- P1.4a: nền tảng i18n + Header. Tạo `src/i18n/en.json`, `ja.json` (khóa `nav.*`, `meta.*`), `src/js/i18n.js`, `main.js` khởi tạo; Header có nav 5 mục + nút `data-lang-toggle`; CSS BEM `header` trong file riêng nếu cần. Sau đó làm Hero, rồi About, AI Workflow, Projects, Skills, Contact (mỗi cái một bước).

## Ghi chú cho docs/interventions.md (P5.4)
- PowerShell chặn `npm.ps1`: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.
- `npm init -y` thêm `"type": "commonjs"` gây trùng khóa với `"type": "module"`.
- Live Server báo `favicon.ico` 404 khi site chưa có favicon.