const routes = [
  {
    path: "/",
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
  { path: "/login", component: () => import("@/views/login/index.vue") },
  { path: "/404", component: () => import("@/views/error/404.vue") },
];
export default routes;
