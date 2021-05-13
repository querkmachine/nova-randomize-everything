import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/main.js",
  output: {
    file: "RandomEverything.novaextension/scripts/main.dist.js",
    format: "cjs",
  },
  plugins: [
    commonjs(),
    nodeResolve({
      browser: true,
    }),
  ],
};
