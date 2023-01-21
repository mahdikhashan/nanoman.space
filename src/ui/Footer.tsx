import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { useTheme } from "next-themes";

import { BsLinkedin, BsGithub } from "react-icons/bs";

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
      <div className="flex flex-col text-xs md:flex-row mb-16 md:mb-4 gap-2 !items-center md:justify-between text-zinc-600 w-full">
        <span>
          {"©"} &nbsp; <span>{d.getFullYear()}</span> &nbsp; Mohi Khashan. All
          Rights Reserved.
        </span>
        <div id="social-media-link" className="hidden md:flex flex-row gap-4">
          <Link href={"https://www.linkedin.com/in/mahdikhashan/"} passHref>
            <BsLinkedin className="hover:text-white text-2xl" />
          </Link>
          <Link href={"https://github.com/mahdikhashan"} passHref>
            <BsGithub className="hover:text-white text-2xl" />
          </Link>
        </div>
        <span className="flex flex-row items-center">
          <p>
            Created by the &nbsp;<b>Next.js</b>&nbsp; and
          </p>
          &nbsp;
          <Image
            src={resolvedTheme === "dark" ? "/butter-w.png" : "/butter-b.png"}
            unoptimized
            alt="Butter CMS"
            width={100}
            height={0}
          />
          {"."}
        </span>
        <div id="social-media-link" className="md:hidden flex flex-row gap-4">
          <Link href={"https://www.linkedin.com/in/mohi-k/"} passHref>
            <BsLinkedin className="hover:text-white text-2xl" />
          </Link>
          <Link href={"https://github.com/mohi-k"} passHref>
            <BsGithub className="hover:text-white text-2xl" />
          </Link>
        </div>
      </div>
    </>
  );
}

export {};
