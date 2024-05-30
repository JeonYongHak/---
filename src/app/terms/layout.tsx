import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const dynamic = 'force-static';

export default function TermsLayout({ children }: Props) {
  return (
    <main className="prose-sm prose-th:border prose-th:py-2 prose-td:border prose-td:px-2 container py-10">
      {children}
    </main>
  );
}
