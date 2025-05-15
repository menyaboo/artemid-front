import type { ReactNode } from 'react';
import { ControlledForm, ControlledTextArea } from "@shared/ui";
import { Button } from "@shared/ui/buttons/base";
import { Pencil } from "lucide-react";
import { IconTitle } from "@shared/ui/title";
import { useMainFormPresenter } from "@feature/main";
import { ControlledSelect } from "@shared/ui/select";

const MainForm = (): ReactNode => {
  const { form, handleSubmitCallback, categoryOptions, typeOptions } = useMainFormPresenter()
  const { register } = form

  return (
    <ControlledForm onSubmit={ handleSubmitCallback } form={ form }>
      <IconTitle icon={ <Pencil /> } title="Форма обращения"/>
      <ControlledSelect placeholder="Выберите категорию" name={ register('category_id').name } items={ categoryOptions } />
      <ControlledSelect placeholder="Выберите тип" name={ register('type_id').name } items={ typeOptions } />
      <ControlledTextArea { ...register('message') } placeholder='Сообщение'/>
      <Button type="submit">Отправить</Button>
    </ControlledForm>
  )
}

export {
  MainForm
}