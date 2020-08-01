import React, { useCallback } from 'react'
import Select from 'react-select'

import { convertToOptions } from './select';
import { TAbility } from '../../types/data';
import { BuyableAbilities } from '../../data/buyableAbilities';
import { titleCase } from '../../utils/text';
import { logSelection } from '../../utils/analytics';
import { useDispatch, useSelector } from 'react-redux';
import { addBoughtAbility, selectWarscroll } from '../../ducks/warscroll';


const nameFn = (item: TAbility): string => { return item.name }
const nameAndCostFn = (item: TAbility): string => { return titleCase(item.name) + ' (' + item.cost  + 'DP)' }

export const BuyAbilityInput: React.FC = () => {
  const state = useSelector(selectWarscroll)
  const { abilities } = state

  const blankOption = {value: '', label: '-----'}
  const currentAbilityNames = abilities.map(addedAbility => addedAbility.ability.name)
  const buyableAbilities = Object.entries(BuyableAbilities).reduce((accum, item) => {
    const [name, ability] = item
    if (!currentAbilityNames.includes(name)) accum.push(ability)
    return accum
  }, [] as TAbility[])
  const options = [blankOption].concat(convertToOptions(buyableAbilities, nameFn, nameAndCostFn))
  const value = blankOption
  const dispatch = useDispatch()

  const handleChange = useCallback(
    (...args) => {
      const value = args[0].value
      dispatch(addBoughtAbility(value))
      logSelection('Bought Ability', value)
    },
    [dispatch]
  )

  return (
    <Select
      options={options}
      onChange={handleChange}
      isSearchable={false}
      value={value}
    />
  )
}