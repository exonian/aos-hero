import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectWarscroll, warscrollActions } from "../../ducks/warscroll";
import { logRename } from "../../utils/analytics";

export const TitleInput: React.FC = () => {
  const { title } = useSelector(selectWarscroll)
  const { setTitle } = warscrollActions
  const dispatch = useDispatch()

  const handleChange = useCallback(
    (event: { target: { value: any; }; }) => {
      const value = event.target.value
      dispatch(setTitle(value))
    },
    [dispatch, setTitle]
  )

  const handleBlur = useCallback(
    e => {
      const value = e.target.value.trim()
      if (!value) {
        dispatch(setTitle('Untitled'))
      }
      logRename('Title', value)
    },
    [dispatch, setTitle]
  )

  return (
    <input
      className="form-control form-control-md"
      placeholder="Name your hero"
      type="text"
      value={title}
      onChange={handleChange}
      onBlur={handleBlur}
      tabIndex={0}
    /> 
  )
}
