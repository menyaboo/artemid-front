import { ReactNode } from 'react';
import { Table } from "@shared/ui/table";
import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { IAppealDto } from "@shared/interface/entities/appeal";
import { IconTitle } from "@shared/ui";
import { TableOfContents } from "lucide-react";
import { MainWrapper } from "@shared/ui/wrappers/main";
import { useGetAllPersonalAppealUseCase } from "@entities/appeal/cases/all-personal";

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

const AppealPersonalTable = (): ReactNode => {
  const { data: data = [] } = useGetAllPersonalAppealUseCase()

  const table = useReactTable({
    data,
    columns,
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

export default AppealPersonalTable;