import type { ReactNode } from 'react';
import { CategoryServiceTable } from "@entities/category-service/ui";

const CategoryServicePage = (): ReactNode => (
	<main className="py-10 mx-auto container">
		<CategoryServiceTable/>
	</main>
)

export default CategoryServicePage