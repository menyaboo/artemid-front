import { useQuery } from "@tanstack/react-query";
import { EQueryValues } from "@shared/enum";
import { GetAllUserRoleSlice } from "@entities/user-role/slices";
import { IUserRoleDto } from "@shared/interface/entities/user";

const useGetAllUserRoleUseCase = () => {
  const execute = async (): Promise<IUserRoleDto[]> => {
    return GetAllUserRoleSlice()
  }

  return useQuery({
    queryFn: execute,
    queryKey: [EQueryValues.GetUserRoles],
  })
}

export {
  useGetAllUserRoleUseCase
}