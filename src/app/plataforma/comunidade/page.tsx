import Image from "next/image";
import { Search } from "lucide-react";

import { CreateQuestion } from "@/components/plataforma/create-question";
import { CardQuestion } from "@/components/plataforma/card-question";

export default function Comunidade() {
  return (
    <>
      <div className="relative flex justify-center items-center h-[200px] px-6 bg-[#ECF2FF] rounded-xl overflow-hidden sm:justify-between">
        <div className="flex flex-col justify-center items-center gap-2 text-center sm:items-start">
          <h2 className="max-xs:text-3xl">Juntos pela saúde</h2>
          <h3 className="font-normal">Tire suas dúvidas ou ofereça apoio</h3>
        </div>

        <Image src={"/img/plataforma/3d-assistente.png"} alt="" height={132} width={132} priority className="max-sm:hidden" />

        <Image src={"/img/plataforma/circle-1.svg"} alt="" height={228} width={228} className="absolute -left-24" />
        <Image src={"/img/plataforma/circle-2.svg"} alt="" height={130} width={130} className="absolute right-0 -top-8" />
      </div>

      <div className="grid grid-rows-2 xs:grid-rows-1 xs:grid-cols-[1fr_180px] md:grid-cols-[1fr_240px] gap-4 xs:gap-6">
        <div className="flex items-center gap-4 h-14 px-6 rounded-xl shadow-main">
          <input type="text" id="message" name="message" className="w-full outline-none" placeholder="Pesquisar" autoComplete="off" />

          <button className="flex justify-center items-center h-8 w-8 rounded-lg border border-transparent transition-all hover:border-[#E5EAEF]">
            <Search size={20} strokeWidth={1.5} />
          </button>
        </div>

        <CreateQuestion triggerStyle="h-14 bg-[#123359] rounded-xl text-white font-medium">Fazer uma pegunta</CreateQuestion>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 h-fit">
        <CardQuestion date="16 de novembro" question="Tem algum chá caseiro que alivia a dor de cabeça?" comments={0} />
        <CardQuestion date="16 de novembro" question="Tem algum chá caseiro que alivia a dor de cabeça?" comments={2} />
        <CardQuestion date="16 de novembro" question="Tem algum chá caseiro que alivia a dor de cabeça?" comments={3} />
        <CardQuestion date="16 de novembro" question="Tem algum chá caseiro que alivia a dor de cabeça?" comments={4} />
        <CardQuestion date="16 de novembro" question="Tem algum chá caseiro que alivia a dor de cabeça?" comments={2} />
      </div>
    </>
  );
}
