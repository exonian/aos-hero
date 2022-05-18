import React, { useCallback } from "react";

import { TAddedEnhancement } from "../../types/data";
import { removeBoughtEnhancement } from "../../ducks/warscroll";
import { useDispatch } from "react-redux";
import { logRemoval } from "../../utils/analytics";


interface IBoughtEnhancementProps {
  addedEnhancement: TAddedEnhancement
}

export const BoughtEnhancementComponent: React.FC<IBoughtEnhancementProps> = props => {
  const { addedEnhancement } = props
  const enhancement = addedEnhancement.enhancement
  const dispatch = useDispatch()

  const handleRemovalClick = useCallback(
    e => {
      dispatch(removeBoughtEnhancement(enhancement.name))
      logRemoval('Bought Ability', enhancement.name)
    },
    [dispatch, enhancement.name]
  )

  return (
    <li className="list-group-item">
      <button type="button" className="close" aria-label={`Remove ${enhancement.name}`} onClick={handleRemovalClick}>
        <span aria-hidden="true">&times;</span>
      </button>
      <p>{ enhancement.name } ({ enhancement.cost }DP)</p>
    </li>
  )
}
