import type { ReactNode } from 'react';
import { ControlledForm, ControlledTextField, TextFieldPassword } from "@shared/ui";
import { Button } from "@shared/ui/buttons/base";
import { useLoginFormPresenter } from "@feature/login";
import { KeyRound } from "lucide-react";
import { IconTitle } from "@shared/ui/title";

const LoginForm = (): ReactNode => {
  const { form, handleSubmitCallback } = useLoginFormPresenter()
  const { register } = form

  return (
    <ControlledForm onSubmit={ handleSubmitCallback } form={ form }>
      <IconTitle icon={ <KeyRound/> } title="Авторизация"/>
      <ControlledTextField { ...register('email') } placeholder='E-mail'/>
      <ControlledTextField component={ TextFieldPassword } { ...register('password') } placeholder='Пароль'/>
      <Button type="submit">Авторизироваться</Button>
    </ControlledForm>
  )
}

export {
  LoginForm
}