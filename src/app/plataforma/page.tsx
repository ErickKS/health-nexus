"use client";

import { useEffect } from "react";

import { CardInsight } from "@/components/plataforma/card-insight";
import { CardQuestion } from "@/components/plataforma/card-question";
import { useRouter } from "next/navigation";
import { Greetings } from "@/components/plataforma/greetings";
import { Actions } from "@/components/plataforma/actions";

export default function Plataforma() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("name") || !localStorage.getItem("account")) {
      router.push("/autenticacao/login");
    }
  }, []);

  return (
    <div className="grid grid-rows-[200px_1fr] gap-8 h-full">
      <Greetings />

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

          <Actions />
        </div>
      </div>
    </div>
  );
}
