// src/requests/meals/fetchMealsAll.ts

type Meal = {
  id: string;
  title: string;
  dateRange: {
    start: string;
    end: string;
  };
  description: string | null;
  images: string[] | null;
};

type Response = {
  data: Meal[];
};

export const fetchMealsAll = async (): Promise<Response> => {
  let url = `http://localhost:5500/meals`;

  const response = await fetch(url);
  const body = await response.json();
  return {
    data: body,
  };
};
