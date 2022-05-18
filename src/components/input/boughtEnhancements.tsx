import React from "react";
import { useSelector } from "react-redux";
import { selectWarscroll } from "../../ducks/warscroll";
import { BuyAbilityInput } from "./buyAbility";
import { BoughtEnhancementComponent } from "./boughtEnhancement";
import { TEnhancementTarget } from "../../types/data";

interface IBoughtEnhancementsProps {
  target: TEnhancementTarget
}

export const BoughtEnhancementInputs: React.FC<IBoughtEnhancementsProps> = props => {
  const { enhancements } = useSelector(selectWarscroll)
  const boughtEnhancements = enhancements.filter(addedEnhancement => !addedEnhancement.addedBy)

  return (
    <div className="form-group">
      <label>Options</label>
      <div className="card">
        <ul className="list-group list-group-flush">
          {boughtEnhancements.map((addedEnhancement, i) => <BoughtEnhancementComponent addedEnhancement={addedEnhancement} key={ addedEnhancement.enhancement.name } />)}
        </ul>
      </div>
      <BuyAbilityInput />
    </div>
  )
}
