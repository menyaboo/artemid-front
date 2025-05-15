import { useQuery } from "@tanstack/react-query";
import { EQueryValues } from "@shared/enum";
import { GetAllStatusServiceSlice } from "@entities/status-service/slices";
import { IStatusServiceDto } from "@shared/interface/entities/status-service";

const useGetAllStatusServiceUseCase = () => {
  const execute = async (): Promise<IStatusServiceDto> => {
    return GetAllStatusServiceSlice()
  }

  return useQuery({
    queryFn: execute,
    queryKey: [EQueryValues.GetAllStatusService],
  })
}

export {
  useGetAllStatusServiceUseCase
}