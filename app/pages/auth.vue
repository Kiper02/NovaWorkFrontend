<script setup lang="ts">
import LoginForm from "~/components/feature/auth/login-form.vue";
import RegisterForm from "~/components/feature/auth/register-form.vue";
import SocialAuthButtons from "~/components/feature/auth/social-auth-buttons.vue";

definePageMeta({
  layout: false
})

const route = useRoute();
const router = useRouter();

const typeForm = ref<'login' | 'register'>('login');

watchEffect(() => {
  switch (route.query.type) {
    case 'login':
      typeForm.value = 'login';
      break
    case 'register':
      typeForm.value = 'register';
      break
    default:
      router.replace({ query: { type: 'login' } });
      typeForm.value = 'login';
  }
})

const type = computed(() => (route.query.type === 'register' ? 'register' : 'login'));

function switchType(newType: 'login' | 'register') {
  router.push({ query: { type: newType } });
}
</script>

<template>
  <div class="flex items-center h-full w-full">
    <div class="bg-[url('/auth-hero.jpg')] bg-cover w-[70%] h-full"></div>

    <div class="h-full p-20 flex-1 overflow-y-auto">
      <NuxtImg src="/logo.svg" class="h-20 w-auto" />

      <h1 class="mt-12 text-foreground text-3xl font-bold">
        {{ type === 'login' ? 'С возвращением' : 'Добро пожаловать' }}
      </h1>

      <div class="flex gap-4 mt-4">
        <button
            @click="switchType('login')"
            :class="type === 'login' ? 'text-primary border-b-2 border-primary' : 'text-muted'"
            class="pb-2 px-1 font-medium transition cursor-pointer"
        >
          Вход
        </button>
        <button
            @click="switchType('register')"
            :class="type === 'register' ? 'text-primary border-b-2 border-primary' : 'text-muted'"
            class="pb-2 px-1 font-medium transition cursor-pointer"
        >
          Регистрация
        </button>
      </div>

      <div class="mt-6">
        <LoginForm v-if="type === 'login'" />
        <RegisterForm v-else />
        <SocialAuthButtons />
      </div>
    </div>
  </div>
</template>