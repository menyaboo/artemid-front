interface ITypeServiceParams {
  id: number
}

interface IUpdateTypeServicePort {
  id: number,
  name?: string,
  category_id?: number
}

interface ICreateTypeServicePort {
  name: string,
  category_id: number,
}

export type {
  ITypeServiceParams,
  ICreateTypeServicePort,
  IUpdateTypeServicePort
}