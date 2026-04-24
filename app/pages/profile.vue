<script setup lang="ts">
  const authStore = useAuthStore()
</script>

<template>
  <div class="mx-auto max-w-(--max-width-container) pt-7">
    <div class="mb-7">
      <p class="text-muted">{{Formatter.formattedCurrentDate()}}</p>
      <h1 class="text-foreground text-3xl mt-2">Добрый день, {{authStore.user?.profile.firstName}}</h1>

    </div>
  </div>
</template>

<style scoped>

</style>