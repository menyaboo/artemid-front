import { ReactNode } from 'react';
import { MainForm } from "@feature/main";

const MainPage = (): ReactNode => {
  return (
    <main className="flex h-screen-m justify-center items-center">
      <MainForm />
    </main>
  )
}

export default MainPage;