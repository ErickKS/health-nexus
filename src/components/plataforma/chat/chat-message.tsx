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
        { "border border-blue-extra-light": item.author === "me" },
        { "bg-blue-extra-light": item.author === "ai" }
      )}
    >
      <div
        className={clsx(
          "absolute -top-[11px] flex justify-center items-center px-3 h-5 rounded-full text-xs font-medium",
          { "bg-primary text-white": item.author === "me" },
          { "bg-white border border-blue-extra-light text-black": item.author === "ai" }
        )}
      >
        {item.author === "ai" ? "Assistente" : "Eu"}
      </div>

      <p className="w-full whitespace-pre-wrap">{item.body}</p>
    </div>
  );
}
