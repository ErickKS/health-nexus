export interface Login {
  email: string;
  password: string;
}

export interface RegisterUser {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface RegisterSpecialist {
  name: string;
  email: string;
  cpf: string;
  crm: string;
  profession: string;
  password: string;
  passwordConfirm: string;
}
