import type { Dispatch, SetStateAction } from 'react'

import type { IAuthGuards } from '@shared/store/auth/guards'
import { IUserDto } from "@shared/interface/entities/user";

type IUser = IUserDto | null

interface IAuthContext {
  user: IUser
  setUser: Dispatch<SetStateAction<IUser>>
  guards: IAuthGuards
}

export type {
  IUser,
  IAuthContext
}
