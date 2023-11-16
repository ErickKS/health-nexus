"use client";

import { SendHorizontal } from "lucide-react";

export function Chat() {
  function sendMessage() {}

  return (
    <section className="flex rounded-lg shadow-main">
      <div className="flex flex-col gap-4 w-64 p-6 border-r border-[#E5EAEF]">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="relative h-10 w-10 rounded-full bg-[#E5EAEF]">
            <div className="absolute bottom-[2px] right-[2px] h-2 w-2 bg-green-500 rounded-full animate-ping" />
            <div className="absolute bottom-[2px] right-[2px] h-2 w-2 bg-green-500 rounded-full" />
          </div>
          <span>Assistente NexMind</span>
        </div>

        <div className="h-[2px] w-full bg-[#E5EAEF]" />

        <div className="flex flex-col items-center gap-4">
          <h3 className="mb-1">Suas conversas</h3>

          <div className="flex justify-center items-center h-10 w-full border border-[#E5EAEF] rounded-lg text-sm font-medium">
            Conversa sobre tal...
          </div>
        </div>
      </div>

      <div className="grid grid-rows-[1fr_56px] w-full">
        <div className="p-6">chat</div>

        <div className="flex items-center gap-6 px-6 border-t border-[#E5EAEF]">
          <input
            type="text"
            id="message"
            name="message"
            className="w-full outline-none"
            placeholder="Digite sua pergunta..."
            autoComplete="off"
          />

          <button onClick={sendMessage} className="flex justify-center items-center h-8 w-8 rounded-lg border border-[#E5EAEF]">
            <SendHorizontal size={20} strokeWidth={1.5} className="text-[#E5EAEF]" />
          </button>
        </div>
      </div>
    </section>
  );
}
