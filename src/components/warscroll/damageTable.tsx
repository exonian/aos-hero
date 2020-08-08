import React from "react";
import { useSelector } from "react-redux";

import { selectWarscroll } from "../../ducks/warscroll";
import { TAddedEnhancement, calculateWeaponStats } from "../../utils/stats";
import { TWeapon, TAddedWeapon, TDamageTier } from "../../types/data";
import { replaceSpecialChars } from "../../utils/text";


export const DamageTableComponent: React.FC = () => {
  const warscrollState = useSelector(selectWarscroll)
  const { abilities, beast, claws, maw } = warscrollState

  if (!beast || !beast.beast.damageTable || !claws || !maw) return null

  const weapons: Record<string, TAddedWeapon> = {'claws': claws, 'maw': maw}
  Object.entries(weapons).reduce((accum, item) => {
    const [weaponField, addedWeapon] = item
    const enhancements = abilities.filter(addedAbility => {
      return addedAbility.ability.enhancement && addedAbility.target === weaponField
    }) as TAddedEnhancement[]
    return {...accum, weaponField: calculateWeaponStats({'weapon': addedWeapon.weapon as TWeapon, 'enhancements': enhancements})}
  }, {} as Record<string, {}>)

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
            <tr>
              <td>{ getTierWounds(damageTier) }</td>
              <td>{ damageTier.move }</td>
              <td>{ damageTier.claws }</td>
              <td>{ damageTier.maw }</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}