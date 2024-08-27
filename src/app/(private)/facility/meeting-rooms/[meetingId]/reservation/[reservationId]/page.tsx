import * as SolarIconSet from 'solar-icon-set';
import { serverHttp } from '@/utils/http';
import Icon from '@/types/solar-icon';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import ControlTab from './_view/ControlTab';
import PasswordTab from './_view/PasswordTab';
import { twMerge } from 'tailwind-merge';
import IconSax from '@/types/iconsax';

type Props = {
  params: {
    reservationId: string;
  };
};

export async function generateMetadata({ params: { reservationId } }: Props) {
  const { data } = await serverHttp(`/meetingroom-reservations/${reservationId}`);
  return {
    title: `오피스너 회의실 예약`,
    openGraph: {
      title: `${data.buildingName}에서 회의실 예약 안내드립니다.`,
      description: `${data.buildingName} ${data.dong}동 ${data.floor}층 ${data.name} 회의실 예약 안내`,
    },
  };
}

export default async function MeetingsAccessPage({ params: { reservationId } }: Props) {
  const { data } = await serverHttp(`/meetingroom-reservations/${reservationId}`);

  // UTC 형태로 기록되어 내려오는 KST 시간을 다시 실제 UTC 시간으로 변경하는 작업
  const startAt = new Date(data.startAt);
  startAt.setHours(startAt.getHours() - 9);
  const endAt = new Date(data.endAt);
  endAt.setHours(endAt.getHours() - 9);

  startAt.setMinutes(startAt.getMinutes() - 10);

  const currentTime = new Date();
  const isEarly = currentTime < startAt;
  const isLate = currentTime > new Date(endAt);

  const renderPanel = () => {
    if (isEarly) return <div>회의실 예약 시간 10분 전부터 이용 가능합니다.</div>;
    if (isLate) return <div>회의실 이용 시간이 지났습니다.</div>;
    return (
      <>
        <TabPanel unmount={false} className="relative flex w-full flex-row items-center justify-center gap-8">
          <ControlTab reservationId={reservationId} />
        </TabPanel>
        <TabPanel className={'flex flex-col items-center gap-6'}>
          <PasswordTab reservationId={reservationId} />
        </TabPanel>
        <TabPanel unmount={false}>
          <p className="font-medium text-gray-900">해당 건물에서 지원되지 않습니다.</p>
        </TabPanel>
      </>
    );
  };

  return (
    <main className="mx-auto flex min-h-[calc(100vh-224px)] max-w-7xl flex-col justify-center bg-gray-100 px-4 sm:px-6 md:min-h-[calc(100vh-174px)] lg:px-8">
      {data.checkStatus === 'canceled' ? (
        <div className="flex flex-col gap-2">
          <Icon.Danger />
          <p>
            해당 예약건이 <br />
            취소되었습니다
          </p>
        </div>
      ) : (
        <p className="text-2xl font-medium leading-9">
          오피스너에서
          <br /> 회의실 출입 안내 드립니다
        </p>
      )}
      <div className="mt-8 flex items-center gap-1 rounded-lg bg-white p-4">
        <SolarIconSet.MapPoint color={'#3B82F6'} size={16} iconStyle="Bold" />
        <p className="text-sm font-semibold text-gray-800">
          {data.buildingName} {data.dong}동 {data.floor}층 {data.name}
        </p>
      </div>
      <div className="my-5 flex flex-col gap-2 rounded-lg bg-white p-4">
        <p className="flex items-center gap-1">
          <SolarIconSet.ClockCircle color={'#3B82F6'} size={16} iconStyle="Bold" />
          <span className="text-sm font-semibold text-gray-800">출입 안내</span>
        </p>
        <span className="text-sm font-medium text-gray-500">
          {new Date(startAt).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })} 부터
          <br />
          {new Date(endAt).toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })} 까지 출입 가능합니다.
        </span>
      </div>
      <TabGroup>
        <TabList className="flex h-12 rounded-t-lg bg-gray-50">
          <Tab
            className={twMerge(
              'flex flex-1 items-center justify-center gap-1 rounded-tl-lg border border-gray-200 transition-colors focus:outline-none',
              'ui-selected:border-b-0 ui-selected:border-r-0 ui-selected:bg-white',
            )}
          >
            <IconSax.Lock className="text-gray-400 ui-selected:text-blue-500" size={16} />
            <span className="text-sm font-medium text-gray-400 ui-selected:text-blue-600">버튼제어</span>
          </Tab>
          <Tab
            className={twMerge(
              'flex flex-1 items-center justify-center gap-1 border border-gray-200 transition-colors focus:outline-none',
              'ui-selected:border-b-0 ui-selected:border-r-0 ui-selected:bg-white',
            )}
          >
            <IconSax.PasswordCheck className="text-gray-400 ui-selected:text-blue-500" size={16} />
            <span className="text-sm font-medium text-gray-400 ui-selected:text-blue-600">비밀번호</span>
          </Tab>
          <Tab
            className={twMerge(
              'flex flex-1 items-center justify-center gap-1 rounded-tr-lg border border-gray-200 transition-colors focus:outline-none',
              'ui-selected:border-b-0 ui-selected:border-l-0 ui-selected:bg-white',
            )}
          >
            <IconSax.ExportSquare className="text-gray-400 ui-selected:text-blue-500" size={16} />
            <span className="text-sm font-medium text-gray-400 ui-selected:text-blue-600">QR코드</span>
          </Tab>
        </TabList>
        <TabPanels
          className={
            'flex h-[200px] items-center justify-center rounded-b-lg border-x border-b border-gray-200 bg-white'
          }
        >
          {renderPanel()}
        </TabPanels>
      </TabGroup>
    </main>
  );
}
