import React from 'react'
import { useSelector } from 'react-redux';

import { TitleInput } from './input/title';
import { AncestryInput } from './input/ancestry';
import { ArchetypeInput } from './input/archetype';
import { ArmyKeywordInput } from './input/army_keyword';
import { selectWarscroll } from '../ducks/warscroll';
import { WeaponInputs } from './input/weapons';
import { BeastInput } from './input/beast';

export const EditorComponent: React.FC = () => {
  const { ancestry } = useSelector(selectWarscroll)

  return (
    <div>
      <TitleInput />
      <AncestryInput />
      { ancestry && ancestry.armyKeywords && <ArmyKeywordInput /> }
      { ancestry && <ArchetypeInput /> }
      <WeaponInputs />
      <BeastInput />
    </div>
  )
}
