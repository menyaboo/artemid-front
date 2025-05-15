import type { ReactNode } from 'react';
import { ControlledTextField, TextFieldPassword, ControlledForm } from "@shared/ui";
import { useRegisterFormPresenter } from "@feature/register";
import { Button } from "@shared/ui/buttons/base";
import { IconTitle } from "@shared/ui/title";
import { Signature } from "lucide-react";

const RegisterForm = (): ReactNode => {
  const { form, handleSubmitCallback } = useRegisterFormPresenter()
  const { register } = form

  return (
    <ControlledForm onSubmit={ handleSubmitCallback } form={ form }>
      <IconTitle icon={ <Signature /> } title="Регистрация"/>
      <ControlledTextField { ...register('name') } placeholder='Имя'/>
      <ControlledTextField { ...register('email') } placeholder='E-mail'/>
      <ControlledTextField { ...register('telephone') } placeholder='Телефон'/>
      <ControlledTextField component={ TextFieldPassword } { ...register('password') } placeholder='Пароль'/>
      <ControlledTextField component={ TextFieldPassword } { ...register('password_confirmation') }
                           placeholder='Повторите пароля'/>
      <Button type="submit">Зарегистрироваться</Button>
    </ControlledForm>
  )
}

export {
  RegisterForm
}