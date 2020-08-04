import React, { useCallback } from "react";

import { TAddedAbility } from "../../types/data";
import { removeBoughtAbility, incrementBoughtAbility, selectWarscroll } from "../../ducks/warscroll";
import { useDispatch, useSelector } from "react-redux";
import { logRemoval, logOptionEvent } from "../../utils/analytics";
import { MAX_ENHANCEMENT_COUNT } from "../../data/abilities";
import { replaceSpecialChars } from "../../utils/text";


interface IBoughtAbilityProps {
  addedAbility: TAddedAbility
}

export const BoughtAbilityComponent: React.FC<IBoughtAbilityProps> = props => {
  const { addedAbility } = props
  const ability = addedAbility.ability
  const dispatch = useDispatch()
  const warscrollState = useSelector(selectWarscroll)
  const target = addedAbility.target ? warscrollState[addedAbility.target] : null
  const targetCustomName = target ? replaceSpecialChars(target.customName) : ''

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

  return ability.enhancement ? (
    <div>
      <button type="button" className="close" aria-label={`Add ${ability.name}`} onClick={handleIncrementClick} disabled={addedAbility.count >= MAX_ENHANCEMENT_COUNT}>
        <span aria-hidden="true">&#43;</span>
      </button>
      <button type="button" className="close" aria-label={`Remove ${ability.name}`} onClick={handleDecrementClick}>
        <span aria-hidden="true">&minus;</span>
      </button>
      <p>{ addedAbility.count } &times; { ability.name } { targetCustomName && <>&ndash; { targetCustomName }</> } ({ ability.cost && ability.cost * addedAbility.count }DP)</p>
    </div>
  ) : (
    <div>
      <button type="button" className="close" aria-label={`Remove ${ability.name}`} onClick={handleRemovalClick}>
        <span aria-hidden="true">&times;</span>
      </button>
      <p>{ ability.name } ({ ability.cost }DP)</p>
    </div>
  )
}
