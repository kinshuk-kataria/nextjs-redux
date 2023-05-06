import Base from '@/src/components/layouts/Base';
import Post from '@/src/components/ui/organisms/Post';
import Head from 'next/head';
import Image from 'next/image';
import Owl from '@/images/owl.jpg';

export default function Home() {
  return (
    <>
      <Head>
        <title>Commento</title>
      </Head>
      <Base>
        <Post src={Owl} alt="owl" />
      </Base>
    </>
  );
}
