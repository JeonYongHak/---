// src/app/[buildingId]/login/_view/SignUpModal.tsx

type modalClick ={
  isOpen:boolean;
  onClose:()=>void;
}


const SignUpModal = ({ isOpen, onClose }:modalClick) => {
  if (!isOpen) return null;

  return (
    <div className="w-100% fixed inset-0 z-50 flex h-auto items-center justify-center bg-gray-600 bg-opacity-75">
      <div className="relative w-[480px] rounded-lg bg-white p-8 shadow-lg">
        <button className="absolute right-3 top-3 text-gray-500" onClick={onClose}>
          &times;
        </button>
        <h2 className="mb-4 text-lg font-bold">회원가입 안내</h2>
        <p className="mb-4 text-2xl font-bold text-gray-700">현재 앱에서만 회원가입을 진행할 수 있어요.</p>
        <p className="mb-4 text-slate-500"> 앱에서 가입한 후에는 앱과 웹에서 모두 이용할 수 있어요!</p>
        <div className="h-auto w-full p-4 shadow-lg">
          <p className=" align-center mb-4 justify-center text-sm font-bold text-gray-600 ">
            구글 플레이스토어 혹은 애플 앱스토어에서 ‘오피스너’를 검색해주세요.
          </p>
          <div className="mt-4 flex space-x-4">
            <div className="relative flex h-32 w-full flex-col rounded-md border border-gray-300 bg-gray-100 p-4">
              <p className="mb-2 block items-start font-semibold">안드로이드</p>
              <div className="absolute right-3 top-10 h-20 w-20 items-end justify-end rounded-lg bg-gray-300"></div>
              <div className="z-1 absolute right-5 top-12 flex h-16 w-16 items-end rounded-lg bg-white"></div>
            </div>
            <div className="relative flex h-32 w-full flex-col rounded-md border border-gray-300 bg-gray-100 p-4">
              <p className="mb-2 font-semibold">IOS (애플)</p>
              <div className="absolute right-3 top-10 h-20 w-20 rounded-lg bg-gray-300"></div>
              <div className="z-1 absolute right-5 top-12 flex h-16 w-16 items-end rounded-lg bg-white"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
