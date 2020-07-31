import React from "react";
import { useSelector } from "react-redux";
import { selectWarscroll } from "../../ducks/warscroll";

export const BoughtAbilityInputs: React.FC = () => {
  const { abilities } = useSelector(selectWarscroll)
  const boughtAbilities = abilities.filter(addedAbility => !addedAbility.source)

  return (
    <>
      {boughtAbilities.map((addedAbility, i) => {
        return <p>{ addedAbility.customName }</p>
      })}
    </>
  )
}

