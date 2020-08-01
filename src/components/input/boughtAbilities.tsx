import React from "react";
import { useSelector } from "react-redux";
import { selectWarscroll } from "../../ducks/warscroll";
import { BuyAbilityInput } from "./buyAbility";

export const BoughtAbilityInputs: React.FC = () => {
  const { abilities } = useSelector(selectWarscroll)
  const boughtAbilities = abilities.filter(addedAbility => !addedAbility.source)

  return (
    <>
      {boughtAbilities.map((addedAbility, i) => {
        const key = `${addedAbility.ability.name}-${addedAbility.source}`
        return <p key={key}>{ addedAbility.customName }</p>
      })}
      <BuyAbilityInput />
    </>
  )
}

