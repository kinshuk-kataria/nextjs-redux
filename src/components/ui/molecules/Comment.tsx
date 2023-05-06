import React from 'react';
import Avatar from '@/components/ui/atoms/Avatar';

export default function Comment() {
  return (
    <div className="flex gap-3 py-3">
      <Avatar />
      <div>
        <h2 className="text-sm font-bold">_theanimal3</h2>
        <p className="font-light text-md">this is comment of this post</p>
      </div>
    </div>
  );
}
