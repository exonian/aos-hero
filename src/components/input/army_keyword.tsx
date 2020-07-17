import React, { useCallback } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';

import { convertToOptions, } from './select';
import { warscrollActions, selectWarscroll } from '../../ducks/warscroll';
import { titleCase } from '../../utils/text';


const pipeJoinStrings = (item: string[]): string => { return item.join('|') }
const commaJoinStrings = (item: string[]): string => { return titleCase(item.join(', ')) }

export const ArmyKeywordInput: React.FC = () => {
  const { ancestry } = useSelector(selectWarscroll)
  const options = ancestry ? convertToOptions(ancestry.armyKeywords, pipeJoinStrings, commaJoinStrings) : []

  const { setArmyKeywords } = warscrollActions
  const dispatch = useDispatch()

  const { armyKeywords } = useSelector(selectWarscroll)
  const armyKeywordValue = armyKeywords ? convertToOptions([armyKeywords], pipeJoinStrings, commaJoinStrings)[0] : null

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