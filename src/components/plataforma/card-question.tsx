import { MessageCircle } from "lucide-react";

interface CardQuestionProps {
  date: string;
  question: string;
  comments: number;
}

export function CardQuestion({ date, question, comments }: CardQuestionProps) {
  return (
    <button className="flex flex-col p-6 border border-[#E5EAEF] rounded-lg transition-all hover:scale-[1.02] hover:border-[#123359]">
      <div className="flex gap-2 items-center">
        <div className="h-2 w-2 border-2 border-[#2E2E2E] rounded-full" />
        <span className="text-sm font-medium">{date}</span>
      </div>

      <p className="text-lg max-h-[56px] font-medium mt-2 mb-4 text-[#2E2E2E] text-left line-clamp-2">{question}</p>

      <div className="flex gap-1 items-center text-[#2E2E2E]">
        <MessageCircle size={20} />
        <span className="font-sm font-medium">{comments}</span>
      </div>
    </button>
  );
}
