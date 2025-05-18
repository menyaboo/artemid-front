import { ru } from "date-fns/locale/ru";
import { ICheckedProps } from "@shared/interface/ui";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import './index.css'
import { CustomDatePickerHeader } from "@shared/ui/date-picker/ui";
import { TextField } from "@shared/ui";

const DateRangePicker = ({ value, onChange }: ICheckedProps<[Date | null, Date | null]>) => {
	const [startDate = null, endDate = null] = value || [null, null];

	const handleChange = (date: [Date | null, Date | null]) => {
		onChange?.(date)
	}

	return (
		<DatePicker
			renderCustomHeader={ CustomDatePickerHeader }
			customInput={ <TextField placeholder="Дата" /> }
			placeholderText="Дата"
			popperPlacement="bottom-start"
			monthsShown={ 2 }
			locale={ ru as unknown as string }
			dateFormat="d MMMM, yyyy"
			startDate={ startDate }
			endDate={ endDate }
			shouldCloseOnSelect={ false }
			disabledKeyboardNavigation={ true }
			selectsRange={ true }
			onChange={ handleChange }
		/>
	);
};

export {
	DateRangePicker
};