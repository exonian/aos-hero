import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContentEditable from "react-contenteditable";

import { selectWarscroll, warscrollActions } from "../../ducks/warscroll";
import { replaceSpecialChars } from "../../utils/text";
import { logRename } from "../../utils/analytics";
import { TAddedBeast } from "../../types/data";


export const BeastComponent: React.FC = () => {
  const state = useSelector(selectWarscroll)
  const addedBeast = state.beast as TAddedBeast
  const { claws, maw } = state

  const beast = addedBeast.beast
  const customName = addedBeast.customName
  
  const dispatch = useDispatch()
  const { editBeastCustomName } = warscrollActions

  const handleChange = useCallback(
    e => {
      const value = e.target.value
      dispatch(editBeastCustomName(value))
    },
    [dispatch, editBeastCustomName]
  )

  const handleBlur = useCallback(
    e => {
      const value = replaceSpecialChars(e.target.innerHTML)
      if (!value) {
        dispatch(editBeastCustomName(beast.name))
      }
      logRename(beast.name, value)
    },
    [dispatch, editBeastCustomName, beast.name]
  )

  const handleKeyDown = (e: { key: string; preventDefault: () => void; }) => {
    if (e.key === 'Enter') e.preventDefault()
  }

  return (
    <>
      <h4>{beast.beastAbilityName}</h4>
      <p><>This model's </>
      <ContentEditable
        html={customName}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        tagName='span'
      />
      <> attacks with its { claws && claws.customName } and { maw && maw.customName }.
         { beast.name === 'Minor Beast' && ` For rules purposes it is treated the same as a mount.` }</></p>
    </>
  )
}
