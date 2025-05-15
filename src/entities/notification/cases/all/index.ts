import { useQuery } from "@tanstack/react-query";
import { EQueryValues } from "@shared/enum";
import { GetAllNotificationSlice } from "@entities/notification/slices";
import { INotificationDto } from "@shared/interface/entities/notification";

const useGetAllNotificationUseCase = () => {
  const execute = async (): Promise<INotificationDto[]> => {
    return GetAllNotificationSlice()
  }

  return useQuery({
    queryKey: [EQueryValues.GetAllNotification],
    queryFn: execute,
    refetchInterval: 3000,
    refetchOnWindowFocus: true,
    staleTime: 5000,
  });
};

export {
  useGetAllNotificationUseCase
}