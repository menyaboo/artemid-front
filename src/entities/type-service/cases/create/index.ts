import { useMutation, useQueryClient } from '@tanstack/react-query'
import { EQueryValues } from '@shared/enum';
import { enqueueSnackbar } from "notistack";
import { CreateTypeServiceSlice } from "@entities/type-service/slices";
import { ICreateTypeServicePort } from "@shared/interface/entities/type-service";

const useCreateTypeServiceUseCase = () => {
	const refetchClient = useQueryClient();

	const execute = async (port: ICreateTypeServicePort): Promise<void> => {
		return CreateTypeServiceSlice(port)
	}

	return useMutation({
		mutationFn: execute,
		mutationKey: [EQueryValues.CreateTypeService],
		onSuccess: async () => {
			enqueueSnackbar("Успех.", { variant: "success" })
			await refetchClient.invalidateQueries({ queryKey: [EQueryValues.GetAllTypeService] })
		},
	})
}

export {
	useCreateTypeServiceUseCase
}
