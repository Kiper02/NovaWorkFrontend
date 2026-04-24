<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

const isOpen = ref(false)
</script>

<template>
  <DropdownMenu @update:open="isOpen = $event">
    <DropdownMenuTrigger as-child>
      <div
          class="flex items-center gap-2.5 px-3 py-1.5 rounded-full
               transition-all duration-200 cursor-pointer
               hover:bg-primary/20 border border-border bg-primary/10"
      >
        <Icon
            name="lucide:circle-plus"
            size="18"
            class="text-chart-1 transition-colors duration-200
                 group-hover:text-primary-hover"
        />
        <span class="text-sm font-semibold text-foreground transition-colors duration-200">
          Создать
        </span>
      </div>
    </DropdownMenuTrigger>

    <DropdownMenuContent
        align="end"
        :side-offset="8"
        class="min-w-55 rounded-xl border border-border bg-card p-1 shadow-xl"
    >
      <DropdownMenuItem
          class="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm
               text-foreground transition-colors duration-150
               hover:bg-(--surface-hover) hover:text-foreground
               focus:bg-(--surface-hover) focus:text-foreground focus:outline-none"
      >
        <Icon
            name="lucide:circle-check"
            class="h-4 w-4"
        />
        <span>Задача</span>
      </DropdownMenuItem>

      <DropdownMenuSeparator class="bg-border/50 my-1" />

      <DropdownMenuItem
          class="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm
               text-foreground transition-colors duration-150
               hover:bg-(--surface-hover) hover:text-foreground
               focus:bg-(--surface-hover) focus:text-foreground focus:outline-none"
      >
        <Icon
            name="lucide:clipboard-paste"
            class="h-4 w-4"
        />
        <span>Услуга</span>
      </DropdownMenuItem>

      <DropdownMenuItem
          class="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm
               text-foreground transition-colors duration-150
               hover:bg-(--surface-hover) hover:text-foreground
               focus:bg-(--surface-hover) focus:text-foreground focus:outline-none"
      >
        <Icon
            name="si:projects-alt-duotone"
            class="h-4 w-4 text-muted"
        />
        <span>Проект</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>