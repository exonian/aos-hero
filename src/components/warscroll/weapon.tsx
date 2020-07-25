import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import ContentEditable from "react-contenteditable";

import { TAddedWeapon, TWeapon } from "../../types/data";
import { replaceSpecialChars } from "../../utils/text";
import { logRename } from "../../utils/analytics";
import { editWeaponCustomName } from "../../ducks/warscroll";

interface IAbilityProps {
  addedWeapon: TAddedWeapon | null
  weaponField: "weaponOne" | "weaponTwo",
}

export const WeaponComponent: React.FC<IAbilityProps> = props => {
  const { addedWeapon, weaponField } = props
  const weapon = addedWeapon ? addedWeapon.weapon as TWeapon: null
  const customName = addedWeapon && addedWeapon.customName
  const dispatch = useDispatch()

  const handleCustomNameChange = useCallback(
    e => {
      if (!weapon) return
      const value = e.target.value
      dispatch(editWeaponCustomName(weaponField, value))
    },
    [dispatch, weapon, weaponField]
  )

  const handleCustomNameBlur = useCallback(
    e => {
      if (!weapon) return
      const value = replaceSpecialChars(e.target.innerHTML)
      if (!value) {
        dispatch(editWeaponCustomName(weaponField, weapon.name))
      }
      logRename(weapon.name, value)
    },
    [dispatch, weapon, weaponField]
  )

  if (!weapon || weapon.type.name === "shield") return null

  return (
    <>
      <ContentEditable
        html={customName || ''}
        onChange={handleCustomNameChange}
        onBlur={handleCustomNameBlur}
        tagName='h4'
      />
      <table className="table text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Range</th>
            <th scope="col">Attacks</th>
            <th scope="col">To Hit</th>
            <th scope="col">To Wound</th>
            <th scope="col">Rend</th>
            <th scope="col">Damage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ weapon.range }"</td>
            <td>{ weapon.attacks }</td>
            <td>{ weapon.toHit }+</td>
            <td>{ weapon.toWound }+</td>
            <td>-{ weapon.rend ? weapon.rend : '' }</td>
            <td>{ weapon.damage }</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
