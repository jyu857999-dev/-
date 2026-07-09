import { games } from '../content/games'
import { weapons } from '../content/weapons/no-rest-for-the-wicked'
import type { WeaponCategory, WeaponEntry } from '../types'

export const weaponCategoryLabels: Record<WeaponCategory, string> = {
  axes: '斧',
  bows: '弓',
  clubs: '棍棒',
  curved_great_swords: '曲刃大剑',
  curved_swords: '曲剑',
  daggers: '匕首',
  double_daggers: '双匕首',
  great_axes: '大斧',
  great_clubs: '大棍棒',
  great_hammers: '大锤',
  great_swords: '大剑',
  halberds: '戟',
  hammers: '锤',
  katanas: '武士刀',
  maces: '钉头锤',
  rapiers: '刺剑',
  scythes: '镰刀',
  spears: '长矛',
  staves: '法杖',
  straight_swords: '直剑',
  wands: '魔杖',
}

export function getWeaponsForGame(gameId: string) {
  return weapons.filter((weapon) => weapon.gameId === gameId)
}

export function findWeapon(gameId: string, slug: string) {
  return weapons.find(
    (weapon) => weapon.gameId === gameId && weapon.slug === slug,
  )
}

export function filterWeapons(
  entries: WeaponEntry[],
  query: string,
  category: WeaponCategory | 'all',
) {
  const normalizedQuery = query.trim().toLowerCase()
  return entries.filter((weapon) => {
    if (category !== 'all' && weapon.category !== category) return false
    if (!normalizedQuery) return true
    return weapon.searchText.includes(normalizedQuery)
  })
}

export function groupWeaponsByCategory(entries: WeaponEntry[]) {
  const groups = new Map<WeaponCategory, WeaponEntry[]>()
  for (const weapon of entries) {
    groups.set(weapon.category, [...(groups.get(weapon.category) ?? []), weapon])
  }
  return Array.from(groups.entries()).sort(([first], [second]) =>
    weaponCategoryLabels[first].localeCompare(weaponCategoryLabels[second], 'zh-Hans-CN'),
  )
}

export function validateWeaponCatalog(entries: WeaponEntry[]) {
  const knownGames = new Set(games.map((game) => game.id))
  const seen = new Set<string>()

  for (const weapon of entries) {
    if (!knownGames.has(weapon.gameId)) {
      throw new Error(`Weapon ${weapon.name} has unknown gameId "${weapon.gameId}"`)
    }
    if (!weaponCategoryLabels[weapon.category]) {
      throw new Error(`Weapon ${weapon.name} has unknown category "${weapon.category}"`)
    }
    if (!weapon.iconUrl.startsWith('https://')) {
      throw new Error(`Weapon ${weapon.name} must use an absolute https icon URL`)
    }
    if (!weapon.sourceUrl.startsWith('https://norestforthewicked.wiki.fextralife.com/')) {
      throw new Error(`Weapon ${weapon.name} must keep a Fextralife source URL`)
    }
    const key = `${weapon.gameId}/${weapon.slug}`
    if (seen.has(key)) throw new Error(`Duplicate weapon slug "${key}"`)
    seen.add(key)
  }
}
