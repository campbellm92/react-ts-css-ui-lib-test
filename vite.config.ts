import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
      scopeBehaviour: "local",
      globalModulePaths: [/global\.css$/], // Add this line
    },
  },
  build: {
    lib: {
      entry: "src/index.tsx",
      name: "MyUILibrary",
      formats: ["es", "cjs"],
      fileName: (format) => `my-ui-library.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    cssCodeSplit: true,
  },
});
