// src/app/[buildingId]/_view/BoardCommunity.tsx

'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { useGetResources } from '@/requests/resources/useGetResources';
import Link from 'next/link';

export default function BoardMeal({ buildingId }: { buildingId: string }) {
  const board = 'boardCommunity';
  const { data, isPending, isError } = useGetResources({ buildingId, board });

  //날짜비교-3일이내 올라온 글에는 new가 붙는다.
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
              opacity="0.5"
              d="M12.8324 21.8013C15.9583 21.1747 20 18.926 20 13.1112C20 7.8196 16.1267 4.29593 13.3415 2.67685C12.7235 2.31757 12 2.79006 12 3.50492V5.3334C12 6.77526 11.3938 9.40711 9.70932 10.5018C8.84932 11.0607 7.92052 10.2242 7.816 9.20388L7.73017 8.36604C7.6304 7.39203 6.63841 6.80075 5.85996 7.3946C4.46147 8.46144 3 10.3296 3 13.1112C3 20.2223 8.28889 22.0001 10.9333 22.0001C11.0871 22.0001 11.2488 21.9955 11.4171 21.9858C11.863 21.9296 11.4171 22.085 12.8324 21.8013Z"
              fill="#9CA3AF"
            />
            <path
              d="M8 18.4442C8 21.064 10.1113 21.8742 11.4171 21.9858C11.863 21.9296 11.4171 22.085 12.8324 21.8013C13.871 21.4343 15 20.4922 15 18.4442C15 17.1465 14.1814 16.3459 13.5401 15.9711C13.3439 15.8564 13.1161 16.0008 13.0985 16.2273C13.0429 16.9454 12.3534 17.5174 11.8836 16.9714C11.4685 16.4889 11.2941 15.784 11.2941 15.3331V14.7439C11.2941 14.3887 10.9365 14.1533 10.631 14.3346C9.49507 15.0085 8 16.3949 8 18.4442Z"
              fill="#9CA3AF"
            />
          </svg>
          <p className="text-base font-bold text-gray-900">커뮤니티</p>
        </div>
        {data?.length == 0 ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="#F9FAFB" />
            <path
              d="M12.0002 5.33331C8.32683 5.33331 5.3335 8.32665 5.3335 12C5.3335 15.6733 8.32683 18.6666 12.0002 18.6666C15.6735 18.6666 18.6668 15.6733 18.6668 12C18.6668 8.32665 15.6735 5.33331 12.0002 5.33331ZM14.6668 12.5H12.5002V14.6666C12.5002 14.94 12.2735 15.1666 12.0002 15.1666C11.7268 15.1666 11.5002 14.94 11.5002 14.6666V12.5H9.3335C9.06016 12.5 8.8335 12.2733 8.8335 12C8.8335 11.7266 9.06016 11.5 9.3335 11.5H11.5002V9.33331C11.5002 9.05998 11.7268 8.83331 12.0002 8.83331C12.2735 8.83331 12.5002 9.05998 12.5002 9.33331V11.5H14.6668C14.9402 11.5 15.1668 11.7266 15.1668 12C15.1668 12.2733 14.9402 12.5 14.6668 12.5Z"
              fill="#E5E7EB"
            />
          </svg>
        ) : (
          <Link href={`${buildingId}/커뮤니티`}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.99992 1.33337C4.32659 1.33337 1.33325 4.32671 1.33325 8.00004C1.33325 11.6734 4.32659 14.6667 7.99992 14.6667C11.6733 14.6667 14.6666 11.6734 14.6666 8.00004C14.6666 4.32671 11.6733 1.33337 7.99992 1.33337ZM10.6666 8.50004H8.49992V10.6667C8.49992 10.94 8.27325 11.1667 7.99992 11.1667C7.72659 11.1667 7.49992 10.94 7.49992 10.6667V8.50004H5.33325C5.05992 8.50004 4.83325 8.27337 4.83325 8.00004C4.83325 7.72671 5.05992 7.50004 5.33325 7.50004H7.49992V5.33337C7.49992 5.06004 7.72659 4.83337 7.99992 4.83337C8.27325 4.83337 8.49992 5.06004 8.49992 5.33337V7.50004H10.6666C10.9399 7.50004 11.1666 7.72671 11.1666 8.00004C11.1666 8.27337 10.9399 8.50004 10.6666 8.50004Z"
                fill="#9CA3AF"
              />
            </svg>
          </Link>
        )}
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
            <p className="text-[0.8125rem] font-medium text-gray-400">커뮤니티는 오픈 준비 중이에요</p>
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
