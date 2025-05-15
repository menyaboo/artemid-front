import { useUserUpdateUseCase } from "@entities/user/cases";
import { useForm } from "react-hook-form";
import { IUpdateUserSchema, IUserDto } from "@shared/interface/entities/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateSchema } from "@entities/user/validation";
import { useEffect } from "react";
import { useGetAllUserRoleUseCase } from "@entities/user-role/cases";

const useUpdateUserFormPresenter = (user: IUserDto) => {
  const { mutateAsync } = useUserUpdateUseCase()
  const { data: roles = [] } = useGetAllUserRoleUseCase()

  const form = useForm<IUpdateUserSchema>({
    resolver: zodResolver(updateSchema),
  })

  useEffect(() => {
    form.reset(user)
  }, [user.id]);

  const handleSubmitCallback = form.handleSubmit(async (data: IUpdateUserSchema) => {
    await mutateAsync(data)
  })

  const optionRoles = roles.map((r) => ({
    label: r.name,
    value: r.id
  }))

  return {
    form,
    optionRoles,
    handleSubmitCallback
  }
}

export {
  useUpdateUserFormPresenter,
}