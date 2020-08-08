export type TKeyword = string

export type TStat = number | "D3"

export const AutomaticGrant = "automatic"
export const ChooseOneGrant = "chooseOne"
export type TGrantType = "automatic"|"chooseOne"
export type TGrants = {
  grantType: TGrantType
  abilityNames: string[]
}

export type TTargetTypes = "weapon" | "beastWeapon" | "claws"

export type TAbility = {
  name: string
  description: string
  cost?: number
  exclusions?: TKeyword[]
  requirements?: TKeyword[]
  beastTypes?: string[]
  cannotRename?: boolean
  spell?: boolean
  enhancement?: boolean
  characteristic?: string
  target?: TTargetTypes
  change?: "+" | "="
  value?: number
  keywords?: TKeyword[]
}
export type TAbilities = Record<string, TAbility>

export type TTargetWeapons = "weaponOne" | "weaponTwo" | "claws" | "maw"

export type TAddedAbility = {
  ability: TAbility
  source?: string
  customName: string
  count: number
  target?: TTargetWeapons
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
  grants?: TGrants[]
}
export type TAncestries = Record<string, TAncestry>

export type TArchetype = {
  name: string
  keywords: TKeyword[]
  exclusions: TKeyword[]
  exclusionExceptions?: TKeyword[]
  grants: TGrants[]
}
export type TArchetypes = Record<string, TArchetype>

export type TWeaponTypeName = "one-handed-melee" | "one-handed-missile" | "two-handed-melee" | "two-handed-missile" | "shield" | "small-beast" | "large-beast"

export type TWeaponType = {
  name: TWeaponTypeName
  compatibleWith?: TWeaponTypeName[]
}
export type TWeaponTypes = Record<string, TWeaponType>

export type TWeapon = {
  name: string
  type: TWeaponType
  range: number
  attacks: number
  toHit: number
  toWound: number
  rend: number
  damage: TStat
  cost: number
  grants?: TGrants[]
}

export type TEquipment = {
  name: string
  type: TWeaponType
  exclusions?: TKeyword[]
  cost: number
  grants: TGrants[]
}

export type TWeapons = Record<string, TWeapon|TEquipment>

export type TAddedWeapon = {
  weapon: TWeapon|TEquipment
  source?: string
  customName: string
}

export type TDamageTier = {
  woundsFrom: number
  woundsTo?: number
  move: number
  claws: number
  maw: number
}

export type TBeast = {
  name: string
  beastAbilityName: string
  keywords: TKeyword[]
  exclusions: TKeyword[]
  exclusionExceptions?: TKeyword[]
  weapons: TWeapons
  grants: TGrants[]
  damageTable?: TDamageTier[]
  cost: number
}
export type TBeasts = Record<string, TBeast>

export type TAddedBeast = {
  beast: TBeast
  customName: string
}