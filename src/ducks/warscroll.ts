import { createSlice, CaseReducer, PayloadAction, ThunkAction, Action } from '@reduxjs/toolkit'

import { IWarscrollSlice, IStore } from '../types/store'
import { Ancestries } from '../data/ancestries';
import { Archetypes } from '../data/archetypes';
import { Abilities } from '../data/abilities';
import { AutomaticGrant, TAddedAbility } from '../types/data';
import { RootState } from './store';

export const initialState: IWarscrollSlice = {
  title: 'Untitled',
  ancestry: null,
  armyKeywords: [],
  archetype: null,
  abilities: [],
}

const setAncestryByKey: CaseReducer<IWarscrollSlice, PayloadAction<string>> = (state, action) => {
  state.ancestry = Ancestries[action.payload]
  state.armyKeywords = []
}

const setArmyKeywords: CaseReducer<IWarscrollSlice, PayloadAction<string[]>> = (state, action) => {
  state.armyKeywords = action.payload
  state.archetype = null
}

const setTitle: CaseReducer<IWarscrollSlice, PayloadAction<string>> = (state, action) => {
  state.title = action.payload
}

const addAbilityByKey: CaseReducer<IWarscrollSlice, PayloadAction<string>> = (state, action) => {
  state.abilities = state.abilities.concat({ability: Abilities[action.payload]})
}

const setAbilities: CaseReducer<IWarscrollSlice, PayloadAction<TAddedAbility[]>> = (state, action) => {
  state.abilities = action.payload.reduce((accum, ability) => {
    accum.push(ability)
    return accum
  }, [] as TAddedAbility[])
}

export const warscrollSlice = createSlice({
  name: 'warscroll',
  initialState,
  reducers: {
    resetWarscroll: () => initialState,
    setAncestryByKey,
    setArmyKeywords,
    setTitle,
    addAbilityByKey,
    setAbilities,
    setArchetypeByKey(state, { payload }: PayloadAction<string>) {
      const archetype = Archetypes[payload]
      state.archetype = archetype

      archetype.grants.forEach(grant => {
        const { grantType, abilityNames } = grant
        if (grantType === AutomaticGrant) {
          abilityNames.forEach(abilityName => {
            state.abilities.push({ability: Abilities[abilityName], source: archetype})
          })
        }
      })
    }
  },
})

export const warscrollActions = warscrollSlice.actions
export const selectWarscroll = (state: IStore): IWarscrollSlice => state.warscroll

export default warscrollSlice.reducer


export const updateArchetype = (
  name?: string
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  const state = getState()
  const {warscroll} = state
  const {archetype, abilities} = warscroll
  if (archetype) {
    const abilitiesToKeep = abilities.reduce((accum, ability) => {
      if (!ability.source || ability.source.name !== archetype.name) {
        accum.push(ability)
      }
      return accum
    }, [] as TAddedAbility[])
    dispatch(warscrollActions.setAbilities(abilitiesToKeep))
  }
  if (name) dispatch(warscrollActions.setArchetypeByKey(name))
}

export const changeAncestry = (
  name: string
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  dispatch(warscrollActions.setAncestryByKey(name))
  dispatch(updateArchetype())
}