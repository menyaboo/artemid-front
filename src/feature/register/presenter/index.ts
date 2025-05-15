import { useForm } from "react-hook-form";
import { IRegisterSchema } from "@shared/interface/entities/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@entities/user/validation";
import { useRegisterUseCase } from "@entities/user/cases/register";

const useRegisterFormPresenter = () => {
  const { mutateAsync } = useRegisterUseCase()
  const form = useForm<IRegisterSchema>({
    resolver: zodResolver(registerSchema),
  })

  const handleSubmitCallback = form.handleSubmit(async (data: IRegisterSchema) => {
    await mutateAsync(data)
  })

  return {
    form,
    handleSubmitCallback
  }
}

export {
  useRegisterFormPresenter
}