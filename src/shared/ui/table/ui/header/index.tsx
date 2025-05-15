import { flexRender, RowData } from "@tanstack/react-table";
import { ITableHeaderProps } from "@shared/ui/table/interface";

const TableHeader = <T extends RowData>({ headers }: ITableHeaderProps<T>) => {
  return (
    <thead className="bg-background-main">
    { headers.map(headerGroup => (
      <tr key={ headerGroup.id }>
        { headerGroup.headers.map(header => (
          <th
            key={ header.id }
            className="px-4 py-2 text-left font-semibold"
          >
            { flexRender(
              header.column.columnDef.header,
              header.getContext()
            ) }
          </th>
        )) }
      </tr>
    )) }
    </thead>
  );
};

export {
  TableHeader
}