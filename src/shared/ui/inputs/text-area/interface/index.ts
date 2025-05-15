import { ComponentPropsWithoutRef, ElementType } from "react";
import { IBaseControlledInputProps, IBaseInputProps, ICheckedProps } from "@shared/interface/ui";

type ITextAreaProps = IBaseInputProps & ComponentPropsWithoutRef<'textarea'>
type IControlledTextAreaProps<T extends ElementType = 'textarea'> = IBaseControlledInputProps<T>

interface ITextAreaWithHintsProps extends Omit<ITextAreaProps, 'onChange' | 'value'>, ICheckedProps<string> {
  hints: string[]
}

export type {
  ITextAreaProps,
  IControlledTextAreaProps,
  ITextAreaWithHintsProps
}