import type { ReactNode } from 'react';
import { Sidebar } from "@shared/ui";
import { Bell, BellDot } from "lucide-react";
import { useGetAllNotificationUseCase } from "@entities/notification/cases/all";
import { Notification } from "src/entities/notification/ui";

const tooltip = "absolute -bottom-27 -translate-y-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-gray-800"

const NotificationSidebar = (): ReactNode => {
	const { data: notifications = [] } = useGetAllNotificationUseCase()
	const isReadAll = notifications.every(notification => notification.is_read)

	return (
		<Sidebar title="Уведомления" button={ isReadAll ? <Bell/> : (
			<div className="relative">
				<BellDot/>
				<div className={ tooltip }>
					Есть не прочитанные уведомления
				</div>
			</div>
		) }>
			<div className="flex flex-col h-full h-min-0 overflow-y-auto py-4 gap-4">
				{ notifications.map((notify) => <Notification key={ notify.id } { ...notify } />) }
			</div>
		</Sidebar>
	)
}

export {
	NotificationSidebar
}