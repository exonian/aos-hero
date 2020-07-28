import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select'

import { convertToOptions } from './select';
import { logSelection } from '../../utils/analytics';
import { selectWarscroll, changeWeapon } from '../../ducks/warscroll';
import { Weapons } from '../../data/weapons';
import { filterByRestrictions } from '../../utils/restrictions';
import { TWeapons, TWeapon } from '../../types/data';
import { titleCase } from '../../utils/text';
import { errorStyle } from '../selectStyles';
import { calculateKeywords } from '../../utils/keywords';


const nameFn = (item: TWeapon): string => { return item.name }
const nameAndCostFn = (item: TWeapon): string => { return titleCase(item.name) + ' (' + item.cost  + 'DP)' }

interface IWeaponInputProps {
  weaponField: "weaponOne" | "weaponTwo"
}

export const WeaponInput: React.FC<IWeaponInputProps> = props => {
  const { weaponField } = props
  const otherWeaponField = weaponField === "weaponOne" ? "weaponTwo" : "weaponOne"

  const warscrollState = useSelector(selectWarscroll)

  const currentWeapon = warscrollState[weaponField]
  const otherWeapon = warscrollState[otherWeaponField]

  const unrestrictedWeapons = filterByRestrictions(Weapons, calculateKeywords(warscrollState)) as TWeapons
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
  const valid = currentWeapon ? Object.keys(compatibleWeapons).includes(currentWeapon.weapon.name) : true
  const dispatch = useDispatch()

  const handleChange = useCallback(
    (...args) => {
      const value = args[0].value
      dispatch(changeWeapon(weaponField, value))
      logSelection('Weapon', value)
    },
    [dispatch, weaponField]
  )

  return Object.keys(compatibleWeapons).length ? (
    <Select
      options={options}
      value={value}
      styles={valid ? {} : errorStyle}
      onChange={handleChange}
      isSearchable={false}
    />
  ) : null
}
