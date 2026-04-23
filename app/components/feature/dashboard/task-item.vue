<script setup lang="ts">
import type {ITaskType} from "~/types/data/task.type";
import { formattedPriceUtil }  from "~/utils/formatted-price.util"

const props = defineProps<{ task: ITaskType }>();
const authStore = useAuthStore()

</script>

<template>
  <div class="py-2 hover:bg-surfaceHover transition-colors duration-150 cursor-pointer">
    <div class="flex items-center justify-between px-5">
      <div class="flex items-center gap-3 flex-1 min-w-0">
        <div
            v-if="task.contract?.contractorId === authStore.user?.id"
            class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0"
        >
          <Icon name="lucide:user" class="w-4 h-4 text-primary" />
        </div>

        <div class="flex-1 min-w-0">
          <p class="text-foreground text-sm truncate">{{ task.title }}</p>
          <span class="text-xs text-muted">{{ formattedPriceUtil(task) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>