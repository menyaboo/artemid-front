import { useMutation } from '@tanstack/react-query'
import { EQueryValues } from '@shared/enum';
import { enqueueSnackbar } from "notistack";
import { CreateAppealSlice } from "@entities/appeal/slices";
import { ICreateAppealPort } from "@shared/interface/entities/appeal";

const useCreateAppealUseCase = () => {
  const execute = async (port: ICreateAppealPort): Promise<void> => {
    return CreateAppealSlice(port)
  }

  return useMutation({
    mutationFn: execute,
    mutationKey: [EQueryValues.CreateAppeal],
    onSuccess: (): void => {
      enqueueSnackbar("Вы успешно создали заявку.", { variant: "success" })
    },
  })
}

export {
  useCreateAppealUseCase
}
