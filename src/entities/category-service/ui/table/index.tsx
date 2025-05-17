import { ReactNode } from 'react';
import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { MainWrapper } from "@shared/ui/wrappers/main";
import { Button, IconTitle, TableCrudButton } from "@shared/ui";
import { TableOfContents } from "lucide-react";
import { Table } from "@shared/ui/table";
import { useModal } from "@shared/hooks";
import { ICategoryServiceDto } from "@shared/interface/entities/category-service";
import { useDeleteCategoryServiceUseCase, useGetAllCategoryServiceUseCase } from "@entities/category-service/cases";
import { UpdateCategoryServiceModal } from "@entities/category-service/ui";
import DeleteEntityModal from "@widget/delete-entity-modal";
import { CreateCategoryServiceModal } from "@entities/category-service/ui/create";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const columns: ColumnDef<ICategoryServiceDto>[] = [
	{
		header: 'Название',
		accessorKey: 'name',
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

const CategoryServiceTable = (): ReactNode => {
	const { data: data = [] } = useGetAllCategoryServiceUseCase()
	const { mutate } = useDeleteCategoryServiceUseCase()
	const modal = useModal<ICategoryServiceDto>()
	const deleteModal = useModal<ICategoryServiceDto>()
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
			<IconTitle icon={ <TableOfContents/> } title="Все категории"/>

			<Table>
				<Table.Header headers={ table.getHeaderGroups() }/>
				<Table.Body rows={ table.getRowModel().rows }/>
			</Table>

			<Button onClick={ () => createModal.handleOnOpen()() }>Создать категорию</Button>

			<UpdateCategoryServiceModal modal={ modal }/>
			<CreateCategoryServiceModal modal={ createModal }/>
			<DeleteEntityModal modal={ deleteModal } onDelete={ mutate }/>
		</MainWrapper>
	)
}

export {
	CategoryServiceTable
}