import React from 'react'
import { useSelector } from 'react-redux'

import { selectWarscroll } from '../ducks/warscroll'

export const WarscrollComponent: React.FC = () => {
  const { title } = useSelector(selectWarscroll)

  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}
