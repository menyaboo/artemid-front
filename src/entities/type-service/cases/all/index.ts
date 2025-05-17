import { useQuery } from "@tanstack/react-query";
import { EQueryValues } from "@shared/enum";
import { GetAllTypeServiceSlice } from "@entities/type-service/slices";
import { ITypeServiceDto, ITypeServiceParams } from "@shared/interface/entities/type-service";

const useGetAllTypeServiceUseCase = (params?: Partial<ITypeServiceParams>) => {
  const execute = async (): Promise<ITypeServiceDto[]> => {
    return GetAllTypeServiceSlice(params)
  }

  return useQuery({
    queryFn: execute,
    queryKey: [EQueryValues.GetAllTypeService, params]
  })
}

export {
  useGetAllTypeServiceUseCase
}