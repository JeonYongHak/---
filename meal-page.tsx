// src/app/[buildingId]/meal/page.tsx

import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import fetchMeals from '@/requests/meals/fetchMeals';
import { fetchMealsAll } from '@/requests/meals/fetchMealsAll';
import Empty from './_view/Empty';
import Intro from './_view/Intro';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Props = {
  params: { buildingId: string };
  searchParams: { page: String };
};

export default async function meal({ params: { buildingId }, searchParams: { page = '1' } }: Props) {
  const p = Number(page);
  const currentPage = Object.is(NaN, p) || p === 0 ? 1 : p;

  const { data: meals, pages } = await fetchMeals(currentPage);
  const { data: mealsAll } = await fetchMealsAll();

  //페이지네이션 버튼 갯수-게시글 수에 따른 버튼 갯수(게시글이 50개 미만일때)
  const PAGES_AT_ONCE = Math.min(5, Math.ceil(mealsAll.length / 10));

  //페이지계산기능
  const pageNumbers = Array.from({ length: Number(pages) }).map((_, i) => i + 1);
  const start = Math.floor((currentPage - 1) / PAGES_AT_ONCE) * PAGES_AT_ONCE + 1;
  const end = start + PAGES_AT_ONCE - 1;
  const prevEnd = start - 1;
  const nextStart = end + 1;
  const hasPrevPages = currentPage > PAGES_AT_ONCE; //현재페이지가 버튼보다 크면 전버튼이 있는것
  const hasNextPages = PAGES_AT_ONCE * 10 < mealsAll.length; //전체데이터가 버튼갯수*10보다 클경우(즉 페이지네이션 데이터 50개보다 전체 데이터가 많을 경우)

  //날짜관련기능
  const today = new Date();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);

  const dateDataIntoForm = (date: string) => {
    return date.split('-').join('.');
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <Intro />
        <div className="flex w-[67.5rem] flex-col  justify-start  gap-5 p-10">
          <div>
            <h1 className="flex py-4 text-[1.625rem] font-bold leading-9">오늘의 메뉴</h1>
          </div>
          {/* 상단최신글*/}
          {mealsAll.length === 0 ? (
            <div className="item flex h-28 w-[62.5rem] items-center gap-5 rounded-lg border border-gray-200 px-4 hover:bg-gray-50 active:[box-shadow:0px_0px_0px_2px_rgba(75,_85,_99,_0.10)]">
              <div className="flex w-full flex-col items-start gap-2  py-5 ">
                <div className="flex self-stretch  text-base font-semibold capitalize text-gray-500">
                  <p>{`아직 ${month}월 ${day}일의 구내식당 식단표가 등록되지 않았어요.`}</p>
                </div>
                <div className="flex text-sm font-normal text-gray-500">
                  <p>조금만 기다려주세요!</p>
                </div>
              </div>
            </div>
          ) : (
            <Link href={`/meal/${mealsAll[0].id}`}>
              <div className="flex w-[62.5rem]  gap-5 overflow-hidden rounded-lg border border-gray-200 hover:bg-gray-50 active:[box-shadow:0px_0px_0px_2px_rgba(75,_85,_99,_0.10)]">
                <div className="hover: flex w-[calc(100%-7rem)] flex-col items-start gap-2 px-4 py-5 ">
                  <div className="flex h-3 items-center justify-end rounded-lg bg-[#FCE7F3] px-1 text-[0.5rem] text-[#F472B6]">
                    <p>NEW</p>
                  </div>
                  <div className="flex self-stretch text-[1.125rem] font-bold leading-[135%] text-gray-900">
                    <p>{mealsAll[0].title}</p>
                  </div>
                  <div className="flex text-sm font-normal text-gray-500">
                    <p>
                      {dateDataIntoForm(mealsAll[0].dateRange.start)} - {dateDataIntoForm(mealsAll[0].dateRange.end)}
                    </p>
                  </div>
                </div>
                {mealsAll[0].images && (
                  <div className="flex shrink-0 items-end justify-end">
                    <Image
                      src={`${mealsAll[0].images[0]}`}
                      alt=""
                      width={112}
                      height={112}
                      className=" flex h-28 w-28  object-cover"
                    />
                    <div className="absolute h-8  w-8 items-center justify-center rounded-tl-xl px-2.5 py-1  ">
                      <div className="absolute left-0 top-0 h-full w-full rounded-br-lg rounded-tl-xl  bg-gray-900 opacity-60 "></div>
                      <span className=" absolute self-stretch  text-[1.125rem] font-normal leading-[135%] text-white">
                        {mealsAll[0].images.length}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          )}
          {/* 하단 리스트 */}
          {meals.length === 0 ? (
            <Empty />
          ) : (
            <ul className="flex w-full flex-col items-start gap-3 self-stretch">
              {meals.map((meal) => (
                <li id={meal.id} className="w-full">
                  <Link
                    href={`/meal/${meal.id}`}
                    className="flex h-[3.25rem] w-full  items-center justify-between gap-3 rounded-lg bg-white px-5 hover:bg-gray-50 active:[box-shadow:0px_0px_0px_2px_rgba(75,_85,_99,_0.10)] "
                  >
                    <div className="text-base font-medium capitalize text-gray-900">
                      <span>{meal.title}</span>
                    </div>
                    <span className="text-base font-normal text-gray-500">
                      {dateDataIntoForm(meal.dateRange.start)} - {dateDataIntoForm(meal.dateRange.end)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <Pagination className="px-2 py-4">
            <PaginationContent>
              {/* 이전페이지 */}
              <PaginationItem>
                <PaginationLink
                  href={hasPrevPages ? `?page=${prevEnd}` : undefined}
                  className={cn({
                    'cursor-default opacity-40 hover:bg-inherit': !hasPrevPages,
                  })}
                >
                  <ChevronLeft className="h-4 w-4" />
                </PaginationLink>
              </PaginationItem>
              {/* 페이지넘버 */}
              {pageNumbers.length === 0 ? (
                <PaginationLink isActive={true}>1</PaginationLink>
              ) : (
                pageNumbers.slice(start - 1, end).map((pageNumber) => (
                  <PaginationItem key={pageNumber}>
                    {/* 페이지 이동 번호 */}
                    <PaginationLink
                      href={`?page=${pageNumber}`}
                      isActive={pageNumber === currentPage}
                      className={cn({ 'border-blue-100 bg-blue-50 text-blue-600': pageNumber === currentPage })}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                ))
              )}
              <PaginationItem>
                {/* 다음페이지 */}
                <PaginationLink
                  href={hasNextPages ? `?page=${nextStart}` : undefined}
                  className={cn({
                    'cursor-default opacity-40 hover:bg-inherit': !hasNextPages,
                  })}
                >
                  <ChevronRight className="h-4 w-4" />
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
}
