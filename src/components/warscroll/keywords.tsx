import React from "react";
import { TKeyword } from "../../types/data";

interface IKeywordsProps {
  keywords: TKeyword[]
}

export const KeywordsComponent: React.FC<IKeywordsProps> = props => {
  const { keywords } = props

  return (
    <p>
      { keywords.join(', ') }
    </p>
  )
}