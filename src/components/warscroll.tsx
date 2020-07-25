import React from 'react'
import { useSelector } from 'react-redux'

import { selectWarscroll } from '../ducks/warscroll'
import { AbilitiesComponent } from './abilities';
import { calculateSave } from '../utils/save';
import { TAbility } from '../types/data';

export const WarscrollComponent: React.FC = () => {
  const { abilities, ancestry, archetype, armyKeywords, title } = useSelector(selectWarscroll)
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
  const cost = ancestry ? ancestry.cost : 0

  return (
    <div>
      <h2>{title} ({cost}DP)</h2>
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
      <AbilitiesComponent addedAbilities={abilities} />
    </div>
  )
}
