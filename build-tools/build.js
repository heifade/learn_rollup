const rollup = require("rollup");

const json = require("rollup-plugin-json");
const resolve = require("rollup-plugin-node-resolve");
const commonjs = require("rollup-plugin-commonjs");
const babel = require("rollup-plugin-babel");
const typescript = require("rollup-plugin-typescript");

const inputOptions = {
  input: "src/index.ts",
  plugins: [
    typescript(),
    json(),
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    })
  ]
};

const outputOptions = {
  dir: "./dist",
  file: "index.js",
  format: "cjs"
};

async function build() {
  const bundle = await rollup.rollup(inputOptions);
  const { code, map } = await bundle.generate(outputOptions);
  await bundle.write(outputOptions);
}

build();
