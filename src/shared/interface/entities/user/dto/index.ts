import { EUserRoles } from "@shared/enum";

interface IUserDto {
  id: number,
  name: string,
  email: string,
  telephone: string,
  api_token: string,
  created_at: string,
  updated_at: string,
  role: IUserRoleDto
}

interface IUserRoleDto {
  id: number,
  name: string,
  code: EUserRoles,
  created_at: string,
  updated_at: string,
}

export type {
  IUserDto,
  IUserRoleDto
}