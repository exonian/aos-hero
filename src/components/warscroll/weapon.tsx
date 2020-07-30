import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import ContentEditable from "react-contenteditable";

import { TAddedWeapon, TWeapon } from "../../types/data";
import { replaceSpecialChars } from "../../utils/text";
import { logRename } from "../../utils/analytics";
import { editWeaponCustomName } from "../../ducks/warscroll";
import { WeaponProfile } from "./weaponTable";
import { Abilities } from "../../data/abilities";

interface IAbilityProps {
  addedWeapon: TAddedWeapon | null
  weaponField: "claws" | "maw" | "weaponOne" | "weaponTwo",
}

export const WeaponComponent: React.FC<IAbilityProps> = props => {
  const { addedWeapon, weaponField } = props
  const weapon = addedWeapon ? addedWeapon.weapon : null
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

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  if (!weapon) return null

  console.log(weapon)

  return (
    <>
      <ContentEditable
        html={customName || ''}
        onChange={handleCustomNameChange}
        onBlur={handleCustomNameBlur}
        onKeyDown={handleKeyDown}
        tagName='h4'
      />
      { weapon.type.name === "shield" ? <p>{Abilities.Shield.description}.</p> : <WeaponProfile weapon={weapon as TWeapon} />}
    </>
  )
}
