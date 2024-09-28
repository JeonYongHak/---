// src/app/[buildingId]/meal/_view/Empty.tsx

import { InfoCircle } from 'iconsax-react';

const Empty = () => {
  return (
    <>
      <div className="flex min-h-80 items-center justify-center self-stretch rounded-lg bg-gray-50 py-5 ">
        <div className="flex flex-col items-center justify-center gap-3 text-gray-500">
          <InfoCircle size="32" />
          <p className="text-[1.125rem] font-medium leading-[135%] ">등록된 구내식당 게시글이 없습니다.</p>
        </div>
      </div>
    </>
  );
};

export default Empty;
