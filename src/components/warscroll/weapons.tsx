import React from 'react'
import { useSelector } from 'react-redux';
import { selectWarscroll } from '../../ducks/warscroll';
import { WeaponComponent } from './weapon';

export const WeaponsComponent = () => {
  const warscrollState = useSelector(selectWarscroll)
  const { weaponOne, weaponTwo } = warscrollState

  return (
    <>
      <WeaponComponent addedWeapon={weaponOne} />
      <WeaponComponent addedWeapon={weaponTwo} />
    </>
  )
}
