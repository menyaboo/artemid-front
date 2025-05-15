import type { ReactNode } from 'react';
import { MainWrapper } from "@shared/ui/wrappers/main";
import { IconTitle } from "@shared/ui/title";
import { User } from "lucide-react";
import { useAuthContext } from "@shared/store/auth";

const Profile = (): ReactNode => {
  const { user } = useAuthContext()
  if (!user) return null;

  const {
    email, name, telephone,
    role: { name: role }
  } = user

  return (
    <MainWrapper className="flex flex-col gap-4">
      <IconTitle icon={ <User/> } title="Профиль"/>

      <div className="grid grid-cols-1 grid-flow-row gap-2">
        <p><span className="text-accent-primary">E-mail: </span>{email}</p>
        <p><span className="text-accent-primary">Имя: </span>{name}</p>
        <p><span className="text-accent-primary">Телефон: </span>{telephone}</p>
        <p><span className="text-accent-primary">Роль: </span>{role}</p>
      </div>
    </MainWrapper>
  )
}

export {
  Profile
}