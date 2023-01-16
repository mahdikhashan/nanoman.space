import { useState } from 'react';

import { header } from '@/lib/header';
import { Turn as Hamburger } from 'hamburger-react'

import clsx from 'clsx';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="relative md:inline-flex font-mono">
        <div 
          onClick={() => setOpen(!isOpen)}
          className={clsx(
            "md:hidden cursor-pointer transition-height transition-slowest ease fixed top-4", 
            "left-4 right-4 z-10 text-white bg-zinc-800 border-2 p-2 rounded-2xl",
            { 'h-18 border-white text-white': !isOpen, 'border-orange-500 text-orange-500': isOpen },
          )}>
          <div className='flex items-center'>
            <Hamburger size={20} toggled={isOpen} />
            <div className='text-xl'>Menu</div>
          </div>
          {isOpen && header.map((link) => {
            const isActive = link.slug === pathname

            return (!link?.isDisabled &&
              (<div key={link.name} className={"p-2"}>
                <Link
                  href={`/${link.slug}`}
                  className={clsx(
                    "mb-2 px-3 text-sm font-semibold uppercase tracking-wider text-orange-500",
                    { 'text-zinc-500': !isActive },
                  )}
                  >
                    {link.name}
                </Link>
              </div>)
            );
          })}
        </div>
        <div className="hidden md:flex">
          {header.map((link) => {
            const isActive = link.slug === pathname

            return (!link?.isDisabled &&
              (<div key={link.name}>
                {
                !link?.redirect && 
                  <Link
                    href={`/${link.slug}`}
                    className={clsx(
                      "mb-2 px-3 text-sm font-semibold uppercase tracking-wider text-orange-500",
                      { 'text-zinc-500': !isActive },
                    )}
                    >
                    {link.name}
                  </Link>
                }
                {
                link?.redirect && 
                  <Link
                    href={link.slug}
                    passHref={true}
                    className={clsx(
                      "mb-2 px-3 text-sm font-semibold uppercase tracking-wider text-orange-500",
                      { 'text-zinc-500': !isActive },
                    )}
                  >
                    {link.name}
                  </Link>
                }
              </div>)
            );
          })}
        </div>
      </div>
    </>
  );

}
