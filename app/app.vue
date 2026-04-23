<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner"
import 'vue-sonner/style.css'

</script>
<template>
  <div class="bg-background h-screen w-screen overflow-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toaster position="top-right"/>
  </div>
</template>