// src/app/[buildingId]/login/page.tsx

'use client';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Eye, EyeSlash, Sms } from 'iconsax-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BaseSyntheticEvent } from 'react';
import { cn } from '@/lib/utils';
import SignUpModal from './_view/SignUpModal';

// 데이터 타입 정의
type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  //유효성검사---------------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleSignUpModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onSubmit = async (data: FormData, e?: BaseSyntheticEvent) => {
    e?.preventDefault();
    setTimeout(() => {
      setLoading(true);
    }, 3000);
    setLoading(false);
  };

  return (
    <>
      <div className="flex items-center justify-center bg-gray-50 py-40">
        <div className="flex flex-col items-center justify-center  rounded-[2.5rem] border border-gray-100 bg-white p-[4.75rem] px-10">
          <h2 className="mb-11 w-full text-[2rem] font-bold text-gray-900">로그인이 필요한 서비스입니다.</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col items-center gap-4">
            {/* 이메일 입력 필드 */}
            <div className="flex h-[50px] w-full items-center gap-[0.625rem] rounded-[0.625rem] border border-gray-300 p-[0.875rem] focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-gray-300">
              <Sms size="24" variant="Bold" className="text-gray-400" />
              <input
                type="email"
                placeholder="이메일 주소"
                className="w-full bg-transparent text-xl text-gray-700  placeholder-gray-400 focus:outline-none "
                {...register('email', {
                  required: '이메일 주소는 필수 항목입니다.',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: '유효한 이메일 주소를 입력하세요.',
                  },
                })}
                name="email"
              />
            </div>

            {/* 비밀번호 입력 필드 */}
            <div className="flex h-[50px] w-full items-center gap-[0.625rem] rounded-[0.625rem] border border-gray-300 p-[0.875rem] focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22 8.29344C22 11.7692 19.1708 14.5869 15.6807 14.5869C15.0439 14.5869 13.5939 14.4405 12.8885 13.8551L12.0067 14.7333C11.4883 15.2496 11.6283 15.4016 11.8589 15.652C11.9551 15.7565 12.0672 15.8781 12.1537 16.0505C12.1537 16.0505 12.8885 17.075 12.1537 18.0995C11.7128 18.6849 10.4783 19.5045 9.06754 18.0995L8.77362 18.3922C8.77362 18.3922 9.65538 19.4167 8.92058 20.4412C8.4797 21.0267 7.30403 21.6121 6.27531 20.5876L5.2466 21.6121C4.54119 22.3146 3.67905 21.9048 3.33616 21.6121L2.45441 20.7339C1.63143 19.9143 2.1115 19.0264 2.45441 18.6849L10.0963 11.0743C10.0963 11.0743 9.3615 9.90338 9.3615 8.29344C9.3615 4.81767 12.1907 2 15.6807 2C19.1708 2 22 4.81767 22 8.29344ZM15.681 10.4889C16.8984 10.4889 17.8853 9.50601 17.8853 8.29353C17.8853 7.08105 16.8984 6.09814 15.681 6.09814C14.4635 6.09814 13.4766 7.08105 13.4766 8.29353C13.4766 9.50601 14.4635 10.4889 15.681 10.4889Z"
                  fill="#9CA3AF"
                />
              </svg>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="비밀번호"
                className="w-full bg-transparent text-xl text-gray-700  placeholder-gray-400 focus:outline-none "
                {...register('password', {
                  required: '비밀번호는 필수 항목입니다.',
                  minLength: {
                    value: 6,
                    message: '비밀번호는 최소 6자 이상이어야 합니다.',
                  },
                })}
                name="password"
              />
              <button
                type="button"
                onMouseDown={() => setShowPassword(true)}
                onMouseUp={() => setShowPassword(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                {showPassword ? (
                  <EyeSlash size="24" variant="Bold" className="text-gray-400" />
                ) : (
                  <Eye size="24" variant="Bold" className="text-gray-400" />
                )}
              </button>
            </div>

            {/* 버튼 섹션 */}
            <Button
              type="submit"
              className={cn(
                'h-14 w-full rounded-xl bg-blue-600 py-6 text-xl font-semibold text-white hover:bg-blue-700',
              )}
              disabled={isLoading ? true : false}
            >
              {isLoading ? <Spinner size="medium" className="text-white" /> : '로그인'}
            </Button>
          </form>
          {/* 로그인 에러 알림*/}
          <div className="mt-2">
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            {errors.password?.type === 'minLength' && (
              <p className="text-sm text-red-500">비밀번호는 최소 6자 이상이어야 합니다.</p>
            )}
          </div>
          <div className="mt-5 flex w-full items-center justify-start gap-3 text-base text-gray-500">
            <p onClick={handleSignUpModal} className="cursor-pointer font-bold hover:text-blue-500 hover:underline">
              회원 가입
            </p>
            <span>|</span>
            <p className="cursor-pointer font-normal hover:text-blue-500 hover:underline">아이디 / 비밀번호찾기</p>
          </div>

          <div className="mt-11 flex w-full flex-col items-center gap-6">
            <div className="flex w-full items-center justify-between">
              <div className="h-[1px] w-20 bg-gray-200"></div>
              <p className="mx-3 text-[1.125rem] text-gray-500">소셜 계정으로 간편 로그인</p>
              <div className="h-[1px] w-20 bg-gray-200"></div>
            </div>
            <div className="flex w-fit gap-5 space-x-3">
              <Button className="h-[60px] w-[60px]  cursor-pointer rounded-full bg-slate-500 hover:opacity-80"></Button>
              <Button className="h-[60px] w-[60px]  cursor-pointer rounded-full bg-slate-500 hover:opacity-80"></Button>
              <Button className="h-[60px] w-[60px]  cursor-pointer rounded-full bg-slate-500 hover:opacity-80"></Button>
              <Button className="h-[60px] w-[60px]  cursor-pointer rounded-full bg-slate-500 hover:opacity-80"></Button>
            </div>
          </div>
        </div>
      </div>
      <SignUpModal isOpen={isModalOpen} onClose={handleSignUpModal} />
    </>
  );
}
