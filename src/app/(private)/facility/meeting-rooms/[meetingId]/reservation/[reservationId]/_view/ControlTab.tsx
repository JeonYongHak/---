'use client';

import { Button } from '@headlessui/react';
import { Player } from '@lottiefiles/react-lottie-player';
import IconSax from '@/types/iconsax';
import { useControlDoorlock } from '@/requests/meetingroom-reservations/useControlDoorlock';
import LoadingAnimation from '@/lotties/loading.json';

type Props = {
  reservationId: string;
};

export default function ControlTab({ reservationId }: Props) {
  const { mutateAsync, isPending } = useControlDoorlock({ reservationId });

  return (
    <>
      {isPending && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/50">
          <Player autoplay loop src={LoadingAnimation} className="h-[250px] w-[300px]" />
        </div>
      )}
      <Button
        disabled={isPending}
        onClick={() => mutateAsync({ type: 'open' }).then(() => {})}
        className="flex h-[100px] w-[100px] flex-col items-center justify-center gap-2 rounded border border-gray-300 shadow-sm transition-all hover:bg-blue-50 active:bg-blue-100 disabled:opacity-40"
      >
        <IconSax.Unlock size={28} variant="Bold" className="text-blue-500" />
        <p className="text-base font-semibold text-blue-500">열기</p>
      </Button>
      <Button
        disabled={isPending}
        onClick={() => mutateAsync({ type: 'close' })}
        className="flex h-[100px] w-[100px] flex-col items-center justify-center gap-2 rounded border border-gray-300 shadow-sm transition-all hover:bg-red-50 active:bg-red-100 disabled:opacity-40"
      >
        <IconSax.Lock size={28} variant="Bold" className="text-red-500" />
        <p className="text-base font-semibold text-red-500">닫기</p>
      </Button>
    </>
  );
}
