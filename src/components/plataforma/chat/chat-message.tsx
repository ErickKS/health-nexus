import { ChatMessage } from "@/types/chat";
import clsx from "clsx";

interface ChatMessageProps {
  item: ChatMessage;
}

export function ChatMessage({ item }: ChatMessageProps) {
  return (
    <div
      className={clsx(
        "relative flex items-center py-6 px-4 rounded-lg",
        { "border border-[#E5EAEF]": item.author === "me" },
        { "bg-[#E5EAEF]": item.author === "ai" }
      )}
    >
      <div
        className={clsx(
          "absolute -top-[11px] flex justify-center items-center px-3 h-5 rounded-full text-xs font-medium",
          { "bg-[#123359] text-white": item.author === "me" },
          { "bg-white border border-[#E5EAEF] text-black": item.author === "ai" }
        )}
      >
        {item.author === "ai" ? "Assistente" : "Eu"}
      </div>

      <p className="w-full whitespace-pre-wrap">{item.body}</p>
    </div>
  );
}
