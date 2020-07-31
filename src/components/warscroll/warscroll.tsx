import React from 'react'
import { useSelector } from 'react-redux'

import { selectWarscroll } from '../../ducks/warscroll'
import { AbilitiesComponent } from './abilities';
import { TAbility } from '../../types/data';
import { calculateCost } from '../../utils/cost';
import { WeaponsComponent } from './weapons';
import { DescriptionComponent } from './description';
import { TitleEditable } from '../input/titleEditable';
import { calculateKeywords } from '../../utils/keywords';
import { calculateStats } from '../../utils/stats';
import { BeastComponent } from './beast';
import { StatsComponent } from './stats';
import { KeywordsComponent } from './keywords';

export const WarscrollComponent: React.FC = () => {
  const warscrollState = useSelector(selectWarscroll)
  const keywords = calculateKeywords(warscrollState)
  const { abilities, ancestry, beast, title } = warscrollState

  const enhancements = abilities.reduce((accum, item) => {
    if (item.ability.enhancement) accum.push(item.ability)
    return accum
  }, [] as TAbility[])
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
      <AbilitiesComponent addedAbilities={abilities} />
    </div>
  )
}
