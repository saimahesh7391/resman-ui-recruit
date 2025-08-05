// resman-ui-recruit/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "recruit_app",
      filename: "remoteEntry.js",
      exposes: {
        "./RecruitRoutes": "./src/recruit/RecruitRoutes.tsx",
        "./RecruitSidebarConfig": "./src/recruit/sidebar.config.ts",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: { port: 3002, cors: true },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});