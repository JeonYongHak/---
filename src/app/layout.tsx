import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ReactQueryProviders from '@/components/providers/ReactQueryProviders';

const myFont = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: '오피스너',
  description: '편리한 오피스 생활의 시작 - 오피스너',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={myFont.className}>
        <ReactQueryProviders>{children}</ReactQueryProviders>

        <footer className="flex w-full justify-center bg-gray-800 py-[100px] lg:pb-10 lg:pt-[100px]">
          <div className="w-[1500px]">
            <div className="flex w-full flex-col items-center gap-6 lg:items-start lg:px-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="141"
                height="35"
                viewBox="0 0 141 35"
                fill="none"
                className="mb-5 h-5 lg:mb-0 lg:h-auto"
              >
                <path
                  d="M140.732 0V33.04C140.732 33.96 139.732 34.2 137.932 34.2C136.252 34.2 135.212 34 135.212 33.08V13.56H126.572V8.88H135.212V0H140.732ZM118.372 20.84H130.452C131.372 20.84 131.532 21.72 131.532 23.2C131.532 24.72 131.372 25.52 130.452 25.52H117.052C116.012 25.52 114.532 24.52 113.652 23.64C112.812 22.76 111.972 21.52 111.972 20.72V2.76H117.492V19.92C117.492 20.52 117.812 20.84 118.372 20.84Z"
                  fill="white"
                />
                <path
                  d="M102.384 19.68C98.5844 18.2 93.5044 14.88 91.2644 11.44C89.1444 14.8 83.5044 18.52 80.0244 20.04C79.0244 20.48 78.4244 19.72 77.6644 18.6C76.7444 17.24 76.6244 16.48 77.4244 16.08C81.6644 13.92 85.3044 11.4 86.9044 8.84001C87.9844 7.12001 88.1044 5.60001 88.1044 4.04001V1.76001H93.8644V4.20001C93.8644 5.84001 93.9844 7.12001 95.0644 8.80001C96.9844 11.48 101.304 14.28 104.504 15.8C105.424 16.24 105.304 16.88 104.544 18.2C103.784 19.56 103.424 20.08 102.384 19.68ZM73.9844 25.88H107.104C108.184 25.88 108.344 26.72 108.344 28.24C108.344 29.8 108.184 30.56 107.104 30.56H73.9844V25.88Z"
                  fill="white"
                />
                <path
                  d="M68.3474 0V33.04C68.3474 33.96 67.3474 34.2 65.5474 34.2C63.8674 34.2 62.8274 34 62.8274 33.08V0H68.3474ZM50.6674 20.84V7.48H46.4274V20.84H50.6674ZM59.4674 25.52H37.6274V20.84H41.1074V7.48H37.6274V2.76H58.6674C59.5874 2.76 59.7474 3.6 59.7474 5.08C59.7474 6.6 59.5874 7.44 58.6674 7.44L55.9874 7.48V20.84H59.4674C60.3874 20.84 60.5474 21.68 60.5474 23.16C60.5474 24.68 60.3874 25.52 59.4674 25.52Z"
                  fill="white"
                />
                <path
                  d="M28.28 11.3199C28.28 16.3199 24.6 20.0399 19.76 21.0399V25.8799H33.12C34.2 25.8799 34.36 26.7199 34.36 28.2399C34.36 29.7999 34.2 30.5599 33.12 30.5599H0V25.8799H14.24V20.9999C9.44 19.9599 5.88 16.2799 5.88 11.3199C5.88 5.43986 10.96 1.35986 17.08 1.35986C23.2 1.35986 28.28 5.43986 28.28 11.3199ZM22.76 11.3199C22.76 8.19986 20.36 5.95986 17.08 5.95986C13.8 5.95986 11.4 8.19986 11.4 11.3199C11.4 14.4399 13.8 16.6799 17.08 16.6799C20.4 16.6799 22.76 14.4399 22.76 11.3199Z"
                  fill="white"
                />
              </svg>
              <div className="flex flex-col items-center text-sm leading-snug text-gray-300 lg:items-start lg:text-base">
                <span className="font-bold">(주)두꺼비세상</span>
                <span>서울특별시 구로구 디지털로 300 지밸리비즈플라자 15층</span>
                <span>대표자 유광연 | 사업자등록번호 204-86-40665</span>
              </div>

              <div className="flex text-xs font-normal text-gray-300 lg:text-base">
                &copy; 2024 dukkubisesang. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
