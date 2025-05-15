import { axiosConfig } from "@shared/lib";
import { IUserRoleDto } from "@shared/interface/entities/user";

const GetAllUserRoleSlice = async (): Promise<IUserRoleDto[]> => {
  return axiosConfig.get('/role').then(res => res.data)
}

export {
  GetAllUserRoleSlice
}
