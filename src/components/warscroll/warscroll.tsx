import React from 'react'
import { useSelector } from 'react-redux'

import { selectWarscroll } from '../../ducks/warscroll'
import { AbilitiesComponent } from './abilities';
import { calculateSave } from '../../utils/save';
import { TAbility } from '../../types/data';
import { calculateCost } from '../../utils/cost';
import { WeaponsComponent } from './weapons';
import { DescriptionComponent } from './description';
import { TitleEditable } from '../input/titleEditable';

export const WarscrollComponent: React.FC = () => {
  const warscrollState = useSelector(selectWarscroll)
  const { abilities, ancestry, archetype, armyKeywords, title } = warscrollState
  const ancestryKeywords = ancestry ? ancestry.keywords : []
  const archetypeKeywords = archetype ? archetype.keywords : []
  const combinedKeywords = ancestryKeywords.concat(armyKeywords, "HERO", archetypeKeywords)

  const enhancements = abilities.reduce((accum, item) => {
    if (item.ability.enhancement) accum.push(item.ability)
    return accum
  }, [] as TAbility[])
  const statsInputs = {'ancestry': ancestry, 'enhancements': enhancements}

  const wounds = ancestry ? ancestry.wounds : null
  const movement = ancestry ? ancestry.movement : null
  const save = calculateSave(statsInputs)
  const bravery = ancestry ? ancestry.bravery : null
  const cost = calculateCost(warscrollState)

  return (
    <div>
      <TitleEditable title={title} cost={cost} />
      {ancestry ?
        <>
          <p>
            { combinedKeywords.join(', ') }
          </p>
          <ul>
            <li className="warscrollStat">WOUNDS: {wounds}</li>
            <li className="warscrollStat">MOVEMENT: {movement}"</li>
            <li className="warscrollStat">SAVE: {save}+</li>
            <li className="warscrollStat">BRAVERY: {bravery}</li>
          </ul>
        </>
      : ''}
      <DescriptionComponent />
      <WeaponsComponent />
      <AbilitiesComponent addedAbilities={abilities} />
    </div>
  )
}
