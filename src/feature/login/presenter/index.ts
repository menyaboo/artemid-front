import { useForm } from "react-hook-form";
import { ILoginSchema } from "@shared/interface/entities/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@entities/user/validation";
import { useLoginUseCase } from "@entities/user/cases";

const useLoginFormPresenter = () => {
  const { mutateAsync } = useLoginUseCase()
  const form = useForm<ILoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const handleSubmitCallback = form.handleSubmit(async (data: ILoginSchema) => {
    await mutateAsync(data)
  })

  return {
    form,
    handleSubmitCallback
  }
}

export {
  useLoginFormPresenter
}