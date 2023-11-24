"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import axios from "axios";

import { useValidate } from "@/hooks/useValidate";
import { RegisterSpecialist } from "@/types/auth";
import { RegisterSpecialistFields, emptyRegisterSpecialist } from "@/constants/auth";

import { Input } from "@/components/form/input";

export function FormRegisterSpecialist() {
  const router = useRouter();

  const registerSpecialist = useValidate<RegisterSpecialist>({
    initialValues: emptyRegisterSpecialist,
    validate: (values) => {
      const errors: { [key: string]: string } = {
        name: "",
        email: "",
        cpf: "",
        crm: "",
        profession: "",
        password: "",
        passwordConfirm: "",
      };

      if (!values.name) {
        errors.name = "Campo obrigatório";
      } else if (!/^[A-Za-zÀ-ú'-]+( [A-Za-zÀ-ú'-]+ ?)+$/i.test(values.name)) {
        errors.name = "Por favor, insira um nome válido";
      }

      if (!values.email) {
        errors.email = "Campo obrigatório";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Por favor, insira um email válido";
      }

      if (!values.cpf) {
        errors.cpf = "Campo obrigatório";
      } else if (
        !/^(?:(?!000\.000\.000-00|111\.111\.111-11|222\.222\.222-22|333\.333\.333-33|444\.444\.444-44|555\.555\.555-55|666\.666\.666-66|777\.777\.777-77|888\.888\.888-88|999\.999\.999-99)[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2})$/i.test(
          values.cpf
        )
      ) {
        errors.cpf = "Por favor, insira um cpf válido";
      }

      if (!values.crm) {
        errors.crm = "Campo obrigatório";
      }

      if (!values.profession) {
        errors.profession = "Campo obrigatório";
      }

      if (!values.password) {
        errors.password = "Campo obrigatório";
      }

      if (!values.passwordConfirm) {
        errors.passwordConfirm = "Campo obrigatório";
      } else if (values.passwordConfirm !== values.password) {
        errors.passwordConfirm = "As senhas fornecidas não coincidem.";
      }

      return errors;
    },
  });

  const isValidSpecialist = Object.values(registerSpecialist.errors).every((error) => !error);

  async function signUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValidSpecialist) {
      registerSpecialist.handleSubmit();
      return;
    }

    const { name, email, cpf, crm, profession, password } = registerSpecialist.values;

    const registerData = {
      name,
      email,
      cpf,
      crm,
      profession,
      password,
      tipo: "E",
    };

    try {
      await axios.post("http://localhost:3000/api/sign-up", registerData);

      localStorage.setItem("name", name);
      localStorage.setItem("account", "E");

      router.push("/plataforma");
    } catch (error) {
      console.error("Erro ao fazer o cadastro");
    }
  }

  return (
    <form onSubmit={signUp} className="flex flex-col gap-4">
      {RegisterSpecialistFields.map((input) => {
        const field = input.id as keyof RegisterSpecialist;

        return (
          registerSpecialist.values[field] !== undefined && (
            <Input
              type={input.type}
              id={input.id}
              key={input.id}
              placeholder={input.placeholder}
              iconStart={input.icon}
              value={registerSpecialist.values[field]}
              onChange={registerSpecialist.handleChange}
              error={registerSpecialist.touched[field] && registerSpecialist.errors[field]}
            />
          )
        );
      })}

      <button type="submit" className="h-12 bg-primary rounded-lg text-white font-medium mt-1">
        Cadastrar
      </button>
    </form>
  );
}
