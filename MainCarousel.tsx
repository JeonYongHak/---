// src/app/[buildingId]/_view/MainCarousel.tsx

'use client';

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function MainCarousel({ buildingImg }: { buildingImg: string[] }) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  // 캐러셀 작동 관련 코드
  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const carouselTracker = (idx: number) => {
    if (!api) {
      return;
    }
    api.scrollTo(idx);
  };
  return (
    <Carousel
      className="relative h-72 w-full overflow-hidden"
      setApi={setApi}
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
    >
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2 py-1">
        {buildingImg &&
          Array.from({ length: buildingImg.length }).map((_, idx) => (
            <span
              key={idx}
              className={cn('h-1 w-5 cursor-pointer rounded-md', current === idx + 1 ? 'bg-blue-500' : 'bg-gray-100')}
              onClick={() => carouselTracker(idx)}
            />
          ))}
      </div>
      <CarouselContent>
        {buildingImg &&
          buildingImg.map((imgUrl, idx) => (
            <CarouselItem key={idx} className="relative h-72 w-full">
              <Image src={imgUrl} alt="" fill className="object-cover" />
            </CarouselItem>
          ))}
      </CarouselContent>
    </Carousel>
  );
}
