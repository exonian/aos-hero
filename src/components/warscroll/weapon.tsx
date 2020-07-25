import React from "react";

import { TAddedWeapon, TWeapon } from "../../types/data";

interface IAbilityProps {
  addedWeapon: TAddedWeapon | null
}

export const WeaponComponent: React.FC<IAbilityProps> = props => {
  const { addedWeapon } = props
  const weapon = addedWeapon ? addedWeapon.weapon as TWeapon: null
  const customName = addedWeapon && addedWeapon.customName

  if (!weapon || weapon.type.name === "shield") return null

  return (
    <>
      <h4>{ customName }</h4>
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
