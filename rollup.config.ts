import pkg from './package.json' with { type: "json" };

import json from 'rollup-plugin-json'
import typescript from 'rollup-plugin-typescript2'
import sourceMaps from 'rollup-plugin-sourcemaps'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      name: 'arrnet',
      format: 'umd',
      sourcemap: true
    }
  ],
  watch: {
    include: "src/**",
  },
  plugins: [
    json(),
    typescript({ useTsconfigDeclarationDir: true }),
    commonjs(),
    resolve(),
    sourceMaps()
  ]
}