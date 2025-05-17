import type {ReactNode} from 'react';
import {AppealTable} from "@entities/appeal/ui";

const AppealsPage = (): ReactNode => (
	<main className="py-10 mx-auto container">
		<AppealTable/>
	</main>
)

export default AppealsPage