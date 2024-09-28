// src/app/[buildingId]/meal/_view/intro.tsx

import { IconChefHat } from '@/components/icons/IconChefHat';
import { ChefHat } from 'lucide-react';

const Intro = () => {
  return (
    <>
      {/* 배경색 */}
      <section className="flex h-[200px] w-full  items-center justify-center bg-gray-100">
        <div className="flex w-[67.5rem] items-start gap-5 px-10 pb-5 pt-20">
          <div className="flex w-[calc(100%-6.25rem)] flex-col gap-3">
            <h1 className="flex self-stretch text-[2rem] font-bold capitalize leading-[125%]">구내식당</h1>
            <p className="flex self-stretch text-base font-medium capitalize text-gray-500">
              우리 건물의 구내식당 식단표를 전해드립니다
            </p>
          </div>
          <div>
            <IconChefHat />
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
