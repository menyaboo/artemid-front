import { ReactNode } from 'react';
import { useAuthContext } from "@shared/store/auth";
import { Outlet } from "react-router-dom";

const GuardLayout = (): ReactNode => {
  const { user } = useAuthContext()
  return user && <Outlet />
}

export {
  GuardLayout
}