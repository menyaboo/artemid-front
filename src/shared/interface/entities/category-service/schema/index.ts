import { ICreateCategoryServicePort, IUpdateCategoryServicePort } from "@shared/interface/entities/category-service";

type IUpdateCategoryServiceSchema = IUpdateCategoryServicePort
type ICreateCategoryServiceSchema = ICreateCategoryServicePort

export type {
	IUpdateCategoryServiceSchema,
	ICreateCategoryServiceSchema
}