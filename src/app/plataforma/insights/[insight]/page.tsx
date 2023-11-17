import { ThumbsUp } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Insight() {
  // const params = useParams();

  return (
    <div className="flex flex-col">
      <div className="relative flex justify-between items-center h-[200px] px-6 bg-[#ECF2FF] rounded-xl">
        <Image
          src={"/img/plataforma/insight-1.jpg"}
          alt="imagens de destaque do post"
          fill
          priority
          className="absolute inset-0 w-full object-cover rounded-t-xl"
        />
      </div>

      <div className="flex flex-col rounded-b-xl shadow-main">
        <div className="text-[#2E2E2E] pt-8 p-6 border-b border-[#E5EAEF]">
          <span>Dra. Elizabeth II</span>
          <h2 className="mt-1 mb-4">Saiba como viver até os 96 anos</h2>

          <button className="flex items-center gap-2 h-8 px-4 bg-[#E5EAEF] rounded-full text-sm font-medium transition-all hover:bg-[#123359] hover:text-white">
            <ThumbsUp size={20} />
            22
          </button>
        </div>

        <div className="p-6 space-y-6 leading-relaxed">
          <p>
            Viver uma vida longa e saudável é o desejo de muitos, e alcançar a idade de 96 anos pode ser um feito notável. Existem diversos
            fatores que contribuem para uma vida longa e plena, e compreender esses elementos pode ser crucial para quem busca não apenas
            sobreviver, mas prosperar ao longo das décadas.
          </p>
          <p>
            1. Alimentação Balanceada: <br /> Manter uma dieta equilibrada é fundamental para a saúde a longo prazo. Priorize alimentos
            ricos em nutrientes, como frutas, vegetais, grãos integrais e proteínas magras. Reduza o consumo de alimentos processados e
            evite excessos, mantendo porções moderadas.
          </p>
          <p>
            2. Atividade Física Regular: <br /> O corpo humano foi projetado para se movimentar. A prática regular de exercícios físicos não
            apenas mantém o corpo em forma, mas também fortalece o sistema imunológico, melhora a circulação sanguínea e contribui para a
            saúde mental.
          </p>
          <p>
            4. Gerenciamento do Estresse: <br />O estresse crônico pode ter um impacto significativo na saúde. Desenvolva técnicas de
            gerenciamento do estresse, como a prática de mindfulness, meditação ou atividades relaxantes, para equilibrar mente e corpo.
          </p>
        </div>
      </div>
    </div>
  );
}
