import { cn } from '@shared/lib';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type IBaseWrapperProps<T extends ElementType> = {
  tag?: T | ElementType
  className?: string
} & ComponentPropsWithoutRef<T>

const DEFAULT_TAG = 'article' as const

const MainWrapper = <T extends ElementType = typeof DEFAULT_TAG>(
  { className, tag: Tag = DEFAULT_TAG, ...props }: IBaseWrapperProps<T>
): ReactNode => (
  <Tag className={ cn(" rounded-2xl bg-background-secondary p-8", className) } { ...props }/>
)


export {
  MainWrapper
}