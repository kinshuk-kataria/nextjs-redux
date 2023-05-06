import React from 'react';
import Header from '@/src/components/ui/organisms/Header';
import Footer from '@/src/components/ui/organisms/Footer';

type Props = {
  children: React.ReactNode;
};

export default function Base({ children }: Props) {
  return (
    <div className=" max-w-4xl mx-auto  shadow-lg">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
