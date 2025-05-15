import { ElementType, ForwardedRef, forwardRef, ReactNode, Ref } from 'react';
import { IControlledTextAreaProps, TextArea } from "@shared/ui/inputs";
import { BaseControlledComponent } from "@shared/ui/controlled";

const ControlledTextAreaRender = <T extends ElementType>(
  props: IControlledTextAreaProps<T>, ref: ForwardedRef<T>
): ReactNode => {
  const Component = props.component ?? TextArea
  return <BaseControlledComponent ref={ ref } component={ Component } { ...props } />
}

// @ts-expect-error ts(2435)
const ControlledTextArea = forwardRef(ControlledTextAreaRender) as <T extends ElementType>(
  props: IControlledTextAreaProps<T> & { ref?: Ref<HTMLTextAreaElement> }
) => ReturnType<typeof ControlledTextAreaRender>

export {
  ControlledTextArea
};