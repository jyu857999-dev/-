import { execFileSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const sourceUrl = 'https://norestforthewicked.wiki.fextralife.com/Weapons'
const sourceHost = 'https://norestforthewicked.wiki.fextralife.com'
const verifiedAt = new Date().toISOString().slice(0, 10)

const categoryMap = {
  Axes: ['axes', '斧'],
  Bows: ['bows', '弓'],
  Clubs: ['clubs', '棍棒'],
  'Curved Great Swords': ['curved_great_swords', '曲刃大剑'],
  'Curved Swords': ['curved_swords', '曲剑'],
  Daggers: ['daggers', '匕首'],
  'Double Daggers': ['double_daggers', '双匕首'],
  'Great Axes': ['great_axes', '大斧'],
  'Great Clubs': ['great_clubs', '大棍棒'],
  'Great Hammers': ['great_hammers', '大锤'],
  'Great Swords': ['great_swords', '大剑'],
  Halberds: ['halberds', '戟'],
  Hammers: ['hammers', '锤'],
  Katanas: ['katanas', '武士刀'],
  Maces: ['maces', '钉头锤'],
  Rapiers: ['rapiers', '刺剑'],
  Scythes: ['scythes', '镰刀'],
  Spears: ['spears', '长矛'],
  Staves: ['staves', '法杖'],
  'Straight Swords': ['straight_swords', '直剑'],
  Wands: ['wands', '魔杖'],
}

function fetchWithPowerShell(url) {
  const command = [
    "$ProgressPreference='SilentlyContinue';",
    `[Console]::OutputEncoding=[System.Text.Encoding]::UTF8;`,
    `(Invoke-WebRequest -Uri '${url.replaceAll("'", "''")}' -UseBasicParsing -TimeoutSec 80).Content`,
  ].join(' ')
  return execFileSync('powershell', ['-NoProfile', '-Command', command], {
    encoding: 'utf8',
    maxBuffer: 1024 * 1024 * 8,
  })
}

function decodeHtml(value) {
  return value
    .replaceAll('&nbsp;', ' ')
    .replaceAll('&amp;', '&')
    .replaceAll('&#039;', "'")
    .replaceAll('&quot;', '"')
    .replaceAll('&rsquo;', "'")
    .replaceAll('&apos;', "'")
    .replace(/\s+/g, ' ')
    .trim()
}

function slugify(name) {
  return name
    .toLowerCase()
    .replaceAll('&', 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function absoluteUrl(path) {
  if (path.startsWith('http')) return path
  return `${sourceHost}${path.startsWith('/') ? path : `/${path}`}`
}

function handednessFor(categoryLabel) {
  if (categoryLabel === 'Bows') return '远程'
  if (categoryLabel === 'Staves' || categoryLabel === 'Wands') return '法器'
  if (
    categoryLabel.startsWith('Great') ||
    categoryLabel === 'Curved Great Swords' ||
    categoryLabel === 'Double Daggers' ||
    categoryLabel === 'Scythes' ||
    categoryLabel === 'Halberds' ||
    categoryLabel === 'Spears'
  ) {
    return '双手'
  }
  return '单手'
}

function extractCatalog(html) {
  const entries = []
  const sectionRegex =
    /<h3 class="special">[\s\S]*?All ([^<]+)<\/a>[\s\S]*?<\/h3>([\s\S]*?)(?=<h3 class="special">|<div id="comments_wrapper|$)/g

  for (const section of html.matchAll(sectionRegex)) {
    const categoryLabel = decodeHtml(section[1])
    const category = categoryMap[categoryLabel]
    if (!category) continue

    for (const item of section[2].matchAll(
      /<h4><a[^>]+href="([^"]+)"[^>]*><img[^>]+src="([^"]+)"[^>]+alt="([^"]*)"[^>]*><br>([^<]+)<\/a><\/h4>/g,
    )) {
      const name = decodeHtml(item[4])
      entries.push({
        slug: slugify(name),
        gameId: 'no-rest-for-the-wicked',
        name,
        category: category[0],
        categoryLabel,
        categoryLabelZh: category[1],
        handedness: handednessFor(categoryLabel),
        iconUrl: absoluteUrl(item[2]),
        sourceUrl: absoluteUrl(item[1]),
        imageSourceNote: 'Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。',
        tier: '页面未稳定标注',
        scaling: '页面多处仍为 ???，以游戏内实际掉落词条为准',
        requirements: '页面多处仍为 ???，以游戏内实际装备要求为准',
        runeSlots: ['X：空槽或随机', 'Y：空槽或随机', 'B：空槽或随机', 'A：空槽或随机'],
        acquisition: [
          '武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。',
          '具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。',
        ],
        merchants: ['来源页面未稳定列出固定商人时，标记为随机或待复核。'],
        notes: [
          '0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。',
          '常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。',
          '普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。',
        ],
        lastVerifiedAt: verifiedAt,
      })
    }
  }

  return entries.map((entry) => ({
    ...entry,
    searchText: [
      entry.name,
      entry.categoryLabel,
      entry.categoryLabelZh,
      entry.handedness,
      entry.scaling,
      entry.requirements,
      ...entry.acquisition,
      ...entry.notes,
    ]
      .join(' ')
      .toLowerCase(),
  }))
}

const html = fetchWithPowerShell(sourceUrl)
const weapons = extractCatalog(html)

if (weapons.length < 150) {
  throw new Error(`Expected a large weapon catalog, got ${weapons.length}`)
}

const duplicates = weapons.filter(
  (weapon, index) => weapons.findIndex((item) => item.slug === weapon.slug) !== index,
)
if (duplicates.length > 0) {
  throw new Error(`Duplicate weapon slugs: ${duplicates.map((item) => item.slug).join(', ')}`)
}

const dataPath = resolve(root, 'src/content/weapons/no-rest-for-the-wicked.ts')
const researchPath = resolve(root, 'docs/research/no-rest-for-the-wicked-weapons.json')
mkdirSync(dirname(dataPath), { recursive: true })
mkdirSync(dirname(researchPath), { recursive: true })

writeFileSync(
  dataPath,
  `import type { WeaponEntry } from '../../types'\n\n` +
    `export const weaponCategoryOrder = ${JSON.stringify(
      Object.values(categoryMap).map(([key]) => key),
      null,
      2,
    )} as const\n\n` +
    `export const weapons = ${JSON.stringify(weapons, null, 2)} satisfies WeaponEntry[]\n`,
  'utf8',
)

writeFileSync(
  researchPath,
  JSON.stringify(
    {
      sourceUrl,
      lastFetchedAt: new Date().toISOString(),
      total: weapons.length,
      categories: Object.fromEntries(
        Object.entries(categoryMap).map(([label, [key, zh]]) => [
          key,
          {
            label,
            labelZh: zh,
            count: weapons.filter((weapon) => weapon.category === key).length,
          },
        ]),
      ),
      weapons: weapons.map(({ searchText: _searchText, ...weapon }) => weapon),
    },
    null,
    2,
  ),
  'utf8',
)

console.log(`Generated ${weapons.length} weapons`)
