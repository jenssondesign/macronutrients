// vite.config.js
export default {
  // config options
  base: "/",
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "assets/[name][extname]",
      },
    },
  },
};
