import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// added manually in plugins
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr()],
});
