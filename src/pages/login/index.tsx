import type { ReactNode } from 'react';
import { LoginForm } from "@feature/login";

const LoginPage = (): ReactNode => (
  <main className="flex h-screen-m justify-center items-center">
    <LoginForm/>
  </main>
)

export default LoginPage