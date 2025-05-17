import { z } from "zod";
import { IUpdateAppealSchema } from "@shared/interface/entities/appeal";

const updateAppealSchema: z.ZodSchema<IUpdateAppealSchema> = z.object({
  message: z.string({ required_error: 'Сообщение обязательно' }).min(10, 'Минимум 10 символов'),
  type_id: z.number().optional(),
  status_id: z.number().optional(),
  id: z.number()
})

export {
  updateAppealSchema
}