// src/app/[buildingId]/meal/[mealId]/page.tsx

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { fetchMeal } from '@/requests/meals/fetchMeal';
import { ArrowRight2 } from 'iconsax-react';

type Props = {
  params: { mealId: string };
};
export default async function MealDetailsPage({ params: { mealId } }: Props) {
  const { data: meal } = await fetchMeal(mealId);

  //날짜관련기능
  const dateDataIntoForm = (date: string) => {
    const [year, month, day] = date.split('-');
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <main className="flex justify-center">
      <div className="flex w-[50rem] flex-col items-start">
        <div className="flex items-start self-stretch p-10 ">
          <div className="flex shrink-0 grow basis-0 flex-col items-start gap-3">
            <div className="flex min-h-[31.25rem] w-[45rem] flex-col items-start gap-10">
              <Breadcrumb>
                <BreadcrumbList className="sm:gap-0">
                  <BreadcrumbItem className="flex-col items-center justify-center gap-2.5 px-0 py-1.5">
                    <BreadcrumbLink
                      className="text-xs font-medium capitalize not-italic leading-4 text-gray-500"
                      href="/"
                    >
                      홈
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="flex flex-col items-center justify-center gap-2.5 p-1">
                    <ArrowRight2 className="flex h-4 w-4 items-center justify-center" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem className="flex flex-col items-center justify-center gap-2.5 px-0 py-1.5">
                    <BreadcrumbLink
                      className="text-xs font-medium capitalize not-italic leading-4 text-gray-500"
                      href="/meal "
                    >
                      구내 식당
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="flex flex-col items-center justify-center gap-2.5 p-1">
                    <ArrowRight2 className="flex h-4 w-4 items-center justify-center" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem className="flex flex-col items-center justify-center gap-2.5 px-0 py-1.5">
                    <BreadcrumbPage className="text-xs font-medium capitalize not-italic leading-4 text-gray-700">
                      {meal.title}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="flex flex-col items-start gap-10 self-stretch">
                <div className="flex flex-col items-start justify-center gap-3 self-stretch border-b border-solid border-gray-200 px-0 pb-9 pt-4">
                  <div className="flex flex-col items-center gap-2 self-stretch">
                    <div className="flex items-start gap-1.5 self-stretch">
                      <div className="text-base font-medium capitalize not-italic text-blue-500">구내식당</div>
                    </div>
                    <div className="self-stretch text-[1.625rem] font-bold capitalize not-italic leading-9">
                      {meal.title}
                    </div>
                  </div>
                  <div className="flex items-start gap-3 self-stretch text-center text-base font-medium capitalize not-italic text-gray-500">
                    <div>
                      {dateDataIntoForm(meal.dateRange.start)} - {dateDataIntoForm(meal.dateRange.end)}
                    </div>
                  </div>
                </div>
                <div className="flex min-h-[18.75rem] flex-col items-start gap-10 self-stretch">
                  {meal.description !== null && (
                    <div className="text-[1.125rem] font-normal leading-[1.35rem] text-gray-700">
                      {meal.description}
                    </div>
                  )}
                  {meal.images && (
                    <div className="flex flex-wrap items-start">
                      {meal.images.map((item, index) => (
                        <img key={index} className="flex" src={item}></img>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
