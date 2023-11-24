"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Home, Lightbulb, Power, MessagesSquare, Sparkles, Bell, HelpCircle, X, Menu } from "lucide-react";

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

export function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const [sidebarOpened, setSidebarOpened] = useState(false);

  useEffect(() => {
    closeSidebar();
  }, [pathname]);

  function openSidebar() {
    setSidebarOpened(true);
  }

  function closeSidebar() {
    setSidebarOpened(false);
  }

  function logout() {
    localStorage.clear();

    router.push("/autenticacao/login");
  }

  return (
    <>
      <aside
        className={clsx(
          "fixed left-0 top-0 z-50 flex flex-col justify-between items-center w-[224px] h-screen p-4 bg-white border-r border-blue-extra-light transition-all lg:translate-x-0 xs:w-[269px]",
          { "translate-x-0": sidebarOpened },
          { "-translate-x-[365px]": !sidebarOpened }
        )}
      >
        <Image src={"/img/logo/nexus-2.svg"} alt="Logo da Health Nexus" height={82.4} width={163.25} priority />

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
                    "data-[state=active]:bg-primary data-[state=active]:text-white",
                    "data-[state=disabled]:text-gray"
                  )}
                >
                  {icon}
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-end gap-2 h-[86.59px] w-full">
          <button
            onClick={logout}
            className={clsx(
              "flex justify-center items-center gap-2 h-11 w-full px-3 border rounded-lg border-blue-extra-light outline-none transition-all",
              "text-gray font-medium",
              "hover:border-red hover:bg-red/10 focus:border-red focus:bg-red/10"
            )}
          >
            <Power size={20} />
            Desconectar
          </button>
        </div>

        <button
          onClick={closeSidebar}
          className="absolute top-5 -right-14 z-50 flex justify-center items-center h-10 w-10 bg-blue-light rounded-full text-gray lg:hidden"
        >
          <X />
        </button>
      </aside>

      {sidebarOpened && <div className="fixed top-0 right-0 z-40 h-screen w-screen bg-black/75" />}

      <div className="absolute top-4 z-20 flex justify-center w-[calc(100%-16px)] lg:w-[calc(100%-301px)] pr-4">
        <nav className="flex justify-between items-center py-3 px-6 max-w-[1152px] w-full bg-white rounded-xl shadow-main">
          <div className="flex gap-4 items-center">
            <button
              onClick={openSidebar}
              className="flex justify-center items-center h-8 w-8 rounded-lg border border-blue-extra-light lg:hidden"
            >
              <Menu size={20} />
            </button>

            <span className="hidden font-medium lg:block">Plataforma</span>
          </div>

          <div className="flex gap-4">
            <button className="flex justify-center items-center h-8 w-8 rounded-lg border border-blue-extra-light transition-all hover:bg-blue-extra-light">
              <Bell size={20} />
            </button>

            <button className="flex justify-center items-center gap-2 h-8 px-4 rounded-lg font-medium border border-blue-extra-light transition-all hover:bg-blue-extra-light">
              <HelpCircle size={20} />
              Suporte
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
