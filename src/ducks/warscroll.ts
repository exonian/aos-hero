import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { IWarscrollSlice, IStore } from '../types/store'
import { Ancestries } from '../data/ancestries';
import { Archetypes } from '../data/archetypes';

export const initialState: IWarscrollSlice = {
  title: 'Untitled',
  ancestry: null,
  armyKeywords: [],
  archetype: null,
}

const setAncestryByKey: CaseReducer<IWarscrollSlice, PayloadAction<string>> = (state, action) => {
  state.ancestry = Ancestries[action.payload]
  state.armyKeywords = []
}

const setArmyKeywords: CaseReducer<IWarscrollSlice, PayloadAction<string[]>> = (state, action) => {
  state.armyKeywords = action.payload
}

const setArchetypeByKey: CaseReducer<IWarscrollSlice, PayloadAction<string>> = (state, action) => {
  state.archetype = Archetypes[action.payload]
}

const setTitle: CaseReducer<IWarscrollSlice, PayloadAction<string>> = (state, action) => {
  state.title = action.payload
}

export const warscrollSlice = createSlice({
  name: 'warscroll',
  initialState,
  reducers: {
    resetWarscroll: () => initialState,
    setAncestryByKey,
    setArmyKeywords,
    setArchetypeByKey,
    setTitle,
  },
})

export const warscrollActions = warscrollSlice.actions
export const selectWarscroll = (state: IStore): IWarscrollSlice => state.warscroll

export default warscrollSlice.reducer