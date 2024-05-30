'use client';

import { motion } from 'framer-motion';

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
];

const navigation = [
  { name: '소개', href: '#' },
  { name: '가격', href: '#' },
  { name: '문의하기', href: '#' },
];

export default function Home() {
  return (
    <main className="mx-auto w-full bg-white px-6 lg:w-[1500px]">
      <div className="h-[68px]"></div>
      <section className="flex h-[640px] w-full flex-col justify-between rounded-[20px] bg-black/80 px-[60px] py-20">
        <div>
          <h2 className="text-[58px] font-bold leading-normal text-white">
            오피스 빌딩 관리의 모든 것 <br />
            오피스너에서 쉽고 간편하게
          </h2>
          <h4 className="mt-6 text-2xl font-semibold text-white">관리 소요는 낮추고, 입주 경험은 높이세요</h4>
        </div>
        <button className="w-fit rounded-xl bg-blue-600 p-3.5">
          <span className="text-[20px] font-semibold text-white">지금 시작하기</span>
        </button>
      </section>
      <section className="mt-9 flex gap-9">
        <article className="flex flex-1 items-center rounded-2.5xl bg-gray-800 p-10">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold text-white">프리미엄 건물 가치를 위한 선택</h3>
            <p className="text-lg text-white">
              국내 최대 규모, 최고의 건물에서
              <br />
              오피스너를 선택했습니다.
            </p>
          </div>
        </article>
        <article className="flex flex-1 items-center rounded-2.5xl bg-blue-100 p-10">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold text-blue-500">
              지금 이 순간에도,
              <br />
              스마트한 입주경험을 누리고 있습니다
            </h3>
            <p className="text-lg text-blue-500">
              국내 최대 규모, 최고의 건물에서
              <br />
              오피스너를 선택했습니다.
            </p>
          </div>
        </article>
      </section>
      <section className="mt-[38px] flex h-[804px] items-center rounded-2.5xl bg-gray-50 px-[100px]">
        <div>
          <h3 className="text-[52px] font-bold leading-normal">
            업계 선두 고객분들과
            <br /> <span className="text-blue-500">차세대 스마트 빌딩의 혁신</span>
            을
            <br />
            만들어 나가고 있습니다.
          </h3>
          <div className="mt-11 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-gray-500">000.00.00 도입완료</p>
              <p className="flex items-end gap-2">
                <span className="text-xl font-bold">오산 테라타워 CMC</span>
                <span className="text-base font-medium text-gray-800">국내 최대 규모 지식산업센터</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-gray-500">000.00.00 도입완료</p>
              <p className="flex items-end gap-2">
                <span className="text-xl font-bold">다산 테라타워 DIMC</span>
                <span className="text-base font-medium text-gray-800">2,500세대 대규모 지식산업센터</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-gray-500">000.00.00 도입완료</p>
              <p className="flex items-end gap-2">
                <span className="text-xl font-bold">그랑서울 서울</span>
                <span className="text-base font-medium text-gray-800">종로 프리미엄 임대 빌딩</span>
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-semibold text-gray-500">000.00.00 도입완료</p>
              <p className="flex items-end gap-2">
                <span className="text-xl font-bold">가산 현대 publik</span>
                <span className="text-base font-medium text-gray-800">서울시 최대 규모의 지식산업센터</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        animate={{ y: -100 }}
        viewport={{ once: true }}
        transition={{ ease: 'easeIn', duration: 0.6 }}
        className="mt-[38px] flex h-[600px] items-center rounded-2.5xl border border-gray-100 bg-gray-700 px-[100px]"
      >
        <div>
          <p className="flex items-center gap-3 text-xl font-bold text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 8.75994C2 6.04468 2 4.68705 2.87868 3.84352C3.75736 3 5.17157 3 8 3H16C18.8284 3 20.2426 3 21.1213 3.84352C22 4.68705 22 6.04468 22 8.75994V9.71993C22 12.4352 22 13.7928 21.1213 14.6363C20.2426 15.4799 18.8284 15.4799 16 15.4799H12.75V17.8409L18.2372 19.5968C18.6301 19.7225 18.8425 20.1303 18.7115 20.5075C18.5805 20.8847 18.1558 21.0886 17.7628 20.9629L12 19.1188L6.23717 20.9629C5.84421 21.0886 5.41947 20.8847 5.28849 20.5075C5.1575 20.1303 5.36987 19.7225 5.76283 19.5968L11.25 17.8409V15.4799H8C5.17157 15.4799 3.75736 15.4799 2.87868 14.6363C2 13.7928 2 12.4352 2 9.71993V8.75994Z"
                fill="white"
              />
            </svg>
            <span>최적화된 빌딩 및 운영 자동화</span>
          </p>
          <h3 className="mt-5 text-[52px] font-bold leading-snug text-white">
            관리자 통합웹으로
            <br /> 한번에 해결하세요.
          </h3>
          <h5 className="mt-6 text-2xl font-semibold text-blue-200">
            건물 경쟁력을 확보하고 싶다면, <br />
            다가올 미래를 미리 준비하세요.
          </h5>
        </div>
      </motion.section>
      {/* <section className="mt-[38px] flex h-[600px] items-center rounded-2.5xl border border-gray-100 bg-gray-700 px-[100px]"></section> */}
      <section></section>
    </main>
  );
}
