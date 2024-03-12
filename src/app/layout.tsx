import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const myFont = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
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
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
