import { TAncestry, TKeyword, TArchetype, TAbility, TAddedAbility, TAddedWeapon } from "./data";

export interface IWarscrollSlice {
  title: string
  ancestry: TAncestry | null
  armyKeywords: TKeyword[]
  archetype: TArchetype | null
  abilities: TAddedAbility[]
  weaponOne: TAddedWeapon | null
  weaponTwo: TAddedWeapon | null
}

export interface IStore {
  warscroll: IWarscrollSlice
}