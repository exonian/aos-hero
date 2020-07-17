export type TKeyword = string

export type TAncestry = {
  name: string
  keywords: TKeyword[]
  armyKeywords?: TKeyword[][]
  wounds: number
  movement: number
  save: number
  bravery: number
  cost: number
}
export type TAncestries = Record<string, TAncestry>

export type TArchetype = {
  name: string
  keywords: TKeyword[]
  restrictions: TKeyword[]
  restrictionExceptions?: TKeyword[]
}
export type TArchetypes = Record<string, TArchetype>