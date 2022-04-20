import React from "react";
import { BoughtAbilityInputs } from "./boughtAbilities";

import { WeaponInput } from "./weapon";

export const WeaponInputs: React.FC = () => {
  return (
    <div className="form-group">
      <label>Weapons</label>
      <WeaponInput weaponField="weaponOne" />
      <BoughtAbilityInputs target="weaponOne" />
      <WeaponInput weaponField="weaponTwo" />
      <BoughtAbilityInputs target="weaponTwo" />
    </div>
  )
}
