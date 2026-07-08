import type { GuideEntry, GuideFilters } from '../types'

export function filterGuides(
  entries: GuideEntry[],
  gameId: string,
  query: string,
  filters: GuideFilters,
) {
  const normalizedQuery = query.trim().toLowerCase()

  return entries.filter((entry) => {
    if (entry.gameId !== gameId) return false
    if (filters.category !== 'all' && entry.category !== filters.category) {
      return false
    }
    if (filters.region !== 'all' && entry.region !== filters.region) return false
    if (filters.phase !== 'all' && entry.phase !== filters.phase) return false
    if (
      filters.spoilerLevel !== 'all' &&
      entry.spoilerLevel !== filters.spoilerLevel
    ) {
      return false
    }
    if (!normalizedQuery) return true
    return entry.searchText.includes(normalizedQuery)
  })
}

export function uniqueValues(entries: GuideEntry[], key: keyof GuideEntry) {
  return Array.from(
    new Set(
      entries
        .map((entry) => entry[key])
        .filter((value): value is string => typeof value === 'string'),
    ),
  ).sort((a, b) => a.localeCompare(b, 'zh-Hans-CN'))
}
