import Intro from './Intro';
import { CircleAlert } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const Empty = () => {
  return (
    <>
      <Intro />
      <div className="align-start mt-10 flex w-full flex-row p-10">
        {/* Left Section */}
        <div className="flex h-[708px] w-[380px] items-center px-6"></div>
        <div className="flex h-[708px] w-[380px] items-center px-6"></div>
        <div className="flex h-[708px] w-[380px] items-center px-6"></div>
        <div className="flex h-[708px] w-[380px] items-center px-6"></div>
        <div className="flex h-[708px] w-[380px] items-center px-6"></div>
        <div className="mx-auto mb-8 mt-6 box-border h-screen w-full flex-col bg-white p-5">
          {/* 오늘의 메뉴 화면 상자 */}
          <h2 className="mb-5 mt-5 text-2xl font-bold">오늘의 메뉴</h2>
          <div className="mx-auto mb-5 w-[90%] rounded-lg border border-gray-300 p-5 text-start">
            <p className="p-4 font-bold text-gray-500">아직 0월 0일의 구내식당 식단표가 등록되지 않았어요.</p>
            <p className="p-4 text-gray-500">조금만 기다려주세요!</p>
          </div>

          {/* 경고 메시지 */}
          <div className="m-11 flex h-[50%] w-full flex-col items-center rounded-lg bg-gray-100 px-12 py-20 shadow-lg">
            <CircleAlert className="mb-5 mt-8 text-[32px] text-gray-500" />
            <p className="mb-10 font-bold text-gray-500 ">등록된 구내식당 게시글이 없습니다.</p>
          </div>

          {/* 페이지 이동 상자 */}
          <div className="mb-8 mt-8 flex items-center justify-center space-x-6 p-5">
            <ChevronLeft className="mt-3 cursor-pointer text-gray-500" />
            <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 bg-blue-500 p-3 text-white shadow-lg">
              1
            </span>
            <ChevronRight className="mt-3 cursor-pointer text-gray-500" />
          </div>
        </div>
        {/* Right Section */}
        <div className="flex h-[200px] w-[420px] flex-shrink-0 items-center px-6"></div>
        <div className="flex h-[200px] w-[420px] flex-shrink-0 items-center px-6"></div>
        <div className="flex h-[200px] w-[420px] flex-shrink-0 items-center px-6"></div>
        <div className="flex h-[200px] w-[420px] flex-shrink-0 items-center px-6"></div>
        <div className="flex h-[200px] w-[420px] flex-shrink-0 items-center px-6"></div>
      </div>
    </>
  );
};

export default Empty;
