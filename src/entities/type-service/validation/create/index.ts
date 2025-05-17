import { z } from "zod";
import { ICreateTypeServiceSchema } from "@shared/interface/entities/type-service";

const createTypeServiceSchema: z.ZodSchema<ICreateTypeServiceSchema> = z.object({
  category_id: z.number(),
  name: z.string({ required_error: 'Название обязательно' }).min(3, 'Минимум 4 символа'),
})

export {
  createTypeServiceSchema
}