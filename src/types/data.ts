export type TKeyword = string

export type TAbility = {
  name: string
  description: string
  cost?: number
  exclusions?: TKeyword[]
}
export type TAbilities = Record<string, TAbility>

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
  exclusions: TKeyword[]
  exclusionExceptions?: TKeyword[]
}
export type TArchetypes = Record<string, TArchetype>