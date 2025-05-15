import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const cn = (...classnames: ClassValue[]): string => twMerge(clsx(classnames))

export { cn }