import { defineConfig } from "astro/config";
import dotenv from "dotenv";

dotenv.config();

// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: {
    server: {
      proxy: {
        "/api": {
          target: process.env.PUBLIC_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/wp-json/wp/v2"),
        },
      },
    },
  },
});
