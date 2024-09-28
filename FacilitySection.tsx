// src/app/[buildingId]/info/_view/FacilitySection.tsx

'use client';

import { Button } from '@/components/ui/button';
import { CallOutgoing } from 'iconsax-react';
import Image from 'next/image';

type Props = {
  name: string;
  description: string;
  imageUrls: string[];
  phoneNumber: string;
  contacts: {
    name: string;
    phone_number: string;
    description: string;
  }[];
};
export default function FacilitySection({ name, description, imageUrls, phoneNumber, contacts }: Props) {
  return (
    <section id="facility" className="flex items-center justify-center">
      <div className="flex w-[67.5rem] flex-col items-center justify-center gap-[3.875rem] py-20">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-[2rem] font-bold leading-tight">비상연락망</span>
          <p className="text-base text-gray-400 ">Direct Number</p>
        </div>
        <div className="flex w-full gap-7">
          <Image src={imageUrls[0]} alt="" className="flex rounded-lg" width={180} height={180} />
          <div className="flex flex-col gap-7 py-5">
            <span className="text-xl font-bold text-gray-900">관리센터</span>
            <p className="text-base text-gray-900">{phoneNumber}</p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          {contacts.map(({ name, phone_number, description }, index) => (
            <div key={index} className="flex flex-col gap-3 rounded-lg border border-gray-100 bg-gray-50 p-5">
              <div className="flex items-center justify-between ">
                <span className="text-xl font-bold text-gray-900  ">{name}</span>
                <Button
                  className=" gap-[0.125rem] bg-gray-100  p-[0.625rem] hover:border-gray-200 hover:bg-gray-100  hover:text-gray-600 active:drop-shadow"
                  onClick={() => (document.location.href = `tel:${phone_number}`)}
                >
                  <CallOutgoing size="16" color="#6B7280" />
                  <span className="text-gray-500">빠른 연결</span>
                </Button>
              </div>

              <p className="text-base text-gray-700">{phone_number}</p>
              <p className="text-base text-gray-700">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
