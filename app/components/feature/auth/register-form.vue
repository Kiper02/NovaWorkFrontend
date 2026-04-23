<script setup lang="ts">
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import { authControllerRegisterMutation } from '~/client/@tanstack/vue-query.gen';
import { registerSchema } from '~/composables/validation/auth.schema';
import { toast } from 'vue-sonner';

const { mutate: register, isPending } = useMutation({
  ...authControllerRegisterMutation(),
  onSuccess: () => navigateTo('/auth/login?registered=true'),
  onError: (err: any) => toast.error(`Ошибка: ${err.message || 'неизвестная ошибка'}`),
});

const showPassword = ref(false);

const { handleSubmit, defineField, errors } = useForm({
  validationSchema: toTypedSchema(registerSchema),
  initialValues: {
    username: '',
    email: '',
    password: '',
    firstName: '',
    middleName: '',
    lastName: '',
  },
});

const [username, usernameAttrs] = defineField('username');
const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [firstName, firstNameAttrs] = defineField('firstName');
const [middleName, middleNameAttrs] = defineField('middleName');
const [lastName, lastNameAttrs] = defineField('lastName');

const onSubmit = handleSubmit((values) => {
  register({ body: values });
});
</script>

<template>
  <form @submit="onSubmit" class="space-y-5">
    <div class="space-y-1">
      <label class="block text-sm font-medium text-foreground/80">
        <span class="text-red-500 mr-1">*</span>Короткое имя
      </label>
      <div class="relative">
        <Icon name="mdi:account" class="absolute left-3 top-1/2 -translate-y-1/2 text-muted w-5 h-5" />
        <UiInput
            v-model="username"
            v-bind="usernameAttrs"
            type="text"
            placeholder="cool_user123"
            autocomplete="username"
            class="pl-10 h-12"
            :class="errors.username ? 'border-red-500 focus-visible:ring-red-500/50' : ''"
        />
      </div>
      <p v-if="errors.username" class="text-red-500 text-sm flex items-center gap-1">
        <Icon name="mdi:alert-circle" class="w-4 h-4" />
        {{ errors.username }}
      </p>
    </div>

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
            autocomplete="new-password"
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

    <div class="grid grid-cols-2 gap-4">
      <div class="space-y-1">
        <label class="block text-sm font-medium text-foreground/80">
          <span class="text-red-500 mr-1">*</span>Имя
        </label>
        <UiInput
            v-model="firstName"
            v-bind="firstNameAttrs"
            placeholder="Иван"
            class="h-12"
            :class="errors.firstName ? 'border-red-500 focus-visible:ring-red-500/50' : ''"
        />
        <p v-if="errors.firstName" class="text-red-500 text-sm">{{ errors.firstName }}</p>
      </div>
      <div class="space-y-1">
        <label class="block text-sm font-medium text-foreground/80">
          Отчество <span class="text-muted text-xs ml-1">(необязательно)</span>
        </label>
        <UiInput
            v-model="middleName"
            v-bind="middleNameAttrs"
            placeholder="Иванович"
            class="h-12"
        />
      </div>
    </div>

    <div class="space-y-1">
      <label class="block text-sm font-medium text-foreground/80">
        <span class="text-red-500 mr-1">*</span>Фамилия
      </label>
      <UiInput
          v-model="lastName"
          v-bind="lastNameAttrs"
          placeholder="Иванов"
          class="h-12"
          :class="errors.lastName ? 'border-red-500 focus-visible:ring-red-500/50' : ''"
      />
      <p v-if="errors.lastName" class="text-red-500 text-sm">{{ errors.lastName }}</p>
    </div>

    <UiButton
        type="submit"
        variant="default"
        :disabled="isPending"
        class="w-full h-12 text-base"
    >
      <Icon v-if="isPending" name="mdi:loading" class="animate-spin w-5 h-5 mr-2" />
      {{ isPending ? 'Регистрация...' : 'Зарегистрироваться' }}
    </UiButton>
  </form>
</template>