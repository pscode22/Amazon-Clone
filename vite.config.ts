import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3020,
    host: "0.0.0.0",
    https: true
  },
  plugins: [react(), mkcert()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      // "@pages": path.resolve(__dirname, "./src/components/pages"),
      // "@data": path.resolve(__dirname, "./src/data"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@": path.resolve(__dirname, "./src")
    }
  }
});
