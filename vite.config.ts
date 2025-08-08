import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// added manually in plugins
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
