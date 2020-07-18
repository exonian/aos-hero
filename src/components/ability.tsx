import React from 'react'
import { TAddedAbility } from '../types/data';

interface IAbilityProps {
  addedAbility: TAddedAbility
}

export const AbilityComponent: React.FC<IAbilityProps> = props => {
  const { addedAbility } = props
  const ability = addedAbility.ability

  return (
    <div>
      <h4>{ability.name}</h4>
      <p>{ability.description}</p>
    </div>
  )
}
