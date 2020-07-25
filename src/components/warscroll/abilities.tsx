import React from 'react'
import { TAddedAbility } from '../../types/data';
import { AbilityComponent } from './ability';

interface IAbilitiesProps {
  addedAbilities: TAddedAbility[]
}

export const AbilitiesComponent: React.FC<IAbilitiesProps> = props => {
  const { addedAbilities } = props

  return (
    <>
      {addedAbilities.map((addedAbility, i) => {
        return <AbilityComponent addedAbility={addedAbility} key={addedAbility.ability.name} />
      })}
    </>
  )
}
