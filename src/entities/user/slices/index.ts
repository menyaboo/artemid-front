import { ILoginPort, IRegisterPort, IUpdateUserPort, IUserDto } from "@shared/interface/entities/user";
import { axiosConfig } from "@shared/lib";
import { UUIId } from "@shared/interface/common";

const LoginSlice = async (port: ILoginPort): Promise<IUserDto> => {
  return axiosConfig.post<IUserDto>('/auth/login', port).then((res) => res.data)
}

const RegisterSlice = async (port: IRegisterPort): Promise<IUserDto> => {
  return axiosConfig.post<IUserDto>('/auth/register', port).then((res) => res.data)
}

const GetMeSlice = async (): Promise<IUserDto> => {
  return axiosConfig.get<IUserDto>('/user').then((res) => res.data)
}

const LogoutSlice = async (): Promise<void> => {
  return axiosConfig.get('/auth/logout')
}

const GetAllUsersSlice = async (): Promise<IUserDto[]> => {
  return axiosConfig.get('/users').then((res) => res.data)
}

const UpdateUserSlice = async ({ id, ...port }: IUpdateUserPort): Promise<IUserDto> => {
  return axiosConfig.post<IUserDto>(`/user/${ id }/update`, port).then((res) => res.data)
}

const GetOneUsersSlice = async ({ id }: UUIId): Promise<IUserDto> => {
  return axiosConfig.get(`/user/${ id }`).then((res) => res.data)
}

export {
  LoginSlice,
  GetMeSlice,
  RegisterSlice,
  LogoutSlice,
  GetAllUsersSlice,
  UpdateUserSlice,
  GetOneUsersSlice
}
