import { useMutation, useQueryClient } from '@tanstack/react-query'
import { EQueryValues } from '@shared/enum';
import { enqueueSnackbar } from "notistack";
import { UpdateCategoryServiceSlice } from "@entities/category-service/slices";
import { IUpdateCategoryServicePort } from "@shared/interface/entities/category-service";

const useUpdateCategoryServiceUseCase = () => {
	const refetchClient = useQueryClient();

	const execute = async (port: IUpdateCategoryServicePort): Promise<void> => {
		return UpdateCategoryServiceSlice(port)
	}

	return useMutation({
		mutationFn: execute,
		mutationKey: [EQueryValues.UpdateCategoryService],
		onSuccess: async () => {
			enqueueSnackbar("Успех.", { variant: "success" })
			await refetchClient.invalidateQueries({ queryKey: [EQueryValues.GetAllCategoryService] })
		},
	})
}

export {
	useUpdateCategoryServiceUseCase
}
