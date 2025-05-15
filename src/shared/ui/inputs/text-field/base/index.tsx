import { forwardRef, ReactNode } from 'react';
import { inputStyles as s } from "./styles";
import { IInputProps } from '../interface';
import { cn } from "@shared/lib";

const TextField = forwardRef<HTMLInputElement, IInputProps>((
  { placeholder, error, type = 'text', icon, ...props }, ref
): ReactNode => (
  <div>
    <label className={ s.label }>
      <input { ...props } className={ cn(s.input, error && s.error_input) }
             ref={ ref } type={ type } placeholder=" " />
      { placeholder && <span className={ s.placeholder }> { placeholder } </span> }
      { icon && <span className={ s.icon }> { icon } </span> }
    </label>
    { error && <span className={ s.error_mes }> { error } </span> }
  </div>
))

TextField.displayName = "TextField"

export {
  TextField
};