// src/app/[buildingId]/_view/BoardNews.tsx

'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { useGetResources } from '@/requests/resources/useGetResources';
import Link from 'next/link';

export default function BoardNews({ buildingId }: { buildingId: string }) {
  const board = 'boardNews';
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
              d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.82002C17.9399 5.56002 15.2899 2.90002 12.0199 2.90002C8.74994 2.90002 6.09994 5.56002 6.09994 8.82002V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z"
              fill="#9CA3AF"
            />
            <path
              d="M14.25 3.32C13.56 3.05 12.81 2.9 12.02 2.9C11.24 2.9 10.49 3.04 9.80005 3.32C10.23 2.51 11.08 2 12.02 2C12.97 2 13.81 2.51 14.25 3.32Z"
              fill="#9CA3AF"
            />
            <path
              d="M14.8299 20.01C14.4099 21.17 13.2999 22 11.9999 22C11.2099 22 10.4299 21.68 9.87993 21.11C9.55993 20.81 9.31993 20.41 9.17993 20C9.30993 20.02 9.43993 20.03 9.57993 20.05C9.80993 20.08 10.0499 20.11 10.2899 20.13C10.8599 20.18 11.4399 20.21 12.0199 20.21C12.5899 20.21 13.1599 20.18 13.7199 20.13C13.9299 20.11 14.1399 20.1 14.3399 20.07C14.4999 20.05 14.6599 20.03 14.8299 20.01Z"
              fill="#9CA3AF"
            />
          </svg>
          <p className="text-base font-bold text-gray-900">건물 소식</p>
        </div>
        <Link href={`${buildingId}/건물소식`}>
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
            <p className="text-[0.8125rem] font-medium text-gray-400">공유된 소식이 없어요</p>
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
