<script setup lang="ts">
import AppHeader from "~/components/layout/header/app-header.vue";
import AppSidebar from "~/components/layout/sidebar/app-sidebar.vue";
import {usersControllerFindMe} from "~/client";


const config = useRuntimeConfig()

const authStore = useAuthStore();
const isLoadingStore = useIsLoadingStore()
const sidebarStore = useSidebarStore()
const router = useRouter()

const { data, isLoading, error } = useQuery({
  queryKey: ['users', 'me'],
  queryFn: () => usersControllerFindMe({}),
  retry: false,
});

watch(data, (userData) => {
  if (userData) {
    authStore.set({
      user: userData,
    });
  }
}, { immediate: true });

watch(error, (err: any) => {
  const errorData = err?.response?._data
  if (errorData && errorData?.statusCode === 401 && (errorData?.code === 'SESSION_MISSING' || errorData?.code === 'USER_NOT_FOUND')) {
    router.push('/auth')
  }
});

</script>

<template>
  <div>
    <AppHeader  />
    <div class="flex h-screen">
      <div
          class="transition-all duration-300 ease-in-out overflow-hidden border-r border-border"
          :class="sidebarStore.isOpen ? 'w-64' : 'w-0'"
      >
        <div class="w-64 h-full ">
          <AppSidebar />
        </div>
      </div>
      <div class="flex-1 overflow-auto">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>