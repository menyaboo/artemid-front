import { deepmerge } from 'deepmerge-ts'

import type { IUser } from '@shared/store/auth'

import type { ReactNode } from 'react'
import { EUserRoles } from "@shared/enum";
import { IUserDto } from "@shared/interface/entities/user";

type ReturnElement = ReactNode | null

interface IGuardOptions {
  failureState?: ReturnElement
}

interface IAuthGuardOptions extends IGuardOptions {
  roles?: EUserRoles[] | null
}

interface IAuthGuards {
  isAuth(content: ReactNode, options?: IAuthGuardOptions): ReturnElement

  isActionAllowedUser(action: () => void, options: IAuthGuardOptions): ReturnElement

  isAllowUserRoleInList(content: ReactNode, options: IAuthGuardOptions, currentUser?: Pick<IUserDto, 'id'>): ReturnElement
}

const DEFAULT_GUARD_OPTIONS: Required<IGuardOptions> = {
  failureState: null
}

const DEFAULT_AUTH_GUARD_OPTIONS: Required<IAuthGuardOptions> = {
  ...DEFAULT_GUARD_OPTIONS,
  roles: null
}

const useGuards = (user: IUser): IAuthGuards => {
  const isActionAllowedUser = (action: () => void, options = {}): ReturnElement => {
    const { failureState, roles } = deepmerge(DEFAULT_AUTH_GUARD_OPTIONS, options) as Required<IAuthGuardOptions>

    if (user && (!roles || roles.includes(user?.role?.code))) {
      action()
      return null
    }

    return failureState
  }

  const isAuth: IAuthGuards['isAuth'] = (content, options = {}) => {
    const { failureState, roles } = deepmerge(DEFAULT_AUTH_GUARD_OPTIONS, options) as Required<IAuthGuardOptions>

    if (roles) {
      if (user !== null && roles.includes(user?.role?.code)) {
        return content
      }
      return failureState
    }

    return user === null ? failureState : content
  }

  const isAllowUserRoleInList: IAuthGuards['isAllowUserRoleInList'] = (content, options, currentUser?: Pick<IUserDto, 'id'>) => {
    const { failureState, roles } = deepmerge(DEFAULT_AUTH_GUARD_OPTIONS, options) as Required<IAuthGuardOptions>

    if (currentUser) {
      if (currentUser.id === user?.id) {
        return content
      }

      if (!roles) {
        return failureState
      }
    }

    if (roles) {
      if (user !== null && roles.includes(user?.role?.code) || roles.length === 0) {
        return content
      }
      return failureState
    }

    return user === null ? failureState : content
  }

  return {
    isAuth,
    isActionAllowedUser,
    isAllowUserRoleInList,
  }
}

export { useGuards }
export type { IAuthGuards }
