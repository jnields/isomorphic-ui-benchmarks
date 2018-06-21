import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import path from 'path';
import replace from 'rollup-plugin-replace';

export default [
  {
    input: path.resolve('./benchmarks/server'),
    output: {
      file: './build/server.js',
      format: 'cjs',
    },
    plugins: [
      json(),
      babel(),
      commonjs(),
      // resolve({
      //   preferBuiltins: false,
      //   browser: false,
      //   main: true,
      //   jsnext: true,
      //   module: true,
      // }),
    ]
  }
]
