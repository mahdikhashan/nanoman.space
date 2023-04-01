import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { BsLinkedin, BsGithub } from 'react-icons/bs';

const ExternalLink = ({ href, children }) => {
  return (
    <a
      className="text-gray-500 hover:text-gray-600 transition"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children}
    </a>
  );
};

export default function Footer() {
  const d = new Date();

  const [mounted, setMounted] = useState(false);

  const { resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col text-xs mb-16 md:mb-4 gap-2 !items-center text-zinc-600 w-full">
        <span>
          {'©'} &nbsp; <span>{d.getFullYear()}</span> &nbsp; Mohi Khashan. All right reserved.
        </span>
        <span className="flex flex-row items-center">
          <p>
            Created by the &nbsp;<b>Next.js</b>&nbsp; and
          </p>
          &nbsp;
          <Image
            src={resolvedTheme === 'dark' ? '/butter-w.png' : '/butter-b.png'}
            unoptimized
            alt="Butter CMS"
            width={100}
            height={0}
          />
          {'.'}
        </span>
        <div id="social-media-link" className="flex flex-row gap-4">
          <ExternalLink href={'https://www.linkedin.com/in/mahdikhashan/'}>
            <BsLinkedin className="hover:text-white text-2xl" />
          </ExternalLink>
          <ExternalLink href={'https://github.com/mahdikhashan'}>
            <BsGithub className="hover:text-white text-2xl" />
          </ExternalLink>
        </div>
      </div>
    </>
  );
}

export {};
