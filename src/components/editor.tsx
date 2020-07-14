import React from 'react'

import { TitleInput } from './input/title';
import { AncestryInput } from './input/ancestry';

export const EditorComponent: React.FC = () => {
  return (
    <div>
      <TitleInput />
      <AncestryInput />
    </div>
  )
}
