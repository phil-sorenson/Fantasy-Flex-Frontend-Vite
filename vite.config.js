import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // root: path.resolve(__dirname, "src"),
  // resolve: {
  //   alias: {
  //     "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
  //   },
  // },
  // server: {
  //   port: 3306,
  //   hot: true,
  // },
  plugins: [react()],
});
