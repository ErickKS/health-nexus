import Image from "next/image";
import { Search } from "lucide-react";

import { CreateQuestion } from "@/components/plataforma/create-question";
import { CardQuestion } from "@/components/plataforma/card-question";

export default function Comunidade() {
  return (
    <div className="grid grid-rows-[200px_56px_1fr] gap-8 h-full">
      <div className="flex justify-between items-center h-[200px] px-6 bg-[#ecf2ff] rounded-xl">
        <div className="space-y-2">
          <h2>Juntos pela saúde</h2>
          <h3 className="font-normal">Tire suas dúvidas ou ofereça apoio</h3>
        </div>

        <Image src={"/img/plataforma/3d-assistente.png"} alt="" height={132} width={132} priority />
      </div>

      <div className="grid grid-cols-[1fr_240px] gap-6">
        <div className="flex items-center gap-6 px-6 rounded-xl shadow-main">
          <input type="text" id="message" name="message" className="w-full outline-none" placeholder="Pesquisar" autoComplete="off" />

          <button className="flex justify-center items-center h-8 w-8 rounded-lg border border-transparent transition-all hover:border-[#E5EAEF]">
            <Search size={20} strokeWidth={1.5} />
          </button>
        </div>

        <CreateQuestion triggerStyle="h-14 bg-[#123359] rounded-xl text-white font-medium">Fazer uma pegunta</CreateQuestion>
      </div>

      <div className="grid grid-cols-3 gap-4 h-fit">
        <CardQuestion date="16 de novembro" question="Tem algum chá caseiro que alivia a dor de cabeça?" comments={0} />
        <CardQuestion date="16 de novembro" question="Tem algum chá caseiro que alivia a dor de cabeça?" comments={2} />
        <CardQuestion date="16 de novembro" question="Tem algum chá caseiro que alivia a dor de cabeça?" comments={3} />
        <CardQuestion date="16 de novembro" question="Tem algum chá caseiro que alivia a dor de cabeça?" comments={4} />
        <CardQuestion date="16 de novembro" question="Tem algum chá caseiro que alivia a dor de cabeça?" comments={2} />
      </div>
    </div>
  );
}
