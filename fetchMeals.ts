// src/requests/meals/fetchMeals.ts

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
  [key: string]: Meal[] | number | null;
  data: Meal[];
};

export default async function fetchMeals(currentPage: number): Promise<Response> {
  let url = `http://localhost:5500/meals?_page=${currentPage}`;

  const response = await fetch(url);
  const body = await response.json();
  return {
    data: body,
    pages: body.length,
  };
}
