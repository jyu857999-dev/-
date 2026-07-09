import { bosses } from '../content/bosses/no-rest-for-the-wicked'
import { games } from '../content/games'
import { runes } from '../content/runes/no-rest-for-the-wicked'
import type { BossCategory, BossEntry, RuneEntry } from '../types'

export const bossCategoryLabels: Record<BossCategory, string> = {
  main_story: '主线 Boss',
  side_quest: '支线 Boss',
}

export const runeCategoryLabels: Record<RuneEntry['category'], string> = {
  melee: '近战',
  ranged: '远程',
  magic: '元素 / 法术',
  utility: '功能',
  unknown: '未分类',
}

export function getBossesForGame(gameId: string) {
  return bosses.filter((boss) => boss.gameId === gameId)
}

export function getRunesForGame(gameId: string) {
  return runes.filter((rune) => rune.gameId === gameId)
}

export function findBoss(gameId: string, slug: string) {
  return bosses.find((boss) => boss.gameId === gameId && boss.slug === slug)
}

export function findRune(gameId: string, slug: string) {
  return runes.find((rune) => rune.gameId === gameId && rune.slug === slug)
}

export function filterBosses(
  entries: BossEntry[],
  query: string,
  category: BossCategory | 'all',
  bossType: string,
) {
  const normalizedQuery = query.trim().toLowerCase()
  return entries.filter((boss) => {
    if (category !== 'all' && boss.category !== category) return false
    if (bossType !== 'all' && boss.bossType !== bossType) return false
    if (!normalizedQuery) return true
    return boss.searchText.includes(normalizedQuery)
  })
}

export function filterRunes(
  entries: RuneEntry[],
  query: string,
  category: RuneEntry['category'] | 'all',
  attackType: string,
) {
  const normalizedQuery = query.trim().toLowerCase()
  return entries.filter((rune) => {
    if (category !== 'all' && rune.category !== category) return false
    if (attackType !== 'all' && rune.attackType !== attackType) return false
    if (!normalizedQuery) return true
    return rune.searchText.includes(normalizedQuery)
  })
}

export function groupBosses(entries: BossEntry[]) {
  const groups = new Map<BossCategory, BossEntry[]>()
  for (const boss of entries) {
    groups.set(boss.category, [...(groups.get(boss.category) ?? []), boss])
  }
  return Array.from(groups.entries()).sort(([first], [second]) =>
    bossCategoryLabels[first].localeCompare(bossCategoryLabels[second], 'zh-Hans-CN'),
  )
}

export function groupRunes(entries: RuneEntry[]) {
  const groups = new Map<RuneEntry['category'], RuneEntry[]>()
  for (const rune of entries) {
    groups.set(rune.category, [...(groups.get(rune.category) ?? []), rune])
  }
  return Array.from(groups.entries()).sort(([first], [second]) =>
    runeCategoryLabels[first].localeCompare(runeCategoryLabels[second], 'zh-Hans-CN'),
  )
}

export function validateBossRuneCatalog() {
  const knownGames = new Set(games.map((game) => game.id))
  const seenBosses = new Set<string>()
  const seenRunes = new Set<string>()

  for (const boss of bosses) {
    if (!knownGames.has(boss.gameId)) throw new Error(`Unknown boss gameId: ${boss.name}`)
    if (!bossCategoryLabels[boss.category]) throw new Error(`Unknown boss category: ${boss.name}`)
    if (!boss.sourceUrl.startsWith('https://norestforthewicked.wiki.fextralife.com/')) {
      throw new Error(`Boss ${boss.name} must keep a Fextralife source URL`)
    }
    if (boss.strategy.length === 0 || boss.attacks.length === 0) {
      throw new Error(`Boss ${boss.name} must include strategy and attacks`)
    }
    const key = `${boss.gameId}/${boss.slug}`
    if (seenBosses.has(key)) throw new Error(`Duplicate boss slug "${key}"`)
    seenBosses.add(key)
  }

  for (const rune of runes) {
    if (!knownGames.has(rune.gameId)) throw new Error(`Unknown rune gameId: ${rune.name}`)
    if (!runeCategoryLabels[rune.category]) throw new Error(`Unknown rune category: ${rune.name}`)
    if (!rune.description || !rune.cost || !rune.compatibleWeaponType) {
      throw new Error(`Rune ${rune.name} is missing table details`)
    }
    const key = `${rune.gameId}/${rune.slug}`
    if (seenRunes.has(key)) throw new Error(`Duplicate rune slug "${key}"`)
    seenRunes.add(key)
  }
}
