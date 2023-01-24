import { useNinja } from "@/hooks/use-ninja";

export default function Info() {
  const { allSound } = useNinja();

  return (
    <>
      <div className="inline-flex">
        <h1 className="text-4xl md:text-6xl font-semibold text-zinc-900 dark:text-white">
          Mohi Khashan
        </h1>
      </div>
      <p className="text-zinc-500 text-xl md:text-2xl text-left">
        Front-End Engineer interested in how technology can enhance intuition
        and creativity. Experienced with{" "}
        <span className="text-orange-500">Typescript</span>,{" "}
        <span className="text-orange-500">React</span>,{" "}
        <span className="text-orange-500">Cypress</span>,{" "}
        <span className="text-orange-500">GraphQL</span>,{" "}
        <span className="text-orange-500">CI/CD</span> and{" "}
        <span className="text-orange-500">HTML/CSS</span>.
      </p>
      <p className="text-zinc-500 text-2xl">
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
