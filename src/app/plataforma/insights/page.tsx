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

      <div className="grid grid-cols-3 gap-8">
        <CardInsight />
        <CardInsight />
        <CardInsight />
        <CardInsight />
        <CardInsight />
      </div>
    </>
  );
}
