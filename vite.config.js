// vite.config.js
export default {
  // config options
  base: "/",
  build: {
    assetsDir: "",
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
};
