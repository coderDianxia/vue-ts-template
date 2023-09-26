# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

# 初始化创建项目模板
pnpm create vite link-share-web --template vue-ts
# 安装启动项目
cd link-share-web
pnpm install
pnpm run dev

# 代码检查工具
1. 安装 
   pnpm install eslint --save-dev
2. 初始化配置
   npm init @eslint/config
   选项
   √ How would you like to use ESLint? · problems    
   √ What type of modules does your project use? · esm
   √ Which framework does your project use? · vue
   √ Does your project use TypeScript? · No / Yes
   √ Where does your code run? · browser
   √ What format do you want your config file to be in? · JavaScript
   √ Would you like to install them now? · No / Yes
   √ Which package manager do you want to use? · pnpm
3. 格式化工具
   pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
4. 安装path 解决找不到依赖问题
   pnpm install @types/node --save-dev
5. 安装element-plus
   pnpm install element-plus
   国际化
   import zhCn from "element-plus/dist/locale/zh-cn.mjs";
   引入main.ts
   app.use(ElementPlus, { size: "small", zIndex: 3000, locale: zhCn }); //size 用于设置表单组件的默认尺寸，zIndex 用于设置弹出组件的层级，zIndex 的默认值为 2000
6. 导入图标
   pnpm install @element-plus/icons-vue
   引入main.ts
   import * as ElementPlusIconsVue from '@element-plus/icons-vue'

   const app = createApp(App)
   for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
   app.component(key, component)
   }
6. 引入sass
   pnpm install sass sass-loader -D
   在vite.config.ts中引入scss
7. 配置stylelint
   pnpm install stylelint postcss postcss-scss postcss-html stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D

   pnpm uninstall stylelint postcss postcss-scss postcss-html stylelint-config-recess-order stylelint-config-recommended-scss stylelint-config-standard stylelint-config-standard-vue stylelint-scss stylelint-order stylelint-config-standard-scss -D
8. pnpm install pinia

9. pnpm install vue-router

10 pnpm install axios

11.  pnpm install web-storage-cache

12. pnpm install qs




   


