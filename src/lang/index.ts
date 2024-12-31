import type { App } from "vue";
import { createI18n } from "vue-i18n";
import { useAppStoreHook } from "@/store/modules/app";
// 本地语言包
import enLocale from "./package/en";
import zhCnLocale from "./package/zh-cn";

const appStore = useAppStoreHook();

const messagges = {
    en: {
        ...enLocale,
    },
    "zh-cn": {
        ...zhCnLocale,
    },
};

const i18n = createI18n({
    legacy: false,
    locale: appStore.language,
    messages: messagges,
    globalInjection: true,
});

// 全局注册 i18n
export function setupI18n(app: App<Element>) {
    app.use(i18n);
};

export default i18n;
