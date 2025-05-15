import { useQuery } from "@tanstack/react-query";
import { EQueryValues } from "@shared/enum";
import { GetAllCategoryServiceSlice } from "@entities/category-service/slices";
import { ICategoryServiceDto } from "@shared/interface/entities/category-service";

const useGetAllCategoryServiceUseCase = () => {
  const execute = async (): Promise<ICategoryServiceDto[]> => {
    return GetAllCategoryServiceSlice()
  }

  return useQuery({
    queryFn: execute,
    queryKey: [EQueryValues.GetAllCategoryService],
  })
}

export {
  useGetAllCategoryServiceUseCase
}