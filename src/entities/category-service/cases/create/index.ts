import { useMutation, useQueryClient } from '@tanstack/react-query'
import { EQueryValues } from '@shared/enum';
import { enqueueSnackbar } from "notistack";
import { CreateCategoryServiceSlice } from "@entities/category-service/slices";
import { ICreateCategoryServicePort } from "@shared/interface/entities/category-service";

const useCreateCategoryServiceUseCase = () => {
	const refetchClient = useQueryClient();

	const execute = async (port: ICreateCategoryServicePort): Promise<void> => {
		return CreateCategoryServiceSlice(port)
	}

	return useMutation({
		mutationFn: execute,
		mutationKey: [EQueryValues.CreateCategoryService],
		onSuccess: async () => {
			enqueueSnackbar("Успех.", { variant: "success" })
			await refetchClient.invalidateQueries({ queryKey: [EQueryValues.GetAllCategoryService] })
		},
	})
}

export {
	useCreateCategoryServiceUseCase
}
