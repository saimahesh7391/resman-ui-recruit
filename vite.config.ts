import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "recruit_app",
      filename: "remoteEntry.js",
      exposes: {
        "./RecruitDashboard": "./src/RecruitDashboard.tsx",
      },
      // remotes: {
      //   host_app: "http://localhost:3000/remoteEntry.js",
      // },
      shared: ["react"],
    }),
  ],
  build: {
    target: "esnext", // 🔥 required for vite-plugin-federation
  },
  server: { port: 3002, cors: true },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
