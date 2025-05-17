import { ICreateCategoryServiceSchema } from "@shared/interface/entities/category-service";
import { useCreateCategoryServiceUseCase } from "@entities/category-service/cases";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createCategoryServiceSchema } from "@entities/category-service/validation";

const useCreateCategoryServiceFormPresenter = () => {
	const { mutateAsync } = useCreateCategoryServiceUseCase()

	const form = useForm<ICreateCategoryServiceSchema>({
		resolver: zodResolver(createCategoryServiceSchema),
	})

	const handleSubmitCallback = form.handleSubmit(async (data: ICreateCategoryServiceSchema) => {
		await mutateAsync(data)
	})

	return {
		form,
		handleSubmitCallback
	}
}

export {
	useCreateCategoryServiceFormPresenter
}