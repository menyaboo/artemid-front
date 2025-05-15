'use client'

import { ElementType, forwardRef, ReactNode, Ref } from 'react';
import { Controller, useFormContext } from "react-hook-form";
import { IControlledInputProps, TextField } from "@shared/ui/inputs";

const ControlledTextFieldRender = <T extends ElementType>(props: IControlledInputProps<T>, ref: Ref<HTMLInputElement>): ReactNode => {
  const context = useFormContext()
  const currentControl = props?.control ?? context?.control
  const Component = props?.component ?? TextField

  return (
    <Controller name={ props.name } control={ currentControl }
                render={ ({ field: { onChange, value, ...field }, fieldState: { error } }) => {
                  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                    const { value, valueAsNumber } = e.target
                    return onChange(props.type === 'number' ? valueAsNumber : value)
                  }

                  return <Component onChange={ handleChange } { ...props } { ...field } error={ error?.message }
                                    ref={ ref } value={ value || '' }/>
                } }
    />
  )
}

// @ts-expect-error ts(2345) name is not defined (required prop)
const ControlledTextField = forwardRef(ControlledTextFieldRender) as <T extends ElementType>(
  props: IControlledInputProps<T> & { ref?: Ref<HTMLTextAreaElement> }
) => ReturnType<typeof ControlledTextFieldRender>

export {
  ControlledTextField
};