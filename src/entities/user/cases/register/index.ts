import { IRegisterPort, IUserDto } from "@shared/interface/entities/user";
import { EQueryValues, ERouterPath } from "@shared/enum";
import { useMutation } from "@tanstack/react-query";
import { RegisterSlice } from "@entities/user/slices";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const useRegisterUseCase = () => {
  const navigate = useNavigate()
  const execute = async (port: IRegisterPort): Promise<IUserDto> => {
    return RegisterSlice(port)
  }

  return useMutation({
    mutationKey: [EQueryValues.Register],
    mutationFn: execute,
    onSuccess: () => {
      navigate(ERouterPath.LOGIN)
      enqueueSnackbar('Регистрация прошла успешно', { variant: 'success' })
    },
  })
}

export { useRegisterUseCase }
