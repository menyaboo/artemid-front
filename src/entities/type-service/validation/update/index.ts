import { z } from "zod";
import { IUpdateTypeServiceSchema } from "@shared/interface/entities/type-service";

const updateTypeServiceSchema: z.ZodSchema<IUpdateTypeServiceSchema> = z.object({
  name: z.string({ required_error: 'Название обязательно' }).min(3, 'Минимум 4 символа'),
  category_id: z.number(),
  id: z.number()
})

export {
  updateTypeServiceSchema
}