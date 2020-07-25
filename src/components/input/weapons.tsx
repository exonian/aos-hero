import React from "react";

import { WeaponInput } from "./weapon";

export const WeaponInputs: React.FC = () => {
  return (
    <>
      <WeaponInput weaponField="weaponOne" />
      <WeaponInput weaponField="weaponTwo" />
    </>
  )
}

