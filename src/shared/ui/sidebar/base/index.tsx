import type { HTMLAttributes, ReactNode } from 'react'

import { useEffect, useMemo } from 'react'
import { X as CLoseIcon } from 'lucide-react';
import { useOpenBlock } from "@/shared/hooks";
import { cn } from '@shared/lib';

const sidebarRootElement = document.getElementById('sidebar')

interface ISidebarProps extends HTMLAttributes<HTMLDivElement> {
  button: ReactNode
  title?: string
}

const Sidebar = ({ children, button, className, title, ...props }: ISidebarProps): ReactNode => {
  const element = useMemo(() => document.createElement('div'), [])
  const { isOpen, ref, handleToggle, handleClose } = useOpenBlock<HTMLDivElement>()

  useEffect(() => {
    if (isOpen) {
      sidebarRootElement?.appendChild(element)
      const html = document.querySelector('html')

      if (html) html.style.overflow = 'hidden'

      return () => {
        if (html) html.style.overflow = ''
        sidebarRootElement?.removeChild(element)
      }
    }
    return undefined
  })


  return (
    <div className={ className } { ...props }>
      <button onClick={ handleToggle }>
        { button }
      </button>

      <div ref={ ref } className={ cn(
        "fixed overflow-hidden z-10 inset-0 transform ease-in-out",
        "transition-all opacity-0 translate-x-full",
        isOpen && "transition-opacity opacity-100 duration-500 translate-x-0") }>
        <div className={ cn(
          "px-5 py-6 w-[500px] h-screen-m right-0 bottom-0 absolute bg-background-secondary duration-500" +
          "ease-in-out transition-all transform border-l border-background-secondary overflow-y-scroll" +
          "shadow-[0_4px_12px_0px_rgba(13,10,44,0.06)] translate-x-full",
          isOpen && "translate-x-0"
        ) }>
          <div className="flex justify-between gap-3 items-center">
            <h1 className="text-text text-2xl font-semibold">{ title }</h1>

            <button onClick={ handleClose } className="text-text">
              <CLoseIcon/>
            </button>
          </div>

          { children }
        </div>
      </div>
    </div>
  )
}

export {
  Sidebar
}