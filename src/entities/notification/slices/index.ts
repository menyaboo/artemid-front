import { axiosConfig } from "@shared/lib";
import { INotificationDto } from "@shared/interface/entities/notification";

const GetAllNotificationSlice = async (): Promise<INotificationDto[]> => {
  return axiosConfig.get('/notification').then(res => res.data)
}

export {
  GetAllNotificationSlice,
}