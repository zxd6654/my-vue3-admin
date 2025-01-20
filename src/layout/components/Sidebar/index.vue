<template>
  <div :class="{ 'has-logo': sidebarLogo }">
    <!-- 混合布局顶部  -->
    <div v-if="isMixLayout" class="flex w-full">
      <SidebarLogo v-if="sidebarLogo" :collapse="isSidebarCollapsed" />
      <SidebarMixTopMenu class="flex-1" />
      <NavbarRight />
    </div>
  </div>
</template>

<script setup lang="ts">
import { LayoutEnum } from "@/enums/LayoutEnum";
import { useAppStore, useSettingsStore } from "@/store";

const appStore = useAppStore();
const settingsStore = useSettingsStore();

const sidebarLogo = computed(() => settingsStore.sidebarLogo);

const isMixLayout = computed(() => settingsStore.layout === LayoutEnum.MIX);
const isSidebarCollapsed = computed(() => !appStore.sidebar.opened);
</script>

<style lang="scss" scoped>
.has-logo {
  .el-scrollbar {
    height: calc(100vh - $navbar-height);
  }
}
</style>
