<script setup lang="ts">
const authStore = useAuthStore()
const user = authStore.user
</script>

<template>
  <div>
    <div class="flex items-center gap-2 cursor-pointer group">
      <div class="w-10 h-10 rounded-full overflow-hidden
        group-hover:brightness-75 transition-all duration-200"
      >
        <NuxtImg :src="user?.avatar" class="w-full h-full"/>
      </div>
      <Icon
          name="lucide:chevron-down"
          class="text-foreground w-5 h-5"
      />
    </div>
  </div>
</template>

<style scoped>

</style>