import React from 'react';
import Image from 'next/image';
import AvatarImage from '@/images/avatar.jpg';

export default function Avatar() {
  return (
    <div className="avatar">
      <Image
        src={AvatarImage}
        alt="avatar"
        width={30}
        className="rounded-full"
      />
    </div>
  );
}
