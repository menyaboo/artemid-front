interface IAnalyticsPersonalDto {
  total_appeals: number;
  completion_rate: string;
  pending_appeals: number;
}

interface INamedItem {
  id: number;
  name: string;
  count: number;
}

interface IAnalyticsOverallDto {
  total_appeals: number;
  top_categories: INamedItem[];
  top_types: INamedItem[];
  status_distribution: INamedItem[];
}

export type {
  IAnalyticsPersonalDto,
  IAnalyticsOverallDto
}