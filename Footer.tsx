// src/app/[buildingId]/_view/Footer.tsx

import Link from 'next/link';

type Props = {
  name: string;
  address: string;
  tel: string;
};

export default function Footer({ name, address, tel }: Props) {
  return (
    <footer className="bg-gray-700 lg:mt-[6.25rem]">
      <div className="flex items-center justify-center border-b border-gray-600 py-4">
        <div className="w-[67.5rem] text-gray-300">
          <div className="items-center lg:flex">
            <h5 className="flex items-center justify-center p-5 text-2xl font-bold">{name}</h5>
            <div className="flex flex-col gap-1 px-5 py-1 text-center text-[13px] lg:text-left">
              <p className="font-bold">{name}</p>
              <div className="items-center gap-3 font-medium leading-normal lg:flex">
                <p>{address}</p>
                <p className="not-italic">TEL. {tel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-5">
        <div className="w-[67.5rem] items-center px-5 text-[12px] leading-loose text-gray-300 lg:flex lg:justify-between lg:text-[13px]">
          <ul className="flex justify-center gap-1 font-medium lg:gap-3">
            <li>
              <Link href={'https://www.officener.com/terms/service'}>이용약관</Link>
            </li>
            <li>|</li>
            <li>
              <Link href={'https://www.officener.com/terms/privacy'}>개인정보처리방침</Link>
            </li>
            <li>|</li>
            <li>
              <Link href={'https://www.officener.com/terms/marketing'}>이메일무단수집거부</Link>
            </li>
            <li>|</li>
            <li>
              <Link href={'https://www.officener.com/'}>오피스너</Link>
            </li>
          </ul>
          <p className="text-center">&copy; 두꺼비세상, Inc.All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
