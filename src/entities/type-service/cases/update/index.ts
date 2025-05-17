import { useMutation, useQueryClient } from '@tanstack/react-query'
import { EQueryValues } from '@shared/enum';
import { enqueueSnackbar } from "notistack";
import { UpdateTypeServiceSlice } from "@entities/type-service/slices";
import { IUpdateTypeServicePort } from "@shared/interface/entities/type-service";

const useUpdateTypeServiceUseCase = () => {
	const refetchClient = useQueryClient();

	const execute = async (port: IUpdateTypeServicePort): Promise<void> => {
		return UpdateTypeServiceSlice(port)
	}

	return useMutation({
		mutationFn: execute,
		mutationKey: [EQueryValues.UpdateTypeService],
		onSuccess: async () => {
			enqueueSnackbar("Успех.", { variant: "success" })
			await refetchClient.invalidateQueries({ queryKey: [EQueryValues.GetAllTypeService] })
		},
	})
}

export {
	useUpdateTypeServiceUseCase
}
