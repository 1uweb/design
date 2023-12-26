import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import { swc } from "rollup-plugin-swc3";

export default [
  {
    input: "./src/index.tsx",
    output: {
      dir: "./dist/cjs",
      format: "cjs",
      esModule: false,
    },
    external: ["react/jsx-runtime"],
    plugins: [
      commonjs(),
      swc({
        sourceMaps: false,
      }),
    ],
  },
  {
    input: "./src/index.tsx",
    output: {
      dir: "./dist/esm",
      format: "es",
      preserveModules: true,
    },
    external: ["react/jsx-runtime"],
    plugins: [
      commonjs(),
      swc({
        sourceMaps: false,
      }),
    ],
  },
  {
    input: "./src/index.tsx",
    output: {
      file: "./dist/types/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
];
