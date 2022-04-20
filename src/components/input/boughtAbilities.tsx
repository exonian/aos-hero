import React from "react";
import { useSelector } from "react-redux";
import { selectWarscroll } from "../../ducks/warscroll";
import { BuyAbilityInput } from "./buyAbility";
import { BoughtAbilityComponent } from "./boughtAbility";

interface IBoughtAbilityInputsProps {
  target: "claws" | "maw" | "weaponOne" | "weaponTwo" | null
}

export const BoughtAbilityInputs: React.FC<IBoughtAbilityInputsProps> = props => {
  const { target } = props
  const { abilities } = useSelector(selectWarscroll)
  const boughtAbilities = abilities.filter(addedAbility => !addedAbility.addedBy)

  return (
    <div className="form-group">
      <label>Options</label>
      <div className="card">
        <ul className="list-group list-group-flush">
          {boughtAbilities.map((addedAbility, i) => <BoughtAbilityComponent addedAbility={addedAbility} key={ addedAbility.ability.name } />)}
        </ul>
      </div>
      <BuyAbilityInput target={ target } />
    </div>
  )
}
