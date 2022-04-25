export type TKeyword = string

export type TArticle = string

export type TStat = number | "D3"

export const AutomaticGrant = "automatic"
export const ChooseOneGrant = "chooseOne"
export type TGrantType = "automatic"|"chooseOne"
export type TGrants = {
  grantType: TGrantType
  abilityNames: string[]
}

export type TTargetType = "weapon" | "beastWeapon" | "claws"
export type TWeaponField = "weaponOne" | "weaponTwo" | "claws" | "maw"

export type TAbility = {
  name: string
  description: string
  cost?: number
  exclusions?: TKeyword[]
  requirements?: TKeyword[]
  beastTypes?: string[]
  cannotRename?: boolean
  spell?: boolean
  keywords?: TKeyword[]
}
export type TAbilities = Record<string, TAbility>

export type TAddedAbility = {
  ability: TAbility
  addedBy?: string
  customName: string
  count: number
}

export type TEnhancement = TAbility & {
  characteristic?: string
  target?: TTargetType
  change?: "+" | "="
  value?: number
}
export type TEnhancements = Record<string, TEnhancement>

export type TEnhancementTarget = "hero" | "weaponOne" | "weaponTwo" | "claws" | "maw"

export type TAddedEnhancement = {
  enhancement: TEnhancement
  addedBy?: string
  customName: string
  targets: TEnhancementTarget[]
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
  addedBy?: string
  customName: string
  key: string
  source?: string
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