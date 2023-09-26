import { createRouter, createWebHashHistory } from "vue-router";
import type { App } from "vue";
import routes from "@/router/modules/routes";

export const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export const setupRouter = (app: App) => {
  app.use(router);
};
