import Footer from '@/views/building-landing/Footer';
import Header from '@/views/building-landing/Header';
import { Metadata, ResolvingMetadata } from 'next';
import { ReactNode } from 'react';

type Props = {
  params: { name: string };
  children: ReactNode;
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  return {
    title: params.name,
  };
}

export default function layout({ params, children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
