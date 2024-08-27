'use client';

import { useMeetingRoomPasswordQuery } from '@/requests/meetingroom-reservations';
import { Player } from '@lottiefiles/react-lottie-player';
import LoadingAnimation from '@/lotties/loading.json';

type Props = {
  reservationId: string;
};

export default function PasswordTab({ reservationId }: Props) {
  const { data, isLoading } = useMeetingRoomPasswordQuery(reservationId);

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
