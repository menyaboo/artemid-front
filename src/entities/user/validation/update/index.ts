import { z } from "zod";
import { IUpdateUserSchema } from "@shared/interface/entities/user";

const updateSchema: z.ZodSchema<IUpdateUserSchema> = z.object({
  id: z.number(),
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

  role_id: z
    .number()
    .optional(),
})

export {
  updateSchema
}