import { axiosConfig } from "@shared/lib";
import { ITypeServiceDto, ITypeServiceParams } from "@shared/interface/entities/type-service";
import { ICreateTypeServicePort, IUpdateTypeServicePort } from "@shared/interface/entities/type-service";
import { UUIId } from "@shared/interface/common";

const GetAllTypeServiceSlice = async (params?: Partial<ITypeServiceParams>): Promise<ITypeServiceDto[]> => {
  return axiosConfig.get('/type-service', { params }).then(res => res.data)
}

const UpdateTypeServiceSlice = async ({ id, ...port }: IUpdateTypeServicePort): Promise<void> => {
  return axiosConfig.post(`/type-service/${ id }/update`, port)
}

const CreateTypeServiceSlice = async (port: ICreateTypeServicePort): Promise<void> => {
  return axiosConfig.post(`/type-service/store`, port)
}

const DeleteTypeServiceSlice = async ({ id }: UUIId): Promise<void> => {
  return axiosConfig.post(`/type-service/${ id }/destroy`)
}

export {
  GetAllTypeServiceSlice,
  UpdateTypeServiceSlice,
  CreateTypeServiceSlice,
  DeleteTypeServiceSlice
}
