import * as Radio from "@radix-ui/react-radio-group";
import clsx from "clsx";
import { Contact2, Stethoscope } from "lucide-react";

interface TabsProps {
  type: "user" | "specialist";
  onChange: (value: "user" | "specialist") => void;
}

export function Tabs({ type, onChange }: TabsProps) {
  return (
    <Radio.Root
      defaultValue="user"
      onValueChange={onChange}
      aria-label="Tipo de registro"
      className="relative flex flex-col gap-1 max-w-[280px] w-full p-1 mx-auto rounded-lg shadow-sm xs:flex-row xs:h-10 xs:max-w-[300px] xs:rounded-full"
    >
      <Radio.Item
        id="user"
        value="user"
        aria-label="Cadastro para usuários"
        className="relative z-10 flex justify-center items-center gap-2 max-xs:py-2 xs:w-36 rounded-full data-[state=checked]:text-white"
      >
        <Contact2 size={20} />
        Usuário
      </Radio.Item>
      <Radio.Item
        id="specialist"
        value="specialist"
        aria-label="Cadastro para especialistas"
        className="relative z-10 flex justify-center items-center gap-2 max-xs:py-2 xs:w-36 rounded-full data-[state=checked]:text-white"
      >
        <Stethoscope size={20} />
        Especialista
      </Radio.Item>

      <div
        className={clsx(
          "absolute top-1 w-[calc(100%-8px)] h-10 xs:w-36 xs:h-8 bg-[#103157] rounded-lg xs:rounded-full transition-all",
          { "max-xs:translate-y-0 xs:translate-x-0": type === "user" },
          { "max-xs:translate-y-11 xs:translate-x-[148px]": type === "specialist" }
        )}
      />
    </Radio.Root>
  );
}
