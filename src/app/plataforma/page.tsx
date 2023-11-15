"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Bell, HelpCircle } from "lucide-react";

export default function Plataforma() {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    getGreeting();
  }, []);

  function getGreeting() {
    const time = new Date().getHours();

    if (time >= 6 && time < 12) {
      setGreeting("Bom dia, ");
    } else if (time >= 12 && time < 18) {
      setGreeting("Boa tarde, ");
    } else {
      setGreeting("Boa noite, ");
    }
  }

  return (
    <>
      <div className="flex justify-between items-center px-6 bg-[#ECF2FF] rounded-xl">
        <div className="space-y-1">
          <h3>{greeting} Erick</h3>
          <h1>Bem-vindo</h1>
        </div>

        <Image src={"/img/plataforma/3d.png"} alt="" height={144} width={164.44} priority />
      </div>

      <div className="grid grid-cols-[1fr_208px] gap-8">
        <div className="rounded-xl shadow-main"></div>
        <div className="grid grid-rows-2 gap-8">
          <div className="rounded-xl shadow-main"></div>
          <div className="rounded-xl shadow-main"></div>
        </div>
      </div>
    </>
  );
}
