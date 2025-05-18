import { ReadNotificationSlice } from "@entities/notification/slices";
import { UUIId } from "@shared/interface/common";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { EQueryValues } from "@shared/enum";

const useReadNotificationUseCase = () => {
	const refetchClient = useQueryClient();
	const execute = async (port: UUIId) => {
		return ReadNotificationSlice(port)
	}

	return useMutation({
		mutationFn: execute,
		mutationKey: [EQueryValues.ReadNotification],
		onSuccess: async () => {
			await refetchClient.invalidateQueries({ queryKey: [EQueryValues.GetAllNotification] })
		}
	})
}

export {
	useReadNotificationUseCase
}