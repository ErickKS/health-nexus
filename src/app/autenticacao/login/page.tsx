"use client";

import Link from "next/link";
import { Mail, LockKeyhole } from "lucide-react";

import { Input } from "@/components/form/input";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    router.push("/plataforma");
  }

  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <h2>Bem-vindo</h2>
        <span className="text-lg">Faça seu login na plataforma</span>
      </div>

      <form onSubmit={signIn} className="flex flex-col gap-4">
        <Input id="email" type="email" iconStart={Mail} alert={false} placeholder="Seu E-mail" />
        <Input id="password" type="password" iconStart={LockKeyhole} alert={false} placeholder="Sua Senha" />

        <button type="submit" className="h-12 bg-[#123359] rounded-lg text-white font-medium mt-1">
          Entrar
        </button>
      </form>

      <span>
        Ainda não tem uma conta?{" "}
        <Link href={"/autenticacao/registro"} className="text-[#103157] font-semibold hover:underline">
          Registre-se
        </Link>
      </span>

    </>
  );
}
