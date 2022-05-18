import { createSlice, CaseReducer, PayloadAction, ThunkAction, Action } from '@reduxjs/toolkit'

import { IWarscrollSlice, IStore } from '../types/store'
import { Ancestries } from '../data/ancestries';
import { Archetypes } from '../data/archetypes';
import { Abilities, Enhancements } from '../data/abilities';
import { AutomaticGrant, TAddedAbility, TArchetype, TAddedWeapon, TAncestry, TWeapon, TEquipment, TBeast, TAddedBeast, TArticle, TAddedEnhancement, TEnhancementTarget } from '../types/data';
import { RootState } from './store';
import { Weapons } from '../data/weapons';
import { Beasts } from '../data/beasts';
import { BeastWeapons } from '../data/beastWeapons';

export const initialState: IWarscrollSlice = {
  title: 'Untitled',
  article: 'A',
  ancestry: null,
  armyKeywords: [],
  archetype: null,
  abilities: [],
  enhancements: [],
  beast: null,
  weaponOne: null,
  weaponTwo: null,
  claws: null,
  maw: null,
}

const setArmyKeywords: CaseReducer<IWarscrollSlice, PayloadAction<string[]>> = (state, action) => {
  state.armyKeywords = action.payload
}

const setBeast: CaseReducer<IWarscrollSlice, PayloadAction<TAddedBeast|null>> = (state, action) => {
  state.beast = action.payload
}

const setTitle: CaseReducer<IWarscrollSlice, PayloadAction<string>> = (state, action) => {
  state.title = action.payload
}

const setArticle: CaseReducer<IWarscrollSlice, PayloadAction<TArticle>> = (state, action) => {
  state.article = action.payload
}

const addAbilityByKey: CaseReducer<IWarscrollSlice, PayloadAction<string>> = (state, action) => {
  const name = action.payload
  state.abilities = state.abilities.concat({ability: Abilities[name], customName: name, count: 1})
}

const setAbilities: CaseReducer<IWarscrollSlice, PayloadAction<TAddedAbility[]>> = (state, action) => {
  state.abilities = action.payload.reduce((accum, ability) => {
    accum.push(ability)
    return accum
  }, [] as TAddedAbility[])
}

const setEnhancements: CaseReducer<IWarscrollSlice, PayloadAction<TAddedEnhancement[]>> = (state, action) => {
  state.enhancements = action.payload.reduce((accum, enhancement) => {
    accum.push(enhancement)
    return accum
  }, [] as TAddedEnhancement[])
}

const setClaws: CaseReducer<IWarscrollSlice, PayloadAction<TAddedWeapon|null>> = (state, action) => {
  state.claws = action.payload
}

const setMaw: CaseReducer<IWarscrollSlice, PayloadAction<TAddedWeapon|null>> = (state, action) => {
  state.maw = action.payload
}

const setWeaponOne: CaseReducer<IWarscrollSlice, PayloadAction<TAddedWeapon|null>> = (state, action) => {
  state.weaponOne = action.payload
}

const setWeaponTwo: CaseReducer<IWarscrollSlice, PayloadAction<TAddedWeapon|null>> = (state, action) => {
  state.weaponTwo = action.payload
}

const editBeastCustomName: CaseReducer<IWarscrollSlice, PayloadAction<string>> = (state, action) => {
  if (state.beast) state.beast.customName = action.payload
}

export const warscrollSlice = createSlice({
  name: 'warscroll',
  initialState,
  reducers: {
    resetWarscroll: () => initialState,
    setAncestryByKey(state, { payload }: PayloadAction<string>) {
      state.ancestry = Ancestries[payload]
    },
    setArmyKeywords,
    setArticle,
    setBeast,
    setTitle,
    addAbilityByKey,
    setAbilities,
    setEnhancements,
    setClaws,
    setMaw,
    setWeaponOne,
    setWeaponTwo,
    setArchetypeByKey(state, { payload }: PayloadAction<string>) {
      state.archetype = Archetypes[payload]
    },
    editBeastCustomName,
  },
})

export const warscrollActions = warscrollSlice.actions
export const selectWarscroll = (state: IStore): IWarscrollSlice => state.warscroll

export default warscrollSlice.reducer


const handleGrantedAbilities = (
  oldObject: TAncestry | TArchetype | TBeast | TWeapon | TEquipment | null,
  newObject: TAncestry | TArchetype | TBeast | TWeapon | TEquipment | null,
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const {abilities} = warscroll

  const abilitiesToKeep = oldObject ?
    abilities.filter(ability => {
      return ability.addedBy !== oldObject.name
    }) : abilities
  const automaticAbilities = newObject ?
    newObject.grants ? newObject.grants.reduce((accum, grant) => {
      const { grantType, abilityNames } = grant
      if (grantType === AutomaticGrant) {
        abilityNames.forEach(abilityName => {
          accum.push({ability: Abilities[abilityName], addedBy: newObject.name, customName: abilityName, count: 1})
        })
      }
      return accum
    }, [] as TAddedAbility[]) : []
    : []
  const combinedAbilities = abilitiesToKeep.concat(automaticAbilities)
  dispatch(warscrollActions.setAbilities(combinedAbilities))
}

export const changeAncestry = (
  name: string
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const oldAncestry = warscroll.ancestry
  const newAncestry = Ancestries[name]

  dispatch(handleGrantedAbilities(oldAncestry, newAncestry))
  dispatch(warscrollActions.setAncestryByKey(name))
  dispatch(warscrollActions.setArmyKeywords([]))
}

export const changeArchetype = (
  name: string
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const oldArchetype = warscroll.archetype
  const newArchetype = Archetypes[name]

  dispatch(handleGrantedAbilities(oldArchetype, newArchetype))
  dispatch(warscrollActions.setArchetypeByKey(name))
}

export const changeBeast = (
  name: string
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const oldAddedBeast = warscroll.beast
  const oldAddedClaws = warscroll.claws
  const oldAddedMaw = warscroll.maw
  const oldBeast = oldAddedBeast ? oldAddedBeast.beast : null
  const newBeast = Beasts[name]
  const newAddedBeast = newBeast ? {'beast': newBeast, 'customName': newBeast.name} : null

  dispatch(handleGrantedAbilities(oldBeast, newBeast))
  dispatch(warscrollActions.setBeast(newAddedBeast))

  const { Claws, Maw } = newBeast ? newBeast.weapons : {'Claws': null, 'Maw': null}
  const addedClaws = Claws ? {'weapon': Claws, 'key': Claws.name, 'source': newBeast.name, 'customName': oldAddedClaws ? oldAddedClaws.customName : Claws.name, 'abilities': []} : null
  const addedMaw = Maw ? {'weapon': Maw, 'key': Maw.name, 'source': newBeast.name, 'customName': oldAddedMaw ? oldAddedMaw.customName : Maw.name, 'abilities': []} : null

  dispatch(warscrollActions.setClaws(addedClaws))
  dispatch(warscrollActions.setMaw(addedMaw))
}

export const changeWeapon = (
  weaponField: "weaponOne" | "weaponTwo",
  name: string,
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const oldAddedWeapon = warscroll[weaponField]
  const oldWeapon = oldAddedWeapon ? oldAddedWeapon.weapon : null
  const newWeapon = Weapons[name]

  dispatch(handleGrantedAbilities(oldWeapon, newWeapon))

  const addedWeapon = newWeapon ? {'weapon': newWeapon, 'key': newWeapon.name, 'customName': newWeapon.name, 'abilities': []} : null
  if (weaponField === "weaponOne") dispatch(warscrollActions.setWeaponOne(addedWeapon))
  if (weaponField === "weaponTwo") dispatch(warscrollActions.setWeaponTwo(addedWeapon))
}

export const replaceGrantedAbility = (
  name: string,
  addedBy: TArchetype|null,
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const {abilities} = warscroll
  const abilitiesToKeep = addedBy ?
    abilities.filter(ability => {
      return ability.addedBy !== addedBy.name
    }) : abilities
  const ability = {'ability': Abilities[name], 'addedBy': addedBy ? addedBy.name : '', customName: name, count: 1}
  const automaticAbilities = addedBy ? addedBy.grants.reduce((accum, grant) => {
    const { grantType, abilityNames } = grant
    if (grantType === AutomaticGrant) {
      abilityNames.forEach(abilityName => {
        accum.push({ability: Abilities[abilityName], addedBy: addedBy.name, customName: abilityName, count: 1})
      })
    }
    return accum
  }, [] as TAddedAbility[]) : []
  const combinedAbilities = abilitiesToKeep.concat(automaticAbilities, ability)
  dispatch(warscrollActions.setAbilities(combinedAbilities))
}

export const addBoughtAbility = (
  name: string,
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const { abilities } = warscroll

  const ability = Abilities[name]
  const addedAbility: TAddedAbility = {'ability': ability, 'addedBy': '', customName: name, count: 1}
  const combinedAbilities = abilities.concat(addedAbility)
  dispatch(warscrollActions.setAbilities(combinedAbilities))
}

export const addBoughtEnhancement = (
  name: string,
  target: TEnhancementTarget,
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const { enhancements } = warscroll

  const enhancement = Enhancements[name]
  const addedEnhancement: TAddedEnhancement = {'enhancement': enhancement, 'addedBy': '', customName: name, targets:[target]}
  const combinedEnhancements = enhancements.concat(addedEnhancement)
  dispatch(warscrollActions.setEnhancements(combinedEnhancements))
}

export const removeBoughtAbility = (
  name: string,
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const {abilities} = warscroll

  const abilitiesToKeep = abilities.reduce((accum, addedAbility) => {
    if (addedAbility.addedBy || addedAbility.ability.name !== name) accum.push(addedAbility)
    return accum
  }, [] as TAddedAbility[])
  dispatch(warscrollActions.setAbilities(abilitiesToKeep))
}

export const removeBoughtEnhancement = (
  name: string,
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const {enhancements} = warscroll

  const enhancementsToKeep = enhancements.reduce((accum, addedEnhancement) => {
    if (addedEnhancement.addedBy || addedEnhancement.enhancement.name !== name) accum.push(addedEnhancement)
    return accum
  }, [] as TAddedEnhancement[])
  dispatch(warscrollActions.setEnhancements(enhancementsToKeep))
}

export const incrementBoughtEnhancement = (
  name: string,
  change: -1 | 1
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const {enhancements} = warscroll

  const enhancementsWithChange = enhancements.reduce((accum, addedEnhancement) => {
    accum.push(addedEnhancement)
    return accum
  }, [] as TAddedEnhancement[])
  dispatch(warscrollActions.setEnhancements(enhancementsWithChange))
}

export const editAbilityCustomName = (
  keyName: string,
  customName: string,
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const {abilities} = warscroll
  const abilitiesWithEdit = abilities.map((addedAbility, i) => {
    if (addedAbility.ability.name === keyName) {
      return {...addedAbility, customName: customName}
    }
    else return addedAbility
  }, [] as TAddedAbility[])
  dispatch(warscrollActions.setAbilities(abilitiesWithEdit))
}

export const editWeaponCustomName = (
  weaponField: "claws" | "maw" | "weaponOne" | "weaponTwo",
  customName: string,
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const addedWeapon = warscroll[weaponField]
  const renamedWeapon = addedWeapon ? {...addedWeapon, customName: customName} : null
  if (weaponField === "claws") dispatch(warscrollActions.setClaws(renamedWeapon))
  if (weaponField === "maw") dispatch(warscrollActions.setMaw(renamedWeapon))
  if (weaponField === "weaponOne") dispatch(warscrollActions.setWeaponOne(renamedWeapon))
  if (weaponField === "weaponTwo") dispatch(warscrollActions.setWeaponTwo(renamedWeapon))
}

export const refreshWeapons = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const { warscroll } = getState()
  const { weaponOne, weaponTwo, claws, maw } = warscroll

  weaponOne && dispatch(warscrollActions.setWeaponOne({...weaponOne, weapon: Weapons[weaponOne.key]}))
  weaponTwo && dispatch(warscrollActions.setWeaponTwo({...weaponTwo, weapon: Weapons[weaponTwo.key]}))

  if (claws && claws.source) {
    claws && dispatch(warscrollActions.setClaws({...claws, weapon: BeastWeapons[claws.source][claws.key]}))
  }
  if (maw && maw.source) {
    maw && dispatch(warscrollActions.setMaw({...maw, weapon: BeastWeapons[maw.source][maw.key]}))
  }
}