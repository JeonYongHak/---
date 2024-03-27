'use client';

import { Tab } from '@headlessui/react';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import * as SolarIconSet from 'solar-icon-set';
import { Player } from '@lottiefiles/react-lottie-player';
import LoadingAnimation from '@/lotties/loading.json';

type Props = {
  meetingId: string;
};

export default function MeetingsAccessClientPage({}: Props) {
  const isLoading = true;
  return (
    <Tab.Group>
      <Tab.List className="flex h-12 rounded-t-lg bg-gray-50">
        <Tab
          className={twMerge(
            'flex flex-1 items-center justify-center gap-1 rounded-tl-lg border border-gray-200 transition-colors focus:outline-none',
            'ui-selected:border-b-0 ui-selected:border-r-0 ui-selected:bg-white',
          )}
        >
          {({ selected }) => (
            <>
              <SolarIconSet.PasswordMinimalistic
                color={selected ? '#3B82F6' : '#9CA3AF'}
                size={16}
                iconStyle="Linear"
              />
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
              <SolarIconSet.QRCode color={selected ? '#3B82F6' : '#9CA3AF'} size={16} iconStyle="Linear" />
              <span className="text-sm font-medium text-gray-400 ui-selected:text-blue-600">QR코드</span>
            </>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels
        className={'flex h-[200px] items-center justify-center rounded-b-lg border-x border-b border-gray-200 bg-white'}
      >
        <Tab.Panel unmount={false} className={'flex flex-col items-center gap-6'}>
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
              <p className="font-medium text-blue-600">오전 11:00에 비밀번호가 표시됩니다.</p>
              <span className="isolate flex w-fit overflow-hidden rounded ring-1 ring-gray-300">
                <p className="-ml-px flex h-11 w-11 items-center  justify-center border-x px-3 py-2 text-sm font-semibold text-gray-900">
                  ・
                </p>
                <p className="-ml-px flex h-11  w-11 items-center justify-center border-x px-3 py-2 text-sm font-semibold text-gray-900">
                  ・
                </p>
                <p className="-ml-px flex h-11  w-11 items-center justify-center border-x px-3 py-2 text-sm font-semibold text-gray-900">
                  ・
                </p>
                <p className="-ml-px flex h-11  w-11 items-center justify-center border-x px-3 py-2 text-sm font-semibold text-gray-900">
                  ・
                </p>
                <p className="-ml-px flex h-11  w-11 items-center justify-center border-x px-3 py-2 text-sm font-semibold text-gray-900">
                  ・
                </p>
                <p className="-ml-px -mr-px flex  h-11 w-11 items-center justify-center border-x px-3 py-2 text-sm font-semibold text-gray-900">
                  ・
                </p>
              </span>
            </>
          )}
        </Tab.Panel>
        <Tab.Panel unmount={false}>
          <p className="font-medium text-gray-900">해당 건물에서 지원되지 않습니다.</p>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
