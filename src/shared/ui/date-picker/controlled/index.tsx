import { ElementType, ReactNode } from 'react';
import { BaseControlledComponent } from "@shared/ui";
import { IBaseControlledInputProps, ICheckedProps } from "@shared/interface/ui";
import DatePicker from "react-datepicker";

const ControlledDatePicker = <T extends ElementType>(
	props: IBaseControlledInputProps<T> & ICheckedProps<[Date | null, Date | null]>
): ReactNode => {
	const Component = props?.component ?? DatePicker
	return <BaseControlledComponent component={ Component } { ...props } />
}

export {
	ControlledDatePicker
}