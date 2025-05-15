import { axiosConfig } from "@shared/lib";
import { IStatusServiceDto } from "@shared/interface/entities/status-service";

const GetAllStatusServiceSlice = async (): Promise<IStatusServiceDto> => {
  return axiosConfig.get('/status-service')
}

export {
  GetAllStatusServiceSlice
}
