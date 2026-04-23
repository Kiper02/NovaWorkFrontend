import { z } from 'zod';

export const loginSchema = z.object({
    email: z.email('Введите корректный email'),
    password: z.string().min(5, 'Пароль должен содержать минимум 5 символов'),
});

export const registerSchema = z.object({
    username: z.string().min(5, 'Username минимум 5 символов').max(20)
        .or(z.literal(''))
        .refine(val => val !== '', { message: 'Username обязателен' }),

    email: z.string().email('Введите корректный email')
        .or(z.literal(''))
        .refine(val => val !== '', { message: 'Email обязателен' }),

    password: z.string().min(5, 'Пароль минимум 5 символов')
        .or(z.literal(''))
        .refine(val => val !== '', { message: 'Пароль обязателен' }),

    firstName: z.string().min(1, 'Имя обязательно')
        .or(z.literal(''))
        .refine(val => val !== '', { message: 'Имя обязательно' }),

    middleName: z.string().optional(),

    lastName: z.string().min(1, 'Фамилия обязательна')
        .or(z.literal(''))
        .refine(val => val !== '', { message: 'Фамилия обязательна' }),
});