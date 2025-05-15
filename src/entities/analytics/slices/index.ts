import { axiosConfig } from "@shared/lib";
import { IAnalyticsOverallDto, IAnalyticsPersonalDto } from "@shared/interface/entities/analytics";

const GetAnalyticsPersonalSlice = async (): Promise<IAnalyticsPersonalDto> => {
  return axiosConfig.get('/analytics/personal').then(res => res.data)
}

const GetAnalyticsOverallSlice = async (): Promise<IAnalyticsOverallDto> => {
  return axiosConfig.get('/analytics/overall').then(res => res.data)
}

export {
  GetAnalyticsPersonalSlice,
  GetAnalyticsOverallSlice
}
