import React, { useCallback } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';

import { Ancestries } from '../../data/ancestries'
import { convertToOptions } from './select';
import { warscrollActions, selectWarscroll } from '../../ducks/warscroll';
import { TAncestry } from '../../types/data';
import { titleCase } from '../../utils/text';


const nameFn = (item: TAncestry): string => { return item.name }
const nameAndCostFn = (item: TAncestry): string => { return titleCase(item.name) + ' (' + item.cost  + 'DP)' }

export const AncestryInput: React.FC = () => {
  const options = convertToOptions(Object.values(Ancestries), nameFn, nameAndCostFn)
  const { setAncestryByKey } = warscrollActions
  const dispatch = useDispatch()
  const { ancestry } = useSelector(selectWarscroll)
  const ancestryValue = ancestry ? convertToOptions([ancestry], nameFn, nameAndCostFn)[0] : ancestry

  const handleChange = useCallback(
    (...args) => {
      dispatch(setAncestryByKey(args[0].value))
    },
    [dispatch, setAncestryByKey]
  )

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={ancestryValue}
    />
  )
}