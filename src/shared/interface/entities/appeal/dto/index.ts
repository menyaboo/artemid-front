import { IUserDto } from "@shared/interface/entities/user";
import { ITypeServiceDto } from "@shared/interface/entities/type-service";
import { IStatusServiceDto } from "@shared/interface/entities/status-service";

interface IAppealDto {
  id: number,
  message: string,
  status: IStatusServiceDto,
  type: ITypeServiceDto,
  user: IUserDto,
  created_at: string,
  updated_at: string,
}

export type {
  IAppealDto,
}