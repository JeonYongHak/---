import * as SolarIconSet from 'solar-icon-set';
import MeetingsAccessClientPage from './client-page';

type Props = {
  params: {
    meetingId: string;
  };
};

export async function generateMetadata({ params: { meetingId } }: Props) {
  return {
    title: `test`,
  };
}

export default function MeetingsAccessPage({ params: { meetingId } }: Props) {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-224px)] max-w-7xl flex-col justify-center bg-gray-100 px-4 sm:px-6 md:min-h-[calc(100vh-174px)] lg:px-8">
      <p className="text-2xl font-medium leading-9">
        오피스너에서
        <br /> 회의실 출입 안내 드립니다
      </p>
      <div className="mt-8 flex items-center gap-1 rounded-lg bg-white p-4">
        <SolarIconSet.MapPoint color={'#3B82F6'} size={16} iconStyle="Bold" />
        <p className="text-sm font-semibold text-gray-800">가산 현대 퍼블릭 A동 11층 101호</p>
      </div>
      <div className="my-5 flex flex-col gap-2 rounded-lg bg-white p-4">
        <p className="flex items-center gap-1">
          <SolarIconSet.ClockCircle color={'#3B82F6'} size={16} iconStyle="Bold" />
          <span className="text-sm font-semibold text-gray-800">출입 안내</span>
        </p>
        <span className="text-sm font-medium text-gray-500">
          2024년 3월 11일 오전 11:00 부터
          <br />
          2024년 3월 11일 오후 12:00 까지 출입 가능합니다.
        </span>
      </div>
      <MeetingsAccessClientPage meetingId={''} />
    </main>
  );
}
