import React, { useCallback } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';

import { convertToOptions } from './select';
import { warscrollActions, selectWarscroll } from '../../ducks/warscroll';

export const ArmyKeywordInput: React.FC = () => {
  const { ancestry } = useSelector(selectWarscroll)
  const options = ancestry ? convertToOptions(ancestry.armyKeywords) : []

  const { setArmyKeyword } = warscrollActions
  const dispatch = useDispatch()

  const { armyKeyword } = useSelector(selectWarscroll)
  const armyKeywordValue = armyKeyword ? convertToOptions([armyKeyword])[0] : null

  const handleChange = useCallback(
    (...args) => {
      dispatch(setArmyKeyword(args[0].value))
    },
    [dispatch, setArmyKeyword]
  )

  return (
    <Select
      options={options}
      onChange={handleChange}
      value={armyKeywordValue}
    />
  )
}