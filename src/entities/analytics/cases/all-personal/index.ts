import { useQuery } from "@tanstack/react-query";
import { EQueryValues } from "@shared/enum";
import { GetAnalyticsPersonalSlice } from "@entities/analytics/slices";
import { IAnalyticsPersonalDto } from "@shared/interface/entities/analytics";

const useGetAnalyticsPersonalUseCase = () => {
  const execute = async (): Promise<IAnalyticsPersonalDto> => {
    return GetAnalyticsPersonalSlice()
  }

  return useQuery({
    queryFn: execute,
    queryKey: [EQueryValues.GetAnalyticsPersonal],
  })
}

export {
  useGetAnalyticsPersonalUseCase
}