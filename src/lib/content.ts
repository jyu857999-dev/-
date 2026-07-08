import { games } from '../content/games'
import { imageShortcuts, sourceShortcuts } from '../content/sources'
import type {
  GameConfig,
  GuideImage,
  GuideCategory,
  GuideEntry,
  GuideFrontmatter,
  GuideSource,
  SpoilerLevel,
  ContentStatus,
} from '../types'

const rawGuides = import.meta.glob('../content/guides/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const categoryValues: GuideCategory[] = [
  'quest_exploration',
  'build',
  'equipment',
  'resource_map',
  'boss',
  'collection',
]
const spoilerValues: SpoilerLevel[] = ['none', 'light', 'major']
const contentStatusValues: ContentStatus[] = ['draft', 'verified', 'needs_review']
const requiredFields: Array<keyof GuideFrontmatter> = [
  'title',
  'gameId',
  'category',
  'region',
  'phase',
  'npcs',
  'items',
  'prerequisites',
  'rewards',
  'spoilerLevel',
  'tags',
  'summary',
  'updatedAt',
  'example',
  'sources',
  'images',
  'contentStatus',
  'lastVerifiedAt',
]

export function loadGuides(): GuideEntry[] {
  const parsed = Object.entries(rawGuides)
    .filter(([path]) => !path.endsWith('/TEMPLATE.md'))
    .flatMap(([path, source]) => parseGuidesFromFile(path, source))

  validateGuides(parsed, games)
  return parsed.sort((a, b) => a.title.localeCompare(b.title, 'zh-Hans-CN'))
}

export const guides = loadGuides()

export function parseGuidesFromFile(path: string, source: string): GuideEntry[] {
  const documents = source
    .split(/\n<!--\s*guide\s*-->\n/g)
    .map((part) => part.trim())
    .filter(Boolean)

  return documents.map((document, index) => parseGuide(path, document, index))
}

export function parseGuide(path: string, source: string, index = 0): GuideEntry {
  const { frontmatter, body } = splitFrontmatter(path, source)
  const normalized = normalizeFrontmatter(path, frontmatter)
  const slug =
    expectOptionalString(path, 'slug', frontmatter.slug) ??
    (index === 0 ? path.split('/').pop()?.replace(/\.md$/, '') : undefined) ??
    ''
  const searchText = [
    normalized.title,
    normalized.summary,
    normalized.region,
    normalized.phase,
    normalized.npcs.join(' '),
    normalized.items.join(' '),
    normalized.prerequisites.join(' '),
    normalized.rewards.join(' '),
    normalized.tags.join(' '),
    normalized.sources.map((sourceItem) => sourceItem.title).join(' '),
    normalized.sources.map((sourceItem) => sourceItem.url).join(' '),
    normalized.bossType ?? '',
    normalized.equipmentType ?? '',
    normalized.buildTags?.join(' ') ?? '',
    body,
  ]
    .join(' ')
    .toLowerCase()

  return {
    ...normalized,
    slug,
    body: body.trim(),
    searchText,
  }
}

export function validateGuides(entries: GuideEntry[], gameConfigs: GameConfig[]) {
  const gameIds = new Set(gameConfigs.map((game) => game.id))
  const seen = new Set<string>()

  for (const entry of entries) {
    if (!gameIds.has(entry.gameId)) {
      throw new Error(
        `Guide "${entry.slug}" references unknown gameId "${entry.gameId}".`,
      )
    }

    const game = gameConfigs.find((item) => item.id === entry.gameId)
    if (game && !game.supportedCategories.includes(entry.category)) {
      throw new Error(
        `Guide "${entry.slug}" uses category "${entry.category}" not enabled for "${entry.gameId}".`,
      )
    }

    const key = `${entry.gameId}/${entry.slug}`
    if (seen.has(key)) {
      throw new Error(`Duplicate guide slug "${key}".`)
    }
    seen.add(key)
  }
}

function splitFrontmatter(path: string, source: string) {
  if (!source.startsWith('---\n')) {
    throw new Error(`Guide "${path}" is missing frontmatter delimiters.`)
  }

  const end = source.indexOf('\n---', 4)
  if (end === -1) {
    throw new Error(`Guide "${path}" has unclosed frontmatter.`)
  }

  const block = source.slice(4, end).trim()
  const body = source.slice(end + 4).trim()
  const frontmatter = Object.fromEntries(
    block
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const separator = line.indexOf(':')
        if (separator === -1) {
          throw new Error(`Guide "${path}" has invalid frontmatter line "${line}".`)
        }
        const key = line.slice(0, separator).trim()
        const rawValue = line.slice(separator + 1).trim()
        return [key, parseScalar(rawValue)]
      }),
  )

  return { frontmatter, body }
}

function normalizeFrontmatter(
  path: string,
  value: Record<string, unknown>,
): GuideFrontmatter {
  for (const field of requiredFields) {
    if (!(field in value)) {
      throw new Error(`Guide "${path}" is missing required field "${field}".`)
    }
  }

  const category = expectEnum(
    path,
    'category',
    value.category,
    categoryValues,
  )
  const spoilerLevel = expectEnum(
    path,
    'spoilerLevel',
    value.spoilerLevel,
    spoilerValues,
  )

  return {
    title: expectString(path, 'title', value.title),
    gameId: expectString(path, 'gameId', value.gameId),
    category,
    region: expectString(path, 'region', value.region),
    phase: expectString(path, 'phase', value.phase),
    npcs: expectStringArray(path, 'npcs', value.npcs),
    items: expectStringArray(path, 'items', value.items),
    prerequisites: expectStringArray(path, 'prerequisites', value.prerequisites),
    rewards: expectStringArray(path, 'rewards', value.rewards),
    spoilerLevel,
    tags: expectStringArray(path, 'tags', value.tags),
    summary: expectString(path, 'summary', value.summary),
    updatedAt: expectString(path, 'updatedAt', value.updatedAt),
    example: expectBoolean(path, 'example', value.example),
    sources: expectSources(path, value.sources),
    images: expectImages(path, value.images),
    contentStatus: expectEnum(
      path,
      'contentStatus',
      value.contentStatus,
      contentStatusValues,
    ),
    lastVerifiedAt: expectString(path, 'lastVerifiedAt', value.lastVerifiedAt),
    bossType: expectOptionalString(path, 'bossType', value.bossType),
    equipmentType: expectOptionalString(
      path,
      'equipmentType',
      value.equipmentType,
    ),
    buildTags: expectOptionalStringArray(path, 'buildTags', value.buildTags),
  }
}

function parseScalar(raw: string) {
  if (raw === 'true') return true
  if (raw === 'false') return false
  if (raw.startsWith('[') && raw.endsWith(']')) {
    try {
      return JSON.parse(raw) as unknown
    } catch {
      // Legacy authoring style: [商人, 铁匠]
    }
    const inner = raw.slice(1, -1).trim()
    if (!inner) return []
    return inner.split(',').map((item) => item.trim()).filter(Boolean)
  }
  if (raw.startsWith('{') && raw.endsWith('}')) {
    return JSON.parse(raw) as unknown
  }
  return raw
}

function expectString(path: string, field: string, value: unknown) {
  if (typeof value !== 'string' || value.length === 0) {
    throw new Error(`Guide "${path}" field "${field}" must be a string.`)
  }
  return value
}

function expectOptionalString(path: string, field: string, value: unknown) {
  if (value === undefined) return undefined
  return expectString(path, field, value)
}

function expectBoolean(path: string, field: string, value: unknown) {
  if (typeof value !== 'boolean') {
    throw new Error(`Guide "${path}" field "${field}" must be a boolean.`)
  }
  return value
}

function expectStringArray(path: string, field: string, value: unknown) {
  if (
    !Array.isArray(value) ||
    value.some((item) => typeof item !== 'string')
  ) {
    throw new Error(`Guide "${path}" field "${field}" must be a string array.`)
  }
  return value
}

function expectOptionalStringArray(path: string, field: string, value: unknown) {
  if (value === undefined) return undefined
  return expectStringArray(path, field, value)
}

function expectEnum<T extends string>(
  path: string,
  field: string,
  value: unknown,
  allowed: T[],
) {
  if (typeof value !== 'string' || !allowed.includes(value as T)) {
    throw new Error(
      `Guide "${path}" field "${field}" must be one of: ${allowed.join(', ')}.`,
    )
  }
  return value as T
}

function expectSources(path: string, value: unknown): GuideSource[] {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`Guide "${path}" field "sources" must be a non-empty array.`)
  }

  return value.map((item) => {
    if (typeof item === 'string') {
      const source = sourceShortcuts[item]
      if (!source) {
        throw new Error(`Guide "${path}" references unknown source "${item}".`)
      }
      return source
    }
    if (typeof item !== 'object' || item === null) {
      throw new Error(`Guide "${path}" has an invalid source item.`)
    }
    const source = item as Record<string, unknown>
    return {
      title: expectString(path, 'sources.title', source.title),
      url: expectString(path, 'sources.url', source.url),
      type: expectEnum(path, 'sources.type', source.type, [
        'official',
        'wiki',
        'guide',
        'video',
        'community',
        'news',
      ]),
      language: expectEnum(path, 'sources.language', source.language, [
        'zh',
        'en',
      ]),
    }
  })
}

function expectImages(path: string, value: unknown): GuideImage[] {
  if (!Array.isArray(value)) {
    throw new Error(`Guide "${path}" field "images" must be an array.`)
  }

  return value.map((item) => {
    if (typeof item === 'string') {
      const image = imageShortcuts[item]
      if (!image) {
        throw new Error(`Guide "${path}" references unknown image "${item}".`)
      }
      return image
    }
    if (typeof item !== 'object' || item === null) {
      throw new Error(`Guide "${path}" has an invalid image item.`)
    }
    const image = item as Record<string, unknown>
    return {
      url: expectString(path, 'images.url', image.url),
      alt: expectString(path, 'images.alt', image.alt),
      caption: expectString(path, 'images.caption', image.caption),
      sourceUrl: expectString(path, 'images.sourceUrl', image.sourceUrl),
      licenseNote: expectString(path, 'images.licenseNote', image.licenseNote),
    }
  })
}
