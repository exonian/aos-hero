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

export const WarscrollComponent: React.FC = () => {
  const warscrollState = useSelector(selectWarscroll)
  const keywords = calculateKeywords(warscrollState)
  const { abilities, ancestry, beast, title } = warscrollState

  const enhancements = abilities.reduce((accum, item) => {
    if (item.ability.enhancement) accum.push(item.ability)
    return accum
  }, [] as TAbility[])
  const { wounds, movement, save, bravery } = calculateStats({'ancestry': ancestry, 'enhancements': enhancements})

  const cost = calculateCost(warscrollState)

  return (
    <div>
      <TitleEditable title={title} cost={cost} />
      {ancestry ?
        <>
          <p>
            { keywords.join(', ') }
          </p>
          <ul>
            <li className="warscrollStat">WOUNDS: {wounds}</li>
            <li className="warscrollStat">MOVEMENT: {movement < 100 ? movement + `"` : `*`}</li>
            <li className="warscrollStat">SAVE: {save}+</li>
            <li className="warscrollStat">BRAVERY: {bravery}</li>
          </ul>
        </>
      : ''}
      <DescriptionComponent />
      { beast && <BeastComponent /> }
      <WeaponsComponent />
      <AbilitiesComponent addedAbilities={abilities} />
    </div>
  )
}
