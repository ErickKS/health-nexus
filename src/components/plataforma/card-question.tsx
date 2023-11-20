import Link from "next/link";
import clsx from "clsx";
import { MessageCircle } from "lucide-react";

interface CardQuestionProps {
  id?: string;
  date: string;
  question: string;
  comments: number;
  additionalClass?: string;
}

export function CardQuestion({ id, date, question, comments, additionalClass }: CardQuestionProps) {
  return (
    <Link
      href={id ? `/plataforma/comunidade/${id}` : ""}
      className={clsx(
        "flex flex-col w-full p-6 border border-[#E5EAEF] rounded-lg transition-all hover:scale-[1.02] hover:border-[#123359]",
        additionalClass
      )}
    >
      <div className="flex gap-2 items-center">
        <div className="h-2 w-2 border-2 border-[#2E2E2E] rounded-full" />
        <span className="text-sm font-medium">{date}</span>
      </div>

      <p className="text-lg max-h-[56px] font-medium mt-2 mb-4 text-[#2E2E2E] text-left line-clamp-2">{question}</p>

      <div className="flex gap-1 items-center text-[#2E2E2E]">
        <MessageCircle size={20} />
        <span className="font-sm font-medium">{comments}</span>
      </div>
    </Link>
  );
}
