import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { replaceSpecialChars } from "../../utils/text";
import { TAddedAbility } from "../../types/data";
import { selectWarscroll, switchAbilityTarget } from "../../ducks/warscroll";
import { logOptionEvent } from "../../utils/analytics";


interface ITargetWeaponProps {
  addedAbility: TAddedAbility
}

export const TargetWeaponComponent: React.FC<ITargetWeaponProps> = props => {
  const { addedAbility } = props
  const warscrollState = useSelector(selectWarscroll)
  const dispatch = useDispatch()

  const targetField = addedAbility.target
  const alternativeField = targetField === "weaponOne" ? "weaponTwo" : "weaponOne"
  const target = targetField ? warscrollState[targetField] : null
  const alternative = targetField ? warscrollState[alternativeField] : null
  const targetCustomName = target ? replaceSpecialChars(target.customName) : ''
  const alternativeCustomName = alternative ? replaceSpecialChars(alternative.customName) : ''

  const changeTarget = useCallback(
    e => {
      dispatch(switchAbilityTarget(addedAbility))
      logOptionEvent('Bought Ability', 'Change target', addedAbility.ability.name)
    },
    [dispatch, addedAbility]
  )

  return targetCustomName ? (
    <>
      <>&ndash; { targetCustomName } </>
      { alternativeCustomName &&
        <button type="button" className="btn btnn-link" onClick={changeTarget}>
          <span>&harr;</span>
        </button>
      }
    </>
  ) : null
}