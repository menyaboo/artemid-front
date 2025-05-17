import { ReactNode } from 'react';
import { Modal } from "@shared/ui/modal";
import { IModalResult } from "@shared/hooks";
import { Button, ControlledForm, ControlledTextField } from "@shared/ui";
import { useCreateTypeServiceFormPresenter } from "@entities/type-service/presenters";
import { ControlledSelect } from "@shared/ui/select";

interface ICreateTypeServiceModalProps {
	modal: IModalResult;
}

const CreateTypeServiceModal = ({ modal }: ICreateTypeServiceModalProps): ReactNode => {
	const { form, handleSubmitCallback, categoriesOptions } = useCreateTypeServiceFormPresenter()

	return (
		<Modal modal={ modal } modalTitle="Создать">
			<ControlledForm onSubmit={ handleSubmitCallback } form={ form }>
				<ControlledTextField name="name" placeholder="Наименование"/>
				<ControlledSelect items={ categoriesOptions } name="category_id"/>
				<Button type="submit">Создать</Button>
			</ControlledForm>
		</Modal>
	)
}

export {
	CreateTypeServiceModal
}