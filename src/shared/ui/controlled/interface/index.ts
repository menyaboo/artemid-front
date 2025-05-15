import type { ComponentPropsWithoutRef, ElementType, RefObject } from "react";
import type { Control } from "react-hook-form";

type IBaseControlledComponentProps<
  T extends ElementType,
> = {
  name: string
  control?: Control
  component?: T
} & ComponentPropsWithoutRef<T>

type IControlledComponentProps<T extends ElementType> = {
  component: T
  ref?: RefObject<T>
} & Omit<IBaseControlledComponentProps<T>, 'component'>

export type {
  IBaseControlledComponentProps,
  IControlledComponentProps
}