import {  useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { useGuards } from '@shared/store/auth/guards'
import { AuthContext } from '@shared/store/auth'
import type { IUser } from '@shared/store/auth'
import type { PropsWithChildren, ReactNode } from 'react'
import { useLoadUserRequest } from "@entities/user/cases";
import { LoaderCircle } from "lucide-react";
import { useDelay } from "@shared/hooks";

const AuthProvider = ({ children }: PropsWithChildren): ReactNode => {
  const [user, setUser] = useState<IUser>(null)
  const guards = useGuards(user)

  const context = useMemo(() => ({
    user,
    setUser,
    guards
  }), [
    user,
    setUser,
    guards
  ])

  const { isPending: isLoading } = useLoadUserRequest({ setUser })
  const delayedLoading = useDelay(isLoading, 1000);

  return (
    <AuthContext.Provider value={ context }>
      <AnimatePresence mode="wait">
        {delayedLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="h-screen flex items-center justify-center"
          >
            <LoaderCircle size={60} className="animate-spin" />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </AuthContext.Provider>
  )
}

export { AuthProvider }
