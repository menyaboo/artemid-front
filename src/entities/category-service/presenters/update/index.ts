import { IUpdateCategoryServiceSchema, IUpdateCategoryServicePort } from "@shared/interface/entities/category-service";
import { useUpdateCategoryServiceUseCase } from "@entities/category-service/cases";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { updateCategoryServiceSchema } from "@entities/category-service/validation/update";

const useUpdateCategoryServiceFormPresenter = (categoryService: IUpdateCategoryServicePort) => {
	const { mutateAsync } = useUpdateCategoryServiceUseCase()

	const form = useForm<IUpdateCategoryServiceSchema>({
		resolver: zodResolver(updateCategoryServiceSchema),
	})

	const handleSubmitCallback = form.handleSubmit(async (data: IUpdateCategoryServiceSchema) => {
		await mutateAsync(data)
	})

	useEffect(() => {
		form.reset(categoryService)
	}, [categoryService.id]);

	return {
		form,
		handleSubmitCallback
	}
}

export {
	useUpdateCategoryServiceFormPresenter
}