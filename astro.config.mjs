import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  // server: {
  //   proxy: {
  //     api: {
  //       target: import.meta.env.PUBLIC_API_URL,
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, "/wp-json/wp/v2"),
  //     },
  //   },
  // },
});
