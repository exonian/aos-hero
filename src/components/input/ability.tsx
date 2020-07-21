import React, { useCallback } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';

import { convertToOptions } from './select';
import { selectWarscroll, changeAbility } from '../../ducks/warscroll';
import { TArchetype } from '../../types/data';
import { logSelection } from '../../utils/analytics';


interface IAbilityInputProps {
  abilityChoices: string[]
  source?: TArchetype|null
}

export const AbilityInput: React.FC<IAbilityInputProps> = props => {
  const { abilityChoices, source } = props

  const options = convertToOptions(abilityChoices)
  const dispatch = useDispatch()
  const { abilities } = useSelector(selectWarscroll)
  const currentAbilityNames = abilities.map(addedAbility => {return addedAbility.ability.name})
  const selected = abilityChoices.filter(ability => currentAbilityNames.includes(ability))
  const abilityValue = selected.length ? convertToOptions(selected)[0] : ['', '']

  const handleChange = useCallback(
    (...args) => {
      dispatch(changeAbility(args[0].value, source))
      logSelection('Ability', args[0].value)
    },
    [dispatch, source]
  )

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={abilityValue}
    />
  )
}