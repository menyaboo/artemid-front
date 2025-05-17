import { UUIId } from "@shared/interface/common";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EQueryValues } from "@shared/enum";
import { DeleteCategoryServiceSlice } from "@entities/category-service/slices";
import { enqueueSnackbar } from "notistack";

const useDeleteCategoryServiceUseCase = () => {
	const refetchClient = useQueryClient();
	const execute = (port: UUIId) => DeleteCategoryServiceSlice(port)

	return useMutation({
		mutationFn: execute,
		mutationKey: [EQueryValues.DeleteCategoryService],
		onSuccess: async () => {
			enqueueSnackbar("Успех.", { variant: "success" })
			await refetchClient.invalidateQueries({ queryKey: [EQueryValues.GetAllCategoryService] })
		},
	})
}

export {
	useDeleteCategoryServiceUseCase
}