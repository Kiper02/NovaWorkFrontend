<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { loginSchema } from '~/composables/validation/auth.schema';
import { toast } from 'vue-sonner';

import { authControllerLoginMutation } from '~/client/@tanstack/vue-query.gen';

const { mutate: login, isPending, error } = useMutation({
  ...authControllerLoginMutation(),
  onSuccess: () => {
    toast.success('Добро пожаловать!');
    navigateTo('/home');
  },
  onError: (err: any) => toast.error(`Ошибка: ${err.message || 'Не удалось войти'}`),
});

const showPassword = ref(false);

const { handleSubmit, defineField, errors } = useForm({
  validationSchema: toTypedSchema(loginSchema),
  initialValues: {
    email: '',
    password: '',
  },
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');

const onSubmit = handleSubmit((values) => {
  login({ body: values });
});
</script>

<template>
  <form @submit="onSubmit" class="space-y-5">
    <div class="space-y-1">
      <label class="block text-sm font-medium text-foreground/80">
        <span class="text-red-500 mr-1">*</span>Email
      </label>
      <div class="relative">
        <Icon name="mdi:email" class="absolute left-3 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
        <UiInput
            v-model="email"
            v-bind="emailAttrs"
            type="email"
            placeholder="name@example.com"
            autocomplete="email"
            class="pl-10 h-12"
            :class="errors.email ? 'border-red-500 focus-visible:ring-red-500/50' : ''"
        />
      </div>
      <p v-if="errors.email" class="text-red-500 text-sm flex items-center gap-1">
        <Icon name="mdi:alert-circle" class="w-4 h-4" />
        {{ errors.email }}
      </p>
    </div>

    <div class="space-y-1">
      <label class="block text-sm font-medium text-foreground/80">
        <span class="text-red-500 mr-1">*</span>Пароль
      </label>
      <div class="relative">
        <Icon name="mdi:lock" class="absolute left-3 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
        <UiInput
            v-model="password"
            v-bind="passwordAttrs"
            :type="showPassword ? 'text' : 'password'"
            placeholder="••••••••"
            autocomplete="current-password"
            class="pl-10 pr-10 h-12"
            :class="errors.password ? 'border-red-500 focus-visible:ring-red-500/50' : ''"
        />
        <button
            type="button"
            @click="showPassword = !showPassword"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition"
        >
          <Icon :name="showPassword ? 'mdi:eye-off' : 'mdi:eye'" class="w-5 h-5" />
        </button>
      </div>
      <p v-if="errors.password" class="text-red-500 text-sm flex items-center gap-1">
        <Icon name="mdi:alert-circle" class="w-4 h-4" />
        {{ errors.password }}
      </p>
    </div>

    <UiButton
        type="submit"
        variant="default"
        :disabled="isPending"
        class="w-full h-12 text-base"
    >
      <Icon v-if="isPending" name="mdi:loading" class="animate-spin w-5 h-5 mr-2" />
      {{ isPending ? 'Вход...' : 'Войти' }}
    </UiButton>
  </form>
</template>