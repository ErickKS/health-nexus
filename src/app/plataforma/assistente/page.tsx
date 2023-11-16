import Image from "next/image";

import { Chat } from "@/components/plataforma/chat";

export default function Assistente() {
  return (
    <div className="grid grid-rows-[200px_1fr] gap-8 h-full">
      <div className="flex justify-between items-center h-[200px] px-6 bg-[#ECF2FF] rounded-xl">
        <div className="space-y-2">
          <h2>Assistência imediata</h2>
          <h3 className="font-normal">Faça sua pergunta agora mesmo!</h3>
        </div>

        <Image src={"/img/plataforma/3d-assistente.png"} alt="" height={132} width={132} priority />
      </div>

      <Chat />
    </div>
  );
}
