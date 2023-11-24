import { Banner } from "@/components/plataforma/banner";
import { CardInsight } from "@/components/plataforma/card-insight";

export default function Insights() {
  return (
    <>
      <Banner image="3d-insights" height={146} width={146}>
        <h2 className="max-xs:text-3xl">Indicações de especialistas</h2>
        <h3 className="font-normal">Veja os últimos destaques</h3>
      </Banner>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:[&>*:nth-child(10n+1)]:col-span-2 md:[&>*:nth-child(10n+7)]:col-span-2">
        <CardInsight id="1" title="Saiba como viver até os 96 anos" author="Dra. Elizabeth" image="/img/plataforma/insight-1.jpg" />
        <CardInsight title="Como aliviar o estresse" author="Dr. Jack Sparrow" image="/img/plataforma/insight-2.jpg" />
        <CardInsight title="O poder do sono reparador" author="Dra. Marcela Dorminhoca" image="/img/plataforma/insight-3.jpg" />
      </div>
    </>
  );
}
