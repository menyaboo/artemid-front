import type { ReactNode } from 'react';
import { useGetAnalyticsOverallUseCase } from "@entities/analytics/cases";
import { MainWrapper } from "@shared/ui/wrappers/main";
import { IconTitle } from "@shared/ui";
import { ChartPie } from "lucide-react";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  ArcElement
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ArcElement
);

const AnalyticsPage = (): ReactNode => {
  const { data } = useGetAnalyticsOverallUseCase()

  if (!data) return null

  const categoryData = {
    labels: data.top_categories.map(cat => cat.name),
    datasets: [
      {
        label: 'Популярная категория обращений',
        backgroundColor: '#6366f1',
        data: data.top_categories.map(cat => cat.count),
        borderColor: '#4f46e5',
        borderWidth: 1,
      },
    ],
  };

  const typeData = {
    labels: data.top_types.map(type => type.name),
    datasets: [
      {
        label: 'Популярный тип обращений',
        backgroundColor: '#10b981',
        data: data.top_types.map(type => type.count),
        borderColor: '#047857',
        borderWidth: 1,
      },
    ],
  };

  const statusLabels = data.status_distribution.map(item => item.name);
  const statusCounts = data.status_distribution.map(item => item.count);

  const statusData = {
    labels: statusLabels.length ? statusLabels : ['Нет статусов'],
    datasets: [
      {
        id: 1,
        label: 'Количество по статусам',
        data: statusCounts.length ? statusCounts : [0],
        borderColor: 'transparent',
        backgroundColor: [
          '#3b82f6',
          '#10b981',
          '#ef4444',
          '#8b5cf6',
        ],
      },
    ],
  };

  return (
    <main className="container mx-auto py-10">
      <MainWrapper>
        <IconTitle icon={ <ChartPie/> } title="Аналитика" />

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex flex-col justify-center items-center w-full sm:w-auto md:w-80">
            <span>Количество обращений</span>
            <span className="font-bold text-[32px]">{data.total_appeals}</span>
          </div>
          <div className="w-full sm:w-auto md:w-80">
            <Bar data={categoryData} key={`bar-category`} />
          </div>
          <div className="w-full sm:w-auto md:w-80">
            <Bar data={typeData} key={`bar-type`} />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-md">
            <Doughnut data={statusData} key={`doughnut-status`} />
          </div>
        </div>
      </MainWrapper>
    </main>
  )
}

export default AnalyticsPage