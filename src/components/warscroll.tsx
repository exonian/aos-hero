import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { selectWarscroll, warscrollActions } from '../ducks/warscroll'

export const WarscrollComponent: React.FC = () => {
  const { title } = useSelector(selectWarscroll)
  const { setTitle } = warscrollActions
  const dispatch = useDispatch()

  return (
    <div>
      <h2>{title}</h2>
      {/* <button onClick={() => dispatch(setTitle('New title'))}>Set title</button> */}
      <input
        className="form-control form-control-sm"
        placeholder="Name your hero"
        value={title}
        onChange={event => dispatch(setTitle(event.target.value))}
        tabIndex={0}
        autoFocus
      /> 
    </div>
  )
}
