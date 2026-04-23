<script setup lang="ts">

</script>

<template>
  <div class="relative my-6">
    <div class="absolute inset-0 flex items-center">
      <div class="w-full border-t border-border"></div>
    </div>
    <div class="relative flex justify-center text-xs">
      <span class="px-2 bg-background text-muted">или продолжите с</span>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-3">
    <UiButton
        variant="ghost"
        class="w-full h-12 bg-card hover:bg-surfaceHover text-foreground hover:text-primary transition-all duration-200 cursor-pointer"
    >
      <Icon name="logos:google-icon" class="mr-2 w-5 h-5" />
      Google
    </UiButton>
    <UiButton
        variant="ghost"
        class="w-full h-12 bg-card hover:bg-surfaceHover text-foreground hover:text-primary transition-all duration-200 cursor-pointer"
    >
      <Icon name="mdi:github" class="mr-2 w-5 h-5" />
      GitHub
    </UiButton>
  </div>
</template>

<style scoped>

</style>