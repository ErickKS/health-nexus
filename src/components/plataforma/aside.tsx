"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Home, Lightbulb, Power, MessagesSquare, Sparkles } from "lucide-react";

const pages = [
  {
    route: "/plataforma",
    name: "Home",
    icon: <Home />,
  },
  {
    route: "/plataforma/insights",
    name: "Insights",
    icon: <Lightbulb />,
  },
  {
    route: "/plataforma/comunidade",
    name: "Comunidade",
    icon: <MessagesSquare />,
  },
  {
    route: "/plataforma/assistente",
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
        {pages.map(({ route, name, icon }) => {
          const isActive = pathname === route || (pathname.startsWith(`${route}/`) && route !== "/plataforma");

          return (
            <li key={name}>
              <Link
                href={route}
                data-state={isActive ? "active" : "disabled"}
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
          );
        })}
      </ul>

      <div className="flex items-end gap-2 h-[82.4px] w-full">
        <button
          onClick={logout}
          className="flex justify-center items-center gap-2 h-11 w-full px-3 border rounded-lg border-[#E5EAEF] text-[#2E2E2E] font-medium"
        >
          <Power size={20} />
          Desconectar
        </button>
      </div>
    </aside>
  );
}
