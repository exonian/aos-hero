import { createSlice, CaseReducer, PayloadAction } from '@reduxjs/toolkit'
import { IWarscrollSlice, IStore } from '../types/store'
import { Ancestries } from '../data/ancestries';

const initialState: IWarscrollSlice = {
  title: 'Untitled',
  ancestry: null,
  armyKeyword: null,
}

const setAncestryByKey: CaseReducer<IWarscrollSlice, PayloadAction<string>> = (state, action) => {
  const ancestry = Ancestries[action.payload]
  if (ancestry !== state.ancestry) {
    state.ancestry = Ancestries[action.payload]
    state.armyKeyword = null
  }
}

const setArmyKeyword: CaseReducer<IWarscrollSlice, PayloadAction<string>> = (state, action) => {
  state.armyKeyword = action.payload
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
    setArmyKeyword,
    setTitle,
  },
})

export const warscrollActions = warscrollSlice.actions
export const selectWarscroll = (state: IStore): IWarscrollSlice => state.warscroll

export default warscrollSlice.reducer