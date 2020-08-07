import React from 'react'
import { useSelector } from 'react-redux'

import { selectWarscroll } from '../../ducks/warscroll'
import { AbilitiesComponent } from './abilities';
import { calculateCost } from '../../utils/cost';
import { WeaponsComponent } from './weapons';
import { DescriptionComponent } from './description';
import { TitleEditable } from '../input/titleEditable';
import { calculateKeywords } from '../../utils/keywords';
import { calculateStats } from '../../utils/stats';
import { BeastComponent } from './beast';
import { StatsComponent } from './stats';
import { KeywordsComponent } from './keywords';
import { DamageTableComponent } from './damageTable';

export const WarscrollComponent: React.FC = () => {
  const warscrollState = useSelector(selectWarscroll)
  const keywords = calculateKeywords(warscrollState)
  const { abilities, ancestry, beast, title } = warscrollState

  const enhancements = abilities.filter(addedAbility => addedAbility.ability.enhancement)
  const stats = calculateStats({'ancestry': ancestry, 'enhancements': enhancements})

  const cost = calculateCost(warscrollState)

  return (
    <div>
      <TitleEditable title={title} cost={cost} />
      <StatsComponent stats={stats} />
      <KeywordsComponent keywords={keywords} />
      <DescriptionComponent />
      { beast && <BeastComponent /> }
      <WeaponsComponent />
      { beast && beast.beast.damageTable && <DamageTableComponent /> }
      <AbilitiesComponent addedAbilities={abilities} />
    </div>
  )
}
