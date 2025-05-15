import { useMutation } from '@tanstack/react-query'
import { ECookieValues, EQueryValues } from "@shared/enum";
import { useAuthContext } from "@shared/store/auth";
import { LogoutSlice } from '@entities/user/slices';
import Cookies from "js-cookie";
import { enqueueSnackbar } from "notistack";

const useLogoutUserUseCase = () => {
  const { setUser } = useAuthContext()

  const callback = async (): Promise<void> => {
    return LogoutSlice()
  }

  return useMutation({
    mutationKey: [EQueryValues.Logout],
    mutationFn: callback,
    onSuccess: () => {
      setUser(null)
      Cookies.remove(ECookieValues.ACCESS_TOKEN)
      enqueueSnackbar("Вы успешно вышли из системы.", { variant: "success" })
    },
  })
}

export { useLogoutUserUseCase }
