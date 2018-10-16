import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    dir: "./dist",
    file: "index.js",
    format: "cjs"
  },
  plugins: [
    typescript(),
    json(),
    resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: "node_modules"
      }
    }),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    })
  ],
  external: ["lodash-es"]
};
