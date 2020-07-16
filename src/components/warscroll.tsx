import React from 'react'
import { useSelector } from 'react-redux'

import { selectWarscroll } from '../ducks/warscroll'

export const WarscrollComponent: React.FC = () => {
  const { ancestry, archetype, armyKeywords, title } = useSelector(selectWarscroll)
  const ancestryKeywords = ancestry ? ancestry.keywords : []
  const archetypeKeywords = archetype ? archetype.keywords : []
  const combinedKeywords = ancestryKeywords.concat(armyKeywords, "HERO", archetypeKeywords)
  const cost = ancestry ? ancestry.cost : 0

  return (
    <div>
      <h2>{title} ({cost}DP)</h2>
      {ancestry ?
        <p>
          { combinedKeywords.join(', ') }
        </p>
      : ''}
    </div>
  )
}
