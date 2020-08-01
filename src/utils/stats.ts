import { TAncestry, TKeyword, TStat, TAddedAbility, TWeapon } from "../types/data";

interface ICalculateStats {
  ancestry: TAncestry | null;
  enhancements: TAddedAbility[];
}

type TEnhancement = {
  name: string
  description: string
  cost?: number
  exclusions?: TKeyword[]
  cannotRename?: boolean
  enhancement: boolean
  characteristic: string
  change: "+" | "="
  value: number
}

type TAddedEnhancement = {
  ability: TEnhancement
  source?: string
  customName: string
  count: number
  targetWeapon?: TWeapon
}

export const calculateStats = (args: ICalculateStats): Record<string, number> => {
  const {ancestry, enhancements} = args

  let values: Record<string, number> = {"wounds": 0, "movement": 0, "save": 0, "bravery": 0}
  if (!ancestry) return values

  values.wounds = ancestry.wounds
  values.movement = ancestry.movement
  values.save = ancestry.save
  values.bravery = ancestry.bravery

  const replacements = enhancements.filter(i => i.ability.change === '=') as TAddedEnhancement[]
  const modifiers = enhancements.filter(i => i.ability.change === '+') as TAddedEnhancement[]

  replacements.forEach(replacement => values[replacement.ability.characteristic] = replacement.ability.value)

  modifiers.forEach(modifier => values[modifier.ability.characteristic] += modifier.ability.value * modifier.count)

  return values
}

export const STAR = 1000

export const isStar = (stat: TStat): boolean => stat > STAR / 2

export const statDisplayValue = (stat: TStat, suffix=``): string => {
  return stat ? isStar(stat) ? `*` : `${stat}${suffix}` : '-'
}