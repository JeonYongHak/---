import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import ReactQueryProviders from '@/components/providers/ReactQueryProviders';
import Footer from '@/components/Footer';

const myFont = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: '오피스너',
  description: '편리한 오피스 생활의 시작 - 오피스너',
  openGraph: {
    title: '오피스너',
    description: '편리한 오피스 생활의 시작 - 오피스너',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={myFont.className}>
        <ReactQueryProviders>
          {children} <Footer />
        </ReactQueryProviders>
      </body>
    </html>
  );
}
