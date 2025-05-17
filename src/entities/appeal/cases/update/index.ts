import { useMutation, useQueryClient } from '@tanstack/react-query'
import { EQueryValues } from '@shared/enum';
import { enqueueSnackbar } from "notistack";
import { UpdateAppealSlice } from "@entities/appeal/slices";
import { IUpdateAppealPort } from "@shared/interface/entities/appeal";

const useUpdateAppealUseCase = () => {
	const refetchClient = useQueryClient();

	const execute = async (port: IUpdateAppealPort): Promise<void> => {
		return UpdateAppealSlice(port)
	}

	return useMutation({
		mutationFn: execute,
		mutationKey: [EQueryValues.UpdateAppeal],
		onSuccess: async () => {
			enqueueSnackbar("Успех.", { variant: "success" })
			await refetchClient.invalidateQueries({ queryKey: [EQueryValues.GetAllAppeal] })
		},
	})
}

export {
	useUpdateAppealUseCase
}
