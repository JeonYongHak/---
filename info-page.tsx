// src/app/[buildingId]/info/page.tsx

import { fetchBuildingDetails } from '@/requests/buildings/fetchBuildingDetails';
import ScrollPage from './_view/ScrollPage';
import Image from 'next/image';

type Props = {
  params: { buildingId: string };
};

export default async function BuildingInfo({ params: { buildingId } }: Props) {
  const { data: buildingInfo } = await fetchBuildingDetails(buildingId);

  return (
    <>
      <header className=" flex w-full flex-col justify-center ">
        <div className="flex h-[12.5rem] items-center justify-center gap-7 self-stretch px-10 py-[3.75rem]">
          <Image
            src={buildingInfo?.buildingPicture[0]!}
            alt={buildingInfo?.name!}
            width={400}
            height={400}
            className="absolute z-10 h-[12.5rem] w-full object-cover"
          />
          <div className="absolute z-20 h-[12.5rem] w-full bg-black opacity-60"></div>
          <div className="z-20 flex w-[67.5rem] flex-col gap-2 ">
            <span className=" flex flex-col  items-center justify-center text-[2rem] font-bold text-white ">
              건물소개
            </span>
            <span className="flex flex-col items-center justify-center text-base text-white">
              {buildingInfo?.name!} 건물을 소개합니다
            </span>
          </div>
        </div>
      </header>
      <div className="flex w-full flex-col justify-center">
        <ScrollPage buildingInfo={buildingInfo} />
      </div>
    </>
  );
}
