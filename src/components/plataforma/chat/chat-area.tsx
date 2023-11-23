import { useEffect, useRef } from "react";

import { Chat } from "@/types/chat";

import { ChatMessage } from "./chat-message";

interface ChatAreaProps {
  chat: Chat | undefined;
  loading: boolean;
}

export function ChatArea({ chat, loading }: ChatAreaProps) {
  const scrollArea = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollArea.current?.scrollTo(0, scrollArea.current?.scrollHeight);
  }, [loading, chat?.messages.length]);

  return (
    <div ref={scrollArea} className="flex flex-col gap-6 h-full py-10 px-6 overflow-y-scroll">
      {!chat && (
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-2xl">Assistência imediata</h3>
          <h4 className="text-lg font-normal">Faça sua pergunta agora mesmo!</h4>
        </div>
      )}

      {chat && chat.messages.map((message) => <ChatMessage key={message.id} item={message} />)}

      {loading && (
        <div className="relative flex items-center px-4 h-[72px] py-7 bg-blue-extra-light rounded-lg">
          <div className="absolute -top-[11px] flex justify-center items-center px-3 h-5 bg-white border border-bbg-blue-extra-light rounded-full text-xs text-black font-semibold">
            Assistente
          </div>

          <div className="w-1 h-4 bg-primary animate-blink" />
        </div>
      )}
    </div>
  );
}
