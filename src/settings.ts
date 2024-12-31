import { ThemeEnum } from "./enums/ThemeEnum";
import { LanguageEnum } from "./enums/LanguageEnum";

// 检查用户的操作系统是否使用深色模式
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

const defaultSettings: AppSettings = {
    // 主题，根据操作系统的色彩方案自动选择
    theme: mediaQuery.matches ? ThemeEnum.DARK : ThemeEnum.LIGHT,
    // 语言
    language: LanguageEnum.ZH_CN
}

export default defaultSettings;