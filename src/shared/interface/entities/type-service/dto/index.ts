import { ICategoryServiceDto } from "@shared/interface/entities/category-service";

interface ITypeServiceDto {
  id: number,
  name: string,
  category: ICategoryServiceDto,
  created_at: string,
  updated_at: string,
}

export type {
  ITypeServiceDto,
}