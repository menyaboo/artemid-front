import { cn } from "@shared/lib";

const inputStyles = {
  inp: "w-full relative",
  label: "relative w-full block",
  error_mes: "text-error mt-1 select-none",
  error_input: "border-error",
  icon: "absolute right-4 top-1/2 transform -translate-y-1/2",
  input: cn(
    'pt-[22px] pb-[12px] rounded-2xl rounded-2xl border-1 w-full',
    'outline-[1px] outline-state px-4 relative outline-none peer',

    'transition-colors duration-200 ease-in-out',
    'bg-transparent border-border-secondary',
    'focus:border-accent-primary',
  ),
  placeholder: cn(
    'absolute left-[16px] top-1/2 transform -translate-y-1/2 text-text-gray',
    'transition-all duration-300 ease-out',

    'peer-not-[:placeholder-shown]:top-3.5 peer-not-[:placeholder-shown]:text-[12px]',
    'peer-focus:top-3.5 peer-focus:text-[12px]',
  ),
};


export {
  inputStyles
}