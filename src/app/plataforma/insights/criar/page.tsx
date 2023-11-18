import { CreateInsight } from "@/components/plataforma/create-insight";

export default function Criar() {
  return (
    <div className="flex flex-col gap-8 max-w-[526px] w-full mx-auto p-6 rounded-xl shadow-main">
      <h3>Criar novo insight</h3>

      <CreateInsight />
    </div>
  );
}
