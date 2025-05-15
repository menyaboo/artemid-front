import { ReactNode } from 'react';
import { useGetAllUsersUseCase } from "@entities/user/cases";
import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { MainWrapper } from "@shared/ui/wrappers/main";
import { IconTitle, TableCrudButton } from "@shared/ui";
import { TableOfContents } from "lucide-react";
import { Table } from "@shared/ui/table";
import { IUserDto } from "@shared/interface/entities/user";
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useModal } from "@shared/hooks";
import { UpdateUserModal } from "@entities/user/ui";

const columns: ColumnDef<IUserDto>[] = [
  {
    header: 'Имя',
    accessorKey: 'name',
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
  {
    header: 'Телефон',
    accessorKey: 'telephone',
  },
  {
    header: 'Роль',
    accessorKey: 'role.name',
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

const UsersTable = (): ReactNode => {
  const { data: data = [] } = useGetAllUsersUseCase()
  const modal = useModal<IUserDto>()

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
    <MainWrapper className="flex flex-col w-full gap-4">
      <IconTitle icon={ <TableOfContents/> } title="Все пользователи"/>

      <Table>
        <Table.Header headers={ table.getHeaderGroups() }/>
        <Table.Body rows={ table.getRowModel().rows }/>
      </Table>

      <UpdateUserModal modal={ modal }/>
    </MainWrapper>
  )
}

export {
  UsersTable
}