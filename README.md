# rollup 打包类库模版

[rollup](https://www.rollupjs.com/) 是一个 `JS模块` 打包器，更准确的说，`rollup` 是一个 `ESM` 打包器。可将小块代码编译为大块复杂代码，更专注于**类库打包**。

本项目提供了一个基于 `rollup` 的类库打包模版，采用 `Typescript` 进行开发，使用 `jest` 进行测试。

## 插件

1. [@rollup/plugin-typescript](https://github.com/rollup/plugins/tree/master/packages/typescript)：使用该插件编译 `Typescript`。使用该插件编译 `Typescript` 就无需配置 `babel`，配置相关编译配置就能将代码输出为 `ES5`。（@rollup/plugin-typescript2，优化？）
1. [@rollup/plugin-node-resolve](https://github.com/rollup/plugins/tree/master/packages/node-resolve)：使用该插件自动寻找引用到的 `Npm模块`。
1. [@rollup/plugin-commonjs](https://github.com/rollup/plugins/tree/master/packages/commonjs)：使 `rollup` 支持解析 `CJS`，使用该插件将 `CJS` 转换为 `ESM` 再让其参与到后续编译中。
1. [rollup-plugin-dts](https://github.com/Swatinem/rollup-plugin-dts)：生成 `Typescript` 定义文件。
1. [rollup-plugin-terser](https://github.com/TrySound/rollup-plugin-terser)：压缩生成的文件。
1. [rollup-plugin-cleandir](https://github.com/mstssk/rollup-plugin-cleandir)：清理打包目录。（下载量较小，且必须性不大）

## packge.json 相关属性

1. main：`CJS` 规范入口文件路径。
2. module：`ESM` 规范入口文件路径。
3. types：为 `Typescript` 定义文件路径，对外暴露相关的类型定义；
4. files：`npm publish` 时，需发布的文件。

## 参考知识点

> [Tree-Shaking 实现原理](https://juejin.cn/post/7002410645316436004)

> [《掌握 tsconfig.json》](https://juejin.cn/post/6844904178234458120)
>
> [《tsconfig.json 配置解析》](https://juejin.cn/post/7051525799261765646)

## 后续完善

1. git Action 工作流，实现自动发布。
