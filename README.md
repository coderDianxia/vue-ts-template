# Vue 3 + TypeScript + Vite
# 新手必读
  开发环境 node >=16.17.0 pnpm>=8.7.0
# 项目介绍
  基于 Vue 3 + TypeScript + Vite+Element-Plus开发的脚手架,跳过引入常用的插件过程，方便开发
# 项目启动
  安装pnpm
  npm install  pnpm -g
  查看源
  pnpm config get registry
  切换为淘宝源
  pnpm config set registry https://registry.npmmirror.com/
  安装
  pnpm install
  启动
  pnpm run dev
# 技术栈
| 框架                    | 说明                             | 版本   |
| ----------------------- | -------------------------------- | ------ |
| Vue                     | Vue 框架                         | 3.3.4  |
| Vite                    | 开发与构建工具                   | 4.4.5  |
| Element Plus            | Element Plus                     | 2.3.14 |
| TypeScript              | JavaScript 的超集                | 5.0.2  |
| pinia                   | Vue 存储库 替代 vuex5            | 2.1.6  |
| vue-router              | Vue 路由                         | 4.2.4  |
| qs                      | 查询字符串解析和序列化字符串的库 | 6.11.2 |
| web-storage-cache       | 前端缓存                         | 1.1.1  |
| axios                   | 基于 Promise 的 HTTP 库          | 1.5.0  |
| @element-plus/icons-vue | 图标库                           | 2.1.0  |
   
# 搭建脚手架部分过程
## 初始化创建项目模板
pnpm create vite link-share-web --template vue-ts
## 安装启动项目
cd link-share-web
pnpm install
pnpm run dev

## 代码检查工具
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




   


