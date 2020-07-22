import React, { useCallback } from 'react'
import ContentEditable from 'react-contenteditable'
import { useDispatch } from 'react-redux';

import { TAddedAbility } from '../types/data';
import { editAbilityCustomName } from '../ducks/warscroll';
import { logSelection } from '../utils/analytics';

interface IAbilityProps {
  addedAbility: TAddedAbility
}

export const AbilityComponent: React.FC<IAbilityProps> = props => {
  const { addedAbility } = props
  const ability = addedAbility.ability
  const customName = addedAbility.customName || ability.name
  const dispatch = useDispatch()

  const handleCustomNameChange = useCallback(
    e => {
      const value = e.target.value
      dispatch(editAbilityCustomName(ability.name, value))
      logSelection('Custom ability name', value)
    },
    [dispatch, ability.name]
  )

  return (
    <div>
      <ContentEditable
        html={customName}
        disabled={ability.cannotRename === true}
        onChange={handleCustomNameChange}
        tagName='h4'
      />
      <p>{ability.description}</p>
    </div>
  )
}
