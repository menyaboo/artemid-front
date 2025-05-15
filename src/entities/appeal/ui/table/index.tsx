import { ReactNode } from 'react';
import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { MainWrapper } from "@shared/ui/wrappers/main";
import { IconTitle, TableCrudButton } from "@shared/ui";
import { TableOfContents } from "lucide-react";
import { Table } from "@shared/ui/table";
import { useModal } from "@shared/hooks";
import { IAppealDto } from "@shared/interface/entities/appeal";
import { useGetAllAppealUseCase } from "@entities/appeal/cases";

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
];

const AppealTable = (): ReactNode => {
  const { data: data = [] } = useGetAllAppealUseCase()
  const modal = useModal<IAppealDto>()

  const table = useReactTable({
    data,
    columns: [
      ...columns,
      {
        id: 'actions',
        accessorKey: 'id',
        header: () => <span>Действия</span>,
        cell: (cell) => <TableCrudButton cell={ cell } modalEdit={ modal } />
      }
    ],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <MainWrapper className="flex col-span-3 flex-col w-full gap-4">
      <IconTitle icon={ <TableOfContents/> } title="Ваши обрашения"/>

      <Table>
        <Table.Header headers={ table.getHeaderGroups() }/>
        <Table.Body rows={ table.getRowModel().rows }/>
      </Table>

    </MainWrapper>
  )
}

export {
  AppealTable
}