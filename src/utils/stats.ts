import { useSelector } from "react-redux";
import { selectWarscroll } from "../ducks/warscroll";
import { TAncestry, TStat, TAddedAbility, TWeapon, TAddedEnhancement, TEnhancementTarget, TWeaponField } from "../types/data";

interface ICalculateStats {
  ancestry: TAncestry | null;
  enhancements: TAddedEnhancement[];
}

interface IAddedCharacteristicEnhancement {
  enhancement: ICharacteristicEnhancement
  targets: TEnhancementTarget[]
}

interface ICharacteristicEnhancement {
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

  const replacements = enhancements.filter(i => i.enhancement.change === '=') as IAddedCharacteristicEnhancement[]
  const modifiers = enhancements.filter(i => i.enhancement.change === '+') as IAddedCharacteristicEnhancement[]

  replacements.forEach(replacement => values[replacement.enhancement.characteristic] = replacement.enhancement.value)

  modifiers.forEach(modifier => values[modifier.enhancement.characteristic] += modifier.enhancement.value * modifier.targets.length)

  return values
}


interface ICalculateWeaponStats {
  weaponField: TWeaponField
}

export const calculateWeaponStats = (args: ICalculateWeaponStats): Record<string, TStat> => {
  const { weaponField } = args
  const warscrollState = useSelector(selectWarscroll)

  const { enhancements } = warscrollState
  const addedWeapon = warscrollState[weaponField]
  if (!addedWeapon) return {}
  const weapon = addedWeapon.weapon as TWeapon

  const values: Record<string, TStat> = {}

  values.range = weapon.range
  values.attacks = weapon.attacks
  values.toHit = weapon.toHit
  values.toWound = weapon.toWound
  values.rend = weapon.rend
  values.damage = weapon.damage

  enhancements.forEach(addedEnhancement => {
    const characteristic = addedEnhancement.enhancement.characteristic
    if (characteristic && addedEnhancement.enhancement.value) {
      const currentValue = values[characteristic]
      if (typeof currentValue === "number") values[characteristic] = currentValue + addedEnhancement.enhancement.value * addedEnhancement.targets.filter(t => t === weaponField).length
    }
  })

  return values
}


export const STAR = 1000

export const isStar = (stat: TStat): boolean => stat > STAR / 2

export const statDisplayValue = (stat: TStat, suffix=``): string => {
  return stat ? isStar(stat) ? `*` : `${stat}${suffix}` : '-'
}

export const statStarModifier = (stat: TStat): number => {
  return typeof stat === "number" ? stat - STAR : 0
}