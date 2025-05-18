import type { ReactNode } from 'react';
import { Edit, Eye, Trash } from 'lucide-react'
import { IModalResult } from "@shared/hooks";
import { CellContext } from "@tanstack/react-table";
import { UUIId } from "@shared/interface/common";
import { ERouterPath } from "@shared/enum";
import { useNavigate } from "react-router-dom";

type ITableCrudButtonProps<T extends UUIId = UUIId> = {
	modalEdit?: IModalResult<T>
	modalDelete?: IModalResult<T>
	view?: ERouterPath
	cell: CellContext<T, unknown>
}

const TableCrudButton = <T extends UUIId = UUIId>(
	{ modalEdit, cell, view, modalDelete }: ITableCrudButtonProps<T>
): ReactNode => {
	const navigate = useNavigate();

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
			{ view && <button
				onClick={() => navigate(`${view}/${cell.cell.row.original?.id}`)}
				className="text-green-500 cursor-pointer hover:text-green-700"
				title="Просмотр">
				<Eye/>
			</button> }
		</div>
	)
}

export {
	TableCrudButton
}