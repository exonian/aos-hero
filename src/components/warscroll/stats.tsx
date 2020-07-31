import React from "react";
import { statDisplayValue } from "../../utils/stats";

interface IStatsProps {
  stats: Record<string, number>
}

export const StatsComponent: React.FC<IStatsProps> = props => {
  const { stats } = props

  return (
    <ul>
      <li className="warscrollStat">WOUNDS: { statDisplayValue(stats.wounds, `"`) }</li>
      <li className="warscrollStat">MOVEMENT: { statDisplayValue(stats.movement) }</li>
      <li className="warscrollStat">SAVE: { statDisplayValue(stats.save, `+`) }</li>
      <li className="warscrollStat">BRAVERY: { statDisplayValue(stats.bravery) }</li>
    </ul>
  )
}
