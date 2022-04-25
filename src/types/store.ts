import { TAncestry, TKeyword, TArchetype, TAddedAbility, TAddedEnhancement, TAddedWeapon, TAddedBeast, TArticle } from "./data";

export interface IWarscrollSlice {
  title: string
  article: TArticle
  ancestry: TAncestry | null
  armyKeywords: TKeyword[]
  archetype: TArchetype | null
  abilities: TAddedAbility[]
  enhancements: TAddedEnhancement[]
  beast: TAddedBeast | null
  weaponOne: TAddedWeapon | null
  weaponTwo: TAddedWeapon | null
  claws: TAddedWeapon | null
  maw: TAddedWeapon | null
}

export interface IStore {
  warscroll: IWarscrollSlice
}