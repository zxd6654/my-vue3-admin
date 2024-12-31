import defaultSettings from "@/settings";

import { store } from "@/store";

export const useAppStore = defineStore("app", () => {
    const language = useStorage<string>("language", defaultSettings.language);

    /**
      * 切换语言
      *
      * @param val
      */
    function changeLanguage(val: string) {
        language.value = val;
    }

    return { language, changeLanguage };
});

export function useAppStoreHook() {
    return useAppStore(store);
}