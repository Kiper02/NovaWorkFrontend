<script setup lang="ts">


  const authStore = useAuthStore()

  const formatter = Intl.DateTimeFormat('ru-RU', {weekday: 'long', day: 'numeric', month: 'long'})
  const currentDate = formatter.format(new Date())
</script>

<template>
  <div class="mx-auto max-w-container pt-7">
    <div class="mb-7">
      <p class="text-muted">{{currentDate}}</p>
      <h1 class="text-foreground text-3xl mt-2">Добрый день, {{authStore.user?.profile.firstName}}</h1>
    </div>
    <FeatureDashboardContainer>
      <FeatureDashboardTasks />
    </FeatureDashboardContainer>
  </div>
</template>

<style scoped>

</style>