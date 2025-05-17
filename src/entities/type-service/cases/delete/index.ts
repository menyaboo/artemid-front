import { UUIId } from "@shared/interface/common";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EQueryValues } from "@shared/enum";
import { DeleteTypeServiceSlice } from "@entities/type-service/slices";
import { enqueueSnackbar } from "notistack";

const useDeleteTypeServiceUseCase = () => {
	const refetchClient = useQueryClient();
	const execute = (port: UUIId) => DeleteTypeServiceSlice(port)

	return useMutation({
		mutationFn: execute,
		mutationKey: [EQueryValues.DeleteTypeService],
		onSuccess: async () => {
			enqueueSnackbar("Успех.", { variant: "success" })
			await refetchClient.invalidateQueries({ queryKey: [EQueryValues.GetAllTypeService] })
		},
	})
}

export {
	useDeleteTypeServiceUseCase
}