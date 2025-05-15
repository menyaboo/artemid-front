import { useQuery } from "@tanstack/react-query";
import { EQueryValues } from "@shared/enum";
import { GetAllUsersSlice } from "@entities/user/slices";
import { IUserDto } from "@shared/interface/entities/user";

const useGetAllUsersUseCase = () => {
  const execute = async (): Promise<IUserDto[]> => {
    return GetAllUsersSlice()
  }

  return useQuery({
    queryFn: execute,
    queryKey: [EQueryValues.GetAllUsers],
  })
}

export {
  useGetAllUsersUseCase
}