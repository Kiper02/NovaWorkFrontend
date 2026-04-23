<script setup lang="ts">
import { tasksControllerFindAllOptions } from '~/client/@tanstack/vue-query.gen';
import type {TaskResponseForDetailsDto} from "~/client";

const { data, isLoading, error } = useQuery(
    tasksControllerFindAllOptions({
      query: { page: 1, limit: 10 }
    })
);

const tasks = computed<TaskResponseForDetailsDto[]>(() => data.value?.data ?? []);
</script>

<template>
  <div class="p-5 h-full w-full overflow-y-auto scrollbar-custom">
    <div v-if="isLoading">Загрузка...</div>
    <div v-else-if="error">Ошибка: {{ error.message }}</div>
    <div v-else class="grid ...">
      <FeatureHomeTaskItem
          v-for="task in tasks"
          :key="task.id"
          :task="task"
      />
    </div>
  </div>
</template>

<style scoped>

</style>