import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// For local dev you can either:
// 1) set VITE_API_BASE_URL=http://localhost:8000
// or
// 2) uncomment proxy to avoid CORS during dev and call `/api/...` directly.
// Proxy only applies in `npm run dev`.
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   server: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8000',
//         changeOrigin: true
//       }
//     }
//   }
// })

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
