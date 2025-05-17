import { axiosConfig } from "@shared/lib";
import {
  ICategoryServiceDto,
  ICreateCategoryServicePort,
  IUpdateCategoryServicePort
} from "@shared/interface/entities/category-service";
import { UUIId } from "@shared/interface/common";

const GetAllCategoryServiceSlice = async (): Promise<ICategoryServiceDto[]> => {
  return axiosConfig.get('/category-service').then(res => res.data)
}

const UpdateCategoryServiceSlice = async ({ id, ...port }: IUpdateCategoryServicePort): Promise<void> => {
  return axiosConfig.post(`/category-service/${ id }/update`, port)
}

const CreateCategoryServiceSlice = async (port: ICreateCategoryServicePort): Promise<void> => {
  return axiosConfig.post(`/category-service/store`, port)
}

const DeleteCategoryServiceSlice = async ({ id }: UUIId): Promise<void> => {
  return axiosConfig.post(`/category-service/${ id }/destroy`)
}

export {
  GetAllCategoryServiceSlice,
  UpdateCategoryServiceSlice,
  DeleteCategoryServiceSlice,
  CreateCategoryServiceSlice
}
