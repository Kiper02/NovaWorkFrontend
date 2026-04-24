<script setup lang="ts">
import { storeToRefs } from 'pinia'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { User, Settings, LogOut } from 'lucide-vue-next'

const router = useRouter()

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const userInitials = computed(() => {
  const first = user.value?.profile?.firstName?.[0]?.toUpperCase() ?? ''
  const last = user.value?.profile?.lastName?.[0]?.toUpperCase() ?? ''
  return (first + last) || ''
})

const isOpen = ref(false)
</script>

<template>
  <DropdownMenu @update:open="isOpen = $event">
    <DropdownMenuTrigger as-child>
      <button
          class="group flex items-center gap-2 outline-none transition-all duration-200
               focus-visible:ring-2 focus-visible:ring-primary/50 rounded-full cursor-pointer"
      >
        <div
            v-if="user?.profile?.avatar"
            class="w-10 h-10 rounded-full overflow-hidden ring-1 ring-border/50
                 transition-all duration-200 group-hover:ring-primary/30"
        >
          <NuxtImg
              :src="user.profile.avatar"
              class="w-full h-full object-cover"
              alt="Avatar"
          />
        </div>

        <div
            v-else
            class="w-10 h-10 rounded-full bg-primary/10 ring-1 ring-border/50
                 flex items-center justify-center transition-all duration-200
                 group-hover:bg-primary/20 group-hover:ring-primary/30"
        >
          <span class="text-sm font-medium text-primary">
            {{ userInitials }}
          </span>
        </div>

        <Icon
            name="lucide:chevron-down"
            class="text-muted w-4 h-4 transition-transform duration-200"
            :class="{ 'rotate-180': isOpen }"
        />
      </button>
    </DropdownMenuTrigger>

    <DropdownMenuContent
        align="end"
        :side-offset="8"
        class="min-w-55 rounded-xl border border-border bg-card p-1 shadow-xl"
    >
      <DropdownMenuLabel class="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        {{ user?.email || 'Мой аккаунт' }}
      </DropdownMenuLabel>
      <DropdownMenuSeparator class="bg-border/50 my-1" />

<!--      <DropdownMenuItem-->
<!--          class="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm-->
<!--               text-foreground transition-colors duration-150-->
<!--               hover:bg-(&#45;&#45;surface-hover) hover:text-foreground-->
<!--               focus:bg-(&#45;&#45;surface-hover) focus:text-foreground focus:outline-none"-->
<!--          @click="router.push('/profile')"-->
<!--      >-->
<!--        <User class="h-4 w-4 text-muted-foreground" />-->
<!--        <span>Профиль</span>-->
<!--      </DropdownMenuItem>-->

      <DropdownMenuItem
          class="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm
               text-foreground transition-colors duration-150
               hover:bg-(--surface-hover) hover:text-foreground
               focus:bg-(--surface-hover) focus:text-foreground focus:outline-none"
      >
        <Settings class="h-4 w-4 text-muted-foreground" />
        <span>Настройки</span>
      </DropdownMenuItem>

      <DropdownMenuSeparator class="bg-border/50 my-1" />

      <DropdownMenuItem
          class="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm
               text-red-400 transition-colors duration-150
               hover:bg-red-500/10 hover:text-red-300
               focus:bg-red-500/10 focus:text-red-300 focus:outline-none"
      >
        <LogOut class="h-4 w-4" />
        <span>Выйти</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>