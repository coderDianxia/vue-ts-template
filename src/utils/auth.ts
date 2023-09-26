import { useCache } from "@/utils/useCache";
import { TokenType } from "@/api/login/type";

const { wsCache } = useCache();

const AccessTokenKey = "ACCESS_TOKEN";
const RefreshTokenKey = "REFRESH_TOKEN";

// 获取token
export const getAccessToken = () => {
  // 此处与TokenKey相同，此写法解决初始化时Cookies中不存在TokenKey报错
  return wsCache.get(AccessTokenKey)
    ? wsCache.get(AccessTokenKey)
    : wsCache.get(AccessTokenKey);
};

// 刷新token
export const getRefreshToken = () => {
  return wsCache.get(RefreshTokenKey);
};

// 设置token
export const setToken = (token: TokenType) => {
  wsCache.set(RefreshTokenKey, token.refreshToken);
  wsCache.set(AccessTokenKey, token.accessToken);
};

// 删除token
export const removeToken = () => {
  wsCache.delete(AccessTokenKey);
  wsCache.delete(RefreshTokenKey);
};

/** 格式化token（jwt格式） */
export const formatToken = (token: string): string => {
  return "Bearer " + token;
};
