// src/app/[buildingId]/info/_view/TabNavButton.tsx

'use client';

import { cn } from '@/lib/utils';
import { Buildings, CallOutgoing, Map1 } from 'iconsax-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

type Props = {
  scrollToSection: (sectionId: string) => void;
};

export default function TabNavButton({ scrollToSection }: Props) {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const overviewTop = document.getElementById('overview')?.offsetTop || 0;
      const locationTop = document.getElementById('location')?.offsetTop || 0;
      const facilityTop = document.getElementById('facility')?.offsetTop || 0;
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      if (scrollPosition >= facilityTop) {
        setActiveIndex(3);
      } else if (scrollPosition >= locationTop) {
        setActiveIndex(2);
      } else if (scrollPosition >= overviewTop) {
        setActiveIndex(1);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-[6.125rem] z-40 flex w-full flex-col justify-center">
      <div className="flex h-[3.75rem] w-full items-center justify-center gap-5 bg-[#F9FAFB]">
        <Button
          className={cn(
            `flex h-10 gap-1.5 rounded-2.5xl  border px-4 py-2 `,
            activeIndex === 1
              ? 'bg-gray-900 text-white'
              : 'border-gray-200 bg-white font-bold leading-5 text-gray-500 hover:border-gray-200 hover:bg-gray-100 hover:text-gray-600 active:drop-shadow',
          )}
          onClick={() => scrollToSection('overview')}
        >
          <Buildings size="20" color={activeIndex === 1 ? `#ffffff` : ` #6B7280`} />
          <span>건물소개</span>
        </Button>
        <span className="flex text-base font-semibold capitalize text-gray-200">|</span>
        <Button
          className={cn(
            `flex h-10 gap-1.5 rounded-2.5xl  border px-4 py-2 `,
            activeIndex === 2
              ? 'bg-gray-900 text-white'
              : 'border-gray-200 bg-white font-bold leading-5 text-gray-500 hover:border-gray-200 hover:bg-gray-100 hover:text-gray-600 active:drop-shadow',
          )}
          onClick={() => scrollToSection('location')}
        >
          <Map1 size="20" color={activeIndex === 2 ? `#ffffff` : ` #6B7280`} />
          <span>찾아오시는 길</span>
        </Button>
        <span className="flex text-base font-semibold capitalize text-gray-200">|</span>
        <Button
          className={cn(
            `flex h-10 gap-1.5 rounded-2.5xl  border px-4 py-2 `,
            activeIndex === 3
              ? 'bg-gray-900 text-white'
              : 'border-gray-200 bg-white font-bold leading-5 text-gray-500 hover:border-gray-200 hover:bg-gray-100 hover:text-gray-600 active:drop-shadow',
          )}
          onClick={() => scrollToSection('facility')}
        >
          <CallOutgoing size="20" color={activeIndex === 3 ? `#ffffff` : ` #6B7280`} />
          <span>비상연락망</span>
        </Button>
      </div>
    </div>
  );
}
