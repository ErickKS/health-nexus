import Image from "next/image";
import { useState, useEffect } from "react";

export function Greetings() {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    getGreeting();
  }, []);

  function getGreeting() {
    const time = new Date().getHours();
    const name = localStorage.getItem("name")?.split(" ");

    if (!name) return;

    if (time >= 6 && time < 12) {
      setGreeting(`Bom dia, ${name[0]}`);
    } else if (time >= 12 && time < 18) {
      setGreeting(`Boa tarde, ${name[0]}`);
    } else {
      setGreeting(`Boa noite, ${name[0]}`);
    }
  }

  return (
    <div className="relative flex justify-center items-center h-[200px] px-6 bg-blue-light rounded-xl overflow-hidden sm:justify-between">
      <div className="flex flex-col justify-center items-center gap-1 sm:items-start">
        <h3 className="max-xs:text-xl">{greeting}</h3>
        <h1 className="max-xs:text-4xl max-sm:text-5xl">Bem-vindo</h1>
      </div>

      <Image src={"/img/plataforma/3d-home.png"} alt="" height={144} width={164.44} priority className="max-sm:hidden" />

      <Image src={"/img/plataforma/circle-1.svg"} alt="" height={228} width={228} className="absolute -left-24" />
      <Image src={"/img/plataforma/circle-2.svg"} alt="" height={130} width={130} className="absolute right-0 -top-8" />
    </div>
  );
}
