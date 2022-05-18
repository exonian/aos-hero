import React, { useCallback } from 'react'
import Select from 'react-select'

import { convertToOptions } from './select';
import { TEnhancementTarget, TEnhancement, TEnhancements } from '../../types/data';
import { BuyableEnhancements } from '../../data/buyableAbilities';
import { titleCase } from '../../utils/text';
import { logSelection } from '../../utils/analytics';
import { useDispatch, useSelector } from 'react-redux';
import { addBoughtEnhancement, selectWarscroll } from '../../ducks/warscroll';
import { filterByRestrictions } from '../../utils/restrictions';
import { calculateKeywords } from '../../utils/keywords';


const nameFn = (item: TEnhancement): string => { return item.name }
const nameAndCostFn = (item: TEnhancement): string => { return titleCase(item.name) + ' (' + item.cost  + 'DP)' }

interface IBuyEnhancementInputsProps {
  target: TEnhancementTarget
}

export const BuyEnhancementInput: React.FC<IBuyEnhancementInputsProps> = props => {
  const { target } = props
  const state = useSelector(selectWarscroll)
  const { enhancements } = useSelector(selectWarscroll)

  const blankOption = {value: '', label: '-----'}
  const targetType = target === "weaponOne" || target === "weaponTwo" ? "weapon" : undefined
  const currentEnhancementNames = enhancements.map(addedEnhancement => addedEnhancement.enhancement.name)
  const unrestrictedBuyableEnhancements = filterByRestrictions(BuyableEnhancements, calculateKeywords(state)) as TEnhancements
  const availableBuyableEnhancements = Object.entries(unrestrictedBuyableEnhancements).reduce((accum, item) => {
    const [name, enhancement] = item
    if (!currentEnhancementNames.includes(name) && enhancement.target === targetType) accum.push(enhancement)
    return accum
  }, [] as TEnhancement[])
  const options = [blankOption].concat(convertToOptions(availableBuyableEnhancements, nameFn, nameAndCostFn))
  const value = blankOption
  const dispatch = useDispatch()

  const handleChange = useCallback(
    (...args) => {
      const value = args[0].value
      if (value) {
        dispatch(addBoughtEnhancement(value, target))
        logSelection('Bought Enhancement', value)
      }
    },
    [dispatch]
  )

  return (
    <Select
      options={options}
      onChange={handleChange}
      isSearchable={true}
      value={value}
    />
  )
}