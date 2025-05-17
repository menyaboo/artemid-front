import { Fragment, ReactNode } from 'react';
import { Link } from "react-router-dom";
import { ERouterPath, EUserRoles } from "@shared/enum";
import { useAuthContext } from "@shared/store/auth";
import { useLogoutUserUseCase } from "@entities/user/cases";
import { Wrench } from "lucide-react";
import { useGuards } from "@shared/store/auth/guards";
import { NotificationSidebar } from "@widget/notification-sidebar";

const menuConfig = [
  {
    element: <Link to={ ERouterPath.USERS }>Все пользователи</Link>,
    roles: [EUserRoles.ADMIN],
  },
  {
    element: <Link to={ ERouterPath.APPEAL }>Все заявки</Link>,
    roles: [EUserRoles.ADMIN, EUserRoles.MANAGER],
  },
  {
    element: <Link to={ ERouterPath.CATEGORY }>Все категории</Link>,
    roles: [EUserRoles.ADMIN],
  },
  {
    element: <Link to={ ERouterPath.TYPE }>Все типы</Link>,
    roles: [EUserRoles.ADMIN],
  },
  {
    element: <Link to={ ERouterPath.ANALYTICS }>Аналитика</Link>,
    roles: [EUserRoles.ADMIN],
  },
];

const Header = (): ReactNode => {
  const { user } = useAuthContext()
  const { isAllowUserRoleInList } = useGuards(user)
  const { mutate } = useLogoutUserUseCase()
  const logoutUser = () => mutate()

  return (
    <header className="bg-background-main border-b-2 border-black h-[70px]">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="inline-flex items-center gap-2">
          <Wrench/>
          <Link className="text-accent-primary text-2xl font-bold" to={ ERouterPath.MAIN }>
            ServiceRepair
          </Link>
        </div>

        <nav className="inline-flex gap-4">
          { menuConfig.map(({ element, roles }, index) => (
            <Fragment key={ index }>{ isAllowUserRoleInList(element, { roles }) }</Fragment>
          )) }
        </nav>

        {
          user ? (
            <nav className="inline-flex items-center gap-4">
              <NotificationSidebar />
              <Link to={ ERouterPath.PROFILE }>Профиль</Link>
              <button onClick={ logoutUser }>Выйти</button>
            </nav>
          ) : (
            <nav className="inline-flex gap-4">
              <Link to={ ERouterPath.LOGIN }>Авторизация</Link>
              <Link to={ ERouterPath.REGISTER }>Регистрация</Link>
            </nav>
          )
        }
      </div>
    </header>
  )
}

export {
  Header
}