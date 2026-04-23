<script setup lang="ts">
  const route = useRoute()
  const router = useRouter()


  const term = computed(() => route.query.term as string | undefined)
  const inputValue = ref(term.value || '')

  watch(term, (newTerm) => {
    inputValue.value = newTerm || ''
  })

  const search = () => {
    router.push(`/search?term=${inputValue.value}`)
  }
</script>

<template>
  <div class="flex items-center gap-4 py-2 px-4 border border-gray-800 rounded-md w-[1000px] relative">
    <Icon
        name="lucide:search"
        class="text-muted"
    />
    <div class="h-6 w-px bg-gray-800 mx-2"></div>
    <input
        placeholder="Search tasks, title, description or skills"
        class="bg-transparent placeholder:text-muted outline-none flex-1 text-foreground"
        v-model="inputValue"
        @keyup.enter="search"
    />

    <Icon
        v-if="inputValue.length"
        name="lucide:chevron-right"
        class="w-5 h-5 text-muted hover:text-foreground cursor-pointer p-2"
        @click="search"
    />
  </div>
</template>

<style scoped>

</style>