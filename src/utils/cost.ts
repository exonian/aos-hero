import { IWarscrollSlice } from "../types/store";

export const calculateCost = (warscrollState: IWarscrollSlice): number | null => {
  const {ancestry, abilities, beast, weaponOne, weaponTwo} = warscrollState
  if (!ancestry) return null

  let cost = ancestry.cost

  abilities.forEach(addedAbility => {
    const abilityCost = addedAbility.ability.cost
    if (abilityCost && !addedAbility.addedBy) cost += abilityCost * addedAbility.count
  })

  if (weaponOne && weaponOne.weapon.cost) cost += weaponOne.weapon.cost
  if (weaponTwo && weaponTwo.weapon.cost) cost += weaponTwo.weapon.cost

  if (beast) cost += beast.beast.cost

  return cost
}
