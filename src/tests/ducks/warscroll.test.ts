import warscroll, { warscrollActions, initialState } from '../../ducks/warscroll'
import { Ancestries } from '../../data/ancestries';
import { Abilities } from '../../data/abilities';
import { Archetypes } from '../../data/archetypes';

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
      "archetype": null,
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
      "archetype": null,
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
      "archetype": null,
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
      "archetype": null,
      "abilities": [Abilities["Divine Prayers"]],
    }
  )
  expect(
    warscroll(
      {
        "ancestry": null,
        "armyKeywords": [],
        "title": "Untitled",
        "archetype": null,
        "abilities": [Abilities["Divine Prayers"]],
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
      "archetype": null,
      "abilities": [Abilities["Divine Prayers"], Abilities["Wrathful Invocation"]],
    }
  )
})

it('should handle setArchetypeByKey', () => {
  const { setArchetypeByKey } = warscrollActions
  expect(
    warscroll(
      initialState
    , {
      type: setArchetypeByKey.type,
      payload: 'Acolyte',
    })
  ).toEqual(
    {
      "ancestry": null,
      "armyKeywords": [],
      "title": "Untitled",
      "archetype": Archetypes.Acolyte,
      "abilities": [Abilities["Divine Prayers"]],
    }
  )
})