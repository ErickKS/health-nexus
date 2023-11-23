import Image from "next/image";

import { CardInsight } from "@/components/plataforma/card-insight";

export default function Insights() {
  return (
    <>
      <div className="relative flex justify-center items-center h-[200px] px-6 bg-[#ECF2FF] rounded-xl overflow-hidden sm:justify-between">
        <div className="flex flex-col justify-center items-center gap-2 text-center sm:items-start">
          <h2 className="max-xs:text-3xl">Indicações de especialistas</h2>
          <h3 className="font-normal">Veja os últimos destaques</h3>
        </div>

        <Image src={"/img/plataforma/3d-insights.png"} alt="" height={146} width={146} priority className="max-sm:hidden" />

        <Image src={"/img/plataforma/circle-1.svg"} alt="" height={228} width={228} className="absolute -left-24" />
        <Image src={"/img/plataforma/circle-2.svg"} alt="" height={130} width={130} className="absolute right-0 -top-8" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:[&>*:nth-child(10n+1)]:col-span-2 md:[&>*:nth-child(10n+7)]:col-span-2">
        <CardInsight id="1" title="Saiba como viver até os 96 anos" author="Dra. Elizabeth" image="/img/plataforma/insight-1.jpg" />
        <CardInsight title="Como aliviar o estresse" author="Dr. Jack Sparrow" image="/img/plataforma/insight-2.jpg" />
        <CardInsight title="O poder do sono reparador" author="Dra. Marcela Dorminhoca" image="/img/plataforma/insight-3.jpg" />
      </div>
    </>
  );
}
