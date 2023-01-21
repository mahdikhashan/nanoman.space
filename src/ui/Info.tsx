import { useNinja } from "@/hooks/use-ninja";

export default function Info() {
  const { allSound } = useNinja();

  return (
    <>
      <div className="inline-flex">
        <h1 className="text-4xl md:text-6xl font-semibold text-white">
          Mohi Khashan<span className="text-3xl cursor-pointer">🗣️</span>
        </h1>
      </div>
      <p className="text-zinc-500 text-xl md:text-2xl text-left">
        QA Automation Engineer interested in how technology can enhance intuition
        and creativity. Experienced with{" "}
        <span className="text-orange-500">Typescript</span>,{" "}
        <span className="text-orange-500">Python</span>,{" "}
        <span className="text-orange-500">Cypress</span>,{" "}
        <span className="text-orange-500">Selenium</span>,{" "}
        <span className="text-orange-500">CI/CD</span> and{" "}
        <span className="text-orange-500">HTML/CSS</span>.
      </p>
      <p className="text-zinc-500 text-2xl">
        As a{" "}
        <span className="cursor-pointer" onClick={() => allSound[Math.floor(Math.random() * allSound.length)]()}>
          🥷
        </span>{" "}
        I&apos;ve built, developed and shipped 10+ complex testing solutions for projects with over +100K
        users.
      </p>
    </>
  );
}
