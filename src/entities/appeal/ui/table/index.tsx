import { ReactNode } from 'react';
import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { MainWrapper } from "@shared/ui/wrappers/main";
import { IconTitle, TableCrudButton } from "@shared/ui";
import { TableOfContents } from "lucide-react";
import { Table } from "@shared/ui/table";
import { useModal } from "@shared/hooks";
import { IAppealDto } from "@shared/interface/entities/appeal";
import { useGetAllAppealUseCase } from "@entities/appeal/cases";
import { UpdateAppealModal } from "@entities/appeal/ui";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { ERouterPath } from "@shared/enum";

const columns: ColumnDef<IAppealDto>[] = [
	{
		header: 'Категория поломки',
		accessorKey: 'type.category.name',
	},
	{
		header: 'Тип поломки',
		accessorKey: 'type.name',
	},
	{
		header: 'Статус',
		accessorKey: 'status.name',
	},
	{
		header: 'Текст сообщения',
		accessorKey: 'message',
	},
	{
		header: 'Добавлен',
		accessorFn: (row) => format(new Date(row.created_at), 'd MMMM yyyy', { locale: ru }),
	},
	{
		header: 'Обновлен',
		accessorFn: (row) => format(new Date(row.updated_at), 'd MMMM yyyy', { locale: ru }),
	},
];

interface IAppealTableProps {
	isManager?: boolean
}

const AppealTable = ({ isManager = false }: IAppealTableProps): ReactNode => {
	const { data: data = [] } = useGetAllAppealUseCase()
	const modal = useModal<IAppealDto>()

	const table = useReactTable({
		data: isManager ? data.filter((el) => ["open", "working"].includes(el.status.code)) : data,
		columns: [
			...columns,
			{
				id: 'actions',
				accessorKey: 'id',
				header: () => <span>Действия</span>,
				cell: (cell) => <TableCrudButton view={ ERouterPath.APPEAL } cell={ cell } modalEdit={ modal }/>
			}
		],
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<MainWrapper className="flex col-span-3 flex-col w-full gap-4">
			<IconTitle icon={ <TableOfContents/> } title="Все обращения"/>

			<Table>
				<Table.Header headers={ table.getHeaderGroups() }/>
				<Table.Body rows={ table.getRowModel().rows }/>
			</Table>

			<UpdateAppealModal modal={ modal }/>
		</MainWrapper>
	)
}

export {
	AppealTable
}