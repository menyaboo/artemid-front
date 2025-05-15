import type { ReactNode } from 'react';
import { Button } from "@shared/ui";

interface IDeleteEntityModalProps {
  onDelete(): void;
}

const DeleteEntityModal = (
  { onDelete }: IDeleteEntityModalProps
): ReactNode => {
  return (
    <div>
      <span>Вы уверены что хотите удалить запись?</span>
      <Button onClick={ onDelete }>Удалить</Button>
    </div>
  )
}

export default DeleteEntityModal