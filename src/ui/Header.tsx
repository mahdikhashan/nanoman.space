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
                  <Link
                    href={!link?.redirect ? `/${link.slug}` : link.slug}
                    passHref={link?.redirect && true}
                    target={link?.redirect ? "_blank" : "_self"}
                    className={clsx(
                      "flex items-baseline gap-1 mb-2 px-3 text-sm font-semibold uppercase tracking-wider text-orange-500",
                      { 'text-zinc-500 hover:text-zinc-100': !isActive },
                    )}
                    >
                    {link?.name}
                    {link?.redirect && <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" className="iconExternalLink_nPIU"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg> }
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
