import { ReactNode } from 'react';
import { Modal } from "@shared/ui/modal";
import { IModalResult } from "@shared/hooks";
import { Button, ControlledForm, ControlledTextField } from "@shared/ui";
import { ICategoryServiceDto } from "@shared/interface/entities/category-service";
import { useUpdateCategoryServiceFormPresenter } from "@entities/category-service/presenters";

interface IUpdateCategoryServiceModalProps {
  modal: IModalResult<ICategoryServiceDto>;
}

const UpdateCategoryServiceModal = ({ modal }: IUpdateCategoryServiceModalProps): ReactNode => {
  const { props } = modal
  const { form, handleSubmitCallback } = useUpdateCategoryServiceFormPresenter(props)

  return (
    <Modal modal={ modal } modalTitle="Редактировать">
      <ControlledForm onSubmit={ handleSubmitCallback } form={ form }>
        <ControlledTextField name="name" placeholder="Наименование" />
        <Button type="submit">Редактировать</Button>
      </ControlledForm>
    </Modal>
  )
}

export {
  UpdateCategoryServiceModal
}