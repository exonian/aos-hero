import React, { useCallback } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';

import { Ancestries } from '../../data/ancestries'
import { convertToOptions } from './select';
import { selectWarscroll, changeAncestry } from '../../ducks/warscroll';
import { TAncestry } from '../../types/data';
import { titleCase } from '../../utils/text';
import { logSelection } from '../../utils/analytics';
import { ArmyKeywordInput } from './army_keyword';


const nameFn = (item: TAncestry): string => { return item.name }
const nameAndCostFn = (item: TAncestry): string => { return titleCase(item.name) + ' (' + item.cost  + 'DP)' }

export const AncestryInput: React.FC = () => {
  const options = convertToOptions(Object.values(Ancestries), nameFn, nameAndCostFn)
  const dispatch = useDispatch()
  const { ancestry } = useSelector(selectWarscroll)
  const ancestryValue = ancestry ? convertToOptions([ancestry], nameFn, nameAndCostFn)[0] : ancestry

  const handleChange = useCallback(
    (...args) => {
      const value = args[0].value
      dispatch(changeAncestry(value))
      logSelection('Ancestry', value)
    },
    [dispatch]
  )

  return (
    <div className="form-group">
      <label htmlFor="ancestryInput">Ancestry</label>
      <Select
        id="ancestryInput"
        options={options}
        onChange={handleChange}
        value={ancestryValue}
        isSearchable={false}
      />
      { ancestry && ancestry.armyKeywords && <ArmyKeywordInput /> }
    </div>
  )
}