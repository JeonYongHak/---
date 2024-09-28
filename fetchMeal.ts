// src/requests/meals/fetchMeal.ts

import { BaseResponse } from '@/types/response';
type Response = {
  id: string;
  title: string;
  dateRange: {
    start: string;
    end: string;
  };
  description: string | null;
  images: string[] | null;
};

export const fetchMeal = async (mealId: string) => {
  const res = await fetch(`http://localhost:5500/meals/${mealId}`, { method: 'GET', cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  const jsonResponse = await res.json();

  const response: BaseResponse<Response> = {
    data: jsonResponse,
    message: 'message',
  };

  return response;
};
