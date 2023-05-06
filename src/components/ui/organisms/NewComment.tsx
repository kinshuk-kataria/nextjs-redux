import React from 'react';
import Avatar from '@/components/ui/atoms/Avatar';

export default function NewComment() {
  return (
    <div className="flex gap-3 items-center">
      <Avatar />
      <input
        type="text"
        placeholder="Add a comment"
        className="border border-black p-3 w-full rounded-full"
      />
      <button className="bg-black text-white px-3 py-1 rounded-lg text-sm">
        Post
      </button>
    </div>
  );
}
