import Image from "next/image";

import { CardInsight } from "@/components/plataforma/card-insight";

export default function Insights() {
  return (
    <>
      <div className="flex justify-between items-center h-[200px] px-6 bg-[#ECF2FF] rounded-xl">
        <div className="space-y-2">
          <h2>Indicações de especialistas</h2>
          <h3 className="font-normal">Veja os últimos destaques</h3>
        </div>

        <Image src={"/img/plataforma/3d-insights.png"} alt="" height={146} width={146} priority />
      </div>

      <div className="grid grid-cols-3 gap-8 [&>*:nth-child(10n+1)]:col-span-2 [&>*:nth-child(10n+7)]:col-span-2">
        <CardInsight title="Saiba como viver  até os 96 anos" author="Dr. Elizabeth II" image="/img/plataforma/insight-1.jpg" />
        <CardInsight title="Como aliviar o estresse" author="Dr. Jack Sparrow" image="/img/plataforma/insight-2.jpg" />
        <CardInsight title="O poder do sono reparador" author="Dra. Marcela Dorminhoca" image="/img/plataforma/insight-3.jpg" />
      </div>
    </>
  );
}
