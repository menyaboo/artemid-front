import { IUpdateUserPort, IUserDto } from "@shared/interface/entities/user";
import { EQueryValues } from "@shared/enum";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdateUserSlice } from "@entities/user/slices";
import { enqueueSnackbar } from "notistack";

const useUserUpdateUseCase = () => {
  const refetchClient = useQueryClient();
  const execute = async (port: IUpdateUserPort): Promise<IUserDto> => {
    return UpdateUserSlice(port)
  }

  return useMutation({
    mutationKey: [EQueryValues.UpdateUser],
    mutationFn: execute,
    onSuccess: async () => {
      enqueueSnackbar('Успех', { variant: 'success' })
      await refetchClient.invalidateQueries({queryKey: [EQueryValues.GetAllUsers]})
    },
  })
}

export { useUserUpdateUseCase }
