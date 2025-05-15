import { useQuery } from "@tanstack/react-query";
import { EQueryValues } from "@shared/enum";
import { GetAllAppealSlice } from "@entities/appeal/slices";
import { IAppealDto } from "@shared/interface/entities/appeal";

const useGetAllAppealUseCase = () => {
  const execute = async (): Promise<IAppealDto[]> => {
    return GetAllAppealSlice()
  }

  return useQuery({
    queryFn: execute,
    queryKey: [EQueryValues.GetAllAppealPersonal],
  })
}

export {
  useGetAllAppealUseCase
}