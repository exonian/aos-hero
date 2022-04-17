import React, { useCallback } from "react";

import { TAddedAbility } from "../../types/data";
import { removeBoughtAbility, incrementBoughtAbility } from "../../ducks/warscroll";
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

  const handleIncrementClick = useCallback(
    e => {
      dispatch(incrementBoughtAbility(ability.name, 1))
      logOptionEvent('Bought Ability', 'Increment', ability.name)
    },
    [dispatch, ability.name]
  )

  const handleDecrementClick = useCallback(
    e => {
      dispatch(incrementBoughtAbility(ability.name, -1))
      logOptionEvent('Bought Ability', 'Decrement', ability.name)
    },
    [dispatch, ability.name]
  )

  return (
    <li className="list-group-item">
      { ability.enhancement ? (
        <>
          <button type="button" className="close" aria-label={`Add ${ability.name}`} onClick={handleIncrementClick} disabled={addedAbility.count >= MAX_ENHANCEMENT_COUNT}>
            <span aria-hidden="true">&#43;</span>
          </button>
          <button type="button" className="close" aria-label={`Remove ${ability.name}`} onClick={handleDecrementClick}>
            <span aria-hidden="true">&minus;</span>
          </button>
          <p>{ addedAbility.count } &times; { ability.name } ({ ability.cost && ability.cost * addedAbility.count }DP)</p>
        </>
      ) : (
        <>
          <button type="button" className="close" aria-label={`Remove ${ability.name}`} onClick={handleRemovalClick}>
            <span aria-hidden="true">&times;</span>
          </button>
          <p>{ ability.name } ({ ability.cost }DP)</p>
        </>
      )}
    </li>
  )
}
