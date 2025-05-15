import type { ReactNode } from 'react';
import Router from './router';
import QueryProvider from './query';
import SnackbarProvider from "./snackbar";
import { AuthProvider } from "@shared/store/auth";

const AppProviders = (): ReactNode => (
  <>
    <QueryProvider>
      <SnackbarProvider>
        <AuthProvider>
          <Router/>
        </AuthProvider>
      </SnackbarProvider>
    </QueryProvider>
  </>
)

export {
  AppProviders
}