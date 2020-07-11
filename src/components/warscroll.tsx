import React from 'react'

interface IWarscrollProps {
  title: string
}

export const WarscrollComponent: React.FC<IWarscrollProps> = props => {

  const { title } = props;

  return (
    <div>
        <h2>{title}</h2>
    </div>
  )
}
