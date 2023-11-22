import Link from "next/link";
import Image from "next/image";

export function Nav() {
  return (
    <nav className="container flex justify-between items-center h-[70px]">
      <div>
        <Image src={"/img/logo/nexus.svg"} alt="logo" height={40} width={217.26} priority className="max-xs:hidden" />
        <Image src={"/img/logo/nexus-3.svg"} alt="logo" height={40} width={40} priority className="xs:hidden" />
      </div>

      <div className="flex gap-5">
        <Link href={"/autenticacao/login"} className="flex justify-center items-center h-9 rounded-full text-[#2E2E2E] font-semibold">
          Entrar
        </Link>

        <Link
          href={"/autenticacao/registro"}
          className="flex justify-center items-center h-9 px-6 bg-[#123359] rounded-full text-white font-medium"
        >
          Registrar
        </Link>
      </div>
    </nav>
  );
}