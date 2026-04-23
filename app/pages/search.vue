<script setup lang="ts">
import type {ITaskType} from "~/types/data/task.type";
import {taskMock} from "~/mocks/task.mock";

const route = useRoute()
const term = route.query.term

computed(() => term)

interface IStatusTask {
  isActive: boolean;
  title: string;
  value: string
}

const statusesTask: IStatusTask[] = [
  {
    isActive: true,
    title: "Все",
    value: "all"
  },
  {
    isActive: false,
    title: "Просмотренные",
    value: "viewed"
  },
  {
    isActive: false,
    title: "Недавно опубликованные",
    value: "recent"
  }
]

const tasks = ref<ITaskType[]>([])

onMounted(async () => {
  try {
    tasks.value = taskMock.concat(taskMock).concat(taskMock).concat(taskMock).concat(taskMock)
  } catch (e) {

  }
})
</script>

<template>
  <div class="mx-64 h-full pt-10 text-foreground">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <div
            v-for="status in statusesTask"
            :class="[
            'rounded-md shadow-sm sm:rounded-lg text-[#1d1f21] text-sm px-3 py-1.5 transition-all duration-300 ease-in-out',
            status.isActive ? 'bg-foreground text-background' : 'bg-card text-foreground hover:bg-surfaceHover cursor-pointer'
        ]"
        >
          {{status.title}}
        </div>
      </div>

      <div class="flex items-center gap-1 text-foreground font-semibold hover:bg-surfaceHover px-3 py-1 transition-all duration-300 ease-out rounded-lg cursor-pointer">
        <Icon name="lucide:list-filter" class="w-5 h-5" />
        <p class="">Фильтры</p>
      </div>
    </div>
    <h1 class="mt-3 text-xl">По вашему запросу "{{term}}" найдено {{tasks.length}} задач</h1>

    <div class="bg-border h-[0.5px] w-full mt-5"></div>

    <div class="flex flex-col gap-2 mt-5">
      <FeatureSearchTaskItem
        v-for="task in tasks"
        :key="task.id"
        :task=task
      />
    </div>
  </div>
</template>

<style scoped>

</style>