import React from 'react'
import { useSelector } from 'react-redux';
import { selectWarscroll } from '../../ducks/warscroll';
import { WeaponComponent } from './weapon';

export const WeaponsComponent = () => {
  const warscrollState = useSelector(selectWarscroll)
  const { weaponOne, weaponTwo } = warscrollState

  return (
    <>
      { weaponOne ? <WeaponComponent addedWeapon={weaponOne} weaponField="weaponOne" /> : null }
      { weaponTwo ? <WeaponComponent addedWeapon={weaponTwo} weaponField="weaponTwo" /> : null }
    </>
  )
}
