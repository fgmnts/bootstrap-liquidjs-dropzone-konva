import { resolve } from "path";
import autoprefixer from 'autoprefixer';

export default {
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: './src/index.html',
        // shaderOne: './shaderOne.html',
        // ...
        // List all files you want in your build
      }
    }
  },
  css: {
    postcss: {
      plugins: [
          autoprefixer
      ],
    }
  },
//   server: {
//     port: 8080,
//   },
};
