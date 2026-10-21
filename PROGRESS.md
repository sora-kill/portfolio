# PROGRESS.md — Trạng thái sống (cập nhật cuối MỖI phiên)

- Cập nhật lần cuối: 2026-10-22
- Chế độ vận hành: A (Chat)

## Vị trí hiện tại
- Phase: 1 (đưa site vào cấu trúc)
- Bước đang làm: P1.1 (gần xong, còn 4 mục kiểm tra bên dưới)
- Bước kế tiếp: P1.2 (tokens.css)

## Đã xong (kèm bằng chứng)
- P0.1–P0.6: repo `https://github.com/sora-kill/portfolio`, `main` đã push.
- Ảnh VS Code: `src/index.html`, `src/css/style.css`, `src/js/script.js` đã nằm đúng thư mục. Các thư mục `.github`, `docs`, `tasks`, `tests/e2e`, `tools`, `src/assets`, `src/i18n` đã có.

## Đang dở (kiểm tra ở đầu phiên sau)
1. Đổi tên `src/js/script.js` → `src/js/main.js` (đúng roadmap).
2. `index.html` phải trỏ đúng: `<link rel="stylesheet" href="css/style.css">` và `<script type="module" src="js/main.js"></script>`.
3. `package.json` đang có 2 cảnh báo trong VS Code (Problems panel): cần đọc nội dung và sửa; phải có `"type": "module"`.
4. `docs/evidence/.gitkeep` có thể bị `.gitignore` chặn (`git check-ignore -v docs/evidence/.gitkeep`). Không chặn tiến độ vì `tools/screenshot.mjs` tự tạo thư mục.
5. Chưa chắc đã commit/push bản CLAUDE.md và PROGRESS.md mới: chạy `git status`.

## Blocker / câu hỏi mở
- Không có.

## Quyết định đã chốt (không bàn lại)
- Tài khoản GitHub chính: sora-kill.
- Site là MỘT trang (single page), hiện CHƯA có nội dung và CHƯA có nút EN/JP.
- Vì site còn trống: viết nội dung trực tiếp với `data-i18n` + `en.json`/`ja.json` ngay từ đầu (gộp P1.4 và P1.5 với việc viết nội dung). Nút đổi ngôn ngữ có `data-lang-toggle`, lưu `localStorage` key `lang`.
- Stack: HTML/CSS/JS thuần + Node tooling; deploy Netlify; test Playwright; Lighthouse CI.
- Môi trường: Windows + PowerShell, Node v24.22.0 (CI dùng Node 24).
- `.prettierrc` có `endOfLine: auto`.

## Trạng thái kiểm chứng gần nhất
- `npm run verify`: chưa chạy
- Lighthouse (P/A/BP/SEO): -
- Task đang mở: -

## Tóm tắt phiên gần nhất (≤5 dòng)
- Xong Phase 0, sửa lỗi push 403 (sai tài khoản Windows đã lưu). Cập nhật CLAUDE.md sang PowerShell. Đưa 3 file site vào src/. Chốt: site một trang, chưa có nội dung, viết cùng i18n.

## Việc đầu tiên của phiên sau
- Xử lý 5 mục "Đang dở", rồi làm P1.2 (tokens.css).
