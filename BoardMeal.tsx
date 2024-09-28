// src/app/[buildingId]/_view/BoardMeal.tsx

'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { useGetResources } from '@/requests/resources/useGetResources';
import Link from 'next/link';

export default function BoardMeal({ buildingId }: { buildingId: string }) {
  const board = 'boardMeal';
  const { data, isPending, isError } = useGetResources({ buildingId, board });

  //날짜비교-7일이내 올라온 글에는 new가 붙는다.
  const parseDate = (dateString: string) => {
    const [year, month, day] = dateString.split('.').map(Number);
    return new Date(2000 + year, month - 1, day);
  };

  const dateDifference = (date1: Date, date2: Date) => {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div
      className={cn('flex flex-col rounded-lg border border-gray-100 bg-gray-50 lg:h-56', data?.length == 0 && 'h-56')}
    >
      <div className="flex items-center justify-between px-6 pb-2 pt-5">
        <div className="flex items-center gap-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.4"
              d="M12.5 7.40998V22H4.07997C2.91997 22 1.96997 21.07 1.96997 19.93V5.08998C1.96997 2.46998 3.92997 1.27998 6.31997 2.44998L10.75 4.63998C11.71 5.10998 12.5 6.35998 12.5 7.40998Z"
              fill="#9CA3AF"
            />
            <path
              d="M8.97 9.75H5.5C5.09 9.75 4.75 9.41 4.75 9C4.75 8.59 5.09 8.25 5.5 8.25H8.97C9.38 8.25 9.72 8.59 9.72 9C9.72 9.41 9.39 9.75 8.97 9.75Z"
              fill="#9CA3AF"
            />
            <path
              d="M8.97 13.75H5.5C5.09 13.75 4.75 13.41 4.75 13C4.75 12.59 5.09 12.25 5.5 12.25H8.97C9.38 12.25 9.72 12.59 9.72 13C9.72 13.41 9.39 13.75 8.97 13.75Z"
              fill="#9CA3AF"
            />
            <path
              opacity="0.6"
              d="M22 15.05V19.5C22 20.88 20.88 22 19.5 22H12.5V10.42L12.97 10.52L17.01 11.42L17.49 11.53L19.53 11.99C20.02 12.09 20.47 12.26 20.86 12.51C20.86 12.52 20.87 12.52 20.87 12.52C20.97 12.59 21.07 12.67 21.16 12.76C21.62 13.22 21.92 13.89 21.99 14.87C21.99 14.93 22 14.99 22 15.05Z"
              fill="#9CA3AF"
            />
            <path
              d="M12.5 10.42V16.42C12.96 17.03 13.68 17.42 14.5 17.42C15.89 17.42 17.01 16.3 17.01 14.92V11.43L12.97 10.53L12.5 10.42Z"
              fill="#9CA3AF"
            />
            <path
              d="M21.99 14.87C21.92 13.89 21.62 13.22 21.16 12.76C21.07 12.67 20.97 12.59 20.87 12.52C20.87 12.52 20.86 12.52 20.86 12.51C20.47 12.26 20.02 12.09 19.53 11.99L17.49 11.53L17.01 11.42V14.92C17.01 16.29 18.12 17.42 19.51 17.42C20.85 17.42 21.92 16.37 22 15.06V15.05C22 14.99 21.99 14.93 21.99 14.87Z"
              fill="#9CA3AF"
            />
          </svg>
          <p className="text-base font-bold text-gray-900">구내식단표</p>
        </div>
        <Link href={`${buildingId}/구내식단표`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.99992 1.33337C4.32659 1.33337 1.33325 4.32671 1.33325 8.00004C1.33325 11.6734 4.32659 14.6667 7.99992 14.6667C11.6733 14.6667 14.6666 11.6734 14.6666 8.00004C14.6666 4.32671 11.6733 1.33337 7.99992 1.33337ZM10.6666 8.50004H8.49992V10.6667C8.49992 10.94 8.27325 11.1667 7.99992 11.1667C7.72659 11.1667 7.49992 10.94 7.49992 10.6667V8.50004H5.33325C5.05992 8.50004 4.83325 8.27337 4.83325 8.00004C4.83325 7.72671 5.05992 7.50004 5.33325 7.50004H7.49992V5.33337C7.49992 5.06004 7.72659 4.83337 7.99992 4.83337C8.27325 4.83337 8.49992 5.06004 8.49992 5.33337V7.50004H10.6666C10.9399 7.50004 11.1666 7.72671 11.1666 8.00004C11.1666 8.27337 10.9399 8.50004 10.6666 8.50004Z"
              fill="#9CA3AF"
            />
          </svg>
        </Link>
      </div>
      <ul className="h-full overflow-hidden  px-4 pb-5 pt-3">
        {isPending && (
          <li className="flex h-7 items-center justify-between gap-3">
            <Skeleton className="h-[0.813rem] w-full" />
            <Skeleton className="h-[0.813rem] w-1/5" />
          </li>
        )}
        {data?.length == 0 && (
          <li className="flex h-full w-full items-center justify-center">
            <p className="text-[0.8125rem] font-medium text-gray-400">등록된 게시글이 없어요</p>
          </li>
        )}
        {data &&
          data.slice(0, 5).map((list) => {
            const differenceInDays = dateDifference(new Date(), parseDate(list.date));
            return (
              <li key={list.id} className="flex h-9 items-center justify-between gap-3 text-[0.813rem] font-medium lg:h-7">
                <Link
                  href={`/건물소식/${list.id}`}
                  className="flex h-[inherit] grow items-center gap-2 overflow-hidden px-2 transition-colors hover:bg-gray-100"
                >
                  {list.category && (
                    <p className=" w-[3.75rem] overflow-hidden text-ellipsis whitespace-nowrap text-gray-600">
                      {list.category}
                    </p>
                  )}
                  <p
                    className={cn(
                      'w-full overflow-hidden text-ellipsis whitespace-nowrap  text-gray-900',
                      differenceInDays < 8 &&
                        "after:ml-[0.625rem] after:h-3 after:rounded-lg after:bg-[#FCE7F3] after:px-1 after:text-[0.5rem] after:leading-3 after:text-[#F472B6] after:content-['NEW']",
                    )}
                  >
                    {list.title}
                  </p>
                  {list.date && <p className="flex h-[inherit] items-center text-gray-400">{list.date}</p>}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
