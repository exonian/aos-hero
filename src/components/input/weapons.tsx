import React from "react";

import { WeaponInput } from "./weapon";

export const WeaponInputs: React.FC = () => {
  return (
    <div className="form-group">
      <label>Weapons</label>
      <WeaponInput weaponField="weaponOne" />
      <WeaponInput weaponField="weaponTwo" />
    </div>
  )
}
