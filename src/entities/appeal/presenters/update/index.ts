import { IAppealDto, IUpdateAppealSchema } from "@shared/interface/entities/appeal";
import { useUpdateAppealUseCase } from "@entities/appeal/cases";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { updateAppealSchema } from "@entities/appeal/validation/update";
import { useGetAllStatusServiceUseCase } from "@entities/status-service/cases";

const useUpdateAppealFormPresenter = (appeal: IAppealDto) => {
	const { mutateAsync } = useUpdateAppealUseCase()
	const { data: statuses = [] } = useGetAllStatusServiceUseCase()

	const form = useForm<IUpdateAppealSchema>({
		resolver: zodResolver(updateAppealSchema),
	})

	const handleSubmitCallback = form.handleSubmit(async (data: IUpdateAppealSchema) => {
		await mutateAsync(data)
	})

	useEffect(() => {
		form.reset({
			...appeal,
			status_id: appeal.status?.id
		})
	}, [appeal.id]);

	const optionStatuses = statuses.map((el) => ({
		label: el.name,
		value: el.id
	}))

	return {
		form,
		handleSubmitCallback,
		optionStatuses
	}
}

export {
	useUpdateAppealFormPresenter
}