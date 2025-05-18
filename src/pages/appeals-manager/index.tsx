import type { ReactNode } from 'react';
import { AppealTable } from "@entities/appeal/ui";

const AppealsManagerPage = (): ReactNode => (
	<main className="py-10 mx-auto container">
		<AppealTable isManager={ true }/>
	</main>
)

export default AppealsManagerPage