import { IUpdateTypeServiceSchema, IUpdateTypeServicePort } from "@shared/interface/entities/type-service";
import { useUpdateTypeServiceUseCase } from "@entities/type-service/cases";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { updateTypeServiceSchema } from "@entities/type-service/validation/update";
import { useGetAllCategoryServiceUseCase } from "@entities/category-service/cases";

const useUpdateTypeServiceFormPresenter = (typeService: IUpdateTypeServicePort) => {
	const { mutateAsync } = useUpdateTypeServiceUseCase()
	const { data: categories = [] } = useGetAllCategoryServiceUseCase()

	const form = useForm<IUpdateTypeServiceSchema>({
		resolver: zodResolver(updateTypeServiceSchema),
	})

	const handleSubmitCallback = form.handleSubmit(async (data: IUpdateTypeServiceSchema) => {
		await mutateAsync(data)
	})

	useEffect(() => {
		form.reset(typeService)
	}, [typeService.id]);

	const categoriesOptions = categories.map(category => ({
		label: category.name,
		value: category.id,
	}))

	return {
		form,
		handleSubmitCallback,
		categoriesOptions
	}
}

export {
	useUpdateTypeServiceFormPresenter
}