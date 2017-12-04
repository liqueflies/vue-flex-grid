import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import replace from 'rollup-plugin-replace'
import postcss from 'rollup-plugin-postcss'
import postcssModules from 'postcss-modules';

import { version, name, license, author, homepage } from './package.json'

const banner = `
/*! ${name} - v${version}
 * ${homepage}
 * Copyright (c) ${(new Date().getFullYear())} - ${author};
 * Licensed ${license}
 */
`
const cssExportMap = {}
const plugins = [
  resolve(),
  commonjs(),
  babel({
    exclude: 'node_modules/**' // only transpile our source code
  }),
  postcss({
    plugins: [
      postcssModules({
        getJSON (id, exportTokens) {
          cssExportMap[id] = exportTokens;
        }
      })
    ],
    getExportNamed: false,
    getExport (id) {
      return cssExportMap[id];
    }
  })
]

const baseConfig = {
  input: 'src/index.js',
  banner,
  sourcemap: true
}

export default [
  Object.assign({
    output: {
      exports: 'named',
      file: 'umd/vue-flex-grid.js',
      name: 'VueGrid',
      format: 'umd'
    },
    plugins: [replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }), ...plugins]
  }, baseConfig),
  Object.assign({
    output: {
      exports: 'named',
      file: 'umd/vue-flex-grid.min.js',
      name: 'VueGrid',
      format: 'umd'
    },
    plugins: [replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }), ...plugins, uglify({
      warnings: false,
      mangle: true,
      compress: {
        pure_funcs: ['warn']
      },
      output: {
        comments: /^!/
      }
    })]
  }, baseConfig)
]