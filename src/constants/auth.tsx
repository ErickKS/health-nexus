import { UserCircle2, FileText, Briefcase, Mail, LockKeyhole } from "lucide-react";

// ==================== LOGIN ====================

export const emptyLogin = {
  email: "",
  password: "",
};

// ==================== REGISTER ====================

export const RegisterUserFields = [
  {
    type: "text",
    id: "name",
    placeholder: "Seu nome completo",
    icon: <UserCircle2 />,
  },
  {
    type: "email",
    id: "email",
    placeholder: "Seu E-mail",
    icon: <Mail />,
  },
  {
    type: "password",
    id: "password",
    placeholder: "Sua senha",
    icon: <LockKeyhole />,
  },
  {
    type: "password",
    id: "passwordConfirm",
    placeholder: "Confirme sua senha",
    icon: <LockKeyhole />,
  },
];

export const RegisterSpecialistFields = [
  {
    type: "text",
    id: "name",
    placeholder: "Seu nome completo",
    icon: <UserCircle2 />,
  },
  {
    type: "email",
    id: "email",
    placeholder: "Seu E-mail",
    icon: <Mail />,
  },
  {
    type: "text",
    id: "cpf",
    placeholder: "Seu CPF",
    icon: <FileText />,
  },
  {
    type: "text",
    id: "crm",
    placeholder: "Seu CRM",
    icon: <FileText />,
  },
  {
    type: "text",
    id: "profession",
    placeholder: "Sua especialidade",
    icon: <Briefcase />,
  },
  {
    type: "password",
    id: "password",
    placeholder: "Sua senha",
    icon: <LockKeyhole />,
  },
  {
    type: "password",
    id: "passwordConfirm",
    placeholder: "Confirme sua senha",
    icon: <LockKeyhole />,
  },
];

export const emptyRegisterUser = {
  name: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

export const emptyRegisterSpecialist = {
  name: "",
  email: "",
  cpf: "",
  crm: "",
  profession: "",
  password: "",
  passwordConfirm: "",
};
