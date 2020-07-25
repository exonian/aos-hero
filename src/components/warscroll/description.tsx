import React from "react";
import { useSelector } from "react-redux";

import { selectWarscroll } from "../../ducks/warscroll";


export const DescriptionComponent: React.FC = () => {
  const warscrollState = useSelector(selectWarscroll)
  const { title, weaponOne, weaponTwo } = warscrollState

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

  return (
    <>
      <h4>Description</h4>
      <p>A {title} is a single model{weaponString}.</p>
    </>
  )
}

