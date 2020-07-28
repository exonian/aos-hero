import { createSlice, CaseReducer, PayloadAction, ThunkAction, Action } from '@reduxjs/toolkit'

import { IWarscrollSlice, IStore } from '../types/store'
import { Ancestries } from '../data/ancestries';
import { Archetypes } from '../data/archetypes';
import { Abilities } from '../data/abilities';
import { AutomaticGrant, TAddedAbility, TArchetype, TAddedWeapon } from '../types/data';
import { RootState } from './store';
import { Weapons } from '../data/weapons';

export const initialState: IWarscrollSlice = {
  title: 'Untitled',
  ancestry: null,
  armyKeywords: [],
  archetype: null,
  abilities: [],
  weaponOne: null,
  weaponTwo: null,
}

const setArmyKeywords: CaseReducer<IWarscrollSlice, PayloadAction<string[]>> = (state, action) => {
  state.armyKeywords = action.payload
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

const setWeaponOne: CaseReducer<IWarscrollSlice, PayloadAction<TAddedWeapon>> = (state, action) => {
  state.weaponOne = action.payload
}

const setWeaponTwo: CaseReducer<IWarscrollSlice, PayloadAction<TAddedWeapon>> = (state, action) => {
  state.weaponTwo = action.payload
}

const clearWeaponOne: CaseReducer<IWarscrollSlice> = (state, action) => {
  state.weaponOne = null
}

const clearWeaponTwo: CaseReducer<IWarscrollSlice> = (state, action) => {
  state.weaponTwo = null
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
    setTitle,
    addAbilityByKey,
    setAbilities,
    setWeaponOne,
    setWeaponTwo,
    clearWeaponOne,
    clearWeaponTwo,
    setArchetypeByKey(state, { payload }: PayloadAction<string>) {
      state.archetype = Archetypes[payload]
    }
  },
})

export const warscrollActions = warscrollSlice.actions
export const selectWarscroll = (state: IStore): IWarscrollSlice => state.warscroll

export default warscrollSlice.reducer


export const updateAncestry = (
  name: string
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const {ancestry, abilities} = warscroll
  const newAncestry = Ancestries[name]

  const abilitiesToKeep = ancestry ?
    abilities.filter(ability => {
      return ability.source !== ancestry.name
    }) : abilities
  const automaticAbilities = newAncestry.grants ? newAncestry.grants.reduce((accum, grant) => {
    const { grantType, abilityNames } = grant
    if (grantType === AutomaticGrant) {
      abilityNames.forEach(abilityName => {
        accum.push({ability: Abilities[abilityName], source: newAncestry.name, customName: abilityName})
      })
    }
    return accum
  }, [] as TAddedAbility[]) : []
  const combinedAbilities = abilitiesToKeep.concat(automaticAbilities)
  dispatch(warscrollActions.setAbilities(combinedAbilities))
  dispatch(warscrollActions.setAncestryByKey(name))
}

export const updateArchetype = (
  name: string
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const {archetype, abilities} = warscroll
  const newArchetype = Archetypes[name]

  const abilitiesToKeep = archetype ?
    abilities.filter(ability => {
      return ability.source !== archetype.name
    }) : abilities
  const automaticAbilities = newArchetype.grants ? newArchetype.grants.reduce((accum, grant) => {
    const { grantType, abilityNames } = grant
    if (grantType === AutomaticGrant) {
      abilityNames.forEach(abilityName => {
        accum.push({ability: Abilities[abilityName], source: newArchetype.name, customName: abilityName})
      })
    }
    return accum
  }, [] as TAddedAbility[]) : []
  const combinedAbilities = abilitiesToKeep.concat(automaticAbilities)
  dispatch(warscrollActions.setAbilities(combinedAbilities))
  dispatch(warscrollActions.setArchetypeByKey(name))
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

export const changeWeapon = (
  weaponField: "weaponOne" | "weaponTwo",
  name: string,
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const {abilities} = warscroll
  const currentWeapon = warscroll[weaponField]
  const currentWeaponName = currentWeapon ? currentWeapon.weapon.name : null
  const weapon = Weapons[name]

  const abilitiesToKeep = currentWeaponName ?
    abilities.filter(ability => {
      return ability.source !== currentWeaponName
    }) : abilities

  const grantedAbilities = weapon.grants ? weapon.grants.reduce((accum, grant) => {
    const { grantType, abilityNames } = grant
    if (grantType === AutomaticGrant) {
      abilityNames.forEach(abilityName => {
        accum.push({ability: Abilities[abilityName], source: name, customName: name})
      })
    }
    return accum
  }, [] as TAddedAbility[]) : []

  const combinedAbilities = abilitiesToKeep.concat(grantedAbilities)
  dispatch(warscrollActions.setAbilities(combinedAbilities))

  const addedWeapon = {'weapon': weapon, 'customName': weapon.name}
  if (weaponField === "weaponOne") dispatch(warscrollActions.setWeaponOne(addedWeapon))
  if (weaponField === "weaponTwo") dispatch(warscrollActions.setWeaponTwo(addedWeapon))
}

export const clearWeapon = (
  weaponField: "weaponOne" | "weaponTwo",
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const currentWeapon = warscroll[weaponField]
  const currentWeaponName = currentWeapon ? currentWeapon.weapon.name : null

  const {abilities} = warscroll
  const abilitiesToKeep = currentWeaponName ?
    abilities.filter(ability => {
      return ability.source !== currentWeaponName
    }) : abilities
  dispatch(warscrollActions.setAbilities(abilitiesToKeep))

  if (weaponField === "weaponOne") dispatch(warscrollActions.clearWeaponOne())
  if (weaponField === "weaponTwo") dispatch(warscrollActions.clearWeaponTwo())
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