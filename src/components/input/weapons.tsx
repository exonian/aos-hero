import React from "react";
import { BoughtEnhancementInputs } from "./boughtEnhancements";

import { WeaponInput } from "./weapon";

export const WeaponInputs: React.FC = () => {
  return (
    <div className="form-group">
      <label>Weapons</label>
      <WeaponInput weaponField="weaponOne" />
      <BoughtEnhancementInputs target="weaponOne" />
      <WeaponInput weaponField="weaponTwo" />
      <BoughtEnhancementInputs target="weaponTwo" />
    </div>
  )
}
