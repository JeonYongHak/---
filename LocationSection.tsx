// src/app/[buildingId]/info/_view/LocationSection.tsx

'use client';

import { Button } from '@headlessui/react';
import { CopySuccess, Location } from 'iconsax-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

type Props = {
  address: string;
  coordinates: number[];
  focusRef?: React.RefObject<HTMLDivElement>;
};

export default function LocationSection({ address, coordinates, focusRef }: Props) {
  useEffect(() => {
    const initMap = () => {
      const mapOptions = {
        center: new naver.maps.LatLng(coordinates[0], coordinates[1]),
        zoomControl: true,
        zoomControlOptions: {
          style: naver.maps.ZoomControlStyle.SMALL,
          position: naver.maps.Position.RIGHT_CENTER,
        },
        icon: {
          size: new naver.maps.Size(22, 35),
        },
        zoom: 18,
      };

      const map = new naver.maps.Map('map', mapOptions);
      new naver.maps.Marker({
        position: new naver.maps.LatLng(coordinates[0], coordinates[1]),
        map: map,
      });
    };

    if (window.naver && window.naver.maps) {
      initMap();
    } else {
      const mapScript = document.createElement('script');
      mapScript.onload = () => initMap();
      mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=uegmb1k1w0`;
      document.head.appendChild(mapScript);
    }
  }, [coordinates, address]);

  return (
    <section id="location" ref={focusRef} className="w-full  bg-gray-50">
      <div className="flex flex-col items-center justify-center gap-16 py-20 ">
        <div className="flex flex-col items-center justify-center gap-4 ">
          <span className="text-[2rem] font-bold leading-tight">찾아오시는 길</span>
          <span className="text-base text-gray-400">Direction</span>
        </div>
        <div className="flex w-[67.5rem] flex-col items-center justify-center gap-5 ">
          <div className="flex w-full items-center justify-between p-4">
            <div className="flex items-center justify-between gap-2">
              <Location size="24" color="#292D32" variant="Bold" />
              <span className="text-xl">{address}</span>
            </div>
            <Button
              className="flex items-center justify-center gap-1 rounded-[0.625rem] bg-gray-100 p-3.5 hover:border-gray-200  hover:text-gray-600 active:drop-shadow"
              onClick={() => {
                navigator.clipboard
                  .writeText(address)
                  .then(() => {
                    toast.success('주소가 복사 완료', {
                      description: `${address}`,
                      className: 'text-green-400',
                    });
                  })
                  .catch(() => {
                    toast.error('주소가 복사 실패', {
                      description: `${address}`,
                      className: 'text-red-400',
                    });
                  });
              }}
            >
              <CopySuccess size="20" color="#6B7280" variant="Bold" />
              <span className="leading-tight tracking-wide text-gray-500">주소 복사</span>{' '}
            </Button>
          </div>
          <div id="map" className="z-0 h-[25rem] w-full"></div>
        </div>
      </div>
    </section>
  );
}
