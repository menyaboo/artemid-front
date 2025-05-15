import { ReactNode } from 'react';
import { Modal } from "@shared/ui/modal";
import { IModalResult } from "@shared/hooks";
import { Button, ControlledForm, ControlledTextField } from "@shared/ui";
import { useUpdateUserFormPresenter } from "@entities/user/presenters";
import { IUserDto } from "@shared/interface/entities/user";
import { ControlledSelect } from "@shared/ui/select";

interface IUpdateUserModalProps {
  modal: IModalResult<IUserDto>;
}

const UpdateAppealModal = ({ modal }: IUpdateUserModalProps): ReactNode => {
  const { props } = modal
  const { form, handleSubmitCallback, optionRoles } = useUpdateUserFormPresenter(props)
  const { register } = form

  return (
    <Modal modal={ modal } modalTitle="Редактировать">
      <ControlledForm onSubmit={ handleSubmitCallback } form={ form }>
        <ControlledTextField { ...register('name') } placeholder='Имя'/>
        <ControlledTextField { ...register('email') } placeholder='E-mail'/>
        <ControlledTextField { ...register('telephone') } placeholder='Телефон'/>
        <ControlledSelect placeholder="Выберете роль" items={ optionRoles } name="role_id"/>
        <Button type="submit">Редактировать</Button>
      </ControlledForm>
    </Modal>
  )
}

export {
  UpdateAppealModal
}