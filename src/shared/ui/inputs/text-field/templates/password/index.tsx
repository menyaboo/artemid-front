import { createElement, forwardRef, ReactNode, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { IInputProps, TextField } from "@shared/ui/inputs";

const ICON_MAP = {
  password: EyeOff,
  text: Eye
} as const

const TextFieldPassword = forwardRef<HTMLInputElement, IInputProps>((props, ref): ReactNode => {
  const [type, setType] = useState(props?.type ?? 'password')
  const Icon = createElement(ICON_MAP[type as keyof typeof ICON_MAP], {
    onClick: () => setType(type === 'password' ? 'text' : 'password'),
    size: 16
  })

  return <TextField { ...props } ref={ ref } icon={ Icon } type={ type }/>
})

TextFieldPassword.displayName = "TextFieldPassword"

export {
  TextFieldPassword
}