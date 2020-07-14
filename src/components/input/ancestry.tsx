import React from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';

import { Ancestries } from '../../data/ancestries'
import { convertToOptions } from './select';
import { warscrollActions, selectWarscroll } from '../../ducks/warscroll';

export const AncestryInput: React.FC = () => {
  const options = convertToOptions(Object.keys(Ancestries))
  const { setAncestryByKey } = warscrollActions
  const dispatch = useDispatch()
  const { ancestry } = useSelector(selectWarscroll)
  const ancestryValue = ancestry ? convertToOptions([ancestry.name])[0] : ancestry

  const handleChange = () => dispatch(setAncestryByKey(options[0].value))

  return (
    <Select
      options={options}
      isClearable={true}
      isSearchable={true}
      onChange={handleChange}
      value={ancestryValue}
    />
  )
}