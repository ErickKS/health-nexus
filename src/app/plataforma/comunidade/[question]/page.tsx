import { useParams } from "next/navigation";

import { Comments } from "@/components/plataforma/comments";

export default function Question() {
  // const params = useParams();

  return (
    <div className="flex flex-col rounded-xl shadow-main">
      <div className="flex flex-col p-6 border-b border-blue-light">
        <span className="text-lg">Claudia Leite</span>
        <h2 className="mt-1 mb-4">Qual remédio reduz os “efeitos colaterais” da lactose?</h2>

        <div className="flex gap-2 items-center">
          <div className="h-2 w-2 border-2 border-gray rounded-full" />
          <span className="text-sm font-medium">16 de Novembro</span>
        </div>
      </div>

      <Comments />
    </div>
  );
}
