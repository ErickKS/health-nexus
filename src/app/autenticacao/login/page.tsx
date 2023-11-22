"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { Mail, LockKeyhole } from "lucide-react";

import { Input } from "@/components/form/input";

import { Login, LoginAlert } from "@/types/auth";

export default function Login() {
  const router = useRouter();

  const [loginData, setLoginData] = useState<Login>({
    email: "",
    password: "",
  });
  const [loginDataAlert, setLoginDataAlert] = useState<LoginAlert>({
    email: false,
    password: false,
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;

    if (name === "email") {
      setLoginDataAlert((prevLoginData) => ({
        ...prevLoginData,
        email: false,
      }));
      setLoginData((prevLoginData) => ({
        ...prevLoginData,
        email: value,
      }));
    }

    if (name === "password") {
      setLoginDataAlert((prevLoginData) => ({
        ...prevLoginData,
        password: false,
      }));
      setLoginData((prevLoginData) => ({
        ...prevLoginData,
        password: value,
      }));
    }
  }

  function signIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const areFieldsEmpty = Object.values(loginData).some((value) => !value);

    if (areFieldsEmpty) {
      setLoginDataAlert((prevLoginDataAlert) => {
        for (const key in prevLoginDataAlert) {
          if (prevLoginDataAlert.hasOwnProperty(key)) {
            prevLoginDataAlert[key as keyof LoginAlert] = !loginData[key as keyof LoginAlert];
          }
        }
        return { ...prevLoginDataAlert };
      });

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
          id="email"
          type="email"
          onChange={handleInputChange}
          iconStart={Mail}
          placeholder="Seu E-mail"
          alert={loginDataAlert.email}
        />
        <Input
          id="password"
          type="password"
          onChange={handleInputChange}
          iconStart={LockKeyhole}
          placeholder="Sua Senha"
          alert={loginDataAlert.password}
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
