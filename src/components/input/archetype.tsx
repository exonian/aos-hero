import React, { useCallback } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';

import { convertToOptions } from './select';
import { selectWarscroll, updateArchetype } from '../../ducks/warscroll';
import { Archetypes } from '../../data/archetypes';
import { filterByRestrictions } from '../../utils/restrictions';
import { ChooseOneGrant } from '../../types/data';
import { AbilityInput } from './ability';
import { logSelection } from '../../utils/analytics';
import { errorStyle } from '../selectStyles';

export const ArchetypeInput: React.FC = () => {
  const { ancestry, archetype, armyKeywords } = useSelector(selectWarscroll)
  const ancestryKeywords = ancestry ? ancestry.keywords : []
  const archetypeKeywords = archetype ? archetype.keywords : []
  const combinedKeywords = ancestryKeywords.concat(armyKeywords, "HERO", archetypeKeywords)

  const archetypes = filterByRestrictions(Archetypes, combinedKeywords)
  const options = convertToOptions(Object.keys(archetypes))
  const dispatch = useDispatch()
  const archetypeValue = archetype ? convertToOptions([archetype.name])[0] : archetype
  const grantChoices = archetype ? archetype.grants.filter(grant => grant.grantType === ChooseOneGrant) : []
  const valid = archetype ? Object.keys(archetypes).includes(archetype.name) : true

  const handleChange = useCallback(
    (...args) => {
      dispatch(updateArchetype(args[0].value))
      logSelection('Archetype', args[0].value)
    },
    [dispatch]
  )

  return (
    <>
      <Select
        options={options}
        onChange={handleChange}
        value={archetypeValue}
        styles={valid ? {} : errorStyle}
        isSearchable={false}
      />
      {grantChoices.map((grant, i) => {
        return <AbilityInput abilityChoices={grant.abilityNames} source={archetype} key={i} />
      })}
    </>
  )
}