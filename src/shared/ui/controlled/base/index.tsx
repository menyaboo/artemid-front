import { Controller, useFormContext } from "react-hook-form"
import { ElementType, ReactNode } from "react";
import { IControlledComponentProps } from "@shared/ui/controlled";

const BaseControlledComponent = <T extends ElementType>(
  { name, control, component: ComponentProp, ref, ...props }: IControlledComponentProps<T>,
): ReactNode => {
  const context = useFormContext()
  const currentControl = control ?? context?.control
  const Component: ElementType = ComponentProp ?? 'input' as T

  return (
    <Controller
      name={ name }
      control={ currentControl }
      render={ ({ field: { value, ...field }, fieldState: { error } }) => (
        <Component { ...props } { ...field } value={ value || '' } error={ error?.message } ref={ ref }/>
      ) }
    />
  )
}

export {
  BaseControlledComponent
}