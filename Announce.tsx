// src/app/[buildingId]/_view/Announce.tsx

'use client';
import { AddCircle, ArrowLeft2, ArrowRight2 } from 'iconsax-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type AnnounceProps = {
  notices: {
    id: string;
    buildingId: string;
    title: string;
    date: Date;
  }[];
};

export default function Announce({ notices }: AnnounceProps) {
  const [noticeCurrentPage, setNoticeCurrentPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNoticeCurrentPage((prevpage) => (prevpage < notices.length - 1 ? prevpage + 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-blue-50">
      <div className="container flex h-[3.625rem] items-center justify-between">
        <div className="flex gap-4 overflow-hidden text-ellipsis whitespace-nowrap">
          <p className="text-base font-bold leading-6 text-gray-900">NOTICE</p>
          <p className="text-base font-bold leading-6 text-gray-900">・</p>
          <Link
            href={`/notice/${notices[noticeCurrentPage].id}`}
            className="flex gap-3 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            <h6 className="overflow-hidden text-ellipsis whitespace-nowrap font-bold leading-6 text-gray-900 transition hover:text-blue-400 ">
              {notices && notices[noticeCurrentPage].title}
            </h6>
            <p className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-medium leading-6 text-gray-400 lg:block hidden">
              {notices && notices[noticeCurrentPage].date.toString()}
            </p>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <div className="lg:flex items-center gap-3 hidden">
            <ArrowLeft2
              size="24"
              className="cursor-pointer text-gray-900 transition hover:text-blue-400"
              onClick={() => {
                setNoticeCurrentPage((prevpage) => (prevpage > 0 ? prevpage - 1 : prevpage));
              }}
            />
            <p className="cursor-default text-gray-300">|</p>
            <ArrowRight2
              size="24"
              className="cursor-pointer text-gray-900 transition hover:text-blue-400"
              onClick={() => {
                setNoticeCurrentPage((prevpage) => (prevpage < notices.length - 1 ? prevpage + 1 : prevpage));
              }}
            />
          </div>
          <Link href={`/notice`}>
            <AddCircle size="24" className="text-gray-900 transition hover:text-blue-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
