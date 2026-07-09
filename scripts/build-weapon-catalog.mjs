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

function defaultWeaponDetail(categoryLabel, categoryLabelZh, handedness) {
  const shared = {
    role: `${categoryLabelZh}类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。`,
    bestFor: [
      `${handedness}武器使用者。`,
      '想先按武器类型筛选，再进游戏内对照词条的新手玩家。',
    ],
    strengths: [
      '可作为同类武器的图鉴索引，先确认外观、类型和来源页。',
      '适合与符文、词条和属性需求一起复核后决定是否投入升级资源。',
    ],
    weaknesses: [
      'Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。',
      '获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。',
    ],
    recommendedRunes: [
      categoryLabel === 'Bows' ? '远程类符文，例如 Arrowstorm、Cone Shot 等弓专用符文。' : '先选择低硬直、能补足武器短板的通用符文。',
      handedness === '双手' ? '双手慢武器优先考虑能提供位移、打断或远程补刀的符文。' : '单手快武器可优先考虑连段补伤或安全脱离符文。',
    ],
    buildTips: [
      '先看武器动作模组和收招速度，再决定是否投入高价值材料。',
      '普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。',
      '0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。',
    ],
    alternatives: [],
  }
  return shared
}

const weaponOverrides = {
  'Breaking Wave': {
    role: '单手斧。适合想要比直剑更重的削韧和爆发、但仍保留盾牌或副手灵活性的玩家。',
    bestFor: ['新手过渡到中期的力量向近战。', '喜欢短窗口反击、每次只打一两下的 Boss 战打法。'],
    strengths: ['单手斧节奏比大斧更容易控制。', '适合配合盾牌、闪避反击和削韧词条。'],
    weaknesses: ['攻击距离不如长柄武器，打飞行或高速目标需要补位移/远程手段。', '来源页未给稳定数值，具体强度取决于掉落词条。'],
    recommendedRunes: ['Dropkick 或 Frontflip Kick：补近战爆发和削韧。', 'Throw Axe：补中距离收割。'],
    buildTips: ['优先关注体力消耗、削韧和物理伤害词条。', 'Boss 战不要打满连段，利用单手斧较短收招做安全反击。'],
    alternatives: ['Hunter’s Axe', 'Jade Spined Axe', 'Royal Hewn Axe'],
  },
  'Hanzo Blade': {
    role: '武士刀。定位是快节奏切入、短连段和高机动输出，适合熟悉闪避节奏后使用。',
    bestFor: ['喜欢轻装、侧闪、绕背输出的玩家。', '愿意用操作换伤害窗口的熟练玩家。'],
    strengths: ['动作节奏快，适合在 Boss 招式后短时间补伤。', '比重武器更容易在危险招式前收手。'],
    weaknesses: ['容错低，贪刀会被高伤 Boss 反打。', '面对高削韧需求目标时需要符文或词条补强。'],
    recommendedRunes: ['Blink：用于切入或撤离。', 'Throw Knife：补远程收割。', 'Swipe Kick：补近战打断和后坐力。'],
    buildTips: ['优先轻中负重，保证连续闪避。', '词条优先考虑攻击速度、体力效率、背刺/暴击相关收益。'],
    alternatives: ['Katana', 'Tachi', 'Uchigatana'],
  },
  Claymore: {
    role: '双手大剑。适合用较慢但更重的单击压制敌人，核心是读招后反击，不适合无脑连打。',
    bestFor: ['喜欢重武器、削韧和高单击伤害的玩家。', '愿意提前站位、等 Boss 大硬直再输出的玩家。'],
    strengths: ['单击威力和范围优于多数单手武器。', '对普通敌人压制力强。'],
    weaknesses: ['收招慢，新手容易被 Boss 二段攻击抓住。', '体力管理要求更高。'],
    recommendedRunes: ['Blink 或位移类符文：弥补笨重。', '高削韧近战符文：强化爆发窗口。'],
    buildTips: ['只在明确硬直后打重击或短连段。', '搭配较高护甲或防御资源，提高失误容错。'],
    alternatives: ['Baron’s Edge', 'Burning Thorn', 'Corpse Smeared Blade'],
  },
  'Answered Prayer': {
    role: '弓。用于远程消耗、拉怪和处理不适合贴身的目标。',
    bestFor: ['想在探索中安全处理敌人的新手。', '需要远程补刀或引怪工具的近战 Build。'],
    strengths: ['可在安全距离处理目标。', '适合搭配弓专用符文形成爆发。'],
    weaknesses: ['不适合被敌人贴脸时硬用。', '需要管理弹药、Focus 或符文成本。'],
    recommendedRunes: ['Arrowstorm：对单体或群体补爆发。', 'Cone Shot：近中距离扇形压制。'],
    buildTips: ['把弓当作副武器时，重点用于开怪和收残血。', '主弓玩法需要更多关注 Focus 续航和位移。'],
    alternatives: ['Laquered Bow', 'Short Bow', 'Yewn Longbow'],
  },
  'Laquered Bow': {
    role: '弓。适合远程 Build 或近战角色的安全补刀位。',
    bestFor: ['想降低探索风险的玩家。', '打不熟悉 Boss 前先观察招式的新手。'],
    strengths: ['远程容错高。', '可与弓专用符文配合打出高覆盖攻击。'],
    weaknesses: ['近身压力下输出环境差。', '遇到高速突进敌人时需要位移符文或副手近战。'],
    recommendedRunes: ['Arrowstorm', 'Cone Shot', 'Breakstep'],
    buildTips: ['用弓开局拉怪，近战武器处理贴脸目标。', '优先关注 Focus 续航、远程伤害和安全距离。'],
    alternatives: ['Answered Prayer', 'Short Bow', 'Twinned Recurve Bow'],
  },
  'Corpse Smeared Blade': {
    role: 'Boss 相关掉落大剑。更适合想围绕高单击伤害和 Boss 奖励武器构建的玩家。',
    bestFor: ['击败 Warrick 后想尝试重武器路线的玩家。', '喜欢慢速高伤、等窗口爆发的玩家。'],
    strengths: ['来源页关联 Warrick 奖励，具有明确 Boss 掉落线索。', '大剑类型在清普通敌人时压制力强。'],
    weaknesses: ['慢武器通病明显，失误成本高。', '具体数值仍需进游戏复核。'],
    recommendedRunes: ['位移类符文补笨重。', '高伤害近战符文用于 Boss 大硬直。'],
    buildTips: ['不要用它和高速 Boss 换血；等硬直再打。', '搭配高防御护甲或减体力消耗词条提高容错。'],
    alternatives: ['Claymore', 'Baron’s Edge', 'Burning Thorn'],
  },
  'Wind of Death': {
    role: 'Echo Knight 相关概率掉落武器。适合已进入 Crucible 并能稳定处理高压 Boss 的玩家。',
    bestFor: ['中后期挑战试炼的玩家。', '想围绕稀有 Boss 掉落做收藏和 Build 实验的玩家。'],
    strengths: ['来源页明确列为 Echo Knight 概率掉落。', '适合作为试炼阶段目标装备。'],
    weaknesses: ['获取门槛高，需要能打过 Echo Knight。', '词条和具体数值需要掉落实物复核。'],
    recommendedRunes: ['优先保留能补位移和爆发的符文。', '根据实际武器类型选择同类专用符文。'],
    buildTips: ['先把 Echo Knight 打法稳定下来，再刷掉落。', '拿到后先看词条是否支持当前属性路线。'],
    alternatives: ['同类 Boss 掉落武器', '当前高词条主武器'],
  },
  "Falstead's Fury": {
    role: 'Falstead Darak 相关奖励武器。适合支线推进后围绕火弱点 Boss 和人形战继续优化装备。',
    bestFor: ['完成 Of Rats and Raiders 线的玩家。', '想使用 Boss 相关武器做中期 Build 的玩家。'],
    strengths: ['来源页明确和 Falstead Darak 奖励相关。', '适合收藏和中期路线尝试。'],
    weaknesses: ['获取依赖支线 Boss。', '具体属性仍需实物复核。'],
    recommendedRunes: ['补位移或打断的通用符文。', '根据实际攻击模组选择近战爆发符文。'],
    buildTips: ['打 Falstead 前先准备火属性伤害。', '获得后比较当前主武器词条，不要只因 Boss 名称就替换。'],
    alternatives: ['Stag of Embers', "Falstead's Barricade"],
  },
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
      const detail = defaultWeaponDetail(categoryLabel, category[1], handednessFor(categoryLabel))
      const override = weaponOverrides[name] ?? {}
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
        ...detail,
        ...override,
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
      entry.role ?? '',
      ...(entry.bestFor ?? []),
      ...(entry.strengths ?? []),
      ...(entry.weaknesses ?? []),
      ...(entry.recommendedRunes ?? []),
      ...(entry.buildTips ?? []),
      ...(entry.alternatives ?? []),
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
