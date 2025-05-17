import { ReactNode } from 'react';
import { Modal } from "@shared/ui/modal";
import { IModalResult } from "@shared/hooks";
import { Button, ControlledForm } from "@shared/ui";
import { ControlledSelect } from "@shared/ui/select";
import { IAppealDto } from "@shared/interface/entities/appeal";
import { useUpdateAppealFormPresenter } from "@entities/appeal/presenters";

interface IUpdateUserModalProps {
  modal: IModalResult<IAppealDto>;
}

const UpdateAppealModal = ({ modal }: IUpdateUserModalProps): ReactNode => {
  const { props } = modal
  const { form, handleSubmitCallback, optionStatuses } = useUpdateAppealFormPresenter(props)

  return (
    <Modal modal={ modal } modalTitle="Редактировать">
      <ControlledForm onSubmit={ handleSubmitCallback } form={ form }>
        <ControlledSelect placeholder="Изменить статус" items={ optionStatuses } name="status_id"/>
        <Button type="submit">Редактировать</Button>
      </ControlledForm>
    </Modal>
  )
}

export {
  UpdateAppealModal
}