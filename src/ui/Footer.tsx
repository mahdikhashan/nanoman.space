import Image from 'next/image';

export default function Footer() {
  const d = new Date();

  return (
    <div className="md:flex text-sm text-zinc-600">
      {'©'} &nbsp; <span>{d.getFullYear()}</span> &nbsp; Mo Khashan. All Rights Reserved.
      Created by the &nbsp;<b>Next.js</b>&nbsp; and 
      &nbsp;
      <Image
        src="/butter-w.png"
        unoptimized
        alt="Butter CMS"
        width={100}
        height={0}
      />
      {'.'}
      &nbsp;
      <a
        className="underline decoration-dotted underline-offset-4"
        href="https://github.com/vercel/next.js/examples/with-turbopack"
      >
        View the code
      </a>&nbsp;
      {' or '}
      &nbsp;
      <a
        className="underline decoration-dotted underline-offset-4"
        href="https://vercel.com/templates/next.js"
      >
        deploy your own
      </a>
      {'.'}
    </div>
  )
}

export {};