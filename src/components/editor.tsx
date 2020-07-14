import React from 'react'
import { useSelector } from 'react-redux';

import { TitleInput } from './input/title';
import { AncestryInput } from './input/ancestry';
import { ArmyKeywordInput } from './input/army_keyword';
import { selectWarscroll } from '../ducks/warscroll';

export const EditorComponent: React.FC = () => {
  const { ancestry } = useSelector(selectWarscroll)

  return (
    <div>
      <TitleInput />
      <AncestryInput />
      { ancestry && ancestry.armyKeywords && <ArmyKeywordInput /> }
    </div>
  )
}
