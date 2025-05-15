import { z } from "zod";
import { ILoginSchema } from "@shared/interface/entities/user";

const loginSchema: z.ZodSchema<ILoginSchema> = z.object({
  email: z
    .string({ required_error: 'Email обязателен' })
    .email('Некорректный формат email'),

  password: z
    .string({ required_error: 'Пароль обязателен' })
    .min(6, 'Пароль должен быть не короче 6 символов'),
})

export {
  loginSchema
}