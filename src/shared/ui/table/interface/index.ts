import { HeaderGroup, Row, RowData } from "@tanstack/react-table";

type ITableHeaderProps<T extends RowData> = {
  headers: HeaderGroup<T>[]
}

type ITableBodyProps<T extends RowData> = {
  rows: Row<T>[]
};

export type {
  ITableHeaderProps,
  ITableBodyProps
}