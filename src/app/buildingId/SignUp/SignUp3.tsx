export default function SignUp3() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-50 shadow-md">
      {/* max-w-full로 내부 컨테이너의 너비 제한을 없앰 */}
      <div className="w-[500px] h-auto mx-auto bg-white p-8 shadow-lg rounded-lg">
        {/* Title */}
        <h1 className="text-2xl font-extrabold text-gray-900 text-start mb-6">
          회원가입
        </h1>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-300 rounded-lg mb-6">
          <div className="w-full h-2 bg-purple-600 rounded-lg"></div>
        </div>

        {/* Steps */}
        <div className="flex justify-between mb-6 border-b border-gray-200 pb-4">
          <div className="text-center">
            <p className="text-purple-600 font-bold">STEP 1</p>
            <p className="mt-2 text-sm font-bold">약관 동의</p>
          </div>
          <div className="text-center">
            <p className="text-purple-600 font-bold">STEP 2</p>
            <p className="mt-2 text-sm font-bold">회원정보 입력</p>
          </div>
          <div className="text-center">
            <p className="text-purple-600 font-bold">STEP 3</p>
            <p className="mt-2 text-sm font-bold">가입 완료</p>
          </div>
        </div>

        {/* Success Icon */}
        <div className="flex justify-center mb-28 mt-28">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-600">
            <svg
              className="w-8 h-8 text-white font-extrabold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl font-bold my-8 text-gray-900 text-center">
          홍길동님, 환영해요!
        </h2>
        <p className="text-sm text-center font-extrabold mb-8 text-blue-600 mb-2">
          가입 완료
        </p>
        <div>
          <p className="text-center font-bold text-gray-600 mb-3">
            오피스너 회원에게만 드리는
          </p>
          <p className="text-center font-bold text-gray-600 mb-6">
            혜택을 누릴 수 있게 되었어요!
          </p>
        </div>

        {/* Home Button */}
        <div className="flex justify-center">
          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500">
            홈으로
          </button>
        </div>
      </div>
    </div>
  );
}
