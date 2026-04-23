<script setup lang="ts">
import {taskMock} from "~/mocks/task.mock";
import type {ITaskType} from "~/types/data/task.type";
import TaskItem from "~/components/feature/dashboard/task-item.vue";

const authStore = useAuthStore()

enum FilterTaskEnum {
  NOT_DISTRIBUTED = "NOT_DISTRIBUTED",
  ENTRUSTED = "ENTRUSTED",
  ASSIGNED = "ASSIGNED",
  DONE = "DONE"
}

interface IFiltersTask {
  id: number;
  label: string;
  isActive: boolean;
  value: string;
}

const dataFiltersTasks = ref<IFiltersTask[]>([
  {id: 1, label: 'Не распределено', isActive: true, value: FilterTaskEnum.NOT_DISTRIBUTED},
  { id: 2, label: 'Поручено', isActive: false, value: FilterTaskEnum.ENTRUSTED },
  { id: 3, label: 'Назначено', isActive: false, value: FilterTaskEnum.ASSIGNED },
  { id: 4, label: 'Выполнено', isActive: false, value: FilterTaskEnum.DONE }
])

const changeFilter = (selectedFilter: IFiltersTask) => {
  dataFiltersTasks.value.forEach(filter => filter.isActive = false)
  selectedFilter.isActive = true
}

const tasks = ref<ITaskType[]>([])

onMounted(async () => {
  try {
    tasks.value = taskMock.filter(task =>
        task.userId === authStore.user?.id
        || task.contract?.clientId === authStore.user?.id
        || task.contract?.contractorId === authStore.user?.id
    );
  } catch (e) {
    console.error(e);
  }
});

const clickCreateTask = () => {
  const switchFilter = dataFiltersTasks.value.find(filter => filter.value === FilterTaskEnum.NOT_DISTRIBUTED)
  if(switchFilter) {
    changeFilter(switchFilter)
  }
}

</script>

<template>
  <div class="h-96 flex flex-col overflow-hidden">
    <div>
      <div class="border-b border-b-border px-5 pt-5">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 overflow-hidden rounded-full">
            <NuxtImg :src="authStore.user?.avatar" class="w-full h-full" />
          </div>
          <h4 class="text-foreground font-semibold text-lg">Мои задачи</h4>
        </div>

        <div class="mt-2 flex items-center gap-4 pl-14">
          <div
              v-for="filter in dataFiltersTasks"
              :key="filter.label"
              @click="changeFilter(filter)"
              :class="[
              'text-sm pb-2 cursor-pointer',
              filter.isActive
                ? 'text-foreground border-b-2 border-b-foreground'
                : 'text-muted'
            ]"
          >
            {{ filter.label }}
          </div>
        </div>
      </div>

      <div class="px-3 mt-2">
        <div
            class="py-1 px-2 flex items-center gap-2 text-muted
          hover:bg-surfaceHover transition-all duration-200 ease-in-out rounded cursor-pointer
            max-w-max hover:text-foreground"
            @click="clickCreateTask"
        >
          <Icon name="lucide:plus" class="w-4 h-4"/>
          <p class="text-sm">Создать задачу</p>
        </div>
      </div>
    </div>

    <div class="flex-1 overflow-y-auto scrollbar-custom">
      <TaskItem
          v-for="task in tasks"
          :key="task.id"
          :task="task"
      />
    </div>
  </div>
</template>