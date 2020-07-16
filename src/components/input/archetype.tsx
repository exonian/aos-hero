import React, { useCallback } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';

import { convertToOptions } from './select';
import { warscrollActions, selectWarscroll } from '../../ducks/warscroll';
import { Archetypes } from '../../data/archetypes';

export const ArchetypeInput: React.FC = () => {
  const options = convertToOptions(Object.keys(Archetypes))
  const { setArchetypeByKey } = warscrollActions
  const dispatch = useDispatch()
  const { archetype } = useSelector(selectWarscroll)
  const archetypeValue = archetype ? convertToOptions([archetype.name])[0] : archetype

  const handleChange = useCallback(
    (...args) => {
      dispatch(setArchetypeByKey(args[0].value))
    },
    [dispatch, setArchetypeByKey]
  )

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={archetypeValue}
    />
  )
}