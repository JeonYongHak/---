// src/app/[buildingId]/page.tsx

import Link from 'next/link';
import MyPlan from './_view/MyPlan';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  IconInfo,
  IconMap,
  IconPhone,
  IconDocument,
  IconCompliants,
  IconPaper,
  IconReservation,
  IconBenefit,
  IconAll,
} from './_view/IconMenu';
import { fetchNotices } from '@/requests/board/fetchNotices';
import { fetchBuildingDetails } from '@/requests/buildings/fetchBuildingDetails';
import MainCarousel from './_view/MainCarousel';
import BoardNews from './_view/BoardNews';
import BoardFolders from './_view/BoardFolders';
import BoardMeal from './_view/BoardMeal';
import BoardCommunity from './_view/BoardCommunity';
import { IconAppstore } from '@/components/icons/IconAppstore';
import IconGoogleplay from '@/components/icons/IconGoogleplay';
import mockup from '../../../public/images/mockup.png';
import Announce from './_view/Annonce';
import MenuAll from './_view/MenuAll';

type Props = {
  params: { buildingId: string };
};

export default async function BuildingPage({ params: { buildingId } }: Props) {
  const { data: buildingInfo } = await fetchBuildingDetails(buildingId);
  const notices = await fetchNotices('b1');

  return (
    <main>
      <MainCarousel buildingImg={buildingInfo.buildingPicture} />
      <Announce notices={notices} />
      <section className="flex justify-center py-3 shadow-md">
        <ul className="container grid grid-cols-4 items-center justify-center lg:grid-cols-8">
          <li className="flex justify-center">
            <Link href={`/시설안내`}>
              <div className="flex h-24 w-24 flex-col items-center justify-center gap-1.5 rounded-lg text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900">
                {IconInfo}
                <p className="text-xs">시설안내</p>
              </div>
            </Link>
          </li>
          <li className="flex justify-center">
            <Link href={`/찾아오시는길`}>
              <div className="flex h-24 w-24 flex-col items-center justify-center gap-1.5 rounded-lg text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900">
                {IconMap}
                <p className="text-xs">찾아오시는길</p>
              </div>
            </Link>
          </li>
          <li className="flex justify-center">
            <Link href={`/비상연락망`}>
              <div className="flex h-24 w-24 flex-col items-center justify-center gap-1.5 rounded-lg text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900">
                {IconPhone}
                <p className="text-xs">비상연락망</p>
              </div>
            </Link>
          </li>
          <li className="flex justify-center">
            <Link href={`/건물자료실`}>
              <div className="flex h-24 w-24 flex-col items-center justify-center gap-1.5 rounded-lg text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900">
                {IconDocument}
                <p className="text-xs">건물자료실</p>
              </div>
            </Link>
          </li>
          <li className="flex justify-center">
            <Link href={`/불편접수`}>
              <div className="flex h-24 w-24 flex-col items-center justify-center gap-1.5 rounded-lg text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900">
                {IconCompliants}
                <p className="text-xs">불편접수</p>
              </div>
            </Link>
          </li>
          <li className="flex justify-center">
            <Link href={`/고지서조회`}>
              <div className="flex h-24 w-24 flex-col items-center justify-center gap-1.5 rounded-lg text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900">
                {IconPaper}
                <p className="text-xs">고지서 조회</p>
              </div>
            </Link>
          </li>
          <li className="flex justify-center">
            <Link href={`/시설예약`}>
              <div className="flex h-24 w-24 flex-col items-center justify-center gap-1.5 rounded-lg text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900">
                {IconReservation}
                <p className="text-xs">시설 예약</p>
              </div>
            </Link>
          </li>
          <li className="flex justify-center">
            <MenuAll />
          </li>
        </ul>
      </section>
      <section className="w-full px-[1.3rem] lg:px-0">
        <div className="container mb-20 mt-20 flex flex-col gap-9 p-0 lg:mb-0">
          <div className="flex flex-wrap-reverse justify-center gap-5">
            <div className="grid w-full items-center gap-4 md:grid-cols-1 lg:w-[760px] lg:grid-cols-2">
              <BoardNews buildingId={buildingId && 'b1'} />
              <BoardFolders buildingId={buildingId && 'b1'} />
              <BoardMeal buildingId={buildingId && 'b1'} />
              <BoardCommunity buildingId={buildingId && 'b1'} />
            </div>
            <div className="hidden grow flex-col gap-5 lg:flex">
              <div className="flex h-32 w-full flex-col items-center justify-center gap-2.5 rounded-lg bg-gray-600 px-5">
                <p className="text-sm font-bold text-white">로그인 후 편리하게 이용하세요!</p>
                <Button
                  asChild
                  className="rounded-2.5 w-full border border-gray-300 bg-gray-100 text-base font-medium text-gray-600 hover:bg-gray-100"
                >
                  <Link href="/login">오피스너 로그인</Link>
                </Button>
              </div>
              <MyPlan />
            </div>
          </div>
          {/* 다운로드페이지-모니터 */}
          <div className="hidden h-64 w-full justify-center rounded-lg border border-gray-200 px-[3.125rem] pt-6 md:flex lg:justify-between lg:px-[6.25rem]">
            <div className="flex flex-col justify-center gap-8 ">
              <div className="flex flex-col gap-3">
                <h4 className="text-center text-3xl font-bold text-gray-900 lg:text-start">
                  오피스너 앱으로 더 편리하게 이용하세요
                </h4>
                <p className="text-center text-xl text-gray-500 lg:text-start">모바일로 간편하게 이용해보세요!</p>
              </div>
              <div className="flex h-10 w-full justify-center gap-6 lg:w-fit ">
                <Link
                  href="https://play.google.com/store/apps/details?id=com.livable.officener&pcampaignid=web_share"
                  target="_blank"
                >
                  <IconGoogleplay />
                </Link>
                <Link
                  href="https://apps.apple.com/kr/app/%EC%98%A4%ED%94%BC%EC%8A%A4%EB%84%88/id1642198108"
                  target="_blank"
                >
                  <IconAppstore />
                </Link>
              </div>
            </div>
            <Image src={mockup} width={177} height={235} alt="오피스너앱 다운로드" className="hidden lg:block" />
          </div>
        </div>
      </section>
      {/* 다운로드페이지-모바일 */}
      <div className="h-[11.125rem] w-full overflow-hidden bg-blue-50 p-8 px-7 md:hidden">
        <div className=" flex justify-between">
          <div className=" flex flex-col gap-5">
            <div className="flex flex-col gap-1 text-gray-900">
              <h4 className="text-lg font-bold">
                오피스너 앱으로
                <br />더 편리하게 이용하세요
              </h4>
              <p className="text-sm font-medium">모바일로 간편하게 이용해보세요!</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="https://play.google.com/store/apps/details?id=com.livable.officener&pcampaignid=web_share"
                target="_blank"
              >
                <IconGoogleplay />
              </Link>
              <Link
                href="https://apps.apple.com/kr/app/%EC%98%A4%ED%94%BC%EC%8A%A4%EB%84%88/id1642198108"
                target="_blank"
              >
                <IconAppstore />
              </Link>
            </div>
          </div>
          <Image src={mockup} height={146} alt="오피스너앱 다운로드" className="" />
        </div>
      </div>
    </main>
  );
}
