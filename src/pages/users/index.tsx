import type { ReactNode } from 'react';
import { UsersTable } from "@entities/user/ui";

const UsersPage = (): ReactNode => {
  return (
    <div className="container mx-auto py-10">
      <UsersTable />
    </div>
  )
}

export default UsersPage;