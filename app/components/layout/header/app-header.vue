<script setup lang="ts">
import HeaderLogo from "~/components/layout/header/header-logo.vue";
import HeaderSearch from "~/components/layout/header/header-search.vue";
import UserMenu from "~/components/layout/header/user-menu.vue";
import {formattedBalance} from "~/utils/formatted-balance.util";
import CreateMenu from "~/components/layout/header/create-menu.vue";

const sidebarStore = useSidebarStore()
const authStore = useAuthStore()

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

    <HeaderSearch v-if="authStore.isAuth" />

    <div class="flex items-center gap-6">
      <CreateMenu />

      <div
          class="flex items-center gap-2.5 px-3 py-1.5 rounded-full
               transition-all duration-200 cursor-pointer
               hover:bg-primary/10"
      >
        <Icon
            name="lucide:wallet"
            size="18"
            class="text-primary transition-colors duration-200
                 group-hover:text-primary-hover"
        />
        <span class="text-sm font-semibold text-foreground transition-colors duration-200">
          {{ formattedBalance(authStore?.user?.account.availableBalance ?? 0) }}
        </span>
      </div>

      <div
          class="flex items-center gap-2 cursor-pointer px-3 py-1.5 rounded-full
               transition-all duration-200 hover:bg-primary/10"
      >
        <Icon
            name="lucide:headphones"
            size="18"
            class="text-primary transition-colors duration-200
                 hover:text-primary-hover"
        />
        <span class="text-sm font-semibold text-foreground transition-colors duration-200
                     hover:text-primary-hover">
          Поддержка
        </span>
      </div>

      <UserMenu v-if="authStore.isAuth" />
    </div>
  </header>
</template>


<style scoped>

</style>