import type { ReactNode } from 'react';
import { TypeServiceTable } from "@entities/type-service/ui";

const TypeServicePage = (): ReactNode => (
	<main className="py-10 mx-auto container">
		<TypeServiceTable/>
	</main>
)

export default TypeServicePage