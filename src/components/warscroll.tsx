import React from 'react'
import { useSelector } from 'react-redux'

import { selectWarscroll } from '../ducks/warscroll'

export const WarscrollComponent: React.FC = () => {
  const { ancestry, armyKeywords, title } = useSelector(selectWarscroll)
  const ancestryKeywords = ancestry ? ancestry.keywords : []
  const combinedKeywords = ancestryKeywords.concat(armyKeywords, "HERO")
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
