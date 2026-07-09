import { describe, expect, it } from 'vitest'
import { bosses } from '../content/bosses/no-rest-for-the-wicked'
import { runes } from '../content/runes/no-rest-for-the-wicked'
import {
  filterBosses,
  filterRunes,
  groupBosses,
  groupRunes,
  validateBossRuneCatalog,
} from './bossRuneCatalog'

describe('boss and rune catalog', () => {
  it('validates all generated entries', () => {
    expect(() => validateBossRuneCatalog()).not.toThrow()
    expect(bosses).toHaveLength(8)
    expect(runes.length).toBeGreaterThanOrEqual(220)
  })

  it('keeps boss strategies and attacks searchable', () => {
    const echo = filterBosses(bosses, '蓝焰', 'all', 'all')
    const warrick = bosses.find((boss) => boss.name === 'Warrick The Torn')

    expect(echo.some((boss) => boss.name === 'Echo Knight')).toBe(true)
    expect(warrick?.attacks.some((attack) => attack.name === '跳砸')).toBe(true)
  })

  it('filters runes from the full table', () => {
    const arrowstorm = filterRunes(runes, 'Arrowstorm', 'all', 'all')
    const ranged = filterRunes(runes, '', 'ranged', 'Ranged')

    expect(arrowstorm[0]?.compatibleWeaponType).toBe('Bows')
    expect(ranged.every((rune) => rune.attackType === 'Ranged')).toBe(true)
  })

  it('groups catalog entries', () => {
    expect(groupBosses(bosses).flatMap(([, items]) => items)).toHaveLength(bosses.length)
    expect(groupRunes(runes).flatMap(([, items]) => items)).toHaveLength(runes.length)
  })
})
