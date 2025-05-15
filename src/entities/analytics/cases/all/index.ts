import { useQuery } from "@tanstack/react-query";
import { EQueryValues } from "@shared/enum";
import { IAnalyticsOverallDto } from "@shared/interface/entities/analytics";
import { GetAnalyticsOverallSlice } from "@entities/analytics/slices";

const useGetAnalyticsOverallUseCase = () => {
  const execute = async (): Promise<IAnalyticsOverallDto> => {
    return GetAnalyticsOverallSlice()
  }

  return useQuery({
    queryFn: execute,
    queryKey: [EQueryValues.GetAnalyticsOverall],
  })
}

export {
  useGetAnalyticsOverallUseCase
}