import { PropsWithChildren } from "react"
import { TableBody, TableHeader } from "@shared/ui/table/ui";

const Table = ({ children }: PropsWithChildren) => (
  <div className="overflow-auto rounded-md border border-background-tertiary">
    <table className="min-w-full divide-y divide-background-tertiary text-sm">
      { children }
    </table>
  </div>
)

Table.Header = TableHeader;
Table.Body = TableBody;

export {
  Table
}