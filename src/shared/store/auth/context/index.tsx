import { createContext, useContext } from 'react'

import type { IAuthContext } from '@shared/store/auth'

const DEFAULT_VALUES: IAuthContext = {
  user: null,
  setUser: () => {
    //
  },
  guards: {
    isAuth: (content) => content,
    isActionAllowedUser: () => null,
    isAllowUserRoleInList: (content) => content
  }
}

const AuthContext = createContext<IAuthContext>(DEFAULT_VALUES)

const useAuthContext = (): IAuthContext => useContext(AuthContext)

export {
  AuthContext,
  useAuthContext
}
