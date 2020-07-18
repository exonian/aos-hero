import React from 'react'
import { TAbility } from '../types/data';

interface IAbilityProps {
  ability: TAbility
}

export const AbilityComponent: React.FC<IAbilityProps> = props => {
  const { ability } = props

  return (
    <div>
      <h4>{ability.name}</h4>
      <p>{ability.description}</p>
    </div>
  )
}
