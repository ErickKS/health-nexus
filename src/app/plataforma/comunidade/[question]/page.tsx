import { Comment } from "@/components/plataforma/comment";
import { PostComment } from "@/components/plataforma/post-comment";
import { useParams } from "next/navigation";

export default function Question() {
  // const params = useParams();

  return (
    <div className="flex flex-col rounded-xl shadow-main">
      <div className="flex flex-col p-6 border-b border-[#ECF2FF]">
        <span className="text-lg">Claudia Leite</span>
        <h2 className="mt-1 mb-4">Qual remédio reduz os “efeitos colaterais” da lactose?</h2>

        <div className="flex gap-2 items-center">
          <div className="h-2 w-2 border-2 border-[#2E2E2E] rounded-full" />
          <span className="text-sm font-medium">16 de Novembro</span>
        </div>
      </div>

      <div className="flex flex-col gap-6 p-6">
        <h3>Comentários</h3>

        <div className="flex flex-col gap-4">
          <Comment name="Rodolfo Lactovitz" content="Defina “efeitos coláterais”." />
          <Comment name="Claudia Leite" content="Digamos que é uma reação química perigosa dentro do nosso intestino." />
          <Comment name="Alice Pedrada" content="Ahh, eu recomendo aquele remédio “Lacto Purga”, ele reduz bastante o efeito do leite." />
          <Comment name="Claudia Leite" content="Realmente, esse remédio é perfeito!! Obrigada." />
        </div>

        <h3>Contribua com sua resposta</h3>

        <PostComment />
      </div>
    </div>
  );
}
