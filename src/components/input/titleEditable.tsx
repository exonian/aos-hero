import React, { useCallback } from 'react'
import ContentEditable from 'react-contenteditable'
import { useDispatch } from 'react-redux';

import { warscrollActions } from '../../ducks/warscroll';
import { logRename } from '../../utils/analytics';
import { replaceSpecialChars } from '../../utils/text';


interface ITitleEditableProps {
  title: string
  cost: number | null
}

export const TitleEditable: React.FC<ITitleEditableProps> = props => {
  const {cost, title} = props
  const { setTitle } = warscrollActions
  const dispatch = useDispatch()

  const handleChange = useCallback(
    e => {
      const value = e.target.value
      dispatch(setTitle(value))
    },
    [dispatch, setTitle]
  )

  const handleBlur = useCallback(
    e => {
      const value = replaceSpecialChars(e.target.innerHTML)
      if (!value) {
        dispatch(setTitle('Untitled'))
      }
      logRename('Title', value)
    },
    [dispatch, setTitle]
  )

  return (
    <h2>
      <ContentEditable
        html={title}
        onChange={handleChange}
        onBlur={handleBlur}
        tagName='span'
      />
      { cost && (<> ({cost}DP)</>)}
    </h2>
  )
}

