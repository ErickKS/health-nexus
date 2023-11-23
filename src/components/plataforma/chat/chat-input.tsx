import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { SendHorizontal } from "lucide-react";
import clsx from "clsx";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled: boolean;
}

export function ChatInput({ onSendMessage, disabled }: ChatInputProps) {
  const [text, setText] = useState("");

  const textEl = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textEl.current) {
      textEl.current.style.height = "0px";
      let scrollHeight = textEl.current.scrollHeight;
      textEl.current.style.height = scrollHeight + "px";
    }
  }, [text, textEl]);

  function handleTextKeyUp(event: KeyboardEvent<HTMLTextAreaElement>) {
    if (event.code.toLowerCase() === "enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  }

  function handleSendMessage() {
    if (!disabled && text.trim() !== "") {
      onSendMessage(text);
      setText("");
    }
  }

  return (
    <div className="flex gap-6 py-2 px-6 border-t border-blue-extra-light">
      <textarea
        id="message"
        name="message"
        ref={textEl}
        value={text}
        onChange={(event) => setText(event.target.value)}
        onKeyUp={handleTextKeyUp}
        disabled={disabled}
        placeholder="Digite sua pergunta..."
        autoComplete="off"
        className="w-full my-auto outline-none resize-none disabled:bg-white"
      />

      <button
        onClick={handleSendMessage}
        className={clsx(
          "flex justify-center items-center h-8 w-8 mt-auto rounded-lg border border-blue-extra-light text-blue-extra-light transition-all",
          { "cursor-not-allowed": !text.length },
          { "bg-primary": text.length }
        )}
      >
        <SendHorizontal size={20} strokeWidth={1.5} />
      </button>
    </div>
  );
}
