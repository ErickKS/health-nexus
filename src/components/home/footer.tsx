import Image from "next/image";
import Link from "next/link";

import { Members } from "./members";

export function Footer() {
  return (
    <footer className="container flex flex-col gap-8">
      <div className="flex justify-between items-center flex-col gap-8 md:flex-row">
        <div className="flex flex-col items-center text-center gap-5 max-w-sm md:items-start md:text-left">
          <Image src={"/img/logo/nexus.svg"} alt="logo" height={40} width={217.26} priority />

          <p className="font-medium">
            Plataforma de apoio a pacientes que oferece uma variedade de recursos para ajudar as pessoas a melhorar sua saúde.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Members />

          <Link
            href={"/autenticacao/login"}
            className="flex justify-center items-center h-10 px-6 bg-white rounded-full font-medium shadow-main"
          >
            Entrar na plataforma
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center h-[70px] border-t border-[#E5EAEF]">
        <span className="text-sm font-medium">© HeathNexus 2023 | Todos os direitos reservados.</span>
      </div>
    </footer>
  );
}