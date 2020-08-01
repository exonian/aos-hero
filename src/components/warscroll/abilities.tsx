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
        const key = `${addedAbility.ability.name}-${addedAbility.source}`
        return <AbilityComponent addedAbility={addedAbility} key={key} />
      })}
    </>
  )
}
