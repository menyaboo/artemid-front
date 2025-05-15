import { ComponentPropsWithoutRef, ReactNode } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";
import { cn } from "@shared/lib";

interface IControlledFormProps<
  TFieldValues extends FieldValues,
  TContext = unknown,
  TTransformedValues = TFieldValues
> extends ComponentPropsWithoutRef<'form'> {
  form: UseFormReturn<TFieldValues, TContext, TTransformedValues>
}

const ControlledForm = <
  TFieldValues extends FieldValues,
  TContext = unknown,
  TTransformedValues = TFieldValues
>({ form, className, ...props }: IControlledFormProps<TFieldValues, TContext, TTransformedValues>): ReactNode => (
  <FormProvider { ...form }>
    <form className={ cn("w-[500px] flex flex-col rounded-2xl bg-background-secondary p-8 gap-4", className) }
          { ...props } />
  </FormProvider>
)

export {
  ControlledForm
};