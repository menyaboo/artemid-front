import { ElementType, ReactNode } from 'react';
import { BaseControlledComponent } from "@shared/ui";
import { ILabelValueProps } from "@shared/interface/ui";
import { ISelectControlledProps, Select } from "@shared/ui/select";

const ControlledSelect = <
  TValue,
  TItem extends ILabelValueProps<TValue>,
  T extends ElementType
>(props: ISelectControlledProps<TValue, TItem, T>): ReactNode => {
  const Component = props?.component ?? Select
  return <BaseControlledComponent component={ Component } { ...props } />
}

export {
  ControlledSelect
}