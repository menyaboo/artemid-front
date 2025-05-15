import { forwardRef, ReactNode } from 'react';
import { inputStyles as s } from "./styles";
import { ITextAreaProps } from "@shared/ui/inputs";
import { cn } from "@shared/lib";

const TextArea = forwardRef<HTMLTextAreaElement, ITextAreaProps>((
  { placeholder, error, ...props }, ref
): ReactNode => (
  <div>
    <label className={ s.label }>
      <textarea { ...props } className={ cn(s.input, error && s.error_input) }
             ref={ ref } placeholder=" " />
      { placeholder && <span className={ s.placeholder }> { placeholder } </span> }
    </label>
    { error && <span className={ s.error_mes }> { error } </span> }
  </div>
))

TextArea.displayName = "TextArea"

export {
  TextArea
};