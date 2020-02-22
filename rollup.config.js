import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

export default [
  // browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      // window.browserMD5File
      name: 'browserMD5File',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      babel(),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: 'src/index.js',
    external: ['spark-md5'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [
      babel(),
    ],
  },
];
