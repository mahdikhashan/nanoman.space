import { useEffect, useState } from "react";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Turn as Hamburger } from "hamburger-react";
import { header } from "@/lib/header";

import { useTheme } from "next-themes";

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="relative md:flex font-mono justify-between">
        <div>
          <div
            onClick={() => setOpen(!isOpen)}
            className={clsx(
              "md:hidden !p-y-4 cursor-pointer fixed top-4",
              "left-4 right-4 z-10 text-white bg-zinc-800 border-2 rounded-2xl",
              {
                "h-18 border-white text-white": !isOpen,
                "border-orange-500 text-orange-500": isOpen,
              }
            )}
          >
            <div className="flex items-center">
              <Hamburger size={20} toggled={isOpen} />
              <div className="text-xl">Menu</div>
            </div>
            {isOpen &&
              header.map((link) => {
                const isActive = link.slug === pathname;

                return (
                  !link?.isDisabled && (
                    <div key={link.name}>
                      <Link
                        href={`/${link.slug}`}
                        className={clsx(
                          "flex mb-2 px-3 text-s m-2 font-semibold p-1 hover:bg-orange-500 hover:text-white uppercase tracking-wider text-orange-500",
                          { "text-zinc-500": !isActive }
                        )}
                      >
                        {link.name}
                      </Link>
                    </div>
                  )
                );
              })}
          </div>
          <div className="hidden md:inline-flex">
            {header.map((link) => {
              const isActive = link.slug === pathname;

              return (
                !link?.isDisabled && (
                  <div key={link.name}>
                    {
                      <Link
                        href={!link?.redirect ? `/${link.slug}` : link.slug}
                        passHref={link?.redirect}
                        target={link?.redirect ? "_blank" : "_self"}
                        className={clsx(
                          "flex items-baseline gap-1 mb-2 px-3 text-sm font-semibold uppercase tracking-wider text-orange-500",
                          { "text-zinc-500 hover:text-zinc-100": !isActive }
                        )}
                      >
                        {link?.name}
                        {link?.redirect && (
                          <svg
                            width="13.5"
                            height="13.5"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            className="iconExternalLink_nPIU"
                          >
                            <path
                              fill="currentColor"
                              d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                            ></path>
                          </svg>
                        )}
                      </Link>
                    }
                  </div>
                )
              );
            })}
          </div>
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-gray-800 dark:text-gray-200"
            >
              {resolvedTheme === "dark" ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
