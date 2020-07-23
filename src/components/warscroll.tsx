import React from 'react'
import { useSelector } from 'react-redux'

import { selectWarscroll } from '../ducks/warscroll'
import { AbilitiesComponent } from './abilities';

export const WarscrollComponent: React.FC = () => {
  const { abilities, ancestry, archetype, armyKeywords, title } = useSelector(selectWarscroll)
  const ancestryKeywords = ancestry ? ancestry.keywords : []
  const archetypeKeywords = archetype ? archetype.keywords : []
  const combinedKeywords = ancestryKeywords.concat(armyKeywords, "HERO", archetypeKeywords)
  const wounds = ancestry ? ancestry.wounds : null
  const movement = ancestry ? ancestry.movement : null
  const save = ancestry ? ancestry.save : null
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
