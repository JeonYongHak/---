// src/app/[buildingId]/layout.tsx

import localFont from 'next/font/local';
import '@/app/globals.css';
import ReactQueryProviders from '@/components/providers/ReactQueryProviders';
import { MSWProvider } from '../msw-provider';
import Header from './_view/Header';
import Footer from './_view/Footer';
import { Toaster } from '@/components/ui/sonner';
import { fetchBuildingDetails } from '@/requests/buildings/fetchBuildingDetails';

// 폰트 로드
const myFont = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

type Props = {
  children: React.ReactNode;
  params: { buildingId: string };
};

// 메타데이터 생성 함수
export async function generateMetadata({ params }: Props) {
  try {
    const { data } = await fetchBuildingDetails(params.buildingId);
    return {
      title: data.name,
      description: data.description,
    };
  } catch (error) {
    console.error('Failed to generate metadata:', error);
    return {
      title: 'Unknown Building',
      description: 'Unable to load building details',
    };
  }
}

// 비동기 레이아웃 함수
export default async function RootLayout({ children, params }: Props) {
  let data;

  try {
    // 동적 파라미터로 빌딩 데이터를 가져오기
    const response = await fetchBuildingDetails(params.buildingId);
    data = response.data;
  } catch (error) {
    console.error('Failed to fetch building details:', error);
    data = {
      name: 'Unknown Building',
      address: 'Unknown Address',
      employeeContactList: [{ phone_number: 'Unknown' }],
    };
  }

  return (
    <html lang="ko">
      <body className={myFont.className}>
        <ReactQueryProviders>
          <MSWProvider>
            <Header name={data.name} />
            <div className="relative min-h-[calc(100vh-158px)] pt-[6.125rem]">{children}</div>
            <Toaster />
            <Footer
              name={data.name}
              address={data.address}
              tel={data.employeeContactList[0]?.phone_number || 'Unknown'}
            />
          </MSWProvider>
        </ReactQueryProviders>
      </body>
    </html>
  );
}
