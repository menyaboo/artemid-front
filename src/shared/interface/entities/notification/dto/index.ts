import { ENotificationType } from "@shared/enum";

interface INotificationDto {
  id: number,
  is_read: boolean,
  message: string,
  related_id: number,
  type: ENotificationType,
  created_at: string,
  updated_at: string,
}

export type {
  INotificationDto,
}