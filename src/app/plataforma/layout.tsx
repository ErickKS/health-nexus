import { Aside } from "@/components/plataforma/aside";
import { Bell, HelpCircle } from "lucide-react";

export default function PlataformaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[269px_1fr] gap-8 min-h-screen bg-white">
      <Aside />

      <main className="flex flex-col gap-8 max-w-[1152px] w-full py-4 mx-auto">
        <div className="flex justify-between items-center h-14 px-6 rounded-xl shadow-main">
          <span>Home</span>

          <div className="flex gap-4">
            <button className="flex justify-center items-center h-8 w-8 rounded-lg border border-[#E5EAEF]">
              <Bell size={20} />
            </button>

            <button className="flex justify-center items-center gap-2 h-8 px-4 rounded-lg font-medium border border-[#E5EAEF]">
              <HelpCircle size={20} />
              Suporte
            </button>
          </div>
        </div>

        <div className="grid grid-rows-[200px_1fr] gap-8 h-full">{children}</div>
      </main>
    </div>
  );
}
