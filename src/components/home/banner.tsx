import { Heart, Stethoscope, Syringe, ActivitySquare } from "lucide-react";

import { Grid } from "./grid";
import { Ballon } from "./ballon";

export function Banner() {
  return (
    <div className="container flex flex-col justify-between min-h-[720px] text-center mt-20 overflow-hidden sm:mt-[110px]">
      <div className="relative flex flex-col items-center max-w-[632px] w-full mx-auto">
        <h1 className="max-sm:text-[40px] max-sm:leading-tight">Conectando vidas e apoiando jornadas</h1>

        <span className="mt-6 mb-8 text-xl">
          Conecte-se com outros pacientes, encontre informações confiáveis e obtenha apoio profissional.
        </span>

        <a
          href="#partnership"
          className="relative z-10 flex justify-center items-center h-10 px-6 border-2 border-gray rounded-full font-medium"
        >
          Saiba mais
        </a>

        <div className="absolute inset-0">
          <Ballon icon={Heart} x="top-[38px]" y="left-[-110px]" />
          <Ballon icon={Stethoscope} x="top-[211px]" y="left-[-24px]" />
          <Ballon icon={Syringe} x="top-0" y="right-[-124px]" />
          <Ballon icon={ActivitySquare} x="top-[172px]" y="right-[-52px]" />
        </div>
      </div>

      <Grid />
    </div>
  );
}
