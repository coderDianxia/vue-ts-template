const config: {
  base_url: string;
  result_code: number | string;
  default_headers: string;
  request_timeout: number;
} = {
  /**
   * api请求基础路径 //基本路径默认为空，有vite中进行代理，
   */
  base_url: "",
  /**
   * 接口成功返回状态码
   */
  result_code: 200,
  /**
   * 默认接口请求类型
   * 可选值：application/x-www-form-urlencoded multipart/form-data
   */
  default_headers: "application/json",

  /**
   * 接口请求超时时间
   */
  request_timeout: 30000,
};

export { config };
