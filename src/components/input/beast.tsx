import React, { useCallback } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';

import { convertToOptions } from './select';
import { selectWarscroll, changeBeast } from '../../ducks/warscroll';
import { filterByRestrictions } from '../../utils/restrictions';
import { logSelection } from '../../utils/analytics';
import { errorStyle } from '../selectStyles';
import { Beasts } from '../../data/beasts';
import { TBeast } from '../../types/data';
import { titleCase } from '../../utils/text';
import { calculateKeywords } from '../../utils/keywords';


const nameFn = (item: TBeast): string => { return item.name }
const nameAndCostFn = (item: TBeast): string => { return titleCase(item.name) + ' (' + item.cost  + 'DP)' }

export const BeastInput: React.FC = () => {
  const state = useSelector(selectWarscroll)
  const { beast } = state

  const beasts = filterByRestrictions(Beasts, calculateKeywords(state))
  const options = [{value: '', label: '-----'}].concat(convertToOptions(Object.values(beasts), nameFn, nameAndCostFn))
  const value = beast ? convertToOptions([beast.beast], nameFn, nameAndCostFn)[0] : beast
  const valid = beast ? Object.keys(beasts).includes(beast.beast.name) : true

  const dispatch = useDispatch()

  const handleChange = useCallback(
    (...args) => {
      dispatch(changeBeast(args[0].value))
      logSelection('Beast', args[0].value)
    },
    [dispatch]
  )

  return (
    <div className="form-group">
      <label htmlFor="beastInput">Beast</label>
      <Select
        id="beastInput"
        options={options}
        onChange={handleChange}
        value={value}
        styles={valid ? {} : errorStyle}
        isSearchable={false}
      />
    </div>
  )
}