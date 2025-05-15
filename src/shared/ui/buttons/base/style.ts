import { cva } from "class-variance-authority";
import { cn } from "@shared/lib";

const mainButtonStyles = cva(cn(
  'rounded-full font-medium cursor-pointer transition-all',
  'ease-in-out duration-300 active:scale-95 transform origin-center'
), {
  variants: {
    variant: {
      primary: 'bg-accent-primary text-text-primary hover:bg-accent-primary-hover',
      secondary: 'bg-accent-secondary text-text-black hover:bg-accent-secondary-hover',
    },
    size: {
      small: 'py-[9px] px-7 text-sm',
      large: 'py-[17.5px] px-16',
    },
    disabled: {
      true: 'pointer-events-none bg-accent-secondary text-text-gray',
    }
  },
  defaultVariants: {
    variant: 'primary',
    size: 'large',
  },
});

export {
  mainButtonStyles,
}