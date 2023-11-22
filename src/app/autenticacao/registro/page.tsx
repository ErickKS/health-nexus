"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { UserCircle2, FileText, Briefcase, Mail, LockKeyhole } from "lucide-react";

import { Tabs } from "@/components/form/tabs";
import { Input } from "@/components/form/input";

export default function Registro() {
  const [type, setType] = useState<"user" | "specialist">("user");

  function handleTypeChange(event: "user" | "specialist") {
    setType(event);
  }

  function signUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <h2>Crie sua conta</h2>
        <span className="text-lg">Junte-se a nossa comunidade</span>
      </div>

      <Tabs type={type} onChange={handleTypeChange} />

      <form onSubmit={signUp} className="flex flex-col gap-4">
        <Input id="name" type="text" iconStart={UserCircle2} alert={false} placeholder="Seu nome" />
        <Input id="email" type="email" iconStart={Mail} alert={false} placeholder="Seu E-mail" />

        {type === "specialist" && (
          <>
            <Input id="cpf" type="text" iconStart={FileText} alert={false} placeholder="Seu CPF" />
            <Input id="crm" type="text" iconStart={FileText} alert={false} placeholder="Seu CRM" />
            <Input id="profession" type="text" iconStart={Briefcase} alert={false} placeholder="Sua especialidade" />
          </>
        )}

        <Input id="password" type="password" iconStart={LockKeyhole} alert={false} placeholder="Sua senha" />
        <Input id="password-confirm" type="password" iconStart={LockKeyhole} alert={false} placeholder="Confirme sua senha" />

        <button type="submit" className="h-12 bg-[#123359] rounded-lg text-white font-medium mt-1">
          Cadastrar
        </button>
      </form>

      <span>
        Já possui uma conta?{" "}
        <Link href={"/autenticacao/login"} className="text-[#103157] font-semibold hover:underline">
          Login
        </Link>
      </span>
    </>
  );
}
