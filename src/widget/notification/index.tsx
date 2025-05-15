import type { ReactNode } from 'react';
import { INotificationDto } from "@shared/interface/entities/notification";
import { notificationTranslate } from "@shared/data";
import { ru } from "date-fns/locale";
import { format } from "date-fns";

const Notification = ({ message, type, is_read, created_at }: INotificationDto): ReactNode => {
  return (
    <div className="relative bg-background-main p-4 rounded-md flex flex-col gap-2">
      { !is_read && (
        <span className="absolute top-2 right-2 size-2 bg-accent-primary rounded-full animate-pulse"/>
      ) }

      <span className="text-accent-primary">{ notificationTranslate[type] }</span>
      <p>{ message }</p>


      <span className="text-xs text-text-secondary ml-auto mt-2 block">
        { format(new Date(created_at), 'dd MMMM yyyy, HH:mm', { locale: ru }) }
      </span>
    </div>
  );
};

export {
  Notification
}