import React from 'react'
import { useSelector } from 'react-redux'

import { selectWarscroll } from '../ducks/warscroll'

export const WarscrollComponent: React.FC = () => {
  const { ancestry, armyKeyword, title } = useSelector(selectWarscroll)
  const armyKeywordOrEmptyArray = armyKeyword || []
  const ancestryKeywords = ancestry ? ancestry.keywords : []
  const combinedKeywords = ancestryKeywords.concat(armyKeywordOrEmptyArray, "HERO")
  const cost = ancestry ? ancestry.cost : 0

  return (
    <div>
      <h2>{title} ({cost}DP)</h2>
      {ancestry ?
        <ul>
          {combinedKeywords.map((keyword, i) => {
            return <li>{ keyword }</li>
          })}
        </ul>
      : ''}
    </div>
  )
}
