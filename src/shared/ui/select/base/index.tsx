import { Popover } from "@shared/ui";
import { ReactNode } from "react";
import { ICheckedStatedProps, ILabelValueProps } from "@shared/interface/ui";
import { ChevronDown, ChevronUp } from "lucide-react";

interface IBaseSelectProps<TValue, TItem extends ILabelValueProps<TValue>> extends ICheckedStatedProps<TValue, TItem> {
	placeholder?: string;
	error?: string;
}

const Select = <TValue, TItem extends ILabelValueProps<TValue>>(
	{ items, value, onChange, error, placeholder = 'Выберите значение' }: IBaseSelectProps<TValue, TItem>
): ReactNode => {
	const selectedLabel = items.find((opt) => opt.value === value)?.label || placeholder;

	const Children = (handleClose: () => void) => (
		<div className="flex flex-col max-h-60 overflow-auto">
			{ items.map((option) => {
				const handleClick = () => {
					onChange?.(option.value)
					handleClose()
				}
				return (
					<div
						key={ option.label }
						onClick={ handleClick }
						className="px-4 py-2 hover:bg-background-secondary transition-colors duration-300 ease-in-out rounded-md cursor-pointer"
					>
						{ option.label }
					</div>
				)
			}) }
		</div>
	)


	return (
		<Popover
			trigger={ (isOpen) =>
				<div>
					<div
						className="border border-background-tertiary rounded px-4 py-2 min-w-[200px] gap-4 flex justify-between items-center bg-background-main cursor-pointer">
						<span>{ selectedLabel }</span>
						<span className="text-gray-500 transform transition-transform">{ isOpen ? <ChevronUp/> :
							<ChevronDown/> }</span>
					</div>
					{ error && <span className="text-error">{ error }</span> }
				</div>
			}
			placement="bottom"
		>
			{ Children }
		</Popover>
	);
};

export {
	Select
}