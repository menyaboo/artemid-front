import { flexRender, RowData } from "@tanstack/react-table";
import { ITableBodyProps } from "@shared/ui/table/interface";

const TableBody = <T extends RowData>({ rows }: ITableBodyProps<T>) => {
  return (
    <tbody className="divide-y divide-background-tertiary bg-background-secondary">
    { rows.length ? (
      rows.map(row => (
        <tr key={ row.id }>
          { row.getVisibleCells().map(cell => (
            <td
              key={ cell.id }
              className="whitespace-nowrap px-4 py-2"
            >
              { flexRender(cell.column.columnDef.cell, cell.getContext()) }
            </td>
          )) }
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={ rows[0]?.getVisibleCells().length || 1 } className="text-center py-4 text-gray-500">
          Нет данных.
        </td>
      </tr>
    ) }
    </tbody>
  );
};
export {
  TableBody
}