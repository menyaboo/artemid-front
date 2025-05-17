interface IUpdateCategoryServicePort {
	id: number,
	name: string,
}

interface ICreateCategoryServicePort {
	name: string,
}

export type {
	IUpdateCategoryServicePort,
	ICreateCategoryServicePort
}