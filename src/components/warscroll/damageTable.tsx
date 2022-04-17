import React from "react";
import { useSelector } from "react-redux";

import { selectWarscroll } from "../../ducks/warscroll";
import { TAddedEnhancement, calculateWeaponStats, statStarModifier, calculateStats } from "../../utils/stats";
import { TWeapon, TDamageTier } from "../../types/data";
import { replaceSpecialChars } from "../../utils/text";


export const DamageTableComponent: React.FC = () => {
  const warscrollState = useSelector(selectWarscroll)
  const { abilities, ancestry, beast, claws, maw } = warscrollState

  if (!beast || !beast.beast.damageTable || !claws || !maw) return null

  const enhancements = abilities.filter(addedAbility => addedAbility.ability.enhancement)
  const heroStats = calculateStats({'ancestry': ancestry, 'enhancements': enhancements})
  const clawsStats = calculateWeaponStats({
    'weapon': claws.weapon as TWeapon,
    'enhancements': claws.abilities.filter(addedAbility => addedAbility.ability.enhancement) as TAddedEnhancement[],
  })
  const mawStats = calculateWeaponStats({
    'weapon': maw.weapon as TWeapon,
    'enhancements': maw.abilities.filter(addedAbility => addedAbility.ability.enhancement) as TAddedEnhancement[],
  })

  const movementModifier = statStarModifier(heroStats.movement)
  const clawsModifier = statStarModifier(clawsStats.attacks)
  const mawModifier = statStarModifier(mawStats.damage)

  const getTierWounds = (tier: TDamageTier): string => {
    return tier.woundsTo ? `${tier.woundsFrom}-${tier.woundsTo}` : `${tier.woundsFrom}+`
  }

  return (
    <table className="table text-center">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Wounds Sufferred</th>
          <th scope="col">Move</th>
          <th scope="col">{replaceSpecialChars(claws.customName)}</th>
          <th scope="col">{replaceSpecialChars(maw.customName)}</th>
        </tr>
      </thead>
      <tbody>
        {beast.beast.damageTable.map((damageTier, i) => {
          return (
            <tr key={ damageTier.woundsFrom }>
              <td>{ getTierWounds(damageTier) }</td>
              <td>{ damageTier.move + movementModifier }</td>
              <td>{ damageTier.claws + clawsModifier}</td>
              <td>{ damageTier.maw + mawModifier}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}