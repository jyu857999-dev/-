import { describe, expect, it } from 'vitest'
import { games } from '../content/games'
import { parseGuide, validateGuides } from './content'

const validSource = `---
title: 测试攻略
gameId: no-rest-for-the-wicked
category: quest_exploration
region: 圣城
phase: 初期
npcs: [商人]
items: [治疗品]
prerequisites: [抵达圣城]
rewards: [补给]
spoilerLevel: none
tags: [测试]
summary: 搜索用摘要
updatedAt: 2026-07-08
example: true
sources: [steam, fextralife-guides]
images: [steam-hero]
contentStatus: draft
lastVerifiedAt: 2026-07-08
---

## 正文

- 包含关键 NPC 和道具。
`

describe('content parsing and validation', () => {
  it('parses frontmatter and builds searchable text', () => {
    const guide = parseGuide(
      '/guides/no-rest-for-the-wicked/test-guide.md',
      validSource,
    )

    expect(guide.slug).toBe('test-guide')
    expect(guide.npcs).toEqual(['商人'])
    expect(guide.sources[0]?.title).toBe('Steam 商店页面')
    expect(guide.images[0]?.caption).toBe('官方 Steam 商店头图')
    expect(guide.searchText).toContain('治疗品')
    expect(guide.searchText).toContain('搜索用摘要')
  })

  it('parses multiple guides from one markdown pack', async () => {
    const { parseGuidesFromFile } = await import('./content')
    const pack = `${validSource}\n<!-- guide -->\n${validSource.replace(
      'title: 测试攻略',
      'title: 第二篇攻略',
    ).replace('test-guide', 'test-guide-2')}`

    const parsed = parseGuidesFromFile('/guides/no-rest-for-the-wicked/pack.md', pack)

    expect(parsed).toHaveLength(2)
    expect(parsed[1]?.title).toBe('第二篇攻略')
  })

  it('throws when a required field is missing', () => {
    const invalid = validSource.replace('title: 测试攻略\n', '')

    expect(() =>
      parseGuide('/guides/no-rest-for-the-wicked/bad.md', invalid),
    ).toThrow('missing required field "title"')
  })

  it('throws on unknown games and duplicate slugs', () => {
    const guide = parseGuide(
      '/guides/no-rest-for-the-wicked/test-guide.md',
      validSource,
    )
    const badGame = { ...guide, gameId: 'unknown-game' }

    expect(() => validateGuides([badGame], games)).toThrow('unknown gameId')
    expect(() => validateGuides([guide, guide], games)).toThrow(
      'Duplicate guide slug',
    )
  })
})
