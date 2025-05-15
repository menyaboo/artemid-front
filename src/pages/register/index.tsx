import type { ReactNode } from 'react';
import { RegisterForm } from "@feature/register/form";

const RegisterPage = (): ReactNode => (
  <main className="flex h-screen-m justify-center items-center">
    <RegisterForm/>
  </main>
)

export default RegisterPage;