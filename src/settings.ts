import { ThemeEnum } from "./enums/ThemeEnum";
import { LayoutEnum } from "./enums/LayoutEnum";
import { LanguageEnum } from "./enums/LanguageEnum";
import { SizeEnum } from "./enums/SizeEnum";

const { pkg } = __APP_INFO__;

// 检查用户的操作系统是否使用深色模式
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

const defaultSettings: AppSettings = {
  // 系统Title
  title: pkg.name,
  // 系统版本
  version: pkg.version,
  // 是否显示设置
  showSettings: true,
  // 是否显示标签视图
  tagsView: true,
  // 是否显示侧边栏Logo
  sidebarLogo: true,
  // 布局方式，默认为左侧布局
  layout: LayoutEnum.LEFT,
  // 主题，根据操作系统的色彩方案自动选择
  theme: mediaQuery.matches ? ThemeEnum.DARK : ThemeEnum.LIGHT,
  // 组件大小 default | medium | small | large
  size: SizeEnum.DEFAULT,
  // 语言
  language: LanguageEnum.ZH_CN,
  // 是否开启水印
  watermarkEnabled: false,
  // 主题颜色
  themeColor: "#4080FF",
  // 水印内容
  watermarkContent: pkg.name,
};

export default defaultSettings;
