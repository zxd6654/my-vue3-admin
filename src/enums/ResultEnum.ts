/**
 * 响应码枚举
 */
export const enum ResultEnum {
  /**
   * 成功
   */
  SUCCESS = "00000",
  /**
   * 错误
   */
  ERROR = "B0001",
  /**
   * 访问令牌无效或过期
   */
  ACCESS_TOKEN_INVALID = "a0230",
  /**
   * 刷新令牌无效或过期
   */
  REFRESH_TOKEN_INVALID = "a0231",
}
