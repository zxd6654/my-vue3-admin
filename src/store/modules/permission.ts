import type { RouteRecordRaw } from "vue-router";
import { constantRoutes } from "@/router";
import { store } from "@/store";
import router from "@/router";

export const usePermissionStore = defineStore("permission", () => {
  // 所有路由，包括静态和动态路由
  const routes = ref<RouteRecordRaw[]>([]);
  // 混合模式左侧菜单
  const mixLeftMenus = ref<RouteRecordRaw[]>([]);
  // 路由是否已加载
  const isRoutesLoaded = ref(false);

  /**
   * 重置路由
   */
  const resetRouter = () => {
    // 删除动态路由，保留静态路由
    routes.value.forEach((route) => {
      if (route.name && !constantRoutes.find((r) => r.name === route.name)) {
        router.removeRoute(route.name);
      }
    });
  };

  return {
    routes,
    mixLeftMenus,
    isRoutesLoaded,
    resetRouter,
  };
});

/**
 * 在组件外使用 Pinia store 实例 @see https://pinia.vuejs.org/core-concepts/outside-component-usage.html
 */
export function usePermissionStoreHook() {
  return usePermissionStore(store);
}
