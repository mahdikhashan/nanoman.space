import Image from 'next/image';

export default function Info() {
  return (
    <>
      <div className="flex flex-col gap-8 flex-1 justify-start items-center">
        <Image
          className="rounded-full"
          src="/img.png"
          alt="Mahdi Khashan"
          width="150"
          height="150"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white">
          Mahdi Khashan
        </h1>
      </div>
      <p className="text-zinc-500 dark:text-gray-100 text-2xl text-left align-middle leading-loose pt-16">
        Frontend developer from 🇮🇷 living in 🇦🇹 and interested in how technology
        can enhance creativity.
      </p>

      <h3 className="text-xl md:text-2xl font-bold text-zinc-600 dark:text-gray-100 pt-8">
        Brief intro
      </h3>
      <p className="text-zinc-500 dark:text-gray-100 text-2xl text-left align-middle leading-loose">
        I particularly enjoy working with React and TypeScript on web
        applications, improving DX by creating tools, libraries and contributing
        to accessible design systems.
      </p>
      <p className="text-zinc-500 dark:text-gray-100 text-2xl text-left align-middle leading-loose">
        I also have a passion and seeking the opportunity creating animated
        landing pages and optimizing user experiences (
        <a
          className="underline decoration-dashed decoration-orange-500 hover:bg-orange-500 hover:cursor-pointer"
          href="mailto:mo@nanoman.space"
        >
          maybe for you?
        </a>
        ).
      </p>
      <p className="text-zinc-500 dark:text-gray-100 text-2xl text-left align-middle leading-loose">
        I learned a lot from the open source community and like to give back to
        it time to{' '}
        <a
          className="underline decoration-dashed decoration-orange-500 hover:bg-orange-500"
          href="https://github.com/mahdikhashan"
        >
          contribute to common tools
        </a>
        , improving documentation and{' '}
        <a
          className="underline decoration-dashed decoration-orange-500 hover:bg-orange-500"
          href="https://www.npmjs.com/~mahdikhashan"
        >
          {' '}
          npm packages
        </a>
        .
      </p>
      <p className="text-zinc-500 dark:text-gray-100 text-2xl text-left align-middle leading-loose">
        Outside of my engagement in development, I find pleasure in playing
        badminton 🏸, exploring new human languages 🌐, currently German 🇩🇪, and revisiting episodes
        of{' '}
        <a
          className="underline decoration-dashed decoration-orange-500 hover:bg-orange-500 hover:cursor-pointer"
          href="https://www.imdb.com/title/tt0386676/"
        >
          "The Office"
        </a>{' '}
        🎥 for another round.
      </p>
    </>
  );
}
