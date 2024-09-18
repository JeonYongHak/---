//import { useRouter } from "next/router";
import { FaCheck } from "react-icons/fa";

export default function SignUp2() {
  //const router = useRouter();

  /*const onButtonClick = () => {
    router.push("./SignUp/SignUp3");
  }; */
  return (
    <div className="max-w-lg mx-auto p-8 mt-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-extrabold text-gray-900 text-start mb-6">
        회원가입
      </h1>
      <div className="w-full h-2 bg-gray-300 rounded-lg">
        <div className="w-3/5 h-2 rounded-lg bg-purple-600 ">
          <p className="text-transparent ">status</p>
        </div>
        <p className="text-transparent">step</p>
      </div>
      <div className="flex m-4 mx-auto space-x-2">
        <div className="flex space-x-14">
          <div className="ml-1 place-content-start">
            <p className="mr-3 text-purple-600">STEP 1</p>
            <p className="mt-2 font-bold">약관 동의</p>
          </div>
          <div className=" place-content-start">
            <p className=" text-purple-600">STEP 2</p>
            <p className="mt-2 font-bold">회원정보 입력</p>
          </div>
          <div className=" place-content-start">
            <p className="text-purple-600">STEP 3</p>
            <p className="mt-2 font-bold">가입 완료</p>
          </div>
        </div>
      </div>

      <form>
        {/* 이메일 주소 */}
        <label className="block mb-2 text-sm font-extrabold text-gray-700">
          이메일 주소 *
        </label>
        <input
          type="email"
          placeholder="로그인에 사용하실 이메일 주소를 입력해주세요"
          className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        {/* 비밀번호 */}
        <label className="block mb-2 text-sm font-extrabold text-gray-700">
          비밀번호 *
        </label>
        <input
          type="password"
          placeholder="로그인에 사용하실 비밀번호를 입력해주세요"
          className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <div className="flex mx-1">
          <div className="flex m-2">
            <FaCheck className="mt-1 text-blue-500" />
            <p className="font-extrabold mx-1">조건</p>
          </div>
          <div className="flex m-2">
            <FaCheck className="mt-1 text-gray-300" />
            <p className="font-extrabold mx-1">조건</p>
          </div>
          <div className="flex m-2">
            <FaCheck className="mt-1  text-gray-300" />
            <p className="font-extrabold mx-1">조건</p>
          </div>
          <div className="flex m-2">
            <FaCheck className="mt-1  text-gray-300" />
            <p className="font-extrabold mx-1">조건</p>
          </div>
        </div>

        {/* 비밀번호 확인 */}
        <label className="block mb-2 text-sm font-extrabold text-gray-700">
          비밀번호 확인 *
        </label>
        <input
          type="password"
          placeholder="비밀번호를 한번 더 입력해주세요"
          className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        {/* 이름 */}
        <label className="block mb-2 text-sm font-extrabold text-gray-700">
          이름 *
        </label>
        <input
          type="text"
          placeholder="이름을 입력해주세요"
          className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        {/* 생년월일 */}
        <label className="block mb-2 text-sm font-extrabold text-gray-700">
          생년월일 *
        </label>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="생년월일 6자리"
            className="w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <p className="mt-2 font-bold">-</p>
          <input
            type="text"
            placeholder="뒷자리"
            className="w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* 휴대폰 번호 인증 */}
        <label className="block mb-2 text-sm font-extrabold text-gray-700">
          휴대폰 번호 인증 *
        </label>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            placeholder="-없이 입력해주세요"
            className="w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <button
            type="button"
            className="w-1/3 px-4 py-2 bg-slate-100 rounded-lg font-medium text-gray-700 hover:bg-gray-300"
          >
            인증번호 받기
          </button>
        </div>

        {/* 인증번호 */}
        <input
          type="text"
          placeholder="인증번호"
          className="block bg-gray-200 w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <div className="flex mt-4 ">
          <p className="mt-3">이미 계정이 있으신가요?</p>
          <a
            href="#"
            className=" mx-2 mt-3 text-sky-600 font-extrabold hover:underline"
          >
            로그인
          </a>
          {/* 제출 버튼 */}
          <button
            //onClick={onButtonClick}
            type="submit"
            className=" ml-20 px-10 py-3 font-extrabold text-center text-white bg-blue-600 rounded-xl hover:bg-blue-500"
          >
            다음
          </button>
        </div>
      </form>
    </div>
  );
}