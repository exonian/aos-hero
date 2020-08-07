import React from "react";
import { useSelector } from "react-redux";

import { selectWarscroll } from "../../ducks/warscroll";
import { TAddedEnhancement, calculateWeaponStats } from "../../utils/stats";
import { TWeapon, TAddedWeapon } from "../../types/data";
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
        <tr>
          <td>{ beast.beast.damageTable[0].woundsFrom } - { beast.beast.damageTable[0].woundsTo }</td>
          <td>{ beast.beast.damageTable[0].move }</td>
          <td>{ beast.beast.damageTable[0].claws }</td>
          <td>{ beast.beast.damageTable[0].maw }</td>
        </tr>
      </tbody>
    </table>
  )
}