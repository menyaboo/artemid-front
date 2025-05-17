import { axiosConfig } from "@shared/lib";
import { IAppealDto, ICreateAppealPort, IUpdateAppealPort } from "@shared/interface/entities/appeal";

const CreateAppealSlice = async (port: ICreateAppealPort): Promise<void> => {
	return axiosConfig.post('/appeal', port)
}

const GetAllAppealSlice = async (): Promise<IAppealDto[]> => {
	return axiosConfig.get('/appeal').then(res => res.data)
}

const GetAllPersonalAppealSlice = async (): Promise<IAppealDto[]> => {
	return axiosConfig.get('/appeal/personal').then(res => res.data)
}

const UpdateAppealSlice = async ({ id, ...port }: IUpdateAppealPort): Promise<void> => {
	return axiosConfig.post(`/appeal/${ id }/update`, port)
}

export {
	CreateAppealSlice,
	GetAllAppealSlice,
	UpdateAppealSlice,
	GetAllPersonalAppealSlice
}
