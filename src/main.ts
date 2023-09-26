//element-plus全局样式
import "element-plus/dist/index.css";
import "@/style/index.scss";
import { createApp } from "vue";
import App from "./App.vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import ElementPlus from "element-plus";
// 引入状态管理
import { setupStore } from "@/store";
//引入路由管理
import { setupRouter, router } from "@/router";
//引入饿了么图标
import { setupIcon } from "./plugins/elementPlusIcon";
const app = createApp(App);
//引入element-plus
app.use(ElementPlus, { size: "small", zIndex: 3000, locale: zhCn }); //size 用于设置表单组件的默认尺寸，zIndex 用于设置弹出组件的层级，zIndex 的默认值为 2000

const setupAll = async () => {
  setupStore(app);
  setupRouter(app);
  setupIcon(app);
  await router.isReady();
  app.mount("#app");
};

setupAll();
