export type TKeyword = string

export type TAbility = {
  name: string
  description: string
  cost?: number
  exclusions?: TKeyword[]
  cannotRename?: boolean
}
export type TAbilities = Record<string, TAbility>

export type TAddedAbility = {
  ability: TAbility
  source?: string
  customName?: string
}

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

export const AutomaticGrant = "automatic"
export const ChooseOneGrant = "chooseOne"
export type TGrantType = "automatic"|"chooseOne"
export type TGrants = {
  grantType: TGrantType
  abilityNames: string[]
}

export type TArchetype = {
  name: string
  keywords: TKeyword[]
  exclusions: TKeyword[]
  exclusionExceptions?: TKeyword[]
  grants: TGrants[]
}
export type TArchetypes = Record<string, TArchetype>