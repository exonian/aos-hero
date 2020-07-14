import React from 'react'
import { useSelector } from 'react-redux'

import { selectWarscroll } from '../ducks/warscroll'

export const WarscrollComponent: React.FC = () => {
  const { ancestry, title } = useSelector(selectWarscroll)

  return (
    <div>
      <h2>{title}</h2>
      {ancestry ?
        <ul>
          {ancestry.keywords.map((keyword, i) => {
            return <li>{ keyword }</li>
          })}
        </ul>
      : ''}
    </div>
  )
}
