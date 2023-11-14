import { Heart, Stethoscope, Syringe, ActivitySquare } from "lucide-react";

import { Grid } from "./grid";
import { Ballon } from "./ballon";

export function Banner() {
  return (
    <div className="container flex flex-col justify-between min-h-[720px] text-center mt-[110px]">
      <div className="relative flex flex-col items-center max-w-[632px] w-full mx-auto">
        <h1>Conectando vidas e apoiando jornadas</h1>

        <span className="mt-6 mb-10 text-xl">
          Conecte-se com outros pacientes, encontre informações confiáveis e obtenha apoio profissional.
        </span>

        <a href="#" className="flex justify-center items-center h-10 px-6 border-2 border-[#2E2E2E] rounded-full font-medium">
          Saiba mais
        </a>

        <Ballon icon={Heart} x="top-[38px]" y="left-[-110px]" />
        <Ballon icon={Stethoscope} x="top-[211px]" y="left-[-24px]" />
        <Ballon icon={Syringe} x="top-[-30px]" y="right-[-124px]" />
        <Ballon icon={ActivitySquare} x="top-[172px]" y="right-[-52px]" />
      </div>

      <Grid />
    </div>
  );
}
