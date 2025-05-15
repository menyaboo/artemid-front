import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { IBaseControlledInputProps, IBaseInputProps } from "@shared/interface/ui";

interface IInputProps extends IBaseInputProps, ComponentPropsWithoutRef<'input'> {
  icon?: ReactNode
}

type IControlledInputProps<T extends ElementType = 'input'> = IBaseControlledInputProps<T>

export type {
  IInputProps,
  IControlledInputProps
}