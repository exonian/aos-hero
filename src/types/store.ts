import { TAncestry, TKeyword, TArchetype, TAbility, TAddedAbility } from "./data";

export interface IWarscrollSlice {
  title: string
  ancestry: TAncestry | null
  armyKeywords: TKeyword[]
  archetype: TArchetype | null
  abilities: TAddedAbility[]
}

export interface IStore {
  warscroll: IWarscrollSlice
}