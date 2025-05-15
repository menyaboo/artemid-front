import { IRegisterPort, ILoginPort, IUpdateUserPort } from "@shared/interface/entities/user";

type IRegisterSchema = IRegisterPort
type IUpdateUserSchema = IUpdateUserPort
type ILoginSchema = ILoginPort

export type {
  IRegisterSchema,
  ILoginSchema,
  IUpdateUserSchema
}