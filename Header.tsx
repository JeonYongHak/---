// src/app/[buildingId]/_view/Header.tsx

'use client';

import { cn } from '@/lib/utils';
import { Add, HambergerMenu, Minus } from 'iconsax-react';
import { X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Props = {
  name: string;
};

export default function Header({ name }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subOpen1, setSubOpen1] = useState(false);
  const [subOpen2, setSubOpen2] = useState(false);
  const [subOpen3, setSubOpen3] = useState(false);

  //모바일메뉴 열렸을 시, windowscroll disabled
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);
  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="flex h-[2.375rem] w-full bg-white lg:bg-gray-900">
          <div className="container hidden items-center justify-end  gap-3 lg:flex">
            <Link className="text-sm font-semibold leading-5 text-white" href={'/로그인'}>
              로그인
            </Link>
            <span className="h-3 w-px bg-white" />
            <Link className="text-sm font-semibold leading-5 text-white" href={'/회원가입'}>
              회원가입
            </Link>
            <span className="h-3 w-px bg-white" />
            <Link className="text-sm font-semibold leading-5 text-white" href={'/마이페이지'}>
              마이페이지
            </Link>
          </div>
        </div>
        <nav className="flex h-[3.75rem] w-full  flex-col overflow-hidden  bg-white shadow-sm  transition-all duration-500 ease-in-out lg:hover:h-[20.5rem]">
          <div className="w-full ">
            <div className="container flex h-[3.75rem] items-center justify-between  px-6 lg:px-8">
              <Link href={`/`} className="left-6 flex items-center  text-2xl font-bold">
                {name}
              </Link>
              <ul className="hidden h-full items-center lg:flex">
                <li className="relative flex h-full items-center justify-center px-7">
                  <Link href={'/건물소개'} className="text-base font-bold text-gray-900 hover:text-gray-700">
                    건물소개
                  </Link>
                  <ul className="absolute left-0 top-full z-50 mt-1 flex w-full flex-col items-center justify-center gap-3">
                    <li className="flex h-6 w-full items-center justify-center text-base font-normal text-gray-500 hover:text-blue-500">
                      <Link href="#">건물소개</Link>
                    </li>
                    <li className="flex h-6 w-full items-center justify-center text-base font-normal text-gray-500 hover:text-blue-500">
                      <Link href="#">찾아오시는길</Link>
                    </li>
                    <li className="flex h-6 w-full items-center justify-center text-base font-normal text-gray-500 hover:text-blue-500">
                      <Link href="#">비상연락망</Link>
                    </li>
                  </ul>
                </li>
                <li className="relative flex h-full items-center justify-center px-7">
                  <Link href={'/건물소개'} className="text-base font-bold text-gray-900 hover:text-gray-700">
                    건물소식
                  </Link>
                  <ul className="absolute left-0 top-full z-50 mt-1 flex w-full flex-col items-center justify-center gap-3">
                    <li className="flex h-6 w-full items-center justify-center text-base font-normal text-gray-500 hover:text-blue-500">
                      <Link href="#">공지사항</Link>
                    </li>
                    <li className="flex h-6 w-full items-center justify-center text-base font-normal text-gray-500 hover:text-blue-500">
                      <Link href="#">자료실</Link>
                    </li>
                    <li className="flex h-6 w-full items-center justify-center text-base font-normal text-gray-500 hover:text-blue-500">
                      <Link href="#">건물일정</Link>
                    </li>
                  </ul>
                </li>
                <li className="relative flex h-full items-center justify-center px-7">
                  <Link href={'/입주자서비스'} className="text-base font-bold text-gray-900 hover:text-gray-700">
                    입주자서비스
                  </Link>
                  <ul className="absolute left-0 top-full z-50 mt-1 flex w-full flex-col items-center justify-center gap-3">
                    <li className="flex h-6 w-full items-center justify-center text-base font-normal text-gray-500 hover:text-blue-500">
                      <Link href="#">회의실예약</Link>
                    </li>
                    <li className="flex h-6 w-full items-center justify-center text-base font-normal text-gray-500 hover:text-blue-500">
                      <Link href="#">불편접수</Link>
                    </li>
                    <li className="flex h-6 w-full items-center justify-center text-base font-normal text-gray-500 hover:text-blue-500">
                      <Link href="#">온도피드백</Link>
                    </li>
                    <li className="flex h-6 w-full items-center justify-center text-base font-normal text-gray-500 hover:text-blue-500">
                      <Link href="#">고지서</Link>
                    </li>
                    <li className="flex h-6 w-full items-center justify-center text-base font-normal text-gray-500 hover:text-blue-500">
                      <Link href="#">구내식당</Link>
                    </li>
                    <li className="flex h-6 w-full items-center justify-center text-base font-normal text-gray-500 hover:text-blue-500">
                      <Link href="#">정기주차신청</Link>
                    </li>
                    <li className="flex h-6 w-full items-center justify-center text-base font-normal text-gray-500 hover:text-blue-500">
                      <Link href="#">설문</Link>
                    </li>
                  </ul>
                </li>
                <li className="relative flex h-full items-center justify-center px-7">
                  <Link href={'/혜택'} className="text-base font-bold text-gray-900 hover:text-gray-700">
                    혜택
                  </Link>
                </li>
              </ul>
              <HambergerMenu
                size="24"
                className="cursor-pointer text-gray-900 lg:cursor-default"
                onClick={() => setMenuOpen(true)}
              />
            </div>
          </div>
        </nav>
        <div className="bg-gray-700">
          <div className="container flex h-[3.125rem] items-center px-6 lg:hidden">
            <Link className="flex items-center gap-1" href={'/login'}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  opacity="0.4"
                  d="M9.99999 18.3417C14.6024 18.3417 18.3333 14.6108 18.3333 10.0084C18.3333 5.40601 14.6024 1.67505 9.99999 1.67505C5.39762 1.67505 1.66666 5.40601 1.66666 10.0084C1.66666 14.6108 5.39762 18.3417 9.99999 18.3417Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M10 5.78333C8.275 5.78333 6.875 7.18332 6.875 8.90832C6.875 10.6 8.2 11.975 9.95833 12.025C9.98333 12.025 10.0167 12.025 10.0333 12.025C10.05 12.025 10.075 12.025 10.0917 12.025C10.1 12.025 10.1083 12.025 10.1083 12.025C11.7917 11.9667 13.1167 10.6 13.125 8.90832C13.125 7.18332 11.725 5.78333 10 5.78333Z"
                  fill="#9CA3AF"
                />
                <path
                  d="M15.65 16.1333C14.1667 17.5 12.1833 18.3416 10 18.3416C7.81667 18.3416 5.83334 17.5 4.35001 16.1333C4.55001 15.375 5.09167 14.6833 5.88334 14.15C8.15834 12.6333 11.8583 12.6333 14.1167 14.15C14.9167 14.6833 15.45 15.375 15.65 16.1333Z"
                  fill="#9CA3AF"
                />
              </svg>
              <p className="text-sm font-bold text-white">로그인이 필요합니다.</p>

              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.42501 17.225C7.26668 17.225 7.10834 17.1667 6.98334 17.0417C6.74168 16.8 6.74168 16.4 6.98334 16.1583L12.4167 10.725C12.8167 10.325 12.8167 9.67502 12.4167 9.27502L6.98334 3.84168C6.74168 3.60002 6.74168 3.20002 6.98334 2.95835C7.22501 2.71668 7.62501 2.71668 7.86668 2.95835L13.3 8.39168C13.725 8.81668 13.9667 9.39168 13.9667 10C13.9667 10.6084 13.7333 11.1834 13.3 11.6084L7.86668 17.0417C7.74168 17.1584 7.58334 17.225 7.42501 17.225Z"
                  fill="#9CA3AF"
                />
              </svg>
            </Link>
          </div>
        </div>
        {/* 모바일 메뉴 */}
        <div
          className={cn(
            'absolute left-0 top-0 z-50 h-screen w-full overflow-y-auto bg-white transition-all duration-500 ease-in-out lg:hidden',
            !menuOpen && 'left-full',
          )}
        >
          <div className=" bg-gray-700">
            <div className="h-[2.375rem]"></div>
            <div className="container flex h-[3.75rem] items-center justify-between  px-6 lg:px-8">
              <Link href={`/`} className="left-6 flex items-center text-2xl font-bold text-white">
                {name}
              </Link>
              <X size="24" className="cursor-pointer text-white" onClick={() => setMenuOpen(false)} />
            </div>
            <div className="container flex h-[3.125rem] items-center px-6">
              <div className="flex items-center gap-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    opacity="0.4"
                    d="M9.99999 18.3417C14.6024 18.3417 18.3333 14.6108 18.3333 10.0084C18.3333 5.40601 14.6024 1.67505 9.99999 1.67505C5.39762 1.67505 1.66666 5.40601 1.66666 10.0084C1.66666 14.6108 5.39762 18.3417 9.99999 18.3417Z"
                    fill="#9CA3AF"
                  />
                  <path
                    d="M10 5.78333C8.275 5.78333 6.875 7.18332 6.875 8.90832C6.875 10.6 8.2 11.975 9.95833 12.025C9.98333 12.025 10.0167 12.025 10.0333 12.025C10.05 12.025 10.075 12.025 10.0917 12.025C10.1 12.025 10.1083 12.025 10.1083 12.025C11.7917 11.9667 13.1167 10.6 13.125 8.90832C13.125 7.18332 11.725 5.78333 10 5.78333Z"
                    fill="#9CA3AF"
                  />
                  <path
                    d="M15.65 16.1333C14.1667 17.5 12.1833 18.3416 10 18.3416C7.81667 18.3416 5.83334 17.5 4.35001 16.1333C4.55001 15.375 5.09167 14.6833 5.88334 14.15C8.15834 12.6333 11.8583 12.6333 14.1167 14.15C14.9167 14.6833 15.45 15.375 15.65 16.1333Z"
                    fill="#9CA3AF"
                  />
                </svg>
                <div className="flex items-center gap-3">
                  <Link href={'/로그인'} className="text-sm font-bold text-white">
                    로그인
                  </Link>
                  <span className="h-3 w-px bg-white" />
                  <Link href={'/회원가입'} className="text-sm font-bold text-white">
                    회원가입
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5">
            <ul className="container flex w-full flex-col gap-4 px-6">
              <li className="overflow-hidden">
                <div
                  className="flex h-12 w-full items-center justify-between border-b border-gray-700 px-3 text-sm font-bold text-gray-700"
                  onClick={() => setSubOpen1(!subOpen1)}
                >
                  건물 소개
                  {subOpen1 ? (
                    <Minus size="20" className="cursor-pointer text-blue-400" />
                  ) : (
                    <Add size="20" className="cursor-pointer text-gray-700" />
                  )}
                </div>
                <ul
                  className={cn(
                    'mt-1 max-h-0 overflow-hidden px-1 transition-all duration-500 ease-in-out',
                    subOpen1 && 'max-h-[1000px]',
                  )}
                >
                  <li className="w-full p-[0.625rem] text-sm font-medium text-gray-500 hover:text-blue-400">
                    <Link href={'/건물소개'} className="block w-full">
                      건물소개
                    </Link>
                  </li>
                  <li className="w-full p-[0.625rem] text-sm font-medium text-gray-500 hover:text-blue-400">
                    <Link href={'/찾아오시는길'} className="block w-full">
                      찾아오시는길
                    </Link>
                  </li>
                  <li className="w-full p-[0.625rem] text-sm font-medium text-gray-500 hover:text-blue-400">
                    <Link href={'/비상연락망'} className="block w-full">
                      비상연락망
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="overflow-hidden">
                <div
                  className="flex h-12 w-full items-center justify-between border-b border-gray-700 px-3 text-sm font-bold text-gray-700"
                  onClick={() => setSubOpen2(!subOpen2)}
                >
                  건물 소식
                  {subOpen2 ? (
                    <Minus size="20" className="cursor-pointer text-blue-400" />
                  ) : (
                    <Add size="20" className="cursor-pointer text-gray-700" />
                  )}
                </div>
                <ul
                  className={cn(
                    'mt-1 max-h-0 overflow-hidden px-1 transition-all duration-500 ease-in-out',
                    subOpen2 && 'max-h-[1000px]',
                  )}
                >
                  <li className="w-full p-[0.625rem] text-sm font-medium text-gray-500 hover:text-blue-400">
                    <Link href={'/공지사항'} className="block w-full">
                      공지사항
                    </Link>
                  </li>
                  <li className="w-full p-[0.625rem] text-sm font-medium text-gray-500 hover:text-blue-400">
                    <Link href={'/자료실'} className="block w-full">
                      자료실
                    </Link>
                  </li>
                  <li className="w-full p-[0.625rem] text-sm font-medium text-gray-500 hover:text-blue-400">
                    <Link href={'/건물일정'} className="block w-full">
                      건물일정
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="overflow-hidden">
                <div
                  className="flex h-12 w-full items-center justify-between border-b border-gray-700 px-3 text-sm font-bold text-gray-700"
                  onClick={() => setSubOpen3(!subOpen3)}
                >
                  입주자서비스
                  {subOpen3 ? (
                    <Minus size="20" className="cursor-pointer text-blue-400" />
                  ) : (
                    <Add size="20" className="cursor-pointer text-gray-700" />
                  )}
                </div>
                <ul
                  className={cn(
                    'mt-1 max-h-0 overflow-hidden px-1 transition-all duration-500 ease-in-out',
                    subOpen3 && 'max-h-[1000px]',
                  )}
                >
                  <li className="w-full p-[0.625rem] text-sm font-medium text-gray-500 hover:text-blue-400">
                    <Link href={'/회의실예약'} className="block w-full">
                      회의실예약
                    </Link>
                  </li>
                  <li className="w-full p-[0.625rem] text-sm font-medium text-gray-500 hover:text-blue-400">
                    <Link href={'/불편접수'} className="block w-full">
                      불편접수
                    </Link>
                  </li>
                  <li className="w-full p-[0.625rem] text-sm font-medium text-gray-500 hover:text-blue-400">
                    <Link href={'/온도피드백'} className="block w-full">
                      온도피드백
                    </Link>
                  </li>
                  <li className="w-full p-[0.625rem] text-sm font-medium text-gray-500 hover:text-blue-400">
                    <Link href={'/고지서'} className="block w-full">
                      고지서
                    </Link>
                  </li>
                  <li className="w-full p-[0.625rem] text-sm font-medium text-gray-500 hover:text-blue-400">
                    <Link href={'/구내식당'} className="block w-full">
                      구내식당
                    </Link>
                  </li>
                  <li className="w-full p-[0.625rem] text-sm font-medium text-gray-500 hover:text-blue-400">
                    <Link href={'/정기주차신청'} className="block w-full">
                      정기주차신청
                    </Link>
                  </li>
                  <li className="w-full p-[0.625rem] text-sm font-medium text-gray-500 hover:text-blue-400">
                    <Link href={'/설문'} className="block w-full">
                      설문
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="overflow-hidden">
                <div className="flex h-12 w-full items-center justify-between border-b border-gray-700 px-3 text-sm font-bold text-gray-700 hover:text-blue-400">
                  <Link href={'/혜택'}>혜택</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
