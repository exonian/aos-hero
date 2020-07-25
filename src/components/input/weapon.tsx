import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select'

import { convertToOptions } from './select';
import { logSelection } from '../../utils/analytics';
import { selectWarscroll, changeWeapon, clearWeapon } from '../../ducks/warscroll';
import { Weapons } from '../../data/weapons';
import { filterByRestrictions } from '../../utils/restrictions';
import { TWeapons, TWeapon } from '../../types/data';
import { titleCase } from '../../utils/text';


const nameFn = (item: TWeapon): string => { return item.name }
const nameAndCostFn = (item: TWeapon): string => { return titleCase(item.name) + ' (' + item.cost  + 'DP)' }

interface IWeaponInputProps {
  weaponField: "weaponOne" | "weaponTwo"
}

export const WeaponInput: React.FC<IWeaponInputProps> = props => {
  const { weaponField } = props
  const otherWeaponField = weaponField === "weaponOne" ? "weaponTwo" : "weaponOne"

  const warscrollState = useSelector(selectWarscroll)
  const { ancestry, archetype, armyKeywords } = warscrollState

  const currentWeapon = warscrollState[weaponField]
  const otherWeapon = warscrollState[otherWeaponField]

  const ancestryKeywords = ancestry ? ancestry.keywords : []
  const archetypeKeywords = archetype ? archetype.keywords : []
  const combinedKeywords = ancestryKeywords.concat(armyKeywords, "HERO", archetypeKeywords)

  const unrestrictedWeapons = filterByRestrictions(Weapons, combinedKeywords) as TWeapons
  const otherWeaponType = otherWeapon ? otherWeapon.weapon.type : null

  const compatibleWeapons = otherWeaponType ? Object.entries(unrestrictedWeapons).reduce((accum, item) => {
    const [name, weapon] = item
    const compatibleWith = weapon.type.compatibleWith
    if (compatibleWith !== undefined) {
      if (compatibleWith.includes(otherWeaponType.name)) accum[name] = weapon
    }
    else accum[name] = weapon
    return accum
  }, {} as TWeapons) : unrestrictedWeapons

  const options = [{value: '', label: '-----'}].concat(convertToOptions(Object.values(compatibleWeapons), nameFn, nameAndCostFn))
  const value = currentWeapon ? convertToOptions([currentWeapon.weapon], nameFn, nameAndCostFn)[0] : null
  const dispatch = useDispatch()

  const handleChange = useCallback(
    (...args) => {
      const value = args[0].value
      if (value) dispatch(changeWeapon(weaponField, value))
      else dispatch(clearWeapon(weaponField))
      logSelection('Weapon', value)
    },
    [dispatch, weaponField]
  )

  return Object.keys(compatibleWeapons).length ? (
    <Select
      options={options}
      value={value}
      onChange={handleChange}
      isSearchable={false}
    />
  ) : null
}
