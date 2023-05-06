import React from 'react';
import Image from 'next/image';
import Owl from '@/images/owl.jpg';

type props = {
  src: string;
  alt: string;
};

export default function ImageContent({ src, alt }: props) {
  return (
    <div>
      <Image src={src} alt={alt} width={380} />
    </div>
  );
}
