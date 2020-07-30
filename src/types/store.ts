import { TAncestry, TKeyword, TArchetype, TAddedAbility, TAddedWeapon, TAddedBeast } from "./data";

export interface IWarscrollSlice {
  title: string
  ancestry: TAncestry | null
  armyKeywords: TKeyword[]
  archetype: TArchetype | null
  abilities: TAddedAbility[]
  beast: TAddedBeast | null
  weaponOne: TAddedWeapon | null
  weaponTwo: TAddedWeapon | null
  claws: TAddedWeapon | null
  maw: TAddedWeapon | null
}

export interface IStore {
  warscroll: IWarscrollSlice
}