import { Search } from "lucide-react";

import { Banner } from "@/components/plataforma/banner";
import { CreateQuestion } from "@/components/plataforma/create-question";
import { CardQuestion } from "@/components/plataforma/card-question";

export default function Comunidade() {
  return (
    <>
      <Banner image="3d-assistente" height={132} width={132}>
        <h2 className="max-xs:text-3xl">Juntos pela saúde</h2>
        <h3 className="font-normal">Tire suas dúvidas ou ofereça apoio</h3>
      </Banner>

      <div className="grid grid-rows-2 xs:grid-rows-1 xs:grid-cols-[1fr_180px] md:grid-cols-[1fr_240px] gap-4 xs:gap-6">
        <div className="flex items-center gap-4 h-14 px-6 rounded-xl shadow-main">
          <input type="text" id="message" name="message" className="w-full outline-none" placeholder="Pesquisar" autoComplete="off" />

          <button className="flex justify-center items-center h-8 w-8 rounded-lg border border-transparent transition-all hover:border-blue-extra-light">
            <Search size={20} strokeWidth={1.5} />
          </button>
        </div>

        <CreateQuestion triggerStyle="h-14 bg-primary rounded-xl text-white font-medium">Fazer uma pegunta</CreateQuestion>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 h-fit">
        <CardQuestion id={"1"} date="16 de novembro" question="Qual remédio reduz os “efeitos colaterais” da lactose?" comments={3} />
        <CardQuestion date="16 de novembro" question="Tem algum chá caseiro que alivia a dor de cabeça?" comments={2} />
        <CardQuestion date="15 de novembro" question="A meditação traz algum beneficio para nossa saúde?" comments={3} />
        <CardQuestion date="14 de novembro" question="Como posso aliviar as dores das queimaduras da insolação?" comments={2} />
        <CardQuestion date="14 de novembro" question="Tem algum problem em dar leite de vaca para meu bebê tomar?" comments={2} />
      </div>
    </>
  );
}
