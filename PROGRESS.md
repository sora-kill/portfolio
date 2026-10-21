# PROGRESS.md — Trạng thái sống (cập nhật cuối MỖI phiên)

- Cập nhật lần cuối: 2026-10-22
- Chế độ vận hành: A (Chat)

## Vị trí hiện tại
- Phase: 1 (đưa site vào cấu trúc)
- Bước đang làm: P1.1
- Bước kế tiếp: P1.2 (tokens.css)

## Đã xong (kèm bằng chứng)
- P0.1–P0.6: repo `https://github.com/sora-kill/portfolio`, nhánh `main` đã push (`git push` báo Everything up-to-date). Git đang theo dõi: .gitignore, CLAUDE.md, PROGRESS.md, package.json.
- Các thư mục .github, docs, src, tasks, tests, tools đã tạo (chưa vào Git vì còn rỗng).

## Đang dở
- Cần xác nhận `docs/evidence/.gitkeep` tồn tại (git ls-files chưa liệt kê) và `package.json` có `"type": "module"`.

## Blocker / câu hỏi mở
- Vị trí 3 file site hiện tại (index.html, style.css, script.js) trên máy.
- Site hiện đã có nút đổi EN/JP chưa, và là 1 trang hay nhiều trang.

## Quyết định đã chốt (không bàn lại)
- Tài khoản GitHub chính: sora-kill.
- Stack: HTML/CSS/JS thuần + Node tooling; deploy Netlify; test Playwright; Lighthouse CI.
- Môi trường: Windows + PowerShell, Node v24.22.0 (CI dùng Node 24).
- `.prettierrc` có `endOfLine: auto` (tránh xung đột CRLF/LF trên Windows).

## Trạng thái kiểm chứng gần nhất
- `npm run verify`: chưa chạy
- Lighthouse (P/A/BP/SEO): -
- Task đang mở: -

## Tóm tắt phiên gần nhất (≤5 dòng)
- Xong Phase 0. Sửa lỗi push 403 (sai tài khoản Windows đã lưu). Cập nhật CLAUDE.md sang lệnh PowerShell.

## Việc đầu tiên của phiên sau
- Làm P1.1: chuyển 3 file site vào src/, sửa đường dẫn, mở bằng `npx serve src -l 4173`.
