import { z } from "zod";
import { IUpdateCategoryServiceSchema } from "@shared/interface/entities/category-service";

const updateCategoryServiceSchema: z.ZodSchema<IUpdateCategoryServiceSchema> = z.object({
  name: z.string({ required_error: 'Название обязательно' }).min(3, 'Минимум 4 символа'),
  id: z.number()
})

export {
  updateCategoryServiceSchema
}