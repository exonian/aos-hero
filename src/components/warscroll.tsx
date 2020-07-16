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
        <ul>
          {combinedKeywords.map((keyword, i) => {
            return <li key={keyword}>{ keyword }</li>
          })}
        </ul>
      : ''}
    </div>
  )
}
