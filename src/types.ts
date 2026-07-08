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
