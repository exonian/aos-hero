import React, { useCallback } from "react";

import { TAddedAbility } from "../../types/data";
import { removeBoughtAbility } from "../../ducks/warscroll";
import { useDispatch } from "react-redux";
import { logRemoval } from "../../utils/analytics";


interface IBoughtAbilityProps {
  addedAbility: TAddedAbility
}

export const BoughtAbilityComponent: React.FC<IBoughtAbilityProps> = props => {
  const { addedAbility } = props
  const ability = addedAbility.ability
  const dispatch = useDispatch()
  const ariaLabel = `Remove ${ability.name}`

  const handleRemovalClick = useCallback(
    e => {
      dispatch(removeBoughtAbility(ability.name))
      logRemoval('Bought Ability', ability.name)
    },
    [dispatch, ability.name]
  )

  return (
    <div>
      <button type="button" className="close" aria-label={ariaLabel} onClick={handleRemovalClick}>
        <span aria-hidden="true">&times;</span>
      </button>
      <p>{ ability.name } ({ ability.cost }DP)</p>
    </div>
  )
}
