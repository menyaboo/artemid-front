import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateAppealUseCase } from "@entities/appeal/cases";
import { ICreateAppealSchema } from "@shared/interface/entities/appeal";
import { createAppealSchema } from "@entities/appeal/validation";
import { useGetAllCategoryServiceUseCase } from "@entities/category-service/cases";
import { useGetAllTypeServiceUseCase } from "@entities/type-service/cases";

const useMainFormPresenter = () => {
  const { mutateAsync } = useCreateAppealUseCase()
  const { data: categories = [] } = useGetAllCategoryServiceUseCase()
  const form = useForm<ICreateAppealSchema>({
    resolver: zodResolver(createAppealSchema),
  })

  const categoryId = useWatch({control: form.control, name: 'category_id'})
  const { data: types = [] } = useGetAllTypeServiceUseCase({
    id: categoryId
  })

  const handleSubmitCallback = form.handleSubmit(async (data: ICreateAppealSchema) => {
    await mutateAsync(data)
  })

  const categoryOptions = categories?.map(category => ({
    label: category.name,
    value: category.id,
  }))

  const typeOptions = types?.map(type => ({
    label: type.name,
    value: type.id,
  }))


  return {
    form,
    handleSubmitCallback,
    categoryOptions,
    typeOptions
  }
}

export {
  useMainFormPresenter
}