import { useNinja } from "@/hooks/use-ninja";

export default function Info() {
  const { allSound } = useNinja();

  return (
    <>
      <div className="inline-flex">
        <h1 className="text-4xl md:text-6xl font-semibold text-white">
          Mo Khashan<span className="text-3xl cursor-pointer">🗣️</span>
        </h1>
      </div>
      <p className="text-zinc-500 text-xl md:text-2xl text-left">
        Front-end Engineer interested in how technology can enhance intuition
        and creativity. Experienced with{" "}
        <span className="text-orange-500">Javascript</span>,{" "}
        <span className="text-orange-500">Typescript</span>,{" "}
        <span className="text-orange-500">React</span>,{" "}
        <span className="text-orange-500">Next</span>,{" "}
        <span className="text-orange-500">React Native</span> and{" "}
        <span className="text-orange-500">HTML/CSS</span>.
      </p>
      <p className="text-zinc-500 text-2xl">
        As a{" "}
        <span className="cursor-pointer" onClick={() => allSound[Math.floor(Math.random() * allSound.length)]()}>
          🥷
        </span>{" "}
        I&apos;ve built, developed and shipped 10+ products (with over +100K
        users).
      </p>
    </>
  );
}
