import React from 'react'
import { useSelector } from 'react-redux';

import { TitleRow } from './input/title';
import { AncestryInput } from './input/ancestry';
import { ArchetypeInput } from './input/archetype';
import { selectWarscroll } from '../ducks/warscroll';
import { WeaponInputs } from './input/weapons';
import { BeastInput } from './input/beast';
import { BoughtAbilityInputs } from './input/boughtAbilities';

export const EditorComponent: React.FC = () => {
  const { ancestry } = useSelector(selectWarscroll)

  return (
    <div>
      <TitleRow />
      <AncestryInput />
      { ancestry && <ArchetypeInput /> }
      <WeaponInputs />
      <BeastInput />
      <BoughtAbilityInputs target={ null } />
    </div>
  )
}
