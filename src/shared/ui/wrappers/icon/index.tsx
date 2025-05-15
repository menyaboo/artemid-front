import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from "@shared/lib";

type IIconWrapperProps = ComponentPropsWithoutRef<'div'>

const IconWrapper = ({ className, ...props }: IIconWrapperProps): ReactNode => (
  <div className={cn("size-[48px] rounded-md flex text-accent-primary justify-center items-center bg-background-main", className)} {...props}/>
)

export {
  IconWrapper
}