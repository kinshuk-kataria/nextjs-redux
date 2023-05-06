import React from 'react';
import ImageContent from '../molecules/ImageContent';
import Avatar from '@/components/ui/atoms/Avatar';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import Comment from '@/components/ui/molecules/Comment';
import NewComment from '@/components/ui/organisms/NewComment';
import LoginButton from '@/components/ui/atoms/LoginButton';

type props = {
  src: any;
  alt: string;
};

export default function Post({ src, alt }: props) {
  return (
    <div className="flex flex-col  max-w-fit mx-auto p-12">
      <header className="flex  justify-between items-center py-3">
        <div className="flex gap-3 items-center">
          <Avatar />
          <div>
            <h2 className="text-sm font-extrabold">_theanimal3</h2>
            <p className="text-sm">owl333</p>
          </div>
        </div>

        <BsThreeDots />
      </header>

      <ImageContent src={src} alt={alt} />
      <footer className="py-3">
        <div className="flex gap-6">
          <AiOutlineHeart size={28} />
          <BiComment size={28} />
        </div>
        <div className="py-6">
          <Comment />
          <Comment />
          <Comment />
        </div>
        <div>
          <NewComment />
        </div>
      </footer>
    </div>
  );
}
