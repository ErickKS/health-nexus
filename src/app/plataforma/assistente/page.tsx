import Image from "next/image";

import { Chat } from "@/components/plataforma/chat";

export default function Assistente() {
  return (
    <div className="grid grid-rows-[200px_1fr] gap-8">
      <div className="relative flex justify-center items-center h-[200px] px-6 bg-[#ECF2FF] rounded-xl overflow-hidden sm:justify-between">
        <div className="flex flex-col justify-center items-center gap-2 text-center sm:items-start">
          <h2 className="max-xs:text-3xl">Assistência imediata</h2>
          <h3 className="font-normal">Faça sua pergunta agora mesmo!</h3>
        </div>

        <Image src={"/img/plataforma/3d-assistente.png"} alt="" height={132} width={132} priority className="max-sm:hidden" />

        <Image src={"/img/plataforma/circle-1.svg"} alt="" height={228} width={228} className="absolute -left-24" />
        <Image src={"/img/plataforma/circle-2.svg"} alt="" height={130} width={130} className="absolute right-0 -top-8" />
      </div>

      <Chat />
    </div>
  );
}
