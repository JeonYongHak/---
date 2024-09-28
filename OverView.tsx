// src/app/[buildingId]/info/_view/OverView.tsx

'use client';

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type Props = {
  name: string;
  description: string;
  imageUrls: string[];
};

export default function OverView({ name, description, imageUrls }: Props) {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const carouselTracker = (idx: number) => {
    if (!api) return;
    api.scrollTo(idx);
  };

  return (
    <section id="overview" className="flex flex-col items-center justify-center gap-16 py-20">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-[2rem] font-bold leading-tight">{name}</h1>
        <p className="text-base text-gray-400">Building Stroy</p>
      </div>
      <div className="whitespace-pre-wrap text-center text-xl font-medium leading-7 text-gray-500">{description}</div>
      <div className="flex w-full items-center justify-center px-[26.25rem]">
        <Carousel
          className="flex flex-col gap-8"
          setApi={setApi}
          plugins={[Autoplay({ delay: 5000, stopOnInteraction: true })]}
        >
          <CarouselContent className="ml-0 flex h-[25rem] w-[67.5rem] gap-9">
            {imageUrls?.map((img, index) => (
              <CarouselItem key={index} className=" relative h-[25rem] w-[55rem] basis-[55rem]">
                <Image
                  src={img}
                  alt={`${name} 건물 이미지 ${index + 1}`}
                  className={cn('absolute', current === index + 1 ? 'opacity-100' : 'opacity-30')}
                  fill
                />
                <div className="absolute left-0 -z-10 h-[25rem] w-[55rem] bg-gray-50 "></div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2">
            {imageUrls.map((img, index) => (
              <span
                key={index}
                className={cn(
                  ' h-1 w-5 cursor-pointer rounded-md',
                  current === index + 1 ? 'bg-blue-500' : 'bg-gray-100',
                )}
                onClick={() => carouselTracker(index)}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
