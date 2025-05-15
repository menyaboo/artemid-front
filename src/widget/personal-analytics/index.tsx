import type { ReactNode } from 'react';
import { MainWrapper } from "@shared/ui/wrappers/main";
import { IconTitle } from "@shared/ui";
import { ChartPie } from "lucide-react";
import { useGetAnalyticsPersonalUseCase } from "@entities/analytics/cases/all-personal";

const PersonalAnalytics = (): ReactNode => {
  const { data } = useGetAnalyticsPersonalUseCase()
  if (!data) return
  const { total_appeals, completion_rate, pending_appeals } = data

  return (
    <MainWrapper className="col-span-2 flex flex-col gap-4">
      <IconTitle icon={ <ChartPie/> } title="Аналитика"/>

      <p><span className="text-accent-primary">Всего обращений: </span>{ total_appeals }</p>
      <p><span className="text-accent-primary">Процент выполненных обращений: </span>{ completion_rate }</p>
      <p><span className="text-accent-primary">Количество обращений ожидающих завершения: </span>{ pending_appeals }</p>
    </MainWrapper>
  )
}

export default PersonalAnalytics