import { useQuery } from "@tanstack/react-query";
import { EQueryValues } from "@shared/enum";
import { GetAllPersonalAppealSlice } from "@entities/appeal/slices";
import { IAppealDto } from "@shared/interface/entities/appeal";

const useGetAllPersonalAppealUseCase = () => {
  const execute = async (): Promise<IAppealDto[]> => {
    return GetAllPersonalAppealSlice()
  }

  return useQuery({
    queryFn: execute,
    queryKey: [EQueryValues.GetAllAppealPersonal],
  })
}

export {
  useGetAllPersonalAppealUseCase
}