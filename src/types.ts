export type GuideCategory =
  | 'quest_exploration'
  | 'build'
  | 'equipment'
  | 'resource_map'
  | 'boss'
  | 'collection'

export type SpoilerLevel = 'none' | 'light' | 'major'
export type ContentStatus = 'draft' | 'verified' | 'needs_review'

export type GuideSource = {
  title: string
  url: string
  type: 'official' | 'wiki' | 'guide' | 'video' | 'community' | 'news'
  language: 'zh' | 'en'
}

export type GuideImage = {
  url: string
  alt: string
  caption: string
  sourceUrl: string
  licenseNote: string
}

export type GameConfig = {
  id: string
  name: string
  cover: string
  description: string
  supportedCategories: GuideCategory[]
}

export type GuideFrontmatter = {
  title: string
  gameId: string
  category: GuideCategory
  region: string
  phase: string
  npcs: string[]
  items: string[]
  prerequisites: string[]
  rewards: string[]
  spoilerLevel: SpoilerLevel
  tags: string[]
  summary: string
  updatedAt: string
  example: boolean
  sources: GuideSource[]
  images: GuideImage[]
  contentStatus: ContentStatus
  lastVerifiedAt: string
  bossType?: string
  equipmentType?: string
  buildTags?: string[]
}

export type GuideEntry = GuideFrontmatter & {
  slug: string
  body: string
  searchText: string
}

export type GuideFilters = {
  category: GuideCategory | 'all'
  region: string
  phase: string
  spoilerLevel: SpoilerLevel | 'all'
}

export type WeaponCategory =
  | 'axes'
  | 'bows'
  | 'clubs'
  | 'curved_great_swords'
  | 'curved_swords'
  | 'daggers'
  | 'double_daggers'
  | 'great_axes'
  | 'great_clubs'
  | 'great_hammers'
  | 'great_swords'
  | 'halberds'
  | 'hammers'
  | 'katanas'
  | 'maces'
  | 'rapiers'
  | 'scythes'
  | 'spears'
  | 'staves'
  | 'straight_swords'
  | 'wands'

export type WeaponEntry = {
  slug: string
  gameId: string
  name: string
  category: WeaponCategory
  categoryLabel: string
  categoryLabelZh: string
  handedness: '单手' | '双手' | '远程' | '法器' | '未知'
  iconUrl: string
  sourceUrl: string
  imageSourceNote: string
  tier: string
  scaling: string
  requirements: string
  runeSlots: string[]
  acquisition: string[]
  merchants: string[]
  notes: string[]
  role?: string
  bestFor?: string[]
  strengths?: string[]
  weaknesses?: string[]
  recommendedRunes?: string[]
  buildTips?: string[]
  alternatives?: string[]
  lastVerifiedAt: string
  searchText: string
}

export type BossCategory = 'main_story' | 'side_quest'

export type BossEntry = {
  slug: string
  gameId: string
  name: string
  category: BossCategory
  categoryLabelZh: string
  bossType: string
  optional: string
  location: string[]
  quest: string[]
  weakness: string[]
  strongAgainst: string[]
  resistantTo: string[]
  immuneTo: string[]
  rewards: string[]
  imageUrl: string
  sourceUrl: string
  summary: string
  preparation: string[]
  recommendedTools?: string[]
  phases?: { title: string; steps: string[] }[]
  strategy: string[]
  attacks: { name: string; counter: string }[]
  beginnerMistakes?: string[]
  notes: string[]
  lastVerifiedAt: string
  searchText: string
}

export type RuneEntry = {
  slug: string
  gameId: string
  name: string
  description: string
  cost: string
  attackType: string
  compatibleWeaponType: string
  whereToFind: string
  category: 'melee' | 'ranged' | 'magic' | 'utility' | 'unknown'
  sourceUrl: string
  lastVerifiedAt: string
  searchText: string
}
