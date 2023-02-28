import { components, operations } from './api-generated'

export type API = components['schemas']

export type PARAMS<T extends keyof operations> =
  // @ts-ignore
  operations[T]['parameters']['query']
