import { axiosConfig } from "@shared/lib";
import { INotificationDto } from "@shared/interface/entities/notification";
import { UUIId } from "@shared/interface/common";

const GetAllNotificationSlice = async (): Promise<INotificationDto[]> => {
	return axiosConfig.get('/notification').then(res => res.data)
}

const ReadNotificationSlice = async ({ id }: UUIId): Promise<void> => {
	return axiosConfig.post(`/notification/${ id }/read`)
}

export {
	GetAllNotificationSlice,
	ReadNotificationSlice
}