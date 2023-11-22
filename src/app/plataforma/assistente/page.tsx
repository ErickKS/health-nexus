"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import { Plus } from "lucide-react";

import { Chat } from "@/types/chat";
import { ChatInput } from "@/components/plataforma/chat/chat-input";
import { ChatArea } from "@/components/plataforma/chat/chat-area";

export default function Assistente() {
  const [AILoading, setAILoading] = useState(false);

  const [chatList, setChatList] = useState<Chat[]>([]);
  const [chatActiveId, setChatActiveId] = useState<string>("");
  const [chatActive, setChatActive] = useState<Chat | undefined>(undefined);

  useEffect(() => {
    setChatActive(chatList.find((item) => item.id === chatActiveId));
  }, [chatActiveId, chatList]);

  useEffect(() => {
    if (AILoading) getAIResponse();
  }, [AILoading]);

  function getAIResponse() {
    setTimeout(() => {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex((item) => item.id === chatActiveId);

      if (chatIndex > -1) {
        chatListClone[chatIndex].messages.push({
          id: v4(),
          author: "ai",
          body: "Aqui vai a resposta do assistente!",
        });
      }

      setChatList(chatListClone);
      setAILoading(false);
    }, 2000);
  }

  function handleSendMessage(message: string) {
    if (!chatActiveId) {
      let newChatId = v4();
      setChatList([
        {
          id: newChatId,
          title: message,
          messages: [{ id: v4(), author: "me", body: message }],
        },
        ...chatList,
      ]);

      setChatActiveId(newChatId);
    } else {
      let chatListClone = [...chatList];
      let chatIndex = chatListClone.findIndex((item) => item.id === chatActiveId);

      chatListClone[chatIndex].messages.push({
        id: v4(),
        author: "me",
        body: message,
      });

      setChatList(chatListClone);
    }

    setAILoading(true);
  }

  function handleClearConversations() {
    if (AILoading) return;

    setChatActiveId("");
    setChatList([]);
  }

  return (
    <div className="flex flex-col h-[calc(100vh-120px)] rounded-lg shadow-main">
      <div className="flex justify-between items-center gap-4 h-14 px-4 border-b border-[#E5EAEF] sm:px-6">
        <div className="flex items-center gap-2">
          <div className="relative h-11 w-11 rounded-full bg-[#E5EAEF]">
            <Image src={"/img/plataforma/bot.png"} alt="" height={44} width={44} />

            <div className="absolute bottom-1 right-1 h-2 w-2 bg-green-500 rounded-full animate-ping" />
            <div className="absolute bottom-1 right-1 h-2 w-2 bg-green-500 rounded-full" />
          </div>

          <span className="font-medium">NexMind</span>
        </div>

        <button
          onClick={handleClearConversations}
          className="flex justify-center items-center gap-2 h-9 px-4 bg-[#123359] rounded-lg text-sm text-white font-medium"
        >
          <Plus size={20} className="max-xs:hidden" />
          Nova conversa
        </button>
      </div>

      <ChatArea chat={chatActive} loading={AILoading} />

      <ChatInput onSendMessage={handleSendMessage} disabled={AILoading} />
    </div>
  );
}
