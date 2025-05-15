import { z } from "zod";
import { ICreateAppealSchema } from "@shared/interface/entities/appeal";

const createAppealSchema: z.ZodSchema<ICreateAppealSchema> = z.object({
  message: z.string({ required_error: 'Сообщение обязательно' }).min(10, 'Минимум 10 символов'),
  type_id: z.number().optional(),
})

export {
  createAppealSchema
}