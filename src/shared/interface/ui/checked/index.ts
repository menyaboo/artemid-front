interface ILabelValueProps<T> {
  label: string
  value: T
}

interface ICheckedProps<TValue> {
  value?: TValue
  onChange?: (value: TValue) => void
}

interface ICheckedStatedProps<TValue, TItem extends ILabelValueProps<TValue>> extends ICheckedProps<TValue> {
  items: TItem[]
}

export type {
  ILabelValueProps,
  ICheckedProps,
  ICheckedStatedProps
}