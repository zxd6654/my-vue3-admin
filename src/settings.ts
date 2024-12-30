import { ThemeEnum } from "./enums/ThemeEnum";

// 检查用户的操作系统是否使用深色模式
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

const defaultSettings: AppSettings = {
    // 主题，根据操作系统的色彩方案自动选择
    theme: mediaQuery.matches ? ThemeEnum.DARK : ThemeEnum.LIGHT,
}

export default defaultSettings;