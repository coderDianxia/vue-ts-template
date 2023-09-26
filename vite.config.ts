import { defineConfig, loadEnv, UserConfig, ConfigEnv } from "vite";

import vue from "@vitejs/plugin-vue";
import path from "path";

// 当前执行node命令时文件夹的地址(工作目录)
const root = process.cwd();
// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  console.log(root);
  let env = {} as any;
  const isBuild = command === "build";
  if (!isBuild) {
    env = loadEnv(
      process.argv[3] === "--mode" ? process.argv[4] : process.argv[3],
      root,
    );
  } else {
    env = loadEnv(mode, root);
  }
  console.log(env);
  return {
    base: "",
    root: root, // index.html文件所在的位置
    plugins: [vue()],
    resolve: {
      alias: {
        "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    // 服务端渲染
    server: {
      // 是否开启 https
      https: false,
      // 端口号
      port: env.VITE_PORT, //端口号
      host: "0.0.0.0", //配置0.0.0.0或true，代表监听所有地址
      open: env.VITE_OPEN === "true", //启动是否打开浏览器
      cors: true, //允许跨域。
      // 本地跨域代理. 目前注释的原因：暂时没有用途，server 端已经支持跨域
      proxy: {
        "^/api": {
          target: env.VITE_BASE_URL,
          ws: false,
          changeOrigin: true, //允许跨域。
          rewrite: (path) => path.replace(/\/api/, ""),
        },
      },
    },
    //全局引入scss全局变量
    css: {
      preprocessorOptions: {
        scss: {
          /**如果引入多个文件，可以使用
           * '@import "@/assets/scss/globalVariable1.scss";
           * @import"@/assets/scss/globalVariable2.scss";'
           **/
          additionalData: '@import "@/style/globalVariable.scss";',
        },
      },
    },
  };
};
