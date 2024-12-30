import defaultSettings from "@/settings";

export const useSettingsStore = defineStore("setting", () => {
    //主题
    const theme = useStorage<string>("theme", defaultSettings.theme);

    function changeTheme(value: string) {
        theme.value = value;
    }

    return { theme, changeTheme };
})