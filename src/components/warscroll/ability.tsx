import React, { useCallback } from 'react'
import ContentEditable from 'react-contenteditable'
import { useDispatch, useSelector } from 'react-redux';

import { TAddedAbility } from '../../types/data';
import { editAbilityCustomName, selectWarscroll } from '../../ducks/warscroll';
import { logRename } from '../../utils/analytics';
import { replaceSpecialChars } from '../../utils/text';
import { replaceWarscrollValues } from '../../utils/dynamicStrings';

interface IAbilityProps {
  addedAbility: TAddedAbility
}

export const AbilityComponent: React.FC<IAbilityProps> = props => {
  const { addedAbility } = props
  const ability = addedAbility.ability
  const customName = addedAbility.customName
  const state = useSelector(selectWarscroll)
  const dispatch = useDispatch()

  let description = replaceWarscrollValues(ability.description, state)
  description = description.replace("<NAME>", customName)
  description = replaceSpecialChars(description)

  const handleCustomNameChange = useCallback(
    e => {
      const value = e.target.value
      dispatch(editAbilityCustomName(ability.name, value))
    },
    [dispatch, ability.name]
  )

  const handleCustomNameBlur = useCallback(
    e => {
      const value = replaceSpecialChars(e.target.innerHTML)
      if (!value) {
        dispatch(editAbilityCustomName(ability.name, ability.name))
      }
      logRename(ability.name, value)
    },
    [dispatch, ability.name]
  )

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  }

  return (
    <div>
      <ContentEditable
        html={customName}
        disabled={ability.cannotRename === true}
        onChange={handleCustomNameChange}
        onBlur={handleCustomNameBlur}
        onKeyDown={handleKeyDown}
        tagName='h4'
      />
      <p>{description}</p>
    </div>
  )
}
