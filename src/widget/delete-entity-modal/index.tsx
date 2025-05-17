import type { ReactNode } from 'react';
import { Button } from "@shared/ui";
import { Modal } from "@shared/ui/modal";
import { IModalResult } from "@shared/hooks";
import { UUIId } from "@shared/interface/common";

interface IDeleteEntityModalProps<T extends object> {
	onDelete(props: UUIId): void;
	modal: IModalResult<T>
}

const DeleteEntityModal = <T extends UUIId = UUIId>(
	{ modal, onDelete }: IDeleteEntityModalProps<T>
): ReactNode => {
	const { props } = modal
	return (
		<Modal<T> modal={ modal } modalTitle="Удалить">
			<div className="flex flex-col gap-4">
				<span>Вы уверены что хотите удалить запись?</span>
				<Button onClick={ () => onDelete(props) }>Удалить</Button>
			</div>
		</Modal>
	)
}

export default DeleteEntityModal