import React, { useCallback } from 'react'
import ContentEditable from 'react-contenteditable'
import { useDispatch } from 'react-redux';

import { TAddedAbility } from '../types/data';
import { editAbilityCustomName } from '../ducks/warscroll';
import { logRename } from '../utils/analytics';

interface IAbilityProps {
  addedAbility: TAddedAbility
}

export const AbilityComponent: React.FC<IAbilityProps> = props => {
  const { addedAbility } = props
  const ability = addedAbility.ability
  const customName = addedAbility.customName
  const dispatch = useDispatch()

  const handleCustomNameChange = useCallback(
    e => {
      const value = e.target.value
      dispatch(editAbilityCustomName(ability.name, value))
    },
    [dispatch, ability.name]
  )

  const handleCustomNameBlur = useCallback(
    e => {
      const value = e.target.innerHTML
      if (!value) {
        dispatch(editAbilityCustomName(ability.name, ability.name))
      }
      logRename(ability.name, value)
    },
    [dispatch, ability.name]
  )

  return (
    <div>
      <ContentEditable
        html={customName}
        disabled={ability.cannotRename === true}
        onChange={handleCustomNameChange}
        onBlur={handleCustomNameBlur}
        tagName='h4'
      />
      <p>{ability.description.replace("<NAME>", customName)}</p>
    </div>
  )
}
