import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type IModalEventHandler = (callback?: () => void) => () => void

interface IModalResult<T extends object = object> {
  isOpen: boolean
  handleOnOpen: IModalEventHandler
  handleOnClose: IModalEventHandler
  props: T
  setProps: Dispatch<SetStateAction<T>>
}

const bodyElement = document.getElementsByTagName('body')[0]

const useModal = <T extends object = object>(): IModalResult<T> => {
  const [isOpen, setIsOpen] = useState(false)
  const [props, setProps] = useState<T>({} as T)

  useEffect(() => {
    if (isOpen) bodyElement.className = 'overflow-hidden'
    else bodyElement.className = ''
  }, [isOpen])
  const handleOnOpen: IModalEventHandler = (callback) => () => {
    setIsOpen(true)
    if (callback !== undefined) callback()
  }
  const handleOnClose: IModalEventHandler = (callback) => () => {
    setIsOpen(false)
    if (callback !== undefined) callback()
  }

  return {isOpen, props, setProps, handleOnOpen, handleOnClose}
}

export type {IModalResult, IModalEventHandler}
export {useModal}
