import Image from "next/image";

import { Button } from "./button";

export function Nav() {
  return (
    <nav className="container flex justify-between items-center h-[70px]">
      <div>
        <Image src={"/img/logo/nexus.svg"} alt="logo" height={40} width={217.26} priority className="max-xs:hidden" />
        <Image src={"/img/logo/nexus-3.svg"} alt="logo" height={40} width={40} priority className="xs:hidden" />
      </div>

      <div className="flex gap-2">
        <Button href={"/autenticacao/login"} variant="extra" size="sm">
          Entrar
        </Button>

        <Button href={"/autenticacao/registro"} size="sm">
          Registrar
        </Button>
      </div>
    </nav>
  );
}
