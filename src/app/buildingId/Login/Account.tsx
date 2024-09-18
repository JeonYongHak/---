'use client';

import { Button } from '@headlessui/react';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaKey, FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import SignUpModal from './SignUpModal'; // 모달 컴포넌트 불러오기

// 데이터 타입 정의
type FormData = {
  email: string;
  password: string;
};

const Account = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); // useForm 사용
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 보이기 상태
  const [action, setAction] = useState(''); // 클릭 상태
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // 비밀번호 표시 여부 토글
  };

  // 로그인 버튼 클릭 시 실행되는 함수
  const onSubmit = (data: FormData) => {
    setAction(`로그인 버튼 클릭됨 - 이메일: ${data.email}, 비밀번호: ${data.password}`);
  };

  // 회원가입 버튼 클릭 시 모달 열기
  const handleSignUpClick = () => {
    setIsModalOpen(true);
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="absolute inset-x-2 inset-y-3 flex justify-center p-36">
        <div className="mt-3 flex h-auto w-[580px] flex-col items-center justify-center rounded-xl border border-gray-300 bg-white p-10 shadow-lg">
          <h1 className="mb-12 w-full text-left text-4xl font-bold text-gray-800">로그인이 필요한 서비스입니다.</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col items-center">
            {/* 이메일 입력 필드 */}
            <div className="mb-6 flex h-[50px] w-full items-center rounded-lg border border-gray-300 bg-gray-50 px-4 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
              <MdOutlineMailOutline size={20} />
              <input
                type="email"
                placeholder="이메일 주소"
                className="w-full bg-transparent pl-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                {...register('email', {
                  required: '이메일 주소는 필수 항목입니다.',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: '유효한 이메일 주소를 입력하세요.',
                  },
                })}
              />
            </div>
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}

            {/* 비밀번호 입력 필드 */}
            <div className="mb-8 flex h-[50px] w-full items-center rounded-lg border border-gray-300 bg-gray-50 px-4 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
              <FaKey size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="비밀번호"
                className="w-full bg-transparent pl-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                {...register('password', {
                  required: '비밀번호는 필수 항목입니다.',
                  minLength: {
                    value: 6,
                    message: '비밀번호는 최소 6자 이상이어야 합니다.',
                  },
                })}
              />
              <button type="button" onClick={togglePasswordVisibility} className="text-gray-600 hover:text-gray-800">
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
            {/* 비밀번호 조건 안내 문구: 비밀번호가 6자 미만일 때만 표시 */}
            {errors.password?.type === 'minLength' && (
              <p className="mb-4 text-xs text-red-500">비밀번호는 최소 6자 이상이어야 합니다.</p>
            )}
            {/* 버튼 섹션 */}
            <div className="mb-6 flex w-full flex-col">
              <Button
                type="submit"
                className="h-12 w-full justify-center rounded-lg bg-blue-600 pb-2 pt-2 text-lg font-bold text-white hover:bg-blue-700"
              >
                로그인
              </Button>
            </div>
          </form>
          <div className="mb-4 flex w-full items-center justify-start space-x-3 text-sm text-gray-500">
            <p
              onClick={handleSignUpClick} // 회원 가입 클릭 시 모달 열림
              className="cursor-pointer font-bold hover:text-blue-500 hover:underline"
            >
              회원 가입
            </p>
            <span>|</span>
            <p className="cursor-pointer font-normal hover:text-blue-500 hover:underline">아이디 / 비밀번호 찾기</p>
          </div>

          {/* 상태 업데이트 시 보여줄 텍스트 */}
          <p className="mt-4 text-lg text-red-500">{action}</p>
          <div className="flex h-[20px] w-full items-center justify-center">
            <div className="h-[1px] w-[80px] bg-slate-400"></div>
            <p className="mx-3 text-slate-400">소셜 계정으로 간편 로그인</p>
            <div className="h-[1px] w-[80px] bg-slate-400"></div>
          </div>
          <div className="mt-5 flex place-items-center space-x-3">
            <div className=" h-[60px] w-[60px]  rounded-full border-2 bg-slate-500 opacity-25 hover:border-black"></div>
            <div className=" h-[60px] w-[60px]  rounded-full border-2  bg-slate-500 opacity-25 hover:border-black"></div>
            <div className=" h-[60px] w-[60px]  rounded-full border-2 bg-slate-500 opacity-25 hover:border-black"></div>
            <div className=" h-[60px] w-[60px]  rounded-full border-2 bg-slate-500 opacity-25 hover:border-black"></div>
          </div>
        </div>
      </div>

      {/* 회원가입 모달 */}
      <SignUpModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default Account;
