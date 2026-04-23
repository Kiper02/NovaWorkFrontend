<script setup lang="ts">
import { formattedPriceUtil }  from "~/utils/formatted-price.util"
import type {TaskResponseForDetailsDto} from "~/client";

defineProps<{task: TaskResponseForDetailsDto}>()
</script>

<template>
  <div class="p-4 bg-card rounded-xl flex flex-col h-full border border-transparent hover:border-border transition-all duration-300 ease-in-out cursor-pointer">
    <h2 class="text-foreground">{{ task.title }}</h2>
    <p class="mt-1 text-muted">{{ task.description }}</p>

    <div class="mt-3 flex flex-col gap-3 text-muted">
      <div class="flex items-center gap-1">
        <Icon name="lucide:dollar-sign" class="w-4 h-4 text-green-500" />
        <span class="text-sm text-foreground">{{ formattedPriceUtil(task) }}</span>
      </div>
      <div class="flex items-center gap-1">
        <Icon name="lucide:clock" class="w-4 h-4 text-orange-500" />
        <span class="text-sm">1 день</span>
      </div>
      <div class="flex items-center gap-1">
        <Icon name="lucide:laptop" class="w-4 h-4 text-blue-500" />
        <span class="text-sm">Удалённо</span>
      </div>
    </div>

    <div class="mt-3 flex flex-wrap gap-2 mb-2">
      <span class="px-2 py-1 text-xs rounded-full bg-surfaceHover text-foreground">Веб-дизайн</span>
      <span class="px-2 py-1 text-xs rounded-full bg-surfaceHover text-foreground">Дизайн</span>
    </div>

    <div class="flex items-center gap-2 text-muted text-sm mb-5">
      <div class="flex items-center gap-1">
        <Icon name="lucide:eye" class="w-4 h-4" />
        <p>1 просмотр</p>
      </div>

      <div class="flex items-center gap-1">
        <Icon name="lucide:message-square-more" class="w-4 h-4" />
        <p>0 откликов</p>
      </div>
    </div>

    <div class="mt-auto">
      <div class="border-t border-t-border">
        <div class="mt-2 py-1 flex items-center gap-2 hover:bg-surfaceHover transition-all duration-300 ease-in-out cursor-pointer rounded-xl">
          <div class="w-10 h-10 rounded-full overflow-hidden">
            <NuxtImg src="/mock/kiper.webp" class="w-full h-full" />
          </div>

          <div>
            <p class="text-foreground">SystemOwner</p>
            <p class="text-muted text-sm">на платформе с 1 март.</p>
          </div>
        </div>
      </div>

      <button class="bg-primary text-foreground font-medium py-2.5 px-2
        rounded-lg mt-2 hover:bg-primary/70 w-full
        transition-all duration-300 ease-in-out cursor-pointer"
      >
        Откликнуться
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>