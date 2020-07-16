import React, { useCallback } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';

import { convertArraysToOptions } from './select';
import { warscrollActions, selectWarscroll } from '../../ducks/warscroll';

export const ArmyKeywordInput: React.FC = () => {
  const { ancestry } = useSelector(selectWarscroll)
  const options = ancestry ? convertArraysToOptions(ancestry.armyKeywords) : []

  const { setArmyKeywords } = warscrollActions
  const dispatch = useDispatch()

  const { armyKeywords } = useSelector(selectWarscroll)
  const armyKeywordValue = armyKeywords ? convertArraysToOptions([armyKeywords])[0] : null

  const handleChange = useCallback(
    (...args) => {
      dispatch(setArmyKeywords(args[0].value.split('|')))
    },
    [dispatch, setArmyKeywords]
  )

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={armyKeywordValue}
    />
  )
}