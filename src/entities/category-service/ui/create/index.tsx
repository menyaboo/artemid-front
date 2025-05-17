import { ReactNode } from 'react';
import { Modal } from "@shared/ui/modal";
import { IModalResult } from "@shared/hooks";
import { Button, ControlledForm, ControlledTextField } from "@shared/ui";
import { useCreateCategoryServiceFormPresenter } from "@entities/category-service/presenters";

interface ICreateCategoryServiceModalProps {
  modal: IModalResult;
}

const CreateCategoryServiceModal = ({ modal }: ICreateCategoryServiceModalProps): ReactNode => {
  const { form, handleSubmitCallback } = useCreateCategoryServiceFormPresenter()

  return (
    <Modal modal={ modal } modalTitle="Создать">
      <ControlledForm onSubmit={ handleSubmitCallback } form={ form }>
        <ControlledTextField name="name" placeholder="Наименование" />
        <Button type="submit">Создать</Button>
      </ControlledForm>
    </Modal>
  )
}

export {
  CreateCategoryServiceModal
}