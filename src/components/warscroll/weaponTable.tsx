import React from "react";

import { TWeapon } from "../../types/data";


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
          <td>{ weapon.range }"</td>
          <td>{ weapon.attacks }</td>
          <td>{ weapon.toHit }+</td>
          <td>{ weapon.toWound }+</td>
          <td>-{ weapon.rend ? weapon.rend : '' }</td>
          <td>{ weapon.damage }</td>
        </tr>
      </tbody>
    </table>
  )
}