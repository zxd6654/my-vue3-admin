import defaultSettings from "@/settings";
import { ThemeEnum } from "@/enums/ThemeEnum";
import { generateThemeColors, applyTheme, toggleDarkMode } from "@/utils/theme";

type SettingsValue = boolean | string;

export const useSettingsStore = defineStore("setting", () => {
  // 基本设置
  const settingsVisible = ref(false);
  // 标签
  const tagsView = useStorage<boolean>("tagsView", defaultSettings.tagsView);
  // 布局
  const layout = useStorage<string>("layout", defaultSettings.layout);
  // 侧边栏 Logo
  const sidebarLogo = useStorage<boolean>("sidebarLogo", defaultSettings.sidebarLogo);
  //主题
  const themeColor = useStorage<string>("themeColor", defaultSettings.themeColor);
  const theme = useStorage<string>("theme", defaultSettings.theme);

  //  监听主题变化
  watch(
    [theme, themeColor],
    ([newTheme, newThemeColor]) => {
      toggleDarkMode(newTheme === ThemeEnum.DARK);
      const colors = generateThemeColors(newThemeColor);
      applyTheme(colors);
    },
    { immediate: true }
  );

  // 设置映射
  const settingsMap: Record<string, Ref<SettingsValue>> = {
    tagsView,
    sidebarLogo,
    layout,
  };

  function changeSetting({ key, value }: { key: string; value: SettingsValue }) {
    const setting = settingsMap[key];
    if (setting) setting.value = value;
  }

  function changeLayout(val: string) {
    layout.value = val;
  }

  function changeTheme(value: string) {
    theme.value = value;
  }

  function changeThemeColor(color: string) {
    themeColor.value = color;
  }

  return {
    settingsVisible,
    tagsView,
    sidebarLogo,
    layout,
    themeColor,
    theme,
    changeLayout,
    changeTheme,
    changeSetting,
    changeThemeColor,
  };
});
