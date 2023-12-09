import Image from 'next/image';

export default function Info() {
  return (
    <>
      <div className="flex flex-row gap-8 flex-1 justify-start items-center">
        <Image className="rounded-full" src="/img.png" alt="Mahdi Khashan" width="150" height="150" />
        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white">
          Mahdi Khashan
        </h1>
      </div>
      <p className="text-zinc-500 dark:text-gray-100 text-2xl text-left align-middle leading-loose pt-8">
        Frontend developer from 🇮🇷 living in 🇦🇹 and interested in how technology
        can enhance creativity.
      </p>

      <h3 className="text-xl md:text-2xl font-bold text-zinc-600 dark:text-gray-100 pt-8">
        Brief intro
      </h3>
      <p className="text-zinc-500 dark:text-gray-100 text-2xl text-left align-middle leading-loose">
        I particularly enjoy working with React and TypeScript on web
        applications but also like animated landing pages, UX and CRO.
      </p>
      <p className="text-zinc-500 dark:text-gray-100 text-2xl text-left align-middle leading-loose">
        I learned a lot from the open source community and like to give back to
        it time to{' '}
        <a
          className="underline decoration-dashed decoration-orange-500 hover:bg-orange-500"
          href="https://github.com/mahdikhashan"
        >
          contribute to common tools
        </a>{' '}
        and{' '}
        <a
          className="underline decoration-dashed decoration-orange-500 hover:bg-orange-500"
          href="https://www.npmjs.com/~mahdikhashan"
        >
          npm packages
        </a>
        .
      </p>
      <p className="text-zinc-500 dark:text-gray-100 text-2xl text-left align-middle leading-loose">
        Outside of my engagement in development, I find pleasure in playing
        badminton 🏸, exploring new human languages 🌐, and revisiting episodes
        of "The Office" 🎥 for another round.
      </p>
    </>
  );
}
