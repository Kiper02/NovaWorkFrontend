<script setup lang="ts">
  import type {ITaskType} from "~/types/data/task.type";

  defineProps<{task: ITaskType}>()
</script>

<template>
  <div class="border-b border-b-border pb-2 cursor-pointer">
    <div
        class="rounded-xl p-4 flex flex-col gap-4
        transition-all duration-300 hover:bg-card"
    >
      <h3 class="text-foreground font-semibold text-lg">{{ task.title }}</h3>
      <p class="text-muted text-sm mt-1 line-clamp-2">{{ task.description }}</p>

      <div class="flex flex-wrap gap-3 mt-3 text-muted text-sm">
        <div class="flex items-center gap-1">
          <Icon name="lucide:dollar-sign" class="w-4 h-4 text-green-500" />
          <span>{{ formattedPriceUtil(task) }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="lucide:clock" class="w-4 h-4 text-orange-500" />
          <span>1 день</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="lucide:map-pin" class="w-4 h-4 text-blue-500" />
          <span>Удалённо</span>
        </div>
      </div>

      <div class="flex flex-wrap gap-2 mt-3">
        <span class="px-2 py-1 text-xs rounded-full bg-surfaceHover text-foreground">Веб-дизайн</span>
        <span class="px-2 py-1 text-xs rounded-full bg-surfaceHover text-foreground">Дизайн</span>
      </div>

      <div class="mt-2 py-1 flex items-center gap-2 hover:bg-surfaceHover transition-all duration-300 ease-in-out cursor-pointer rounded-xl max-w-max px-2">
        <div class="w-10 h-10 rounded-full overflow-hidden">
          <NuxtImg src="/mock/kiper.webp" class="w-full h-full" />
        </div>

        <div>
          <p class="text-foreground">SystemOwner</p>
          <p class="text-muted text-sm">на платформе с 1 март.</p>
        </div>
      </div>
      <div class="flex items-center gap-4 text-muted text-sm">
        <div class="flex items-center gap-1">
          <Icon name="lucide:eye" class="w-4 h-4" />
          <span>1 просмотр</span>
        </div>
        <div class="flex items-center gap-1">
          <Icon name="lucide:message-square-more" class="w-4 h-4" />
          <span>0 откликов</span>
        </div>
      </div>
      <button class="max-w-max bg-primary hover:bg-primary/70 text-foreground font-medium py-2 px-4 rounded-lg transition-all duration-300 w-full md:w-auto">
        Откликнуться
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>