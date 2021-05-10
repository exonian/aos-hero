import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store'

import warscroll, { warscrollActions, initialState } from '../../ducks/warscroll'
import { Ancestries } from '../../data/ancestries';
import { Abilities } from '../../data/abilities';
import { Archetypes } from '../../data/archetypes';

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

it('should handle setAncestryByKey', () => {
  const { setAncestryByKey } = warscrollActions
  expect(
    warscroll(
      initialState
    , {
      type: setAncestryByKey.type,
      payload: 'Duardin',
    })
  ).toEqual(
    {
      "ancestry": Ancestries.Duardin,
      "armyKeywords": [],
      "title": "Untitled",
      "article": "A",
      "claws": null,
      "maw": null,
      "weaponOne": null,
      "weaponTwo": null,
      "archetype": null,
      "beast": null,
      "abilities": [],
    }
  )
})

it('should handle setArmyKeywords', () => {
  const { setArmyKeywords } = warscrollActions
  expect(
    warscroll(
      initialState
    , {
      type: setArmyKeywords.type,
      payload: ['FYRESLAYERS'],
    })
  ).toEqual(
    {
      "ancestry": null,
      "armyKeywords": ['FYRESLAYERS'],
      "title": "Untitled",
      "article": "A",
      "claws": null,
      "maw": null,
      "weaponOne": null,
      "weaponTwo": null,
      "archetype": null,
      "beast": null,
      "abilities": [],
    }
  )
})

it('should handle setTitle', () => {
  const { setTitle } = warscrollActions
  expect(
    warscroll(
      initialState
    , {
      type: setTitle.type,
      payload: 'My First Hero',
    })
  ).toEqual(
    {
      "ancestry": null,
      "armyKeywords": [],
      "title": "My First Hero",
      "article": "A",
      "claws": null,
      "maw": null,
      "weaponOne": null,
      "weaponTwo": null,
      "archetype": null,
      "beast": null,
      "abilities": [],
    }
  )
})

it('should handle addAbilityByKey', () => {
  const { addAbilityByKey } = warscrollActions
  expect(
    warscroll(
      initialState
    , {
      type: addAbilityByKey.type,
      payload: 'Divine Prayers',
    })
  ).toEqual(
    {
      "ancestry": null,
      "armyKeywords": [],
      "title": "Untitled",
      "article": "A",
      "claws": null,
      "maw": null,
      "weaponOne": null,
      "weaponTwo": null,
      "archetype": null,
      "beast": null,
      "abilities": [{ability: Abilities["Divine Prayers"], customName: "Divine Prayers", count: 1}],
    }
  )
  expect(
    warscroll(
      {
        "ancestry": null,
        "armyKeywords": [],
        "title": "Untitled",
        "article": "A",
        "claws": null,
        "maw": null,
        "weaponOne": null,
        "weaponTwo": null,
        "archetype": null,
        "beast": null,
        "abilities": [{ability: Abilities["Divine Prayers"], customName: "Divine Prayers", count: 1}],
      }
    , {
      type: addAbilityByKey.type,
      payload: 'Wrathful Invocation',
    })
  ).toEqual(
    {
      "ancestry": null,
      "armyKeywords": [],
      "title": "Untitled",
      "article": "A",
      "claws": null,
      "maw": null,
      "weaponOne": null,
      "weaponTwo": null,
      "archetype": null,
      "beast": null,
      "abilities": [
        {ability: Abilities["Divine Prayers"], customName:"Divine Prayers", count: 1},
        {ability: Abilities["Wrathful Invocation"], customName:"Wrathful Invocation", count: 1},
      ],
    }
  )
})