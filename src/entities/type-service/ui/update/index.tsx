import { ReactNode } from 'react';
import { Modal } from "@shared/ui/modal";
import { IModalResult } from "@shared/hooks";
import { Button, ControlledForm, ControlledTextField } from "@shared/ui";
import { ITypeServiceDto } from "@shared/interface/entities/type-service";
import { useUpdateTypeServiceFormPresenter } from "@entities/type-service/presenters";
import { ControlledSelect } from "@shared/ui/select";

interface IUpdateTypeServiceModalProps {
  modal: IModalResult<ITypeServiceDto>;
}

const UpdateTypeServiceModal = ({ modal }: IUpdateTypeServiceModalProps): ReactNode => {
  const { props } = modal
  const { form, handleSubmitCallback, categoriesOptions } = useUpdateTypeServiceFormPresenter(props)

  return (
    <Modal modal={ modal } modalTitle="Редактировать">
      <ControlledForm onSubmit={ handleSubmitCallback } form={ form }>
        <ControlledTextField name="name" placeholder="Наименование" />
        <ControlledSelect items={categoriesOptions} name="category_id" />
        <Button type="submit">Редактировать</Button>
      </ControlledForm>
    </Modal>
  )
}

export {
  UpdateTypeServiceModal
}