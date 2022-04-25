import React, { useCallback } from "react";

import { TAddedAbility, TAddedEnhancement } from "../../types/data";
import { incrementBoughtEnhancement } from "../../ducks/warscroll";
import { useDispatch } from "react-redux";
import { logRemoval, logOptionEvent } from "../../utils/analytics";
import { MAX_ENHANCEMENT_COUNT } from "../../data/abilities";


interface IBoughtEnhancementProps {
  addedEnhancement: TAddedEnhancement
}

export const BoughtEnhancementComponent: React.FC<IBoughtEnhancementProps> = props => {
  const { addedEnhancement } = props
  const enhancement = addedEnhancement.enhancement
  const dispatch = useDispatch()

  const handleIncrementClick = useCallback(
    e => {
      dispatch(incrementBoughtEnhancement(enhancement.name, 1))
      logOptionEvent('Bought Enhancement', 'Increment', enhancement.name)
    },
    [dispatch, enhancement.name]
  )

  const handleDecrementClick = useCallback(
    e => {
      dispatch(incrementBoughtEnhancement(enhancement.name, -1))
      logOptionEvent('Bought Enhancement', 'Decrement', enhancement.name)
    },
    [dispatch, enhancement.name]
  )

  return (
    <li className="list-group-item">
      <button type="button" className="close" aria-label={`Add ${enhancement.name}`} onClick={handleIncrementClick} disabled={addedEnhancement.targets.length >= MAX_ENHANCEMENT_COUNT}>
        <span aria-hidden="true">&#43;</span>
      </button>
      <button type="button" className="close" aria-label={`Remove ${enhancement.name}`} onClick={handleDecrementClick}>
        <span aria-hidden="true">&minus;</span>
      </button>
      {/* <p>{ addedEnhancement.count } &times; { enhancement.name } ({ enhancement.cost && enhancement.cost * addedEnhancement.count }DP)</p> */}
    </li>
  )
}
