import { z } from "zod";
import { IRegisterSchema } from "@shared/interface/entities/user";

const registerSchema: z.ZodSchema<IRegisterSchema> = z.object({
  name: z
    .string({ required_error: 'Имя обязательно' })
    .min(2, 'Имя должно содержать минимум 2 символа'),

  email: z
    .string({ required_error: 'Email обязателен' })
    .email('Некорректный формат email'),

  telephone: z
    .string({ required_error: 'Телефон обязателен' })
    .length(11, 'Телефон должен содержать 11 цифр')
    .regex(/^\d+$/, 'Телефон должен содержать только цифры'),

  password: z
    .string({ required_error: 'Пароль обязателен' })
    .min(6, 'Пароль должен быть не короче 6 символов'),

  password_confirmation: z
    .string({ required_error: 'Подтверждение пароля обязательно' }),

  role_id: z
    .number()
    .optional(),
}).refine((data) => data.password === data.password_confirmation, {
  message: 'Пароли не совпадают',
  path: ['password_confirmation'],
});

export {
  registerSchema
}