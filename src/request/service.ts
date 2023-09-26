import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { config } from "./config";
import { useCache } from "@/utils/useCache";
import { getAccessToken } from "@/utils/auth";
import qs from "qs";
import { ElMessage, ElMessageBox, ElNotification } from "element-plus";

const { result_code, base_url, request_timeout } = config;
const service: AxiosInstance = axios.create({
  baseURL: base_url,
  timeout: request_timeout,
  withCredentials: false, // 禁用 Cookie 等信息
});

const whiteList: string[] = ["/login"];

// 添加请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    //判断该请求是否是白名单
    debugger;
    let isToken: boolean = false;
    whiteList.forEach((url) => {
      if (config.url) {
        return (isToken = config.url.indexOf(url) > -1);
      }
    });

    if (getAccessToken() && !isToken) {
      config.headers.Authorization = "Bearer " + getAccessToken(); // 让每个请求携带自定义token
    }
    const params = config.params || {};
    const data = config.data || false;
    if (
      config.method?.toUpperCase() === "POST" &&
      (config.headers as AxiosRequestHeaders)["Content-Type"] ===
        "application/x-www-form-urlencoded"
    ) {
      config.data = qs.stringify(data);
    }
    // get参数编码
    if (config.method?.toUpperCase() === "GET" && params) {
      let url = config.url + "?";
      for (const propName of Object.keys(params)) {
        const value = params[propName];
        if (
          value !== void 0 &&
          value !== null &&
          typeof value !== "undefined"
        ) {
          if (typeof value === "object") {
            for (const val of Object.keys(value)) {
              const params = propName + "[" + val + "]";
              const subPart = encodeURIComponent(params) + "=";
              url += subPart + encodeURIComponent(value[val]) + "&";
            }
          } else {
            url += `${propName}=${encodeURIComponent(value)}&`;
          }
        }
      }
      // 给 get 请求加上时间戳参数，避免从缓存中拿数据
      // const now = new Date().getTime()
      // params = params.substring(0, url.length - 1) + `?_t=${now}`
      url = url.slice(0, -1);
      config.params = {};
      config.url = url;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// 添加响应拦截器
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    const { data } = response;

    if (!data) {
      // 返回“[HTTP]请求没有返回值”;
      throw new Error();
    }
    // 未设置状态码则默认成功状态
    const code = data.code || result_code;
    // 二进制数据则直接返回
    if (
      response.request.responseType === "blob" ||
      response.request.responseType === "arraybuffer"
    ) {
      return response.data;
    }
    // 获取错误信息
    const msg = data.msg;
    if (code === 401) {
      ElMessage.error("未授权");
      return Promise.reject(new Error(msg));
    } else if (code === 500) {
      ElMessage.error("服务端错误");
      return Promise.reject(new Error(msg));
    } else if (code !== 200) {
      ElNotification.error({ title: msg });
      return Promise.reject("error");
    } else {
      return data;
    }
  },
  (error: AxiosError) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log("err" + error); // for debug
    const { message } = error;

    ElMessage.error(message);
    return Promise.reject(error);
  },
);

export { service };
