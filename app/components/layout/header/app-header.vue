<script setup lang="ts">
import HeaderLogo from "~/components/layout/header/header-logo.vue";
import HeaderSearch from "~/components/layout/header/header-search.vue";
import HeaderActions from "~/components/layout/header/header-actions.vue";

interface IProps {
  withAuth: boolean
}

withDefaults(defineProps<IProps>(), {
  withAuth: true
})

const sidebarStore = useSidebarStore()

</script>

<template>
  <header class="flex items-center justify-between px-4 py-2 bg-card border-b border-b-border select-none">
    <div class="flex items-center gap-2">
      <Icon
          name="lucide:text-align-justify"
          class="text-foreground w-5 h-5 hover:text-gray-500
          transition-all duration-300 ease-in-out cursor-pointer"
          @click="sidebarStore.set(!sidebarStore.isOpen)"
      />
      <HeaderLogo />
    </div>
    <HeaderSearch v-if="withAuth" />
    <HeaderActions v-if="withAuth" />
  </header>
</template>

<style scoped>

</style>