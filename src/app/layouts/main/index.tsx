import type { ReactNode } from 'react';
import { Header } from "@widget/header";
import { Outlet } from "react-router-dom";

const MainLayout = (): ReactNode => (
  <>
    <Header/>
    <Outlet/>
  </>
)

export {
  MainLayout
}