import { z } from "zod";
import { ICreateCategoryServiceSchema } from "@shared/interface/entities/category-service";

const createCategoryServiceSchema: z.ZodSchema<ICreateCategoryServiceSchema> = z.object({
  name: z.string({ required_error: 'Название обязательно' }).min(3, 'Минимум 4 символа'),
})

export {
  createCategoryServiceSchema
}