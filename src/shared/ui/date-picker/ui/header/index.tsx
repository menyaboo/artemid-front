import { ReactDatePickerCustomHeaderProps } from "react-datepicker";
import { ReactElement } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

const CustomDatePickerHeader = (props: ReactDatePickerCustomHeaderProps): ReactElement => {
	const {
		monthDate,
		decreaseMonth: handleDecreaseMonth,
		increaseMonth: handleIncreaseMonth,
		prevMonthButtonDisabled: isPrevMonthButtonDisabled,
		nextMonthButtonDisabled: isNextMonthButtonDisabled,
		decreaseYear: handleDecreaseYear,
		increaseYear: handleIncreaseYear,
		customHeaderCount
	} = props

	return (
		<div className="flex py-[9px] justify-between px-3">
			{ customHeaderCount === 0 && (
				<div className="flex text-text-gray items-center gap-3">
					<button type="button" onClick={ handleDecreaseYear } disabled={ isPrevMonthButtonDisabled }>
						<ChevronsLeft />
					</button>

					<button type="button" onClick={ handleDecreaseMonth } disabled={ isPrevMonthButtonDisabled }>
						<ChevronLeft />
					</button>
				</div>
			) }

			<span className="flex-1 capitalize font-bold text-center">
        { monthDate.toLocaleString('default', { month: 'long', year: 'numeric' }).
				replace(/^\w/, (c) => c.toUpperCase()).
				replace(' г.', '') }
      </span>

			{ customHeaderCount !== 0 && (
				<div className="flex text-text-gray items-center gap-3">
					<button type="button" onClick={ handleIncreaseMonth } disabled={ isNextMonthButtonDisabled }>
						<ChevronRight />
					</button>

					<button type="button" onClick={ handleIncreaseYear } disabled={ isNextMonthButtonDisabled }>
						<ChevronsRight />
					</button>
				</div>
			) }
		</div>
	)
}

export {
	CustomDatePickerHeader
}