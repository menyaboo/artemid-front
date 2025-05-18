import { ENotificationType } from "@shared/enum";

const notificationTranslate = {
  [ENotificationType.NEW_APPEAL]: "Новое обращение",
  [ENotificationType.STATUS_CHANGED]: "Изменен статус заявки",
}

export {
  notificationTranslate
}