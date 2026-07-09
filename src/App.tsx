import { useMemo, useState } from 'react'
import {
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from 'react-router-dom'
import { MarkdownView } from './components/MarkdownView'
import {
  categoryLabels,
  contentStatusLabels,
  games,
  spoilerLabels,
} from './content/games'
import { guides } from './lib/content'
import { filterGuides, uniqueValues } from './lib/search'
import {
  bossCategoryLabels,
  filterBosses,
  filterRunes,
  findBoss,
  findRune,
  getBossesForGame,
  getRunesForGame,
  groupBosses,
  groupRunes,
  runeCategoryLabels,
} from './lib/bossRuneCatalog'
import {
  filterWeapons,
  findWeapon,
  getWeaponsForGame,
  groupWeaponsByCategory,
  weaponCategoryLabels,
} from './lib/weaponCatalog'
import type {
  BossCategory,
  BossEntry,
  GuideEntry,
  GuideFilters,
  RuneEntry,
  WeaponCategory,
  WeaponEntry,
} from './types'
import './App.css'

const defaultGameId = games[0]?.id ?? ''
const defaultFilters: GuideFilters = {
  category: 'all',
  region: 'all',
  phase: 'all',
  spoilerLevel: 'all',
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/games/${defaultGameId}`} replace />} />
      <Route path="/games/:gameId" element={<GuideLibrary />} />
      <Route path="/games/:gameId/weapons" element={<WeaponCatalog />} />
      <Route path="/games/:gameId/weapons/:weaponSlug" element={<WeaponDetail />} />
      <Route path="/games/:gameId/bosses" element={<BossCatalog />} />
      <Route path="/games/:gameId/bosses/:bossSlug" element={<BossDetail />} />
      <Route path="/games/:gameId/runes" element={<RuneCatalog />} />
      <Route path="/games/:gameId/runes/:runeSlug" element={<RuneDetail />} />
      <Route path="/games/:gameId/guides/:guideSlug" element={<GuideDetail />} />
      <Route path="*" element={<NotFound title="页面不存在" />} />
    </Routes>
  )
}

function GuideLibrary() {
  const { gameId = defaultGameId } = useParams()
  const navigate = useNavigate()
  const game = games.find((item) => item.id === gameId)
  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState<GuideFilters>(defaultFilters)
  const [equipmentType, setEquipmentType] = useState('all')
  const [bossType, setBossType] = useState('all')
  const [buildTag, setBuildTag] = useState('all')

  if (!game) return <NotFound title="未找到这个游戏" />

  const gameGuides = guides.filter((guide) => guide.gameId === game.id)
  const regions = uniqueValues(gameGuides, 'region')
  const phases = uniqueValues(gameGuides, 'phase')
  const equipmentTypes = uniqueOptionalValues(
    gameGuides.filter((guide) => guide.category === 'equipment'),
    'equipmentType',
  )
  const bossTypes = uniqueOptionalValues(
    gameGuides.filter((guide) => guide.category === 'boss'),
    'bossType',
  )
  const buildTags = Array.from(
    new Set(gameGuides.flatMap((guide) => guide.buildTags ?? [])),
  ).sort((a, b) => a.localeCompare(b, 'zh-Hans-CN'))
  const categoryStats = game.supportedCategories.map((category) => ({
    category,
    count: gameGuides.filter((guide) => guide.category === category).length,
  }))
  const effectiveEquipmentType =
    filters.category === 'equipment' || filters.category === 'all'
      ? equipmentType
      : 'all'
  const effectiveBossType =
    filters.category === 'boss' || filters.category === 'all' ? bossType : 'all'
  const effectiveBuildTag =
    filters.category === 'build' || filters.category === 'all' ? buildTag : 'all'
  const results = filterGuides(gameGuides, game.id, query, filters).filter(
    (guide) =>
      (effectiveEquipmentType === 'all' ||
        guide.equipmentType === effectiveEquipmentType) &&
      (effectiveBossType === 'all' || guide.bossType === effectiveBossType) &&
      (effectiveBuildTag === 'all' || guide.buildTags?.includes(effectiveBuildTag)),
  )
  const isCatalogMode =
    filters.category === 'equipment' || filters.category === 'boss'

  function updateCategory(category: GuideFilters['category']) {
    setFilters({ ...filters, category })
    if (category !== 'equipment' && category !== 'all') setEquipmentType('all')
    if (category !== 'boss' && category !== 'all') setBossType('all')
    if (category !== 'build' && category !== 'all') setBuildTag('all')
  }

  return (
    <main className="app-shell">
      <Header
        gameId={game.id}
        onGameChange={(nextGameId) => navigate(`/games/${nextGameId}`)}
      />

      <section className="game-hero">
        <img src={game.cover} alt="" />
        <div>
          <p className="eyebrow">多游戏攻略库</p>
          <h1>{game.name}</h1>
          <p>{game.description}</p>
          <SourceNotice />
        </div>
      </section>

      <CategoryDashboard
        stats={categoryStats}
        activeCategory={filters.category}
        onSelect={updateCategory}
      />

      <section className="feature-strip">
        <div>
          <p className="eyebrow">图鉴资料升级</p>
          <h2>武器、Boss、符文图鉴</h2>
          <p>
            已整理 193 把武器、8 个 Boss 和 222 条符文；Boss 详情包含招式与打法，符文保留表格字段。
          </p>
        </div>
        <div className="feature-actions">
          <Link className="primary-link solid" to={`/games/${game.id}/weapons`}>
            武器
          </Link>
          <Link className="primary-link solid" to={`/games/${game.id}/bosses`}>
            Boss
          </Link>
          <Link className="primary-link solid" to={`/games/${game.id}/runes`}>
            符文
          </Link>
        </div>
      </section>

      <section className="library-layout" aria-label="攻略列表">
        <aside className="filter-panel">
          <label className="field">
            <span>搜索</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="任务、地点、NPC、道具、Boss、装备..."
            />
          </label>

          <SelectField
            label="分类"
            value={filters.category}
            onChange={(value) =>
              updateCategory(value as GuideFilters['category'])
            }
            options={[
              ['all', '全部分类'],
              ...game.supportedCategories.map(
                (category) => [category, categoryLabels[category]] as const,
              ),
            ]}
          />

          <SelectField
            label="区域"
            value={filters.region}
            onChange={(value) => setFilters({ ...filters, region: value })}
            options={[['all', '全部区域'], ...regions.map((item) => [item, item] as const)]}
          />

          <SelectField
            label="阶段"
            value={filters.phase}
            onChange={(value) => setFilters({ ...filters, phase: value })}
            options={[['all', '全部阶段'], ...phases.map((item) => [item, item] as const)]}
          />

          {(filters.category === 'equipment' || filters.category === 'all') && (
            <SelectField
              label="装备类型"
              value={equipmentType}
              onChange={setEquipmentType}
              options={[
                ['all', '全部装备类型'],
                ...equipmentTypes.map((item) => [item, item] as const),
              ]}
            />
          )}

          {(filters.category === 'boss' || filters.category === 'all') && (
            <SelectField
              label="Boss 类型"
              value={bossType}
              onChange={setBossType}
              options={[
                ['all', '全部 Boss 类型'],
                ...bossTypes.map((item) => [item, item] as const),
              ]}
            />
          )}

          {(filters.category === 'build' || filters.category === 'all') && (
            <SelectField
              label="Build 标签"
              value={buildTag}
              onChange={setBuildTag}
              options={[
                ['all', '全部 Build 标签'],
                ...buildTags.map((item) => [item, item] as const),
              ]}
            />
          )}

          <SelectField
            label="剧透"
            value={filters.spoilerLevel}
            onChange={(value) =>
              setFilters({
                ...filters,
                spoilerLevel: value as GuideFilters['spoilerLevel'],
              })
            }
            options={[
              ['all', '全部剧透级别'],
              ...Object.entries(spoilerLabels),
            ]}
          />

          <button
            type="button"
            className="ghost-button"
            onClick={() => {
              setQuery('')
              setFilters(defaultFilters)
              setEquipmentType('all')
              setBossType('all')
              setBuildTag('all')
            }}
          >
            重置筛选
          </button>
        </aside>

        <div className="guide-results">
          <div className="result-summary">
            <h2>攻略条目</h2>
            <span>{results.length} 篇</span>
          </div>

          {isCatalogMode ? (
            <CatalogSections
              guides={results}
              mode={filters.category === 'equipment' ? 'equipment' : 'boss'}
            />
          ) : (
            <div className="guide-grid">
              {results.map((guide) => (
                <GuideCard key={`${guide.gameId}/${guide.slug}`} guide={guide} />
              ))}
            </div>
          )}

          {results.length === 0 && (
            <EmptyState title="没有匹配攻略" body="换一个关键词或重置筛选试试。" />
          )}
        </div>
      </section>
    </main>
  )
}

function CategoryDashboard({
  stats,
  activeCategory,
  onSelect,
}: {
  stats: { category: GuideEntry['category']; count: number }[]
  activeCategory: GuideFilters['category']
  onSelect: (category: GuideFilters['category']) => void
}) {
  const total = stats.reduce((sum, item) => sum + item.count, 0)
  return (
    <section className="category-dashboard" aria-label="分类总览">
      <button
        type="button"
        className={activeCategory === 'all' ? 'active' : ''}
        onClick={() => onSelect('all')}
      >
        <span>全部</span>
        <strong>{total}</strong>
      </button>
      {stats.map(({ category, count }) => (
        <button
          key={category}
          type="button"
          className={activeCategory === category ? 'active' : ''}
          onClick={() => onSelect(category)}
        >
          <span>{categoryLabels[category]}</span>
          <strong>{count}</strong>
        </button>
      ))}
    </section>
  )
}

function CatalogSections({
  guides,
  mode,
}: {
  guides: GuideEntry[]
  mode: 'equipment' | 'boss'
}) {
  const grouped = groupCatalogGuides(guides, mode)
  return (
    <div className="catalog-sections">
      {grouped.map(([label, items]) => (
        <section key={label} className="catalog-section">
          <div className="catalog-heading">
            <h3>{label}</h3>
            <span>{items.length} 项</span>
          </div>
          <div className="catalog-grid">
            {items.map((guide) => (
              <GuideCard
                key={`${guide.gameId}/${guide.slug}`}
                guide={guide}
                catalog
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function GuideDetail() {
  const { gameId = '', guideSlug = '' } = useParams()
  const game = games.find((item) => item.id === gameId)
  const guide = guides.find(
    (item) => item.gameId === gameId && item.slug === guideSlug,
  )
  const related = useMemo(
    () =>
      guides
        .filter(
          (item) =>
            item.gameId === gameId &&
            item.slug !== guideSlug &&
            (item.category === guide?.category ||
              item.region === guide?.region ||
              item.tags.some((tag) => guide?.tags.includes(tag))),
        )
        .slice(0, 3),
    [gameId, guideSlug, guide],
  )

  if (!game) return <NotFound title="未找到这个游戏" />
  if (!guide) return <NotFound title="未找到这篇攻略" />

  return (
    <main className="app-shell detail-shell">
      <Header gameId={game.id} />
      <Link className="back-link" to={`/games/${game.id}`}>
        返回攻略列表
      </Link>

      <article className="guide-detail">
        <header>
          <p className="eyebrow">{categoryLabels[guide.category]}</p>
          <h1>{guide.title}</h1>
          <p>{guide.summary}</p>
          <div className="status-row">
            {guide.example && <span className="notice">示例内容</span>}
            <span className="notice">{contentStatusLabels[guide.contentStatus]}</span>
            <span className="notice">复核：{guide.lastVerifiedAt}</span>
          </div>
          <SourceNotice />
        </header>

        <dl className="meta-panel" aria-label="攻略资料卡">
          <Meta label="区域" values={[guide.region]} />
          <Meta label="阶段" values={[guide.phase]} />
          <Meta label="NPC" values={guide.npcs} />
          <Meta label="关键道具" values={guide.items} />
          <Meta label="前置条件" values={guide.prerequisites} />
          <Meta label="奖励" values={guide.rewards} />
          <Meta label="装备类型" values={optionalValue(guide.equipmentType)} />
          <Meta label="Boss 类型" values={optionalValue(guide.bossType)} />
          <Meta label="Build 标签" values={guide.buildTags ?? []} />
          <Meta label="剧透级别" values={[spoilerLabels[guide.spoilerLevel]]} />
          <Meta label="更新" values={[guide.updatedAt]} />
        </dl>

        <ImageGallery guide={guide} />
        <MarkdownView source={guide.body} />
        <TagList values={guide.tags} />
        <SourceList guide={guide} />
      </article>

      {related.length > 0 && (
        <section className="related-guides">
          <h2>相关攻略</h2>
          <div className="guide-grid compact">
            {related.map((item) => (
              <GuideCard key={`${item.gameId}/${item.slug}`} guide={item} compact />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

function WeaponCatalog() {
  const { gameId = defaultGameId } = useParams()
  const game = games.find((item) => item.id === gameId)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<WeaponCategory | 'all'>('all')

  if (!game) return <NotFound title="未找到这个游戏" />

  const gameWeapons = getWeaponsForGame(game.id)
  const filtered = filterWeapons(gameWeapons, query, category)
  const groups = groupWeaponsByCategory(filtered)
  const categoryOptions = Array.from(
    new Set(gameWeapons.map((weapon) => weapon.category)),
  ).sort((first, second) =>
    weaponCategoryLabels[first].localeCompare(weaponCategoryLabels[second], 'zh-Hans-CN'),
  )

  return (
    <main className="app-shell weapon-shell">
      <Header gameId={game.id} />
      <Link className="back-link" to={`/games/${game.id}`}>
        返回攻略库首页
      </Link>

      <section className="weapon-hero">
        <div>
          <p className="eyebrow">Weapons Catalog</p>
          <h1>武器图鉴</h1>
          <p>
            按来源页面的武器分类和图标整理，适合快速查找斧、弓、匕首、武士刀、法杖、长矛等装备。
          </p>
        </div>
        <dl className="weapon-stats">
          <div>
            <dt>武器总数</dt>
            <dd>{gameWeapons.length}</dd>
          </div>
          <div>
            <dt>细分类</dt>
            <dd>{categoryOptions.length}</dd>
          </div>
        </dl>
      </section>

      <section className="weapon-tools" aria-label="武器筛选">
        <label className="field">
          <span>搜索武器</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="输入武器名、类型、单手、双手、法器..."
          />
        </label>
        <SelectField
          label="武器类型"
          value={category}
          onChange={(value) => setCategory(value as WeaponCategory | 'all')}
          options={[
            ['all', '全部武器类型'],
            ...categoryOptions.map(
              (item) => [item, weaponCategoryLabels[item]] as const,
            ),
          ]}
        />
      </section>

      <div className="weapon-tabs" aria-label="武器类型快捷入口">
        <button
          type="button"
          className={category === 'all' ? 'active' : ''}
          onClick={() => setCategory('all')}
        >
          全部
        </button>
        {categoryOptions.map((item) => (
          <button
            key={item}
            type="button"
            className={category === item ? 'active' : ''}
            onClick={() => setCategory(item)}
          >
            {weaponCategoryLabels[item]}
          </button>
        ))}
      </div>

      <div className="result-summary">
        <h2>武器列表</h2>
        <span>{filtered.length} 把</span>
      </div>

      {groups.length > 0 ? (
        <div className="weapon-sections">
          {groups.map(([groupCategory, items]) => (
            <section key={groupCategory} className="weapon-section">
              <div className="weapon-section-heading">
                <h3>{weaponCategoryLabels[groupCategory]}</h3>
                <span>{items.length} 把</span>
              </div>
              <div className="weapon-grid">
                {items.map((weapon) => (
                  <WeaponCard key={weapon.slug} weapon={weapon} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <EmptyState title="没有匹配武器" body="换一个关键词或重置武器类型。" />
      )}
    </main>
  )
}

function WeaponDetail() {
  const { gameId = '', weaponSlug = '' } = useParams()
  const game = games.find((item) => item.id === gameId)
  const weapon = findWeapon(gameId, weaponSlug)
  const related = weapon
    ? getWeaponsForGame(gameId)
        .filter((item) => item.category === weapon.category && item.slug !== weapon.slug)
        .slice(0, 8)
    : []

  if (!game) return <NotFound title="未找到这个游戏" />
  if (!weapon) return <NotFound title="未找到这把武器" />

  return (
    <main className="app-shell weapon-shell">
      <Header gameId={game.id} />
      <Link className="back-link" to={`/games/${game.id}/weapons`}>
        返回武器图鉴
      </Link>

      <article className="weapon-detail">
        <section className="weapon-detail-main">
          <p className="eyebrow">{weapon.categoryLabelZh}</p>
          <h1>{weapon.name}</h1>
          <p>{weapon.role ?? `${weapon.name} 属于 ${weapon.categoryLabelZh}。`}</p>

          <InfoSection title="适合人群" values={weapon.bestFor ?? []} />
          <InfoSection title="优点" values={weapon.strengths ?? []} />
          <InfoSection title="短板" values={weapon.weaknesses ?? []} />
          <InfoSection title="推荐符文" values={weapon.recommendedRunes ?? []} />
          <InfoSection title="Build 与使用建议" values={weapon.buildTips ?? []} />
          <InfoSection title="获取方式" values={weapon.acquisition} />
          <InfoSection title="商人 / 掉落备注" values={weapon.merchants} />
          <InfoSection title="使用注意" values={weapon.notes} />
          <InfoSection title="同类替代" values={weapon.alternatives ?? []} />

          {related.length > 0 && (
            <section className="related-weapon-strip">
              <h2>同类武器</h2>
              <div className="weapon-mini-grid">
                {related.map((item) => (
                  <WeaponCard key={item.slug} weapon={item} compact />
                ))}
              </div>
            </section>
          )}
        </section>

        <aside className="weapon-infobox" aria-label="武器资料卡">
          <img src={weapon.iconUrl} alt={`${weapon.name} 图标`} />
          <h2>{weapon.name}</h2>
          <dl>
            <Meta label="分类" values={[weapon.categoryLabelZh]} />
            <Meta label="持握" values={[weapon.handedness]} />
            <Meta label="阶级" values={[weapon.tier]} />
            <Meta label="属性补正" values={[weapon.scaling]} />
            <Meta label="装备要求" values={[weapon.requirements]} />
            <Meta label="符文槽" values={weapon.runeSlots} />
            <Meta label="复核日期" values={[weapon.lastVerifiedAt]} />
          </dl>
          <a href={weapon.sourceUrl} target="_blank" rel="noreferrer">
            查看来源页
          </a>
          <p>{weapon.imageSourceNote}</p>
        </aside>
      </article>
    </main>
  )
}

function BossCatalog() {
  const { gameId = defaultGameId } = useParams()
  const game = games.find((item) => item.id === gameId)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<BossCategory | 'all'>('all')
  const [bossType, setBossType] = useState('all')

  if (!game) return <NotFound title="未找到这个游戏" />

  const gameBosses = getBossesForGame(game.id)
  const bossTypes = Array.from(new Set(gameBosses.map((boss) => boss.bossType))).sort(
    (a, b) => a.localeCompare(b, 'zh-Hans-CN'),
  )
  const filtered = filterBosses(gameBosses, query, category, bossType)
  const groups = groupBosses(filtered)

  return (
    <main className="app-shell weapon-shell">
      <Header gameId={game.id} />
      <Link className="back-link" to={`/games/${game.id}`}>
        返回攻略库首页
      </Link>
      <CatalogHero
        eyebrow="Boss Catalog"
        title="Boss 图鉴"
        body="按主线、支线和 Boss 类型整理；点进详情可看位置、奖励、招式与打法。"
        stats={[
          ['Boss 总数', String(gameBosses.length)],
          ['类型', String(bossTypes.length)],
        ]}
      />
      <section className="weapon-tools" aria-label="Boss 筛选">
        <SearchInput value={query} onChange={setQuery} placeholder="搜索 Boss、地点、奖励、招式..." />
        <SelectField
          label="Boss 分类"
          value={category}
          onChange={(value) => setCategory(value as BossCategory | 'all')}
          options={[
            ['all', '全部 Boss'],
            ...Object.entries(bossCategoryLabels),
          ]}
        />
        <SelectField
          label="Boss 类型"
          value={bossType}
          onChange={setBossType}
          options={[
            ['all', '全部类型'],
            ...bossTypes.map((item) => [item, item] as const),
          ]}
        />
      </section>

      <div className="weapon-sections">
        {groups.map(([groupCategory, items]) => (
          <section key={groupCategory} className="weapon-section">
            <div className="weapon-section-heading">
              <h3>{bossCategoryLabels[groupCategory]}</h3>
              <span>{items.length} 个</span>
            </div>
            <div className="weapon-grid boss-grid">
              {items.map((boss) => (
                <BossCard key={boss.slug} boss={boss} />
              ))}
            </div>
          </section>
        ))}
      </div>
      {filtered.length === 0 && <EmptyState title="没有匹配 Boss" body="换关键词或重置筛选。" />}
    </main>
  )
}

function BossDetail() {
  const { gameId = '', bossSlug = '' } = useParams()
  const game = games.find((item) => item.id === gameId)
  const boss = findBoss(gameId, bossSlug)
  if (!game) return <NotFound title="未找到这个游戏" />
  if (!boss) return <NotFound title="未找到这个 Boss" />

  return (
    <main className="app-shell weapon-shell">
      <Header gameId={game.id} />
      <Link className="back-link" to={`/games/${game.id}/bosses`}>
        返回 Boss 图鉴
      </Link>
      <article className="weapon-detail">
        <section className="weapon-detail-main">
          <p className="eyebrow">{boss.categoryLabelZh}</p>
          <h1>{boss.name}</h1>
          <p>{boss.summary}</p>
          <InfoSection title="战前准备" values={boss.preparation} />
          <InfoSection title="推荐工具" values={boss.recommendedTools ?? []} />
          {boss.phases && boss.phases.length > 0 && (
            <section className="info-section">
              <h2>阶段打法</h2>
              <div className="phase-stack">
                {boss.phases.map((phase) => (
                  <section key={phase.title} className="phase-card">
                    <h3>{phase.title}</h3>
                    <ul>
                      {phase.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </section>
          )}
          <InfoSection title="打法流程" values={boss.strategy} />
          <section className="info-section">
            <h2>招式与应对</h2>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>招式</th>
                    <th>应对</th>
                  </tr>
                </thead>
                <tbody>
                  {boss.attacks.map((attack) => (
                    <tr key={attack.name}>
                      <td>{attack.name}</td>
                      <td>{attack.counter}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <InfoSection title="新手常见死法" values={boss.beginnerMistakes ?? []} />
          {boss.notes.length > 0 && <InfoSection title="备注" values={boss.notes} />}
        </section>
        <aside className="weapon-infobox" aria-label="Boss 资料卡">
          {boss.imageUrl ? (
            <img src={boss.imageUrl} alt={`${boss.name} 图片`} />
          ) : (
            <div className="missing-image">待补图</div>
          )}
          <h2>{boss.name}</h2>
          <dl>
            <Meta label="分类" values={[boss.categoryLabelZh]} />
            <Meta label="类型" values={[boss.bossType]} />
            <Meta label="可选" values={[boss.optional]} />
            <Meta label="位置" values={boss.location} />
            <Meta label="相关任务" values={boss.quest} />
            <Meta label="弱点" values={boss.weakness} />
            <Meta label="强抗" values={boss.strongAgainst} />
            <Meta label="抗性" values={boss.resistantTo} />
            <Meta label="免疫" values={boss.immuneTo} />
            <Meta label="奖励" values={boss.rewards} />
            <Meta label="复核日期" values={[boss.lastVerifiedAt]} />
          </dl>
          <a href={boss.sourceUrl} target="_blank" rel="noreferrer">
            查看来源页
          </a>
        </aside>
      </article>
    </main>
  )
}

function RuneCatalog() {
  const { gameId = defaultGameId } = useParams()
  const game = games.find((item) => item.id === gameId)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<RuneEntry['category'] | 'all'>('all')
  const [attackType, setAttackType] = useState('all')

  if (!game) return <NotFound title="未找到这个游戏" />

  const gameRunes = getRunesForGame(game.id)
  const attackTypes = Array.from(new Set(gameRunes.map((rune) => rune.attackType))).sort(
    (a, b) => a.localeCompare(b, 'zh-Hans-CN'),
  )
  const filtered = filterRunes(gameRunes, query, category, attackType)
  const groups = groupRunes(filtered)

  return (
    <main className="app-shell weapon-shell">
      <Header gameId={game.id} />
      <Link className="back-link" to={`/games/${game.id}`}>
        返回攻略库首页
      </Link>
      <CatalogHero
        eyebrow="Runes Catalog"
        title="符文图鉴"
        body="保留来源表格的描述、成本、攻击类型、兼容武器和获取方式，支持筛选与详情查看。"
        stats={[
          ['符文总数', String(gameRunes.length)],
          ['攻击类型', String(attackTypes.length)],
        ]}
      />
      <section className="weapon-tools" aria-label="符文筛选">
        <SearchInput value={query} onChange={setQuery} placeholder="搜索符文、描述、获取方式、武器类型..." />
        <SelectField
          label="用途分类"
          value={category}
          onChange={(value) => setCategory(value as RuneEntry['category'] | 'all')}
          options={[
            ['all', '全部用途'],
            ...Object.entries(runeCategoryLabels),
          ]}
        />
        <SelectField
          label="攻击类型"
          value={attackType}
          onChange={setAttackType}
          options={[
            ['all', '全部攻击类型'],
            ...attackTypes.map((item) => [item, item] as const),
          ]}
        />
      </section>
      <div className="weapon-sections">
        {groups.map(([groupCategory, items]) => (
          <section key={groupCategory} className="weapon-section">
            <div className="weapon-section-heading">
              <h3>{runeCategoryLabels[groupCategory]}</h3>
              <span>{items.length} 条</span>
            </div>
            <div className="data-table-wrap">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>符文</th>
                    <th>描述</th>
                    <th>成本</th>
                    <th>类型</th>
                    <th>兼容武器</th>
                    <th>获取方式</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((rune) => (
                    <tr key={rune.slug}>
                      <td>
                        <Link to={`/games/${rune.gameId}/runes/${rune.slug}`}>{rune.name}</Link>
                      </td>
                      <td>{rune.description}</td>
                      <td>{rune.cost}</td>
                      <td>{rune.attackType}</td>
                      <td>{rune.compatibleWeaponType}</td>
                      <td>{rune.whereToFind}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
      {filtered.length === 0 && <EmptyState title="没有匹配符文" body="换关键词或重置筛选。" />}
    </main>
  )
}

function RuneDetail() {
  const { gameId = '', runeSlug = '' } = useParams()
  const game = games.find((item) => item.id === gameId)
  const rune = findRune(gameId, runeSlug)
  if (!game) return <NotFound title="未找到这个游戏" />
  if (!rune) return <NotFound title="未找到这个符文" />

  return (
    <main className="app-shell weapon-shell">
      <Header gameId={game.id} />
      <Link className="back-link" to={`/games/${game.id}/runes`}>
        返回符文图鉴
      </Link>
      <article className="weapon-detail">
        <section className="weapon-detail-main">
          <p className="eyebrow">{runeCategoryLabels[rune.category]}</p>
          <h1>{rune.name}</h1>
          <p>{rune.description}</p>
          <InfoSection
            title="使用判断"
            values={[
              `成本：${rune.cost}`,
              `攻击类型：${rune.attackType}`,
              `兼容武器：${rune.compatibleWeaponType}`,
              `获取方式：${rune.whereToFind}`,
            ]}
          />
          <InfoSection
            title="备注"
            values={[
              '符文数据来自 Fextralife Runes 表格；数值、成本和兼容武器保留来源字段，避免遗漏。',
              '实际 Build 适配需要结合武器动作、 Focus/Stamina 消耗和当前词条复核。',
            ]}
          />
        </section>
        <aside className="weapon-infobox" aria-label="符文资料卡">
          <div className="rune-mark">{rune.name.slice(0, 1)}</div>
          <h2>{rune.name}</h2>
          <dl>
            <Meta label="用途" values={[runeCategoryLabels[rune.category]]} />
            <Meta label="成本" values={[rune.cost]} />
            <Meta label="攻击类型" values={[rune.attackType]} />
            <Meta label="兼容武器" values={[rune.compatibleWeaponType]} />
            <Meta label="获取方式" values={[rune.whereToFind]} />
            <Meta label="复核日期" values={[rune.lastVerifiedAt]} />
          </dl>
          <a href={rune.sourceUrl} target="_blank" rel="noreferrer">
            查看来源页
          </a>
        </aside>
      </article>
    </main>
  )
}

function CatalogHero({
  eyebrow,
  title,
  body,
  stats,
}: {
  eyebrow: string
  title: string
  body: string
  stats: [string, string][]
}) {
  return (
    <section className="weapon-hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <dl className="weapon-stats">
        {stats.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function SearchInput({
  value,
  onChange,
  placeholder,
}: {
  value: string
  onChange: (value: string) => void
  placeholder: string
}) {
  return (
    <label className="field">
      <span>搜索</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </label>
  )
}

function WeaponCard({
  weapon,
  compact = false,
}: {
  weapon: WeaponEntry
  compact?: boolean
}) {
  return (
    <Link
      className={`weapon-card ${compact ? 'compact-weapon-card' : ''}`}
      to={`/games/${weapon.gameId}/weapons/${weapon.slug}`}
    >
      <img src={weapon.iconUrl} alt={`${weapon.name} 图标`} />
      <strong>{weapon.name}</strong>
      {!compact && (
        <span>
          {weapon.categoryLabelZh} · {weapon.handedness}
        </span>
      )}
    </Link>
  )
}

function BossCard({ boss }: { boss: BossEntry }) {
  return (
    <Link className="weapon-card boss-card" to={`/games/${boss.gameId}/bosses/${boss.slug}`}>
      {boss.imageUrl ? (
        <img src={boss.imageUrl} alt={`${boss.name} 图片`} />
      ) : (
        <div className="missing-image small">待补图</div>
      )}
      <strong>{boss.name}</strong>
      <span>
        {boss.categoryLabelZh} · {boss.bossType}
      </span>
    </Link>
  )
}

function InfoSection({ title, values }: { title: string; values: string[] }) {
  if (values.length === 0) return null
  return (
    <section className="info-section">
      <h2>{title}</h2>
      <ul>
        {values.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </section>
  )
}

function GuideCard({
  guide,
  compact = false,
  catalog = false,
}: {
  guide: GuideEntry
  compact?: boolean
  catalog?: boolean
}) {
  const image = guide.images[0]
  return (
    <Link
      className={`guide-card ${compact ? 'compact-card' : ''} ${catalog ? 'catalog-card' : ''}`}
      to={`/games/${guide.gameId}/guides/${guide.slug}`}
    >
      {image && <img className="card-image" src={image.url} alt={image.alt} />}
      <div className="card-topline">
        <span>{categoryLabels[guide.category]}</span>
        <strong>{contentStatusLabels[guide.contentStatus]}</strong>
      </div>
      <h3>{guide.title}</h3>
      {!catalog && <p>{guide.summary}</p>}
      {catalog && (
        <p className="catalog-type">
          {guide.equipmentType ?? guide.bossType ?? guide.region}
        </p>
      )}
      {!compact && !catalog && (
        <dl>
          <div>
            <dt>区域</dt>
            <dd>{guide.region}</dd>
          </div>
          <div>
            <dt>阶段</dt>
            <dd>{guide.phase}</dd>
          </div>
        </dl>
      )}
      <TagList values={guide.tags.slice(0, 4)} />
    </Link>
  )
}

function Header({
  gameId,
  onGameChange,
}: {
  gameId: string
  onGameChange?: (gameId: string) => void
}) {
  return (
    <header className="topbar">
      <Link className="brand" to={`/games/${gameId}`}>
        <span>攻略库</span>
        <strong>Guide Forge</strong>
      </Link>
      <nav className="topnav" aria-label="图鉴导航">
        <Link to={`/games/${gameId}/weapons`}>武器</Link>
        <Link to={`/games/${gameId}/bosses`}>Boss</Link>
        <Link to={`/games/${gameId}/runes`}>符文</Link>
      </nav>
      <label className="game-switcher">
        <span>游戏</span>
        <select
          value={gameId}
          onChange={(event) => onGameChange?.(event.target.value)}
        >
          {games.map((game) => (
            <option key={game.id} value={game.id}>
              {game.name}
            </option>
          ))}
        </select>
      </label>
    </header>
  )
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  options: readonly (readonly [string, string])[]
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map(([optionValue, optionLabel]) => (
          <option key={optionValue} value={optionValue}>
            {optionLabel}
          </option>
        ))}
      </select>
    </label>
  )
}

function SourceNotice() {
  return (
    <p className="source-notice">
      以下攻略均综合整理自互联网公开资料，并在详情页附来源链接；内容为重写摘要，不搬运第三方全文。
    </p>
  )
}

function ImageGallery({ guide }: { guide: GuideEntry }) {
  if (guide.images.length === 0) return null
  return (
    <section className="image-gallery" aria-label="攻略图片">
      {guide.images.map((image) => (
        <figure key={`${image.url}-${image.caption}`}>
          <img src={image.url} alt={image.alt} />
          <figcaption>
            {image.caption}
            <a href={image.sourceUrl} target="_blank" rel="noreferrer">
              图片来源
            </a>
            <span>{image.licenseNote}</span>
          </figcaption>
        </figure>
      ))}
    </section>
  )
}

function SourceList({ guide }: { guide: GuideEntry }) {
  return (
    <section className="source-list" aria-label="来源链接">
      <h2>来源链接</h2>
      <ul>
        {guide.sources.map((source) => (
          <li key={`${source.title}-${source.url}`}>
            <a href={source.url} target="_blank" rel="noreferrer">
              {source.title}
            </a>
            <span>{source.type} · {source.language}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Meta({ label, values }: { label: string; values: string[] }) {
  const safeValues = values.length > 0 ? values : ['无']
  return (
    <div>
      <dt>{label}</dt>
      <dd>{safeValues.join('、')}</dd>
    </div>
  )
}

function TagList({ values }: { values: string[] }) {
  if (values.length === 0) return null
  return (
    <ul className="tag-list">
      {values.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  )
}

function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="empty-state">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

function NotFound({ title }: { title: string }) {
  return (
    <main className="app-shell">
      <Header gameId={defaultGameId} />
      <EmptyState title={title} body="回到攻略列表继续浏览已有内容。" />
      <Link className="primary-link" to={`/games/${defaultGameId}`}>
        打开攻略库
      </Link>
    </main>
  )
}

function uniqueOptionalValues(
  entries: GuideEntry[],
  key: 'equipmentType' | 'bossType',
) {
  return Array.from(
    new Set(entries.map((entry) => entry[key]).filter(Boolean) as string[]),
  ).sort((a, b) => a.localeCompare(b, 'zh-Hans-CN'))
}

function optionalValue(value: string | undefined) {
  return value ? [value] : []
}

function groupCatalogGuides(guides: GuideEntry[], mode: 'equipment' | 'boss') {
  const fallback = mode === 'equipment' ? '未分类装备' : '未分类 Boss'
  const groups = new Map<string, GuideEntry[]>()
  for (const guide of guides) {
    const label =
      (mode === 'equipment' ? guide.equipmentType : guide.bossType) ?? fallback
    groups.set(label, [...(groups.get(label) ?? []), guide])
  }
  return Array.from(groups.entries()).sort(([first], [second]) =>
    first.localeCompare(second, 'zh-Hans-CN'),
  )
}

export default App
