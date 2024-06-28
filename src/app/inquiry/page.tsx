'use client';

import { useInquiryMutation } from '@/requests/inquiry';
import Icon from '@/types/iconsax';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function InquiryPage() {
  const [buildingName, setBuildingName] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const [checked, setChecked] = useState(false);

  const { mutateAsync: sendVoteMutateAsync, isSuccess } = useInquiryMutation();

  const router = useRouter();

  return (
    <main className="flex w-full flex-col items-center overflow-x-hidden bg-white">
      <div className="fixed z-30 flex w-full justify-center bg-white">
        <div className="flex w-full items-center justify-between py-3 pl-6 pr-3 md:max-w-[1500px] md:px-10 md:py-3.5">
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
          <button
            className="flex justify-center rounded-lg bg-gray-800 p-2.5 font-medium md:p-3.5"
            onClick={() => router.push('/')}
          >
            <span className="flex items-center justify-center gap-1 text-xs font-medium leading-none text-white md:w-[108px] md:text-xl md:leading-6">
              <Icon.Home2 variant="Bold" size={24} className="size-4 md:size-6" />
              홈으로
            </span>
          </button>
        </div>
      </div>

      <div className="hidden w-full justify-center bg-blue-500 py-20 md:mt-[80px] md:flex">
        <span className="text-center text-[32px] font-bold leading-snug text-white">
          무료 건물 컨설팅으로
          <br />
          관리효율과 추가 수익을 챙기세요!
        </span>
      </div>

      {isSuccess ? (
        <div className="mt-[60px] flex flex-col items-center gap-6 px-6 py-[100px] md:mb-40 md:mt-[100px] md:gap-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.534 6.90991C13.8202 6.80728 15.0411 6.30153 16.0232 5.46467C18.3148 3.51178 21.6852 3.51178 23.9768 5.46467C24.9589 6.30153 26.1798 6.80728 27.466 6.90991C30.4673 7.14942 32.8506 9.53271 33.0901 12.534C33.1927 13.8202 33.6985 15.0411 34.5353 16.0232C36.4882 18.3148 36.4882 21.6852 34.5353 23.9768C33.6985 24.9589 33.1927 26.1798 33.0901 27.466C32.8506 30.4673 30.4673 32.8506 27.466 33.0901C26.1798 33.1927 24.9589 33.6985 23.9768 34.5353C21.6852 36.4882 18.3148 36.4882 16.0232 34.5353C15.0411 33.6985 13.8202 33.1927 12.534 33.0901C9.53271 32.8506 7.14942 30.4673 6.90991 27.466C6.80728 26.1798 6.30153 24.9589 5.46467 23.9768C3.51178 21.6852 3.51178 18.3148 5.46467 16.0232C6.30153 15.0411 6.80728 13.8202 6.90991 12.534C7.14942 9.53271 9.53271 7.14942 12.534 6.90991ZM27.4142 17.4142C28.1953 16.6332 28.1953 15.3668 27.4142 14.5858C26.6332 13.8047 25.3668 13.8047 24.5858 14.5858L18 21.1716L15.4142 18.5858C14.6332 17.8047 13.3668 17.8047 12.5858 18.5858C11.8047 19.3668 11.8047 20.6332 12.5858 21.4142L16.5858 25.4142C17.3668 26.1953 18.6332 26.1953 19.4142 25.4142L27.4142 17.4142Z"
              fill="#3B82F6"
            />
          </svg>
          <div className="flex flex-col items-center">
            <span className="mb-4 text-xl font-semibold leading-normal text-blue-500">문의해주셔서 감사합니다!</span>
            <span className="mb-10 text-center text-sm font-semibold leading-snug text-gray-500 md:text-xl">
              담당자님의 고민을 빠르게 해결할 수 있도록
              <br />
              영업일 1일 이내 연락 드리겠습니다.
            </span>
            <button
              className="w-40 rounded-xl bg-gray-100 p-3.5 text-xl font-semibold leading-none text-gray-500"
              onClick={() => router.push('/')}
            >
              홈으로
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-[60px] flex w-full flex-col gap-6 px-6 pb-[100px] pt-5 md:mt-0 md:w-[576px] md:gap-10 md:py-[100px]">
          <div className="flex flex-col items-center">
            <span className="mb-4 text-xl font-bold leading-normal text-gray-900 md:text-4xl md:font-extrabold md:leading-10 md:tracking-tight">
              서비스 문의하기
            </span>
            <span className="text-center text-sm font-semibold text-gray-500 md:text-lg md:font-normal md:leading-6">
              담당자님의 고민을 빠르게 해결할 수 있도록
              <br />
              영업일 1일 이내 연락 드리겠습니다.
            </span>
          </div>
          <div className="flex flex-col gap-3 md:gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium leading-5 text-gray-700">건물명 *</span>
              <input
                className="h-[42px] w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm md:h-[50px] md:px-4 md:py-3"
                onChange={(e) => setBuildingName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium leading-5 text-gray-700">담당자명 *</span>
              <input
                className="h-[42px] w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium leading-5 text-gray-700">휴대전화번호 *</span>
              <input
                className="h-[42px] w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium leading-5 text-gray-700">담당자 이메일 *</span>
              <input
                className="h-[42px] w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-gray-700">개인정보 수집 동의 *</span>
              <span className="flex items-center gap-3 p-2.5">
                <input
                  type="checkbox"
                  className="size-4"
                  checked={checked}
                  onChange={() => setChecked((state) => !state)}
                />
                <p className="text-sm font-medium text-gray-700">동의합니다.</p>
              </span>
            </div>
            <button
              className={twMerge(
                'flex w-full cursor-pointer items-center justify-center rounded-xl bg-blue-600 p-3.5 text-xl font-semibold leading-none text-white',
                (buildingName.trim().length <= 0 ||
                  name.trim().length <= 0 ||
                  phoneNumber.trim().length <= 0 ||
                  email.trim().length <= 0 ||
                  !checked) &&
                  'cursor-not-allowed opacity-40',
              )}
              onClick={() =>
                sendVoteMutateAsync({
                  text: `오피스너 홈페이지
${buildingName} 건물에서 도입 상담 요청을 하였습니다.
담당자: ${name}s
연락처: ${phoneNumber}
이메일: ${email}`,
                })
              }
              disabled={
                buildingName.trim().length <= 0 ||
                name.trim().length <= 0 ||
                phoneNumber.trim().length <= 0 ||
                email.trim().length <= 0 ||
                !checked
              }
            >
              문의하기
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
