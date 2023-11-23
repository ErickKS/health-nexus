"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { Mail, LockKeyhole } from "lucide-react";

import { useValidate } from "@/hooks/useValidate";
import { Login } from "@/types/auth";
import { emptyLogin } from "@/constants/auth";

import { Input } from "@/components/form/input";

export default function Login() {
  const router = useRouter();

  const login = useValidate<Login>({
    initialValues: emptyLogin,
    validate: (values) => {
      const errors: { [key: string]: string } = { email: "", password: "" };

      if (!values.email) {
        errors.email = "Campo obrigatório";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Por favor, insira um email válido";
      }

      if (!values.password) {
        errors.password = "Campo obrigatório";
      }

      return errors;
    },
  });

  const isValidLogin = Object.values(login.errors).every((error) => !error);

  function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidLogin) {
      login.handleSubmit();
      return;
    }

    router.push("/plataforma");
  }

  return (
    <>
      <div className="flex flex-col items-center gap-1">
        <h2>Bem-vindo</h2>
        <span className="text-lg">Faça seu login na plataforma</span>
      </div>

      <form onSubmit={signIn} className="flex flex-col gap-4">
        <Input
          type="email"
          id="email"
          value={login.values.email}
          onChange={login.handleChange}
          iconStart={<Mail />}
          placeholder="Seu E-mail"
          error={login.touched.email && login.errors.email}
        />
        <Input
          type="password"
          id="password"
          value={login.values.password}
          onChange={login.handleChange}
          iconStart={<LockKeyhole />}
          placeholder="Sua Senha"
          error={login.touched.password && login.errors.password}
        />

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
