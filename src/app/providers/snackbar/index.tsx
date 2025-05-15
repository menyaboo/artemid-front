import type { PropsWithChildren, ReactNode } from 'react';
import { SnackbarProvider as Provider } from 'notistack'

const snackbarProps = {
  autoHideDuration: 2000,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right'
  }
} as const

const SnackbarProvider = ({ children }: PropsWithChildren): ReactNode => (
  <Provider { ...snackbarProps }>
    { children }
  </Provider>
)

export default SnackbarProvider