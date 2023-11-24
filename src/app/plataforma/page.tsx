"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import clsx from "clsx";
import { PlusCircle } from "lucide-react";

import { CardInsight } from "@/components/plataforma/card-insight";
import { CardQuestion } from "@/components/plataforma/card-question";
import { CreateQuestion } from "@/components/plataforma/create-question";

export default function Plataforma() {
  const [greeting, setGreeting] = useState<string | null>(null);
  const [accountType, setAccountType] = useState<string | null>(null);

  useEffect(() => {
    setAccountType(sessionStorage.getItem("type"));
    getGreeting();
  }, []);

  function getGreeting() {
    const time = new Date().getHours();
    const name = sessionStorage.getItem("name")?.split(" ");

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
    <div className="grid grid-rows-[200px_1fr] gap-8 h-full">
      <div className="relative flex justify-center items-center h-[200px] px-6 bg-blue-light rounded-xl overflow-hidden sm:justify-between">
        <div className="flex flex-col justify-center items-center gap-1 sm:items-start">
          <h3 className="max-xs:text-xl">{greeting}</h3>
          <h1 className="max-xs:text-4xl max-sm:text-5xl">Bem-vindo</h1>
        </div>

        <Image src={"/img/plataforma/3d-home.png"} alt="" height={144} width={164.44} priority className="max-sm:hidden" />

        <Image src={"/img/plataforma/circle-1.svg"} alt="" height={228} width={228} className="absolute -left-24" />
        <Image src={"/img/plataforma/circle-2.svg"} alt="" height={130} width={130} className="absolute right-0 -top-8" />
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-5 p-6 rounded-xl shadow-main">
          <h4>Insights em destaque</h4>

          <div className="flex gap-4">
            <CardInsight
              id="1"
              title="Saiba como viver  até os 96 anos"
              author="Dra. Elizabeth"
              image="/img/plataforma/insight-1.jpg"
              size="sm"
            />

            <CardInsight
              title="Como aliviar o estresse"
              author="Dr. Jack Sparrow"
              image="/img/plataforma/insight-2.jpg"
              size="sm"
              additionalClass="max-sm:hidden"
            />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_208px]">
          <div className="flex flex-col gap-5 p-6 rounded-xl shadow-main">
            <h4>Ajude outras pessoas</h4>

            <div className="flex gap-4">
              <CardQuestion id={"1"} date="16 de novembro" question="Qual remédio reduz os “efeitos colaterais” da lactose?" comments={4} />

              <CardQuestion
                date="16 de novembro"
                question="Tem algum chá caseiro que alivia a dor de cabeça?"
                comments={1}
                additionalClass="max-sm:hidden"
              />
            </div>
          </div>

          <div className={clsx("grid gap-6 h-48", "xs:gap-8 xs:grid-cols-2 xs:h-20", "lg:grid-rows-2 lg:grid-cols-1 lg:h-full")}>
            {accountType === "E" && (
              <Link
                href={"/plataforma/insights/criar"}
                className={clsx(
                  "flex flex-col justify-center items-center gap-1 h-full bg-blue-light border border-blue-extra-light rounded-xl outline-none transition-all",
                  "text-gray font-medium",
                  "hover:scale-[1.02] focus:scale-[1.02] hover:border-primary focus:border-primary"
                )}
              >
                <PlusCircle />
                Criar um insight
              </Link>
            )}

            <CreateQuestion
              triggerStyle={clsx(
                "flex flex-col justify-center items-center gap-1 h-full bg-primary rounded-xl shadow-main transition-all",
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
