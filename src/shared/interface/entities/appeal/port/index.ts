import { UUIId } from "@shared/interface/common";

interface ICreateAppealPort {
  message: string,
  category_id?: number,
  type_id?: number,
}

interface IUpdateAppealPort extends Partial<ICreateAppealPort>, UUIId {
  status_id?: number
}

export type {
  ICreateAppealPort,
  IUpdateAppealPort
}