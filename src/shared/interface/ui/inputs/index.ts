import type { ElementType } from "react";
import { IBaseControlledComponentProps } from "@shared/ui/controlled";

interface IBaseInputProps {
  error?: string
}

type IBaseControlledInputProps<
  T extends ElementType = 'input',
> = IBaseControlledComponentProps<T> & IBaseInputProps

export type {
  IBaseInputProps,
  IBaseControlledInputProps
}