import React from "react";
import { useSelector } from "react-redux";

import { selectWarscroll } from "../../ducks/warscroll";
import { replaceSpecialChars } from "../../utils/text";


export const DescriptionComponent: React.FC = () => {
  const warscrollState = useSelector(selectWarscroll)
  const { article, title, weaponOne, weaponTwo } = warscrollState

  let weaponString = ``
  if (weaponOne || weaponTwo) {
    weaponString += ` armed with `
    if (weaponOne && weaponTwo) {
      weaponString += `${weaponOne.customName} and ${weaponTwo.customName}`
    }
    else {
      weaponString += `${weaponOne ? weaponOne.customName : ''}${weaponTwo ? weaponTwo.customName : ''}`
    }
  }
  weaponString = replaceSpecialChars(weaponString)

  return (
    <>
      <h4>Description</h4>
      <p>{article} {title} is a single model{weaponString}.</p>
    </>
  )
}

