import { useState, useEffect } from 'react';

export default function Footer() {
  const d = new Date();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col text-xs mb-16 md:mb-4 gap-4 !items-center text-zinc-600 w-full">
      <span>
        {'©'} &nbsp; <span>{d.getFullYear()}</span> &nbsp; Mahdi Khashan. All
        right reserved.
      </span>
      <span className="flex flex-row items-center">
        <p>
          Created by ❤️ with&nbsp;<b>Next.js</b> and <b>React.js</b>
        </p>
        {'.'}
      </span>
    </div>
  );
}

export {};
