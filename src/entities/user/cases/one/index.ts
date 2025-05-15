import { useQuery } from '@tanstack/react-query'
import { EQueryValues } from "@shared/enum";
import { IUserDto } from "@shared/interface/entities/user";
import { GetOneUsersSlice } from '@entities/user/slices';
import { UUIId } from "@shared/interface/common";

const useGetOneUserRequest = (params: UUIId) => {
  const execute = async (): Promise<IUserDto> => {
    return GetOneUsersSlice(params)
  }

  return useQuery({
    queryKey: [EQueryValues.GetOne],
    queryFn: execute,
  })
}

export { useGetOneUserRequest }
