import { ReactNode } from 'react';
import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { MainWrapper } from "@shared/ui/wrappers/main";
import { Button, IconTitle, TableCrudButton } from "@shared/ui";
import { TableOfContents } from "lucide-react";
import { Table } from "@shared/ui/table";
import { useModal } from "@shared/hooks";
import { ITypeServiceDto } from "@shared/interface/entities/type-service";
import { useDeleteTypeServiceUseCase, useGetAllTypeServiceUseCase } from "@entities/type-service/cases";
import { UpdateTypeServiceModal } from "@entities/type-service/ui";
import DeleteEntityModal from "@widget/delete-entity-modal";
import { CreateTypeServiceModal } from "@entities/type-service/ui/create";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const columns: ColumnDef<ITypeServiceDto>[] = [
	{
		header: 'Название',
		accessorKey: 'name',
	},
	{
		header: "Категория",
		accessorKey: "category.name"
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

const TypeServiceTable = (): ReactNode => {
	const { data: data = [] } = useGetAllTypeServiceUseCase()
	const { mutate } = useDeleteTypeServiceUseCase()
	const modal = useModal<ITypeServiceDto>()
	const deleteModal = useModal<ITypeServiceDto>()
	const createModal = useModal()

	const table = useReactTable({
		data,
		columns: [
			...columns,
			{
				id: 'actions',
				accessorKey: 'id',
				header: () => <span>Действия</span>,
				cell: (cell) => <TableCrudButton cell={ cell }
																				 modalDelete={ deleteModal }
																				 modalEdit={ modal }/>
			}
		],
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<MainWrapper className="flex col-span-3 flex-col w-full gap-4">
			<IconTitle icon={ <TableOfContents/> } title="Все типы"/>

			<Table>
				<Table.Header headers={ table.getHeaderGroups() }/>
				<Table.Body rows={ table.getRowModel().rows }/>
			</Table>

			<Button onClick={ () => createModal.handleOnOpen()() }>Создать тип</Button>

			<UpdateTypeServiceModal modal={ modal }/>
			<CreateTypeServiceModal modal={ createModal }/>
			<DeleteEntityModal modal={ deleteModal } onDelete={ mutate }/>
		</MainWrapper>
	)
}

export {
	TypeServiceTable
}