// src/app/[buildingId]/_view/BoardFolders.tsx

'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { useGetResources } from '@/requests/resources/useGetResources';
import Link from 'next/link';

export default function BoardFolders({ buildingId }: { buildingId: string }) {
  const board = 'boardFolders';
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
              d="M15.7201 2H8.28008C7.90008 2 7.58008 2.32 7.58008 2.7C7.58008 3.08 7.90008 3.4 8.28008 3.4H11.5401L12.9401 5.26C13.2501 5.67 13.2901 5.73 13.8701 5.73H17.5901C17.9701 5.73 18.3401 5.78 18.7001 5.88C18.7401 6.06 18.7601 6.24 18.7601 6.43V6.78C18.7601 7.16 19.0801 7.48 19.4601 7.48C19.8401 7.48 20.1601 7.16 20.1601 6.78V6.42C20.1401 3.98 18.1601 2 15.7201 2Z"
              fill="#9CA3AF"
            />
            <path
              d="M20.14 6.54C19.71 6.23 19.22 6 18.69 5.87C18.34 5.77 17.96 5.72 17.58 5.72H13.86C13.28 5.72 13.24 5.66 12.93 5.25L11.53 3.39C10.88 2.53 10.37 2 8.74 2H6.42C3.98 2 2 3.98 2 6.42V17.58C2 20.02 3.98 22 6.42 22H17.58C20.02 22 22 20.02 22 17.58V10.14C22 8.65 21.27 7.34 20.14 6.54ZM14.33 16H9.67C9.28 16 8.97 15.69 8.97 15.3C8.97 14.92 9.28 14.6 9.67 14.6H14.32C14.7 14.6 15.02 14.92 15.02 15.3C15.02 15.69 14.71 16 14.33 16Z"
              fill="#9CA3AF"
            />
          </svg>
          <p className="text-base font-bold text-gray-900">자료실</p>
        </div>
        <Link href={`${buildingId}/자료실`}>
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
              <li
                key={list.id}
                className="flex h-9 items-center justify-between gap-3 text-[0.813rem] font-medium lg:h-7"
              >
                <Link
                  href={`/자료실/${list.id}`}
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
