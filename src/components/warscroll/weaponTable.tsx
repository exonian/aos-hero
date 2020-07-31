import React from "react";

import { TWeapon } from "../../types/data";
import { statDisplayValue } from "../../utils/stats";


interface IWeaponProfileProps {
  weapon: TWeapon
}

export const WeaponProfile: React.FC<IWeaponProfileProps> = props => {
  const { weapon } = props

  return (
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
          <td>{ statDisplayValue(weapon.range, `"`) }</td>
          <td>{ statDisplayValue(weapon.attacks) }</td>
          <td>{ statDisplayValue(weapon.toHit, `+`) }</td>
          <td>{ statDisplayValue(weapon.toWound, `+`) }</td>
          <td>-{ weapon.rend ? weapon.rend : '' }</td>
          <td>{ statDisplayValue(weapon.damage) }</td>
        </tr>
      </tbody>
    </table>
  )
}