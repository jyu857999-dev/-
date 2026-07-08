import type { GameConfig } from '../types'

export const games: GameConfig[] = [
  {
    id: 'no-rest-for-the-wicked',
    name: '恶意不息',
    cover:
      'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1371980/header.jpg',
    description:
      '综合整理自互联网公开资料的《恶意不息》攻略库，覆盖流程、探索、装备、Build、资源和 Boss。',
    supportedCategories: [
      'quest_exploration',
      'equipment',
      'build',
      'resource_map',
      'boss',
    ],
  },
]

export const categoryLabels = {
  quest_exploration: '任务与探索',
  build: 'Build 与流派',
  equipment: '装备资料',
  resource_map: '地图资源',
  boss: 'Boss 攻略',
  collection: '全收集',
} as const

export const spoilerLabels = {
  none: '无剧透',
  light: '轻微剧透',
  major: '重大剧透',
} as const

export const contentStatusLabels = {
  draft: '综合草稿',
  verified: '已校对',
  needs_review: '待复核',
} as const
