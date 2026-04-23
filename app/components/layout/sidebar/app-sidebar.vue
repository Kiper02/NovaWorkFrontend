<script setup lang="ts">

import {sidebarConst} from "~/consts/sidebar.const";
const router = useRouter()
const route = useRoute()
const term = route.params
const isActive = (itemPath: string) => {
  return route.path === itemPath;
};
</script>

<template>
  <aside class="w-64 h-full px-2">
    <div
        v-for="item in sidebarConst"
        :key="item.path"
        :class="[
            'flex items-center gap-3 mt-1.5 px-5 py-1.5 rounded-lg transition-all duration-300 ease-in-out hover:bg-surfaceHover cursor-pointer',
            isActive(item.path)
            ? 'bg-card'
            : ''
        ]"
        @click="router.push({ path: item.path })"
    >
      <Icon :name="item.icon" class="w-5 h-5 text-gray-500"/>
      <p class="text-foreground">{{ item.title }}</p>
    </div>
  </aside>
</template>

<style scoped>

</style>