import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { mainButtonStyles } from "./style";
import { cn } from '@shared/lib';
import { VariantProps } from "class-variance-authority";

type IButtonProps = ComponentPropsWithoutRef<'button'> & VariantProps<typeof mainButtonStyles>

const Button = ({ variant, size, className, disabled, ...props }: IButtonProps): ReactNode => (
  <button disabled={ disabled } className={ cn(mainButtonStyles({ variant, size, disabled }), className) } { ...props }/>
);

export { Button };