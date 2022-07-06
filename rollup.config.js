import TypescriptPlugin from '@rollup/plugin-typescript' // 支持 rollup 识别 ts 代码
import NodeResolvePlugin from '@rollup/plugin-node-resolve' // 支持 rollup 引用 Npm 模块
import CommonjsPlugin from '@rollup/plugin-commonjs' // 支持 rollup CJS Npm模块
import DtsPlugin from 'rollup-plugin-dts' // 支持 rollup 生成 .d.ts 定义文件
import { cleandir as CleandirPlugin } from 'rollup-plugin-cleandir' // 清理目录
import { terser as TerserPlugin } from 'rollup-plugin-terser' // 压缩代码

export default [
  {
    input: 'src/index.ts',
    output: { file: 'dist/index.d.ts', format: 'es' },
    plugins: [DtsPlugin(), CleandirPlugin('dist')] // 清理 dist 目录，生成 .d.ts 定义文件
  },
  {
    input: 'src/index.ts',
    output: [
      { file: 'dist/index.js', format: 'cjs' }, // 生成符合 CJS 模块代码
      { file: 'dist/index.esm.js', format: 'esm' } // 生成符合 ESM 模块代码
    ],
    plugins: [
      TypescriptPlugin(),
      NodeResolvePlugin(),
      CommonjsPlugin(),
      TerserPlugin({
        compress: { drop_console: false },
        format: { comments: false }
      })
    ]
  }
]
