import React, { useCallback } from "react";

import { TAddedAbility } from "../../types/data";
import { removeBoughtAbility } from "../../ducks/warscroll";
import { useDispatch } from "react-redux";
import { logRemoval, logOptionEvent } from "../../utils/analytics";
import { MAX_ENHANCEMENT_COUNT } from "../../data/abilities";


interface IBoughtAbilityProps {
  addedAbility: TAddedAbility
}

export const BoughtAbilityComponent: React.FC<IBoughtAbilityProps> = props => {
  const { addedAbility } = props
  const ability = addedAbility.ability
  const dispatch = useDispatch()

  const handleRemovalClick = useCallback(
    e => {
      dispatch(removeBoughtAbility(ability.name))
      logRemoval('Bought Ability', ability.name)
    },
    [dispatch, ability.name]
  )

  return (
    <li className="list-group-item">
      <button type="button" className="close" aria-label={`Remove ${ability.name}`} onClick={handleRemovalClick}>
        <span aria-hidden="true">&times;</span>
      </button>
      <p>{ ability.name } ({ ability.cost }DP)</p>
    </li>
  )
}
