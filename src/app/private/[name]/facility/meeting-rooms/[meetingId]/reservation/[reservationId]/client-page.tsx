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
  startAt: string;
  endAt: string;
  isCanceled: boolean;
};

export default function MeetingsAccessClientPage({ reservationId, startAt, endAt, isCanceled }: Props) {
  const tenDaysBeforeStart = new Date(startAt);
  tenDaysBeforeStart.setDate(tenDaysBeforeStart.getDate() - 10);

  const currentTime = new Date();
  const isTimeOut = currentTime > new Date(endAt);
  const isShow = tenDaysBeforeStart < currentTime && currentTime < new Date(endAt);
  const { data, isLoading, error } = useMeetingRoomPasswordQuery(reservationId, isShow && !isCanceled);
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
            <>
              {isTimeOut ? (
                <p
                  className="font-medium text-gray-500
                "
                >
                  이용 시간이 만료되었습니다.
                </p>
              ) : (
                <p className="font-medium text-blue-600">
                  {isShow ? `도어락에 비밀번호를 입력해주세요.` : `오전 11:00에 비밀번호가 표시됩니다.`}
                </p>
              )}

              <span className="isolate flex w-fit overflow-hidden rounded ring-1 ring-gray-300">
                {Array.from({ length: 6 }).map((_, index) => (
                  <p
                    key={index}
                    className="-ml-px flex h-11 w-11 items-center  justify-center border-x px-3 py-2 text-sm font-semibold text-gray-900"
                  >
                    {isShow ? data?.data[index] : '・'}
                  </p>
                ))}
              </span>
            </>
          )}
        </TabPanel>
        <TabPanel unmount={false}>
          <p className="font-medium text-gray-900">해당 건물에서 지원되지 않습니다.</p>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}
