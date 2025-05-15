import { axiosConfig } from "@shared/lib";
import { ICategoryServiceDto } from "@shared/interface/entities/category-service";

const GetAllCategoryServiceSlice = async (): Promise<ICategoryServiceDto[]> => {
  return axiosConfig.get('/category-service').then(res => res.data)
}

export {
  GetAllCategoryServiceSlice,
}
