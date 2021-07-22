// @ts-check

import nodeResolve from "@rollup/plugin-node-resolve"
import ts from "rollup-plugin-ts"
import path from "path"

/** @type {typeof String.raw} */
const r = (...args) => path.resolve(__dirname, String.raw(...args))

export default /** @type {import("rollup").RollupOptions} */ ({
  input: r`src/index.ts`,
  output: [
    { dir: "dist", format: "esm", entryFileNames: "[name].mjs" },
    { dir: "dist", format: "cjs", entryFileNames: "[name].js" },
  ],
  plugins: [
    nodeResolve({ modulesOnly: true }),
    ts({ typescript: require("typescript") }),
  ],
  external: [...require("module").builtinModules],
})
