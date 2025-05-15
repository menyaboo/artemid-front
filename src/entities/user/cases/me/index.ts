import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

import Cookies from 'js-cookie'
import type { Dispatch, SetStateAction } from 'react'
import { ECookieValues, EQueryValues } from "@shared/enum";
import { axiosConfig } from "@shared/lib";
import { IUserDto } from "@shared/interface/entities/user";
import { IUser } from "@shared/store/auth";
import { GetMeSlice } from '@entities/user/slices';

interface IUseLoadUserProps {
  setUser: Dispatch<SetStateAction<IUser>>
}

type IUseLoadUserResult = UseQueryResult<IUserDto>

const useLoadUserRequest = (props: IUseLoadUserProps): IUseLoadUserResult => {
  const { setUser } = props

  const callback = async (): Promise<IUserDto> => {
    const accessToken = Cookies.get(ECookieValues.ACCESS_TOKEN)
    axiosConfig.defaults.headers.common.Authorization = `Bearer ${accessToken}`

    return GetMeSlice().then((payload: IUserDto) => {
      setUser(payload)
      return payload
    }).catch(async () => {
      setUser(null)
      return Promise.reject({
        message: 'Access token expired'
      })
    })
  }

  return useQuery({
    queryKey: [EQueryValues.GetMe],
    queryFn: callback,
  })
}

export { useLoadUserRequest }
