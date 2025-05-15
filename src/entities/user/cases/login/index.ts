import type { UseMutationResult } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'

import Cookies from 'js-cookie'
import { useAuthContext } from '@shared/store/auth'

import { ILoginPort, IUserDto } from "@shared/interface/entities/user";
import { ECookieValues, EQueryValues, ERouterPath } from '@shared/enum';
import { LoginSlice } from "@entities/user/slices";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar } from "notistack";

const useLoginUseCase = (): UseMutationResult<IUserDto, Error, ILoginPort, unknown> => {
  const { setUser } = useAuthContext()
  const navigate = useNavigate()

  const execute = async (port: ILoginPort): Promise<IUserDto> => {
    return LoginSlice(port)
  }

  return useMutation({
    mutationFn: execute,
    mutationKey: [EQueryValues.Login],
    onSuccess: (value): void => {
      setUser(value)
      Cookies.set(ECookieValues.ACCESS_TOKEN, value.api_token)
      enqueueSnackbar("Вы успешно вошли в систему.", { variant: "success" })
      navigate(ERouterPath.MAIN)
    },
    onError: (): void => {
      setUser(null)
    }
  })
}

export {
  useLoginUseCase
}
