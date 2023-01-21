import Image from 'next/image';
import Link from 'next/link';

import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Footer() {
  const d = new Date();

  return (
    <>
      <div className='flex flex-col md:flex-row mb-16 md:mb-4 gap-2 items-center md:justify-between text-sm text-zinc-600 w-full'>
        <span>{'©'} &nbsp; <span>{d.getFullYear()}</span> &nbsp; Mohi Khashan. All Rights Reserved.</span>
        <div id="social-media-link" className='hidden md:flex flex-row gap-4'>
          <Link href={"https://www.linkedin.com/in/mahdikhashan/"} passHref>
            <BsLinkedin className='hover:text-white text-2xl' />
          </Link>
          <Link href={"https://github.com/mahdikhashan"} passHref>
            <BsGithub className='hover:text-white text-2xl' />
          </Link>
        </div>
        <span className='flex flex-row'>
          <p>
            Created by the &nbsp;<b>Next.js</b>&nbsp; and 
          </p>
          &nbsp;
          <Image
            src="/butter-w.png"
            unoptimized
            alt="Butter CMS"
            width={100}
            height={0}
          />
          {'.'}
        </span>
        <div id="social-media-link" className='md:hidden flex flex-row gap-4'>
          <Link href={"https://www.linkedin.com/in/mohi-k/"} passHref>
            <BsLinkedin className='hover:text-white text-2xl' />
          </Link>
          <Link href={"https://github.com/mohi-k"} passHref>
            <BsGithub className='hover:text-white text-2xl' />
          </Link>
        </div>
      </div>
    </>
  )
}

export {};