'use client';

import { CardListAnimation } from '@/components/CardListAnimation';
import { MainImage } from '@/components/images/MainImage';
import { RisingArrowImage } from '@/components/images/RisingArrowImage';
import Icon from '@/types/iconsax';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
  const router = useRouter();

  return (
    <main className="flex w-full flex-col items-center overflow-x-hidden bg-white">
      <div className="fixed z-30 flex w-full justify-center bg-white">
        <div className="flex w-full items-center justify-between py-3 pl-6 pr-3 md:max-w-[1500px] md:px-10 md:py-3.5">
          <span className="flex items-center justify-items-center gap-1">
            <svg
              width="132"
              height="40"
              viewBox="0 0 132 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-auto cursor-pointer md:h-10"
              onClick={() => router.push('/')}
            >
              <path
                d="M29.8154 15.8864C29.8154 17.0212 29.6262 18.085 29.248 19.0779C28.8697 20.0472 28.3378 20.9101 27.6523 21.6666C26.9903 22.4231 26.1984 23.0496 25.2764 23.546C24.378 24.0425 23.3851 24.3852 22.2976 24.5744V29.5035H34.8863C35.4537 29.5035 35.7374 30.0826 35.7374 31.241C35.7374 32.3758 35.4537 32.9432 34.8863 32.9432H5.27637V29.5035H18.3615V24.5389C17.2976 24.3261 16.3166 23.9715 15.4182 23.4751C14.5199 22.9786 13.7397 22.3522 13.0778 21.5956C12.4395 20.8391 11.9312 19.9881 11.553 19.0425C11.1984 18.0732 11.021 17.0212 11.021 15.8864C11.021 14.5862 11.2575 13.3923 11.7303 12.3049C12.2267 11.2174 12.8887 10.2836 13.7161 9.50345C14.5671 8.72331 15.5601 8.12047 16.6948 7.69494C17.8532 7.26941 19.0943 7.05664 20.4182 7.05664C21.7421 7.05664 22.9714 7.26941 24.1062 7.69494C25.2645 8.12047 26.2575 8.72331 27.0849 9.50345C27.9359 10.2836 28.5979 11.2174 29.0707 12.3049C29.5672 13.3923 29.8154 14.5862 29.8154 15.8864ZM25.9147 15.8864C25.9147 15.0826 25.761 14.3498 25.4537 13.6878C25.17 13.0023 24.7799 12.4349 24.2835 11.9857C23.787 11.5129 23.2078 11.1465 22.5459 10.8864C21.8839 10.6264 21.1747 10.4964 20.4182 10.4964C19.6617 10.4964 18.9525 10.6264 18.2906 10.8864C17.6286 11.1465 17.0494 11.5129 16.553 11.9857C16.0565 12.4349 15.6546 13.0023 15.3473 13.6878C15.0636 14.3498 14.9218 15.0826 14.9218 15.8864C14.9218 16.7139 15.0636 17.4585 15.3473 18.1205C15.6546 18.7824 16.0565 19.3498 16.553 19.8226C17.0494 20.2718 17.6286 20.6264 18.2906 20.8864C18.9525 21.1465 19.6617 21.2765 20.4182 21.2765C21.1747 21.2765 21.8839 21.1465 22.5459 20.8864C23.2078 20.6264 23.787 20.2718 24.2835 19.8226C24.7799 19.3498 25.17 18.7824 25.4537 18.1205C25.761 17.4585 25.9147 16.7139 25.9147 15.8864Z"
                fill="#2563EB"
              />
              <path
                d="M51.0073 10.8865H46.0782V23.9362H51.0073V10.8865ZM57.674 7.44681C58.2413 7.44681 58.525 8.02601 58.525 9.1844C58.525 10.3191 58.2413 10.8865 57.674 10.8865H55.0144V23.9362H58.7378C59.3052 23.9362 59.5889 24.5154 59.5889 25.6738C59.5889 26.8085 59.3052 27.3759 58.7378 27.3759H38.7378V23.9362H42.1066V10.8865H38.7378V7.44681H57.674ZM65.4045 34.1844C65.4045 34.4681 65.2153 34.669 64.8371 34.7872C64.4825 34.9291 64.0215 35 63.4541 35C62.8867 35 62.4139 34.9291 62.0357 34.7872C61.6574 34.669 61.4683 34.4681 61.4683 34.1844V5H65.4045V34.1844Z"
                fill="#2563EB"
              />
              <path
                d="M68.4043 32.766V29.3263H98.0142C98.5816 29.3263 98.8653 29.9055 98.8653 31.0639C98.8653 32.1987 98.5816 32.766 98.0142 32.766H68.4043ZM94.0781 23.5107C93.1561 23.1561 92.1868 22.7069 91.1703 22.1632C90.1537 21.6195 89.1608 21.0048 88.1915 20.3192C87.2459 19.61 86.3594 18.8535 85.532 18.0497C84.7282 17.246 84.0899 16.4067 83.6171 15.532C83.1442 16.3594 82.506 17.1869 81.7022 18.0143C80.8984 18.8417 80.0119 19.6218 79.0426 20.3547C78.0733 21.0876 77.0804 21.7613 76.0639 22.376C75.0473 22.9906 74.1017 23.4871 73.227 23.8653C72.9669 23.9835 72.7305 23.9244 72.5178 23.688C72.305 23.4516 72.0331 23.097 71.7022 22.6242C71.3239 22.0805 71.0993 21.6786 71.0284 21.4185C70.9811 21.1585 71.0757 20.9694 71.3121 20.8512C73.3925 19.7637 75.201 18.6526 76.7376 17.5178C78.2743 16.3831 79.4208 15.2129 80.1773 14.0072C80.7211 13.1798 81.052 12.3996 81.1703 11.6668C81.2885 10.9103 81.3476 10.1656 81.3476 9.43271V7.23413H85.6029V9.57456C85.6029 10.3547 85.662 11.0757 85.7802 11.7377C85.8984 12.3996 86.2412 13.1561 86.8085 14.0072C87.2341 14.6455 87.7896 15.2838 88.4752 15.9221C89.1608 16.5367 89.8937 17.1277 90.6738 17.6951C91.4776 18.2625 92.305 18.7944 93.1561 19.2909C94.0308 19.7873 94.8582 20.2129 95.6383 20.5675C95.8984 20.6857 96.0048 20.8748 95.9575 21.1348C95.9102 21.3712 95.7329 21.7613 95.4256 22.3051C95.1419 22.8251 94.9055 23.1916 94.7164 23.4043C94.5509 23.5935 94.3381 23.6289 94.0781 23.5107Z"
                fill="#2563EB"
              />
              <path
                d="M126.723 34.1844C126.723 34.4681 126.534 34.669 126.156 34.7872C125.778 34.9291 125.305 35 124.738 35C124.17 35 123.697 34.9291 123.319 34.7872C122.965 34.669 122.787 34.4681 122.787 34.1844V17.1277H114.702V13.6879H122.787V5H126.723V34.1844ZM105.943 27.1986C105.541 27.1986 105.08 27.0331 104.56 26.7021C104.064 26.3712 103.626 26.0047 103.248 25.6028C102.894 25.2482 102.574 24.8463 102.291 24.3972C102.007 23.948 101.865 23.5579 101.865 23.2269V7.44681H105.801V22.5887C105.801 22.9905 105.884 23.2861 106.05 23.4752C106.215 23.6643 106.499 23.7589 106.901 23.7589H117.929C118.496 23.7589 118.78 24.3381 118.78 25.4965C118.78 26.6312 118.496 27.1986 117.929 27.1986H105.943Z"
                fill="#2563EB"
              />
            </svg>
          </span>
          <button
            className="flex justify-center rounded-lg bg-blue-500 p-2.5 font-medium leading-none md:w-[200px] md:p-3.5"
            onClick={() => router.push('/inquiry')}
          >
            <span className="hidden text-xl leading-6 text-white md:block">도입 문의하기</span>
            <span className="block text-xs text-white md:hidden">도입문의</span>
          </button>
        </div>
      </div>

      <section className="mt-[60px] w-full md:mt-[80px]">
        <div className="flex flex-col md:gap-8">
          <div className="md:container">
            <article className="relative flex flex-col items-center gap-5 bg-gray-800 px-6 pb-10 pt-20 md:min-h-[40rem] md:flex-row md:justify-center md:rounded-2.5xl md:py-20">
              <div className="flex flex-col items-center md:w-[42.813rem] md:items-start">
                <h2 className="mb-3 text-2xl font-bold leading-normal text-white md:mb-6 md:text-[3.625rem]">
                  오피스 빌딩 관리의 모든 것 <br />
                  오피스너에서 쉽고 간편하게
                </h2>
                <p className="text-sm font-semibold text-white md:mb-[150px] md:text-2xl">
                  관리 소요는 낮추고, 입주 경험은 높이세요
                </p>
                <button
                  className="absolute bottom-[10%] z-10 w-[200px] rounded-xl bg-blue-500 p-3.5 md:static md:mb-10"
                  onClick={() => router.push('/inquiry')}
                >
                  <span className="font-medium leading-5 text-white md:text-xl md:font-semibold md:leading-5">
                    지금 시작하기
                  </span>
                </button>
              </div>
              <div className="w-full md:w-auto">
                <MainImage />
              </div>
            </article>
          </div>
          <div className="container">
            <div className="my-14 flex flex-col gap-8 md:mb-[5.125rem] md:flex-row md:gap-5 ">
              <article className="relative flex flex-1 justify-between gap-2 rounded-2.5xl bg-gray-700 px-5 py-6 md:px-10 md:py-9">
                <div className="flex flex-col gap-2 md:gap-6">
                  <h3 className="text-base font-bold leading-snug text-white md:text-[28px]">
                    프리미엄 건물 가치를 위한 선택
                  </h3>
                  <p className="text-xs font-semibold leading-snug text-gray-300 md:text-2xl">
                    국내 최대 규모, 최고의 건물에서
                    <br />
                    오피스너를 선택했습니다.
                  </p>
                </div>
                <div className="relative h-auto w-[60px] md:w-[10.625rem]">
                  <Image src="/images/premium_building.png" alt="" sizes="100%" fill style={{ objectFit: 'contain' }} />
                </div>
              </article>
              <article className="relative flex flex-1 items-center justify-between gap-2 rounded-2.5xl bg-blue-100 px-5 py-6 md:items-start md:px-10 md:pb-[1.625rem] md:pt-9">
                <div className="order-2 flex flex-col gap-2 md:order-1 md:gap-6">
                  <h3 className="text-base font-bold leading-snug text-blue-500 md:text-[28px]">
                    지금 이 순간에도,
                    <br />
                    스마트한 입주경험을 누리고 있습니다.
                  </h3>
                  <p className="text-xs font-semibold leading-snug text-gray-400 md:text-2xl">
                    입주자가 만족하는 건물로 탈바꿈할 기회!
                  </p>
                </div>
                <div className="relative order-1 h-[60px] w-auto md:order-2 md:h-full">
                  <RisingArrowImage />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-gray-50 py-[100px] md:py-[8.5rem]">
        <div className="flex flex-col items-center">
          <h3 className="mb-4 text-2xl font-bold leading-normal text-gray-800 md:mb-10 md:text-[3.25rem]">
            <span className="text-blue-500">건물 경쟁력을 확보</span>하고 싶다면,
            <br />
            다가올 미래를 미리 준비하세요.
          </h3>
          <h4 className="mb-[60px] text-center text-sm font-semibold leading-snug text-gray-600 md:mb-[7.5rem] md:text-[2rem]">
            업계 선두 고객분들과
            <br className="block md:hidden" />
            &nbsp;차세대 스마트 빌딩의 혁신을 만들어 나가고 있습니다
          </h4>
        </div>
        <div className="w-full pb-2">
          <CardListAnimation
            card={{ width: 420, gap: 40 }}
            mobileCard={{ width: 303, gap: 20 }}
            count={4}
            duration={16}
          >
            <div className="relative h-[408px] w-[303px] flex-shrink-0 overflow-hidden rounded-2.5xl bg-white px-6 pt-11 shadow-md md:h-[42.5rem] md:w-[26.25rem] md:px-10 md:pt-[4.25rem]">
              <span className="mb-4 flex items-center gap-2 text-sm font-bold leading-snug text-sky-400 md:text-xl">
                <Icon.ChartSquare size={24} className="size-5 md:size-6" />
                건물의 모든 기록 관리
              </span>
              <span className="mb-4 flex text-lg font-bold leading-normal text-gray-800 md:mb-3 md:text-[1.75rem]">
                기록된 건물 데이터로
                <br />
                탄탄한 운영정책을 만드세요
              </span>
              <span className="flex text-sm font-semibold leading-snug text-gray-500 md:text-xl">
                지속적인 건물 관리를 위해서
                <br />
                건물의 모든 자료와 데이터를 한 곳에서 모아보세요
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="419"
                height="328"
                viewBox="0 0 419 328"
                fill="none"
                className="absolute left-1/2 h-auto w-full -translate-x-1/2 md:-bottom-2"
              >
                <path
                  d="M755.06 271.355C700.733 271.355 720.294 160.821 674.68 160.821C629.065 160.821 644.27 224.479 586.782 224.479C529.294 224.479 563.975 55.2394 504.266 55.2394C444.557 55.2394 467.365 157.355 409.791 157.355C352.218 157.355 352.218 7.70275 324.371 7.70275C296.524 7.70275 298.317 125.169 271.154 125.169C243.99 125.169 249.457 51.7732 221.183 51.7732C192.909 51.7732 196.24 190.202 158.228 190.202C120.216 190.202 141.144 126.599 105.096 126.599C69.0491 126.599 86.5605 193.008 42.0565 193.008C-2.44754 193.008 18.2241 0 -29.6114 0C-77.4468 0 -74.1153 202.086 -122.976 202.086C-171.836 202.086 -164.234 116.091 -215.23 116.091C-266.226 116.091 -244.529 291.602 -296.636 291.602C-348.742 291.602 -349.852 176.942 -390 176.942V342H756L755.06 271.355Z"
                  fill="url(#paint0_linear_389_9812)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_389_9812"
                    x1="182.658"
                    y1="335.233"
                    x2="182.658"
                    y2="13.5898"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1E8BFF" stopOpacity="0" />
                    <stop offset="1" stopColor="#55AEFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="relative flex h-[408px] w-[303px] flex-shrink-0 flex-col overflow-hidden rounded-2.5xl bg-white px-6 pt-11 shadow-md md:h-[42.5rem] md:w-[26.25rem] md:px-10 md:pt-[4.25rem]">
              <span className="mb-4 flex items-center gap-2 text-sm font-bold leading-snug text-sky-400 md:text-xl">
                <Icon.Buildings size={24} className="size-5 md:size-6" />
                건물 전용 앱
              </span>
              <span className="mb-4 flex text-lg font-bold leading-normal text-gray-800 md:mb-3 md:text-[1.75rem]">
                우리 건물 맞춤형으로
                <br />
                필요한 기능만 세팅하세요
              </span>
              <span className="flex text-sm font-semibold leading-snug text-gray-500 md:text-xl">
                다양한 기능을 우리 건물에 맞게
                <br />
                세팅할 수 있어요
              </span>
              <div className="absolute -bottom-5 left-1/2 h-[209px] w-[326px] -translate-x-1/2 overflow-hidden md:h-[361px] md:w-[570px]">
                <Image
                  src="/images/custom_setting.png"
                  alt=""
                  width={570}
                  height={361}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="relative flex h-[408px] w-[303px] flex-shrink-0 flex-col overflow-hidden rounded-2.5xl bg-white px-6 pt-11 shadow-md md:h-[42.5rem] md:w-[26.25rem] md:px-10 md:pt-[4.25rem]">
              <span className="mb-4 flex items-center gap-2 text-sm font-bold leading-snug text-sky-400 md:text-xl">
                <Icon.Moneys size={24} className="md:isze-6 size-5" />
                시설 유료화
              </span>
              <span className="mb-4 flex text-lg font-bold leading-normal text-gray-800 md:mb-3 md:text-[1.75rem]">
                관리 인력은 줄이고,
                <br />
                추가 수익을 창출하세요
              </span>
              <span className="flex text-sm font-semibold leading-snug text-gray-500 md:text-xl">
                시설별 특화된 예약 시스템을 구축하고,
                <br />
                시설 자체를 유료 상품화 하세요
              </span>
              <div className="absolute -bottom-2 left-6 h-[209px] w-[326px] md:-bottom-[60px] md:left-10 md:h-[400px] md:w-[550px]">
                <Image src="/images/facility_fee.png" alt="" width={550} height={400} style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className="relative flex h-[408px] w-[303px] flex-shrink-0 flex-col overflow-hidden rounded-2.5xl bg-white px-6 pt-11 shadow-md md:h-[42.5rem] md:w-[26.25rem] md:px-10 md:pt-[4.25rem]">
              <span className="mb-4 flex items-center gap-2 text-sm font-bold leading-snug text-sky-400 md:text-xl">
                <Icon.LikeDislike size={24} />
                전자투표
              </span>
              <span className="mb-4 flex text-lg font-bold leading-normal text-gray-800 md:mb-3 md:text-[1.75rem]">
                연령대와 상관없이 쉬운
                <br />
                전자 투표를 진행해보세요
              </span>
              <span className="flex text-sm font-semibold leading-snug text-gray-500 md:text-xl">
                평균 투표 참여율 80%이상!
                <br />
                카카오톡, 문자로 보내는 전자투표
              </span>

              <div className="absolute -bottom-[68px] left-1/2 h-[260px] w-[255px] -translate-x-1/2 md:-bottom-8 md:h-[382px] md:w-[354px]">
                <Image src="/images/vote.png" alt="" width={354} height={382} style={{ objectFit: 'cover' }} />
              </div>
            </div>
            {/* 반복 카드 */}
            <div className="relative h-[408px] w-[303px] flex-shrink-0 overflow-hidden rounded-2.5xl bg-white px-6 pt-11 shadow-md md:h-[42.5rem] md:w-[26.25rem] md:px-10 md:pt-[4.25rem]">
              <span className="mb-4 flex items-center gap-2 text-sm font-bold leading-snug text-sky-400 md:text-xl">
                <Icon.ChartSquare size={24} className="size-5 md:size-6" />
                건물의 모든 기록 관리
              </span>
              <span className="mb-4 flex text-lg font-bold leading-normal text-gray-800 md:mb-3 md:text-[1.75rem]">
                기록된 건물 데이터로
                <br />
                탄탄한 운영정책을 만드세요
              </span>
              <span className="flex text-sm font-semibold leading-snug text-gray-500 md:text-xl">
                지속적인 건물 관리를 위해서
                <br />
                건물의 모든 자료와 데이터를 한 곳에서 모아보세요
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="419"
                height="328"
                viewBox="0 0 419 328"
                fill="none"
                className="absolute left-1/2 h-auto w-full -translate-x-1/2 md:-bottom-2"
              >
                <path
                  d="M755.06 271.355C700.733 271.355 720.294 160.821 674.68 160.821C629.065 160.821 644.27 224.479 586.782 224.479C529.294 224.479 563.975 55.2394 504.266 55.2394C444.557 55.2394 467.365 157.355 409.791 157.355C352.218 157.355 352.218 7.70275 324.371 7.70275C296.524 7.70275 298.317 125.169 271.154 125.169C243.99 125.169 249.457 51.7732 221.183 51.7732C192.909 51.7732 196.24 190.202 158.228 190.202C120.216 190.202 141.144 126.599 105.096 126.599C69.0491 126.599 86.5605 193.008 42.0565 193.008C-2.44754 193.008 18.2241 0 -29.6114 0C-77.4468 0 -74.1153 202.086 -122.976 202.086C-171.836 202.086 -164.234 116.091 -215.23 116.091C-266.226 116.091 -244.529 291.602 -296.636 291.602C-348.742 291.602 -349.852 176.942 -390 176.942V342H756L755.06 271.355Z"
                  fill="url(#paint0_linear_389_9812)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_389_9812"
                    x1="182.658"
                    y1="335.233"
                    x2="182.658"
                    y2="13.5898"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#1E8BFF" stopOpacity="0" />
                    <stop offset="1" stopColor="#55AEFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="relative flex h-[408px] w-[303px] flex-shrink-0 flex-col overflow-hidden rounded-2.5xl bg-white px-6 pt-11 shadow-md md:h-[42.5rem] md:w-[26.25rem] md:px-10 md:pt-[4.25rem]">
              <span className="mb-4 flex items-center gap-2 text-sm font-bold leading-snug text-sky-400 md:text-xl">
                <Icon.Buildings size={24} className="size-5 md:size-6" />
                건물 전용 앱
              </span>
              <span className="mb-4 flex text-lg font-bold leading-normal text-gray-800 md:mb-3 md:text-[1.75rem]">
                우리 건물 맞춤형으로
                <br />
                필요한 기능만 세팅하세요
              </span>
              <span className="flex text-sm font-semibold leading-snug text-gray-500 md:text-xl">
                다양한 기능을 우리 건물에 맞게
                <br />
                세팅할 수 있어요
              </span>
              <div className="absolute -bottom-5 left-1/2 h-[209px] w-[326px] -translate-x-1/2 overflow-hidden md:h-[361px] md:w-[570px]">
                <Image
                  src="/images/custom_setting.png"
                  alt=""
                  width={570}
                  height={361}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="relative flex h-[408px] w-[303px] flex-shrink-0 flex-col overflow-hidden rounded-2.5xl bg-white px-6 pt-11 shadow-md md:h-[42.5rem] md:w-[26.25rem] md:px-10 md:pt-[4.25rem]">
              <span className="mb-4 flex items-center gap-2 text-sm font-bold leading-snug text-sky-400 md:text-xl">
                <Icon.Moneys size={24} className="md:isze-6 size-5" />
                시설 유료화
              </span>
              <span className="mb-4 flex text-lg font-bold leading-normal text-gray-800 md:mb-3 md:text-[1.75rem]">
                관리 인력은 줄이고,
                <br />
                추가 수익을 창출하세요
              </span>
              <span className="flex text-sm font-semibold leading-snug text-gray-500 md:text-xl">
                시설별 특화된 예약 시스템을 구축하고,
                <br />
                시설 자체를 유료 상품화 하세요
              </span>
              <div className="absolute -bottom-2 left-6 h-[209px] w-[326px] md:-bottom-[60px] md:left-10 md:h-[400px] md:w-[550px]">
                <Image src="/images/facility_fee.png" alt="" width={550} height={400} style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className="relative flex h-[408px] w-[303px] flex-shrink-0 flex-col overflow-hidden rounded-2.5xl bg-white px-6 pt-11 shadow-md md:h-[42.5rem] md:w-[26.25rem] md:px-10 md:pt-[4.25rem]">
              <span className="mb-4 flex items-center gap-2 text-sm font-bold leading-snug text-sky-400 md:text-xl">
                <Icon.LikeDislike size={24} />
                전자투표
              </span>
              <span className="mb-4 flex text-lg font-bold leading-normal text-gray-800 md:mb-3 md:text-[1.75rem]">
                연령대와 상관없이 쉬운
                <br />
                전자 투표를 진행해보세요
              </span>
              <span className="flex text-sm font-semibold leading-snug text-gray-500 md:text-xl">
                평규 투표 참여율 80%이상!
                <br />
                카카오톡, 문자로 보내는 전자투표
              </span>

              <div className="absolute -bottom-[68px] left-1/2 h-[260px] w-[255px] -translate-x-1/2 md:-bottom-8 md:h-[382px] md:w-[354px]">
                <Image src="/images/vote.png" alt="" width={354} height={382} style={{ objectFit: 'cover' }} />
              </div>
            </div>
          </CardListAnimation>
        </div>
      </div>

      <section className="container">
        <div className="flex flex-col items-center justify-center gap-5 py-[100px] md:gap-10 md:py-[8.5rem]">
          <h3 className="mb-10 text-center text-2xl font-bold leading-normal md:mb-10 md:text-[52px]">
            <span className="text-green-500">좋은 입주 경험</span>이<br />
            결국 프리미엄 오피스 빌딩의
            <br className="block md:hidden" />
            핵심입니다.
          </h3>
          <Image src="/images/banner.png" alt="" width={1500} height={389} className="rounded-2.5xl" />
          <div className="flex w-full flex-col gap-5 md:h-[480px] md:flex-row md:gap-10">
            <article className="flex w-full flex-col items-center gap-[70px] overflow-hidden rounded-2.5xl bg-gray-50 px-4 py-[60px] shadow-md shadow-gray-300 md:w-2/5 md:items-start md:gap-20 md:p-[60px] md:shadow-none ">
              <p className="text-center text-xl font-bold leading-normal text-gray-800 md:text-start md:text-[32px] md:text-gray-700">
                입주사뿐만 아니라,
                <br />
                외부에 있는 소유자까지
                <br />
                빠르게 실시간으로 공유하세요
              </p>
              <Image src="/images/communicate.png" alt="" width={480} height={131} className="object-contain" />
            </article>
            <article className="relative flex h-[548px] w-full flex-col items-center overflow-hidden rounded-2.5xl bg-gray-50 px-5 py-[60px] shadow-md shadow-gray-300 md:h-auto md:w-3/5 md:items-start md:p-[60px] md:shadow-none">
              <div className="mb-10 flex text-center text-xl font-bold leading-normal text-gray-800 md:mb-5 md:text-start md:text-[32px] md:text-gray-700">
                우리 건물의 인증된 입주자에게
                <br />
                차원이 다른 편리함을 제공하세요
              </div>
              <div className="hidden gap-5 md:flex">
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.0386 6.97802C19.3268 7.27545 19.3194 7.75027 19.022 8.03855L9.73627 17.0386C9.44538 17.3205 8.98319 17.3205 8.69231 17.0386L4.97802 13.4386C4.68059 13.1503 4.67317 12.6755 4.96145 12.378C5.24973 12.0806 5.72455 12.0732 6.02198 12.3614L9.21429 15.4555L17.978 6.96145C18.2755 6.67317 18.7503 6.68059 19.0386 6.97802Z"
                      fill="#3B82F6"
                    />
                  </svg>
                  <p className="text-xl font-semibold leading-normal text-gray-600">
                    입주자 / 소유자를 위한 건물 전용 앱
                  </p>
                </span>
                <span className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.0386 6.97802C19.3268 7.27545 19.3194 7.75027 19.022 8.03855L9.73627 17.0386C9.44538 17.3205 8.98319 17.3205 8.69231 17.0386L4.97802 13.4386C4.68059 13.1503 4.67317 12.6755 4.96145 12.378C5.24973 12.0806 5.72455 12.0732 6.02198 12.3614L9.21429 15.4555L17.978 6.96145C18.2755 6.67317 18.7503 6.68059 19.0386 6.97802Z"
                      fill="#3B82F6"
                    />
                  </svg>
                  <p className="text-xl font-semibold leading-normal text-gray-600">건물 맞춤형 기능 세팅</p>
                </span>
                <span></span>
              </div>

              <div className="absolute left-0 top-40 order-1 md:top-[280px]">
                <CardListAnimation
                  card={{ width: 160, gap: 16 }}
                  mobileCard={{ width: 100, gap: 16 }}
                  count={12}
                  duration={8}
                >
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#8FB9FF] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      불편사항
                      <br />
                      접수
                    </span>
                    <Icon.Edit2 variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#FBCFE8] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      엘리베이터
                      <br />
                      점검안내
                    </span>
                    <Icon.Alarm variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#FBBF24] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      회의실
                      <br />
                      예약신청
                    </span>
                    <Icon.CalendarEdit variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#BAE6FD] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      정기주차
                      <br />
                      신청서
                    </span>
                    <Icon.Car variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#FF73CD] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      입주자/소유자
                      <br />
                      전자투표
                    </span>
                    <Icon.LikeDislike variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#38BDF8] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      이번달
                      <br />
                      고지서
                    </span>
                    <Icon.ReceiptItem variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#AABFE5] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      건물
                      <br />
                      운영정책
                    </span>
                    <Icon.Paperclip variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#2ADBA2] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      라운지
                      <br />
                      예약
                    </span>
                    <Icon.ReceiptItem variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#FCA5A5] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      장비
                      <br />
                      대여 신청
                    </span>
                    <Icon.BoxAdd variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#C7D2FE] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      실내 온도
                      <br />
                      피드백
                    </span>
                    <Icon.Sun variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#FDBA74] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      출입카드
                      <br />
                      발급
                    </span>
                    <Icon.CardAdd variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#6366F1] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      이번주
                      <br />
                      구내 식단표
                    </span>
                    <Icon.Coffee variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  {/* 추가 카드 컴포넌트 */}

                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#8FB9FF] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      불편사항
                      <br />
                      접수
                    </span>
                    <Icon.Edit2 variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#FBCFE8] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      엘리베이터
                      <br />
                      점검안내
                    </span>
                    <Icon.Alarm variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#FBBF24] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      회의실
                      <br />
                      예약신청
                    </span>
                    <Icon.CalendarEdit variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#BAE6FD] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      정기주차
                      <br />
                      신청서
                    </span>
                    <Icon.Car variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#FF73CD] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      입주자/소유자
                      <br />
                      전자투표
                    </span>
                    <Icon.LikeDislike variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#38BDF8] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      이번달
                      <br />
                      고지서
                    </span>
                    <Icon.ReceiptItem variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#AABFE5] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      건물
                      <br />
                      운영정책
                    </span>
                    <Icon.Paperclip variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#2ADBA2] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      라운지
                      <br />
                      예약
                    </span>
                    <Icon.ReceiptItem variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#FCA5A5] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      장비
                      <br />
                      대여 신청
                    </span>
                    <Icon.BoxAdd variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#C7D2FE] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      실내 온도
                      <br />
                      피드백
                    </span>
                    <Icon.Sun variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#FDBA74] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      출입카드
                      <br />
                      발급
                    </span>
                    <Icon.CardAdd variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                  <div className="flex size-[100px] flex-col justify-between rounded-2.5xl bg-[#6366F1] p-3 text-white md:size-40 md:p-5">
                    <span className="text-sm font-bold md:text-xl">
                      이번주
                      <br />
                      구내 식단표
                    </span>
                    <Icon.Coffee variant="Bold" size={36} className="size-6 md:size-9" />
                  </div>
                </CardListAnimation>
              </div>
              <Image
                src="/images/app_view.png"
                alt=""
                width={391}
                height={305}
                quality={100}
                className="absolute bottom-0 z-10 h-[256px] w-[200px] object-contain shadow-gray-300 md:hidden"
              />
              <Image
                src="/images/man.png"
                alt=""
                width={214}
                height={163}
                quality={100}
                className="absolute -bottom-1.5 z-20 h-[107px] w-[140px] translate-x-[76px] md:hidden"
              />
            </article>
          </div>
        </div>
      </section>

      <section className="relative flex h-[440px] w-full items-center justify-center overflow-hidden md:h-[360px]">
        <Image
          src="/images/buildings.png"
          alt=""
          width={1920}
          height={1280}
          className="absolute z-0 h-full object-cover md:h-auto md:w-full md:translate-y-[10%] md:object-center"
        />
        <div className="z-10 flex flex-col items-center gap-5">
          <div className="flex flex-col items-center">
            <span className="mb-2 text-xl font-bold text-gray-800 md:text-[28px] md:leading-tight ">
              상담이 필요하신가요?
            </span>
            <span className="md:h-[360px]] h-full w-44 text-center text-[32px] font-bold leading-relaxed text-white md:w-full md:text-[52px]">
              전화문의 1833-9092
            </span>
          </div>

          <button
            className="flex w-[200px] items-center justify-center gap-1 rounded-[10px] bg-gray-800 p-[14px] font-medium leading-none text-white md:p-[16px]"
            onClick={() => router.push('/inquiry')}
          >
            <Icon.Message size={20} />
            상담신청하기
          </button>
        </div>
      </section>
    </main>
  );
}
