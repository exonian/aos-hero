import React from 'react'
import { TAbility } from '../types/data';
import { AbilityComponent } from './ability';

interface IAbilitiesProps {
  abilities: TAbility[]
}

export const AbilitiesComponent: React.FC<IAbilitiesProps> = props => {
  const { abilities } = props

  return (
    <>
      {abilities.map((ability, i) => {
        return <AbilityComponent ability={ability} />
      })}
    </>
  )
}
