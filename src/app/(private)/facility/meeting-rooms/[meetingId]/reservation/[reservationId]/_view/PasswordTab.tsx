'use client';

import { useMeetingRoomPasswordQuery } from '@/requests/meetingroom-reservations';
import { Player } from '@lottiefiles/react-lottie-player';
import LoadingAnimation from '@/lotties/loading.json';
import { Button } from '@headlessui/react';

type Props = {
  reservationId: string;
};

export default function PasswordTab({ reservationId }: Props) {
  const { data, isLoading, error, refetch } = useMeetingRoomPasswordQuery(reservationId);
  console.info(error);
  if (error) {
    return (
      <div className="flex flex-col items-center gap-1">
        <p className="text-lg font-semibold text-gray-900">문제가 발생했습니다.</p>
        <p className="text-sm font-medium text-gray-500">다시 한번 비밀번호 호출을 시도해주세요!</p>
        <p className="text-xs font-medium text-red-500">{error?.message}</p>
        <p className="text-xs font-medium text-red-500">문제가 반복된다면 관리사무소에 문의해주세요.</p>
        <div className="h-3" />
        <Button
          className={'rounded-lg border border-gray-300 px-3 py-2 text-base text-gray-800'}
          onClick={() => refetch()}
        >
          다시 시도하기
        </Button>
      </div>
    );
  }
  return (
    <>
      {isLoading ? (
        <div className="relative mb-10">
          <p className="font-medium">잠시만 기다려주세요</p>
          <Player
            autoplay
            loop
            src={LoadingAnimation}
            className="absolute left-1/2 top-1/2 h-[250px] w-[300px] -translate-x-1/2 -translate-y-1/3"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <p className="font-medium text-blue-600">도어락에 비밀번호를 입력해주세요.</p>
          <span className="isolate flex w-fit overflow-hidden rounded ring-1 ring-gray-300">
            {Array.from({ length: 6 }).map((_, index) => (
              <p
                key={index}
                className="-ml-px flex h-11 w-11 items-center  justify-center border-x px-3 py-2 text-sm font-semibold text-gray-900"
              >
                {data?.data[index] || '・'}
              </p>
            ))}
          </span>
        </div>
      )}
    </>
  );
}
