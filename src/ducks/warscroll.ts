import { createSlice, CaseReducer, PayloadAction, ThunkAction, Action } from '@reduxjs/toolkit'

import { IWarscrollSlice, IStore } from '../types/store'
import { Ancestries } from '../data/ancestries';
import { Archetypes } from '../data/archetypes';
import { Abilities } from '../data/abilities';
import { AutomaticGrant, TAddedAbility, TArchetype, TAddedWeapon, TAncestry, TWeapon, TEquipment, TAddedBeast, TBeast } from '../types/data';
import { RootState } from './store';
import { Weapons } from '../data/weapons';
import { Beasts } from '../data/beasts';

export const initialState: IWarscrollSlice = {
  title: 'Untitled',
  ancestry: null,
  armyKeywords: [],
  archetype: null,
  abilities: [],
  beast: null,
  weaponOne: null,
  weaponTwo: null,
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

const addAbilityByKey: CaseReducer<IWarscrollSlice, PayloadAction<string>> = (state, action) => {
  const name = action.payload
  state.abilities = state.abilities.concat({ability: Abilities[name], customName: name})
}

const setAbilities: CaseReducer<IWarscrollSlice, PayloadAction<TAddedAbility[]>> = (state, action) => {
  state.abilities = action.payload.reduce((accum, ability) => {
    accum.push(ability)
    return accum
  }, [] as TAddedAbility[])
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
    setBeast,
    setTitle,
    addAbilityByKey,
    setAbilities,
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
      return ability.source !== oldObject.name
    }) : abilities
  const automaticAbilities = newObject ?
    newObject.grants ? newObject.grants.reduce((accum, grant) => {
      const { grantType, abilityNames } = grant
      if (grantType === AutomaticGrant) {
        abilityNames.forEach(abilityName => {
          accum.push({ability: Abilities[abilityName], source: newObject.name, customName: abilityName})
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
  const oldBeast = oldAddedBeast ? oldAddedBeast.beast : null
  const newBeast = Beasts[name]

  dispatch(handleGrantedAbilities(oldBeast, newBeast))

  const addedBeast = newBeast ? {'beast': newBeast, 'customName': newBeast.name} : null
  dispatch(warscrollActions.setBeast(addedBeast))
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

  const addedWeapon = newWeapon ? {'weapon': newWeapon, 'customName': newWeapon.name} : null
  if (weaponField === "weaponOne") dispatch(warscrollActions.setWeaponOne(addedWeapon))
  if (weaponField === "weaponTwo") dispatch(warscrollActions.setWeaponTwo(addedWeapon))
}

export const replaceGrantedAbility = (
  name: string,
  source: TArchetype|null,
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const {abilities} = warscroll
  const abilitiesToKeep = source ?
    abilities.filter(ability => {
      return ability.source !== source.name
    }) : abilities
  const ability = {'ability': Abilities[name], 'source': source ? source.name : '', customName: name}
  const automaticAbilities = source ? source.grants.reduce((accum, grant) => {
    const { grantType, abilityNames } = grant
    if (grantType === AutomaticGrant) {
      abilityNames.forEach(abilityName => {
        accum.push({ability: Abilities[abilityName], source: source.name, customName: abilityName})
      })
    }
    return accum
  }, [] as TAddedAbility[]) : []
  const combinedAbilities = abilitiesToKeep.concat(automaticAbilities, ability)
  dispatch(warscrollActions.setAbilities(combinedAbilities))
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
      return Object.assign({}, addedAbility, {
        customName: customName
      })
    }
    else return addedAbility
  }, [] as TAddedAbility[])
  dispatch(warscrollActions.setAbilities(abilitiesWithEdit))
}

export const editWeaponCustomName = (
  weaponField: "weaponOne" | "weaponTwo",
  customName: string,
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const addedWeapon = warscroll[weaponField]
  const renamedWeapon = Object.assign({}, addedWeapon, {
    customName: customName
  })
  if (weaponField === "weaponOne") dispatch(warscrollActions.setWeaponOne(renamedWeapon))
  if (weaponField === "weaponTwo") dispatch(warscrollActions.setWeaponTwo(renamedWeapon))
}