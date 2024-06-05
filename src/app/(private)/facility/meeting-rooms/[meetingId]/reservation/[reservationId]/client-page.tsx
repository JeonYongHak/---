'use client';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Player } from '@lottiefiles/react-lottie-player';
import LoadingAnimation from '@/lotties/loading.json';
import Icon from '@/types/solar-icon';
import { useMeetingRoomPasswordQuery } from '@/requests/meetingroom-reservations';

type Props = {
  reservationId: string;
  startAt: Date;
  endAt: Date;
  isCanceled: boolean;
};

export default function MeetingsAccessClientPage({ reservationId, startAt, endAt, isCanceled }: Props) {
  startAt.setMinutes(startAt.getMinutes() - 10);

  const currentTime = new Date();

  const isEarly = currentTime < startAt;
  const isLate = currentTime > new Date(endAt);
  const isShow = !isEarly && !isLate;

  const { data, isLoading, error } = useMeetingRoomPasswordQuery(reservationId, isShow && !isCanceled);

  const renderContents = () => {
    if (isCanceled) {
      return <p className="font-medium text-gray-800">이용이 취소되었습니다.</p>;
    }
    if (isEarly) {
      return (
        <div className="flex flex-col items-center gap-4">
          <p className="font-medium text-blue-600">예약시간 10분 전부터 비밀번호가 표시될 예정입니다.</p>
          <span className="isolate flex w-fit overflow-hidden rounded ring-1 ring-gray-300">
            {Array.from({ length: 6 }).map((_, index) => (
              <p
                key={index}
                className="-ml-px flex h-11 w-11 items-center  justify-center border-x px-3 py-2 text-sm font-semibold text-gray-900"
              >
                {`・`}
              </p>
            ))}
          </span>
        </div>
      );
    }
    if (isLate) {
      return <p className="font-medium text-gray-500">이용 시간이 만료되었습니다.</p>;
    }
    return (
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
    );
  };

  return (
    <TabGroup>
      <TabList className="flex h-12 rounded-t-lg bg-gray-50">
        <Tab
          className={twMerge(
            'flex flex-1 items-center justify-center gap-1 rounded-tl-lg border border-gray-200 transition-colors focus:outline-none',
            'ui-selected:border-b-0 ui-selected:border-r-0 ui-selected:bg-white',
          )}
        >
          {({ selected }) => (
            <>
              <Icon.PasswordMinimalistic color={selected ? '#3B82F6' : '#9CA3AF'} size={16} iconStyle="Linear" />
              <span className="text-sm font-medium text-gray-400 ui-selected:text-blue-600">비밀번호</span>
            </>
          )}
        </Tab>
        <Tab
          className={twMerge(
            'flex flex-1 items-center justify-center gap-1 rounded-tr-lg border border-gray-200 transition-colors focus:outline-none',
            'ui-selected:border-b-0 ui-selected:border-l-0 ui-selected:bg-white',
          )}
        >
          {({ selected }) => (
            <>
              <Icon.QRCode color={selected ? '#3B82F6' : '#9CA3AF'} size={16} iconStyle="Linear" />
              <span className="text-sm font-medium text-gray-400 ui-selected:text-blue-600">QR코드</span>
            </>
          )}
        </Tab>
      </TabList>
      <TabPanels
        className={'flex h-[200px] items-center justify-center rounded-b-lg border-x border-b border-gray-200 bg-white'}
      >
        <TabPanel unmount={false} className={'flex flex-col items-center gap-6'}>
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
            renderContents()
          )}
        </TabPanel>
        <TabPanel unmount={false}>
          <p className="font-medium text-gray-900">해당 건물에서 지원되지 않습니다.</p>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
