import { useNinja } from "@/hooks/use-ninja";

export default function Info() {
  const { allSound } = useNinja();

  return (
    <>
      <div className="inline-flex">
        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white">
          Mahdi Khashan
        </h1>
      </div>
      <p className="text-zinc-500 dark:text-gray-100 text-xl md:text-2xl text-left">
        Software Engineer interested in how technology can enhance intuition
        and creativity. Experienced with{" "}
        <span className="text-orange-500 font-bold">Typescript</span>,{" "}
        <span className="text-orange-500 font-bold">React</span>,{" "}
        <span className="text-orange-500 font-bold">Cypress</span>,{" "}
        <span className="text-orange-500 font-bold">GraphQL</span>,{" "}
        <span className="text-orange-500 font-bold">CI/CD</span> and{" "}
        <span className="text-orange-500 font-bold">HTML/CSS</span>.
      </p>
      <p className="text-zinc-500 dark:text-gray-100 text-2xl">
        As a{" "}
        <span className="cursor-pointer" onClick={() => allSound[Math.floor(Math.random() * allSound.length)]()}>
          🥷
        </span>{" "}
        I&apos;ve built, developed and shipped +10 products (+100K
        users).
      </p>
    </>
  );
}
