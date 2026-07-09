import { describe, expect, it } from 'vitest'
import { weapons } from '../content/weapons/no-rest-for-the-wicked'
import {
  filterWeapons,
  groupWeaponsByCategory,
  validateWeaponCatalog,
} from './weaponCatalog'

describe('weapon catalog', () => {
  it('validates source-backed weapon entries', () => {
    expect(() => validateWeaponCatalog(weapons)).not.toThrow()
    expect(weapons.length).toBeGreaterThanOrEqual(190)
  })

  it('keeps specific weapon categories and images accurate', () => {
    const breakingWave = weapons.find((weapon) => weapon.name === 'Breaking Wave')
    const hanzo = weapons.find((weapon) => weapon.name === 'Hanzo Blade')

    expect(breakingWave?.category).toBe('axes')
    expect(breakingWave?.iconUrl).toContain('breaking-wave')
    expect(hanzo?.category).toBe('katanas')
    expect(hanzo?.iconUrl).toContain('hanzo-blade')
  })

  it('filters by Chinese category labels and weapon names', () => {
    const katanaResults = filterWeapons(weapons, '武士刀', 'all')
    const bowResults = filterWeapons(weapons, '', 'bows')

    expect(katanaResults.some((weapon) => weapon.name === 'Hanzo Blade')).toBe(true)
    expect(bowResults.every((weapon) => weapon.category === 'bows')).toBe(true)
  })

  it('groups weapons by category for catalog grids', () => {
    const groups = groupWeaponsByCategory(weapons)

    expect(groups.length).toBeGreaterThanOrEqual(20)
    expect(groups.flatMap(([, items]) => items)).toHaveLength(weapons.length)
  })
})
