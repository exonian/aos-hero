import React from "react";

import { TStat } from "../../types/data";
import { statDisplayValue } from "../../utils/stats";


interface IWeaponProfileProps {
  stats: Record<string, TStat>
}

export const WeaponProfile: React.FC<IWeaponProfileProps> = props => {
  const { stats } = props

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
          <td>{ statDisplayValue(stats.range, `"`) }</td>
          <td>{ statDisplayValue(stats.attacks) }</td>
          <td>{ statDisplayValue(stats.toHit, `+`) }</td>
          <td>{ statDisplayValue(stats.toWound, `+`) }</td>
          <td>-{ stats.rend ? stats.rend : '' }</td>
          <td>{ statDisplayValue(stats.damage) }</td>
        </tr>
      </tbody>
    </table>
  )
}