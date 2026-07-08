import { describe, expect, it } from 'vitest'
import type { GuideEntry, GuideFilters } from '../types'
import { filterGuides } from './search'

const baseGuide: GuideEntry = {
  title: '圣城路线',
  gameId: 'no-rest-for-the-wicked',
  category: 'quest_exploration',
  region: '圣城',
  phase: '初期',
  npcs: ['商人'],
  items: ['治疗品'],
  prerequisites: ['抵达圣城'],
  rewards: ['补给'],
  spoilerLevel: 'none',
  tags: ['新手'],
  summary: '整理圣城功能',
  updatedAt: '2026-07-08',
  example: true,
  sources: [
    {
      title: 'Steam 商店页面',
      url: 'https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/',
      type: 'official',
      language: 'en',
    },
  ],
  images: [],
  contentStatus: 'draft',
  lastVerifiedAt: '2026-07-08',
  equipmentType: '消耗品',
  bossType: undefined,
  buildTags: ['新手'],
  slug: 'sacrament',
  body: '正文',
  searchText: '圣城路线 商人 治疗品 补给 新手 正文',
}

const defaultFilters: GuideFilters = {
  category: 'all',
  region: 'all',
  phase: 'all',
  spoilerLevel: 'all',
}

describe('filterGuides', () => {
  it('matches query text across indexed guide fields', () => {
    const result = filterGuides(
      [baseGuide],
      'no-rest-for-the-wicked',
      '治疗品',
      defaultFilters,
    )

    expect(result).toHaveLength(1)
  })

  it('combines category, region, and phase filters', () => {
    const result = filterGuides([baseGuide], 'no-rest-for-the-wicked', '', {
      ...defaultFilters,
      category: 'quest_exploration',
      region: '圣城',
      phase: '初期',
    })

    expect(result).toEqual([baseGuide])
  })

  it('excludes guides from other games', () => {
    const result = filterGuides([baseGuide], 'another-game', '', defaultFilters)

    expect(result).toHaveLength(0)
  })
})
