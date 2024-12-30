import type { App } from 'vue'
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

//静态路由
export const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            hidden: true
        }
    }
]

//创建路由
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
    // 刷新时，滚动条位置还原
    scrollBehavior: () => {
        return { left: 0, top: 0 }
    }
})

// 全局注册 router
export function setupRouter(app: App<Element>) {
    app.use(router)
}

export default router