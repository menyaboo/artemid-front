import { IBaseControlledInputProps, ICheckedStatedProps, ILabelValueProps } from "@shared/interface/ui";
import { ElementType } from "react";

interface IBaseSelectProps<TValue, TItem extends ILabelValueProps<TValue>> extends ICheckedStatedProps<TValue, TItem> {
  placeholder?: string;
}

type ISelectControlledProps<
  TValue,
  TItem extends ILabelValueProps<TValue>,
  T extends ElementType
> = IBaseSelectProps<TValue, TItem> & IBaseControlledInputProps<T>

export type {
  IBaseSelectProps,
  ISelectControlledProps
}