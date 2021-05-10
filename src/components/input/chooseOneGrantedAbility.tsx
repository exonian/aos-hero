import React, { useCallback } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';

import { convertToOptions } from './select';
import { selectWarscroll, replaceGrantedAbility } from '../../ducks/warscroll';
import { TArchetype } from '../../types/data';
import { logSelection } from '../../utils/analytics';


interface IChooseOneGrantedAbilityInputProps {
  abilityChoices: string[]
  addedBy: TArchetype|null
}

export const ChooseOneGrantedAbilityInput: React.FC<IChooseOneGrantedAbilityInputProps> = props => {
  const { abilityChoices, addedBy } = props

  const options = convertToOptions(abilityChoices)
  const dispatch = useDispatch()
  const { abilities } = useSelector(selectWarscroll)
  const currentAbilityNames = abilities.map(addedAbility => {return addedAbility.ability.name})
  const selected = abilityChoices.filter(ability => currentAbilityNames.includes(ability))
  const abilityValue = selected.length ? convertToOptions(selected)[0] : ['', '']

  const handleChange = useCallback(
    (...args) => {
      dispatch(replaceGrantedAbility(args[0].value, addedBy))
      logSelection('Ability', args[0].value)
    },
    [dispatch, addedBy]
  )

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={abilityValue}
      isSearchable={false}
    />
  )
}