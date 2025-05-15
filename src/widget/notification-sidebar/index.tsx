import type { ReactNode } from 'react';
import { Sidebar } from "@shared/ui";
import { Bell } from "lucide-react";
import { useGetAllNotificationUseCase } from "@entities/notification/cases/all";
import { Notification } from "@widget/notification";

const NotificationSidebar = (): ReactNode => {
  const { data: notifications = [] } = useGetAllNotificationUseCase()

  return (
    <Sidebar title="Уведомления" button={ <Bell/> }>
      <div className="flex flex-col py-4 gap-4">
        { notifications.map((notify) => <Notification key={ notify.id } { ...notify } />) }
      </div>
    </Sidebar>
  )
}

export {
  NotificationSidebar
}