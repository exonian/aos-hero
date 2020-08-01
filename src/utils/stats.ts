import { TAncestry, TAbility, TKeyword, TStat } from "../types/data";

interface ICalculateStats {
  ancestry: TAncestry | null;
  enhancements: TAbility[];
}

interface IEnhancement  {
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

export const calculateStats = (args: ICalculateStats): Record<string, number> => {
  const {ancestry, enhancements} = args

  let values: Record<string, number> = {"wounds": 0, "movement": 0, "save": 0, "bravery": 0}
  if (!ancestry) return values

  values.wounds = ancestry.wounds
  values.movement = ancestry.movement
  values.save = ancestry.save
  values.bravery = ancestry.bravery

  const replacements = enhancements.filter(i => i.change === '=') as IEnhancement[]
  const modifiers = enhancements.filter(i => i.change === '+') as IEnhancement[]

  replacements.forEach(replacement => values[replacement.characteristic] = replacement.value)

  modifiers.forEach(modifier => values[modifier.characteristic] += modifier.value)

  return values
}

export const STAR = 1000

export const isStar = (stat: TStat): boolean => stat > STAR / 2

export const statDisplayValue = (stat: TStat, suffix=``): string => {
  return stat ? isStar(stat) ? `*` : `${stat}${suffix}` : '-'
}