import React from "react";
import { useSelector } from "react-redux";
import { selectWarscroll } from "../../ducks/warscroll";
import { BuyAbilityInput } from "./buyAbility";
import { BoughtAbilityComponent } from "./boughtAbility";

export const BoughtAbilityInputs: React.FC = () => {
  const { abilities } = useSelector(selectWarscroll)
  const boughtAbilities = abilities.filter(addedAbility => !addedAbility.source)

  return (
    <>
      <div className="card">
        <ul className="list-group list-group-flush">
          {boughtAbilities.map((addedAbility, i) => <BoughtAbilityComponent addedAbility={addedAbility} key={ addedAbility.ability.name } />)}
        </ul>
      </div>
      <BuyAbilityInput />
    </>
  )
}

