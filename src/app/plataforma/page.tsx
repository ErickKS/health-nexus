"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { CardInsight } from "@/components/plataforma/card-insight";
import { CardQuestion } from "@/components/plataforma/card-question";
import { CreateQuestion } from "@/components/plataforma/create-question";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

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
    <div className="grid grid-rows-[200px_1fr] gap-8 h-full">
      <div className="relative flex justify-between items-center h-[200px] px-6 bg-[#ECF2FF] rounded-xl overflow-hidden">
        <div className="space-y-1">
          <h3>{greeting} Erick</h3>
          <h1>Bem-vindo</h1>
        </div>

        <Image src={"/img/plataforma/3d-home.png"} alt="" height={144} width={164.44} priority />

        <Image src={"/img/plataforma/circle-1.svg"} alt="" height={228} width={228} className="absolute -left-10" />
        <Image src={"/img/plataforma/circle-2.svg"} alt="" height={130} width={130} className="absolute right-0 -top-8" />
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5 p-6 rounded-xl shadow-main">
          <h4>Insights em destaque</h4>

          <div className="flex gap-4">
            <CardInsight
              title="Saiba como viver  até os 96 anos"
              author="Dra. Elizabeth II"
              image="/img/plataforma/insight-1.jpg"
              size="sm"
            />
            <CardInsight title="Como aliviar o estresse" author="Dr. Jack Sparrow" image="/img/plataforma/insight-2.jpg" size="sm" />
          </div>
        </div>

        <div className="grid grid-cols-[1fr_208px] gap-8">
          <div className="flex flex-col gap-5 p-6 rounded-xl shadow-main">
            <h4>Ajude outras pessoas</h4>

            <div className="flex gap-4">
              <CardQuestion date="16 de novembro" question="Tem algum chá caseiro que alivia a dor de cabeça?" comments={0} />
              <CardQuestion date="16 de novembro" question="Tem algum chá caseiro que alivia a dor de cabeça?" comments={2} />
            </div>
          </div>

          <div className="grid grid-rows-2 gap-8">
            <Link
              href={"/plataforma/insights/criar"}
              className={clsx(
                "flex flex-col justify-center items-center gap-1 h-full bg-[#ECF2FF] border border-[#E5EAEF] rounded-xl outline-none transition-all",
                "text-[#2E2E2E] font-medium",
                "hover:scale-[1.02] focus:scale-[1.02] hover:border-[#123359] focus:border-[#123359]"
              )}
            >
              <PlusCircle />
              Criar um insight
            </Link>

            <CreateQuestion
              triggerStyle={clsx(
                "flex flex-col justify-center items-center gap-1 h-full bg-[#123359] rounded-xl shadow-main transition-all",
                "text-white font-medium",
                "hover:scale-[1.02] focus:scale-[1.02]"
              )}
            >
              <PlusCircle />
              Fazer uma pegunta
            </CreateQuestion>
          </div>
        </div>
      </div>
    </div>
  );
}
