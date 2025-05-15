import { UUIId } from "@shared/interface/common";

interface IRegisterPort {
  name: string,
  email: string
  telephone: string,
  password: string,
  password_confirmation: string,
  role_id?: number,
}

type IUpdateUserPort = Omit<IRegisterPort, 'password' | 'password_confirmation'>  & UUIId

interface ILoginPort {
  email: string
  password: string
}

export type {
  ILoginPort,
  IRegisterPort,
  IUpdateUserPort
}