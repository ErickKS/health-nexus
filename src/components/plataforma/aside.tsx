"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Home, Lightbulb, LogOut, MessagesSquare, Settings, Sparkles } from "lucide-react";

const pages = [
  {
    route: "/plataforma",
    name: "Home",
    icon: <Home />,
  },
  {
    route: "/insights",
    name: "Insights",
    icon: <Lightbulb />,
  },
  {
    route: "/forum",
    name: "Fórum",
    icon: <MessagesSquare />,
  },
  {
    route: "/assistente",
    name: "Assistente",
    icon: <Sparkles />,
  },
];

export function Aside() {
  const pathname = usePathname();

  function logout() {}

  return (
    <aside className="flex flex-col justify-between items-center w-[269px] p-4 border-r border-[#E5EAEF]">
      <div className="h-24">
        <Image src={"/img/logo/nexus-2.svg"} alt="Logo da Health Nexus" height={82.4} width={163.25} priority />
      </div>

      <ul className="flex flex-col gap-4 w-full">
        {pages.map(({ route, name, icon }) => (
          <li key={name}>
            <Link
              href={route}
              data-state={pathname === route ? "active" : "disabled"}
              className={clsx(
                "flex items-center gap-2 h-11 w-full px-3 rounded-lg font-medium transition-all hover:translate-x-1",
                "data-[state=active]:bg-[#123359] data-[state=active]:text-white",
                "data-[state=disabled]:text-[#2E2E2E]"
              )}
            >
              {icon}
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-2 bg-[#F1F1F1] w-full rounded-lg">
        <Link href={"/plataforma/configuracao"} className="flex items-center gap-2 h-11 w-full px-3 rounded-lg text-[#2E2E2E] font-medium">
          <Settings />
          Configurações
        </Link>

        <button onClick={logout} className="flex items-center gap-2 h-11 w-full px-3 rounded-lg text-[#2E2E2E] font-medium">
          <LogOut />
          Desconectar
        </button>
      </div>
    </aside>
  );
}
