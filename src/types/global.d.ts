declare global {
  interface AppSettings {
    /** 系统标题 */
    title: string;
    /** 系统版本 */
    version: string;
    /** 主题模式(dark|light) */
    theme: string;
    /** 语言( zh-cn| en) */
    language: string;
  }
}
export {};
