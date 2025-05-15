import type { ReactNode } from 'react';
import { Edit, Trash } from 'lucide-react'
import { IModalResult } from "@shared/hooks";
import { CellContext } from "@tanstack/react-table";
import { UUIId } from "@shared/interface/common";

type ITableCrudButtonProps<T extends object = UUIId> = {
  modalEdit?: IModalResult<T>
  modalDelete?: IModalResult<T>
  cell: CellContext<T, unknown>
}

const TableCrudButton = <T extends object = UUIId>(
  { modalEdit, cell, modalDelete }: ITableCrudButtonProps<T>
): ReactNode => {
  return (
    <div className="flex space-x-2">
      { modalEdit && <button
          onClick={ () => modalEdit.handleOnOpen(() => modalEdit.setProps(cell.cell.row.original))() }
          className="text-blue-500 cursor-pointer hover:text-blue-700"
          title="Редактировать"
      >
          <Edit/>
      </button> }
      { modalDelete && <button
          onClick={ () => modalDelete.handleOnOpen(() => modalDelete.setProps(cell.cell.row.original))() }
          className="text-red-500 cursor-pointer hover:text-red-700"
          title="Удалить"
      >
          <Trash/>
      </button> }
    </div>
  )
}

export {
  TableCrudButton
}