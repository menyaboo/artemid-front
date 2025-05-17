import { ICreateTypeServiceSchema } from "@shared/interface/entities/type-service";
import { useCreateTypeServiceUseCase } from "@entities/type-service/cases";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTypeServiceSchema } from "@entities/type-service/validation";
import { useGetAllCategoryServiceUseCase } from "@entities/category-service/cases";

const useCreateTypeServiceFormPresenter = () => {
	const { mutateAsync } = useCreateTypeServiceUseCase()
	const { data: categories = [] } = useGetAllCategoryServiceUseCase()

	const form = useForm<ICreateTypeServiceSchema>({
		resolver: zodResolver(createTypeServiceSchema),
	})

	const handleSubmitCallback = form.handleSubmit(async (data: ICreateTypeServiceSchema) => {
		await mutateAsync(data)
	})

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
	useCreateTypeServiceFormPresenter
}