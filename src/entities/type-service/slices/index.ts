import { axiosConfig } from "@shared/lib";
import { ITypeServiceDto, ITypeServiceParams } from "@shared/interface/entities/type-service";

const GetAllTypeServiceSlice = async (params: Partial<ITypeServiceParams>): Promise<ITypeServiceDto[]> => {
  return axiosConfig.get('/type-service', { params }).then(res => res.data)
}

export {
  GetAllTypeServiceSlice,
}
