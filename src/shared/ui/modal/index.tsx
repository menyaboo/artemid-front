import { ReactNode, useEffect } from "react";
import { IModalResult } from "@shared/hooks";
import { X } from 'lucide-react'

interface IModalProps<T extends object = object> {
  modal: IModalResult<T>,
  children: ReactNode,
  modalTitle: ReactNode,
  classname?: string
}

const Modal = <T extends object>({ modal: { handleOnClose, isOpen }, children, modalTitle, classname }: IModalProps<T>) => {
  const handleEscape = (e: KeyboardEvent) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    e.key === "Escape" ? handleOnClose()() : false
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  });

  return (
    <>
      { isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-10 "
          id="modal-wrapper" onClick={ handleOnClose() }>
          <div
            className={ `bg-background-secondary overflow-y-auto p-4 rounded-2xl min-w-[300px] tablet-max:max-h-[900px] ${ classname }` }
            onClick={ (e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation() }>
            <div className="flex justify-between mb-4">
              <h2 className="text-text">{ modalTitle }</h2>
              <button type={ "button" } onClick={ handleOnClose() }>
                <X />
              </button>
            </div>
            <div>
              { children }
            </div>
          </div>
        </div>
      ) }
    </>
  );
};
export {
  Modal
}