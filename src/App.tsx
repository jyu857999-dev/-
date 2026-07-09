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
import type { GuideEntry, GuideFilters } from './types'
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
  const equipmentTypes = uniqueOptionalValues(gameGuides, 'equipmentType')
  const bossTypes = uniqueOptionalValues(gameGuides, 'bossType')
  const buildTags = Array.from(
    new Set(gameGuides.flatMap((guide) => guide.buildTags ?? [])),
  ).sort((a, b) => a.localeCompare(b, 'zh-Hans-CN'))
  const categoryStats = game.supportedCategories.map((category) => ({
    category,
    count: gameGuides.filter((guide) => guide.category === category).length,
  }))
  const results = filterGuides(gameGuides, game.id, query, filters).filter(
    (guide) =>
      (equipmentType === 'all' || guide.equipmentType === equipmentType) &&
      (bossType === 'all' || guide.bossType === bossType) &&
      (buildTag === 'all' || guide.buildTags?.includes(buildTag)),
  )

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
        onSelect={(category) =>
          setFilters({
            ...filters,
            category,
          })
        }
      />

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
              setFilters({
                ...filters,
                category: value as GuideFilters['category'],
              })
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

          <SelectField
            label="装备类型"
            value={equipmentType}
            onChange={setEquipmentType}
            options={[
              ['all', '全部装备类型'],
              ...equipmentTypes.map((item) => [item, item] as const),
            ]}
          />

          <SelectField
            label="Boss 类型"
            value={bossType}
            onChange={setBossType}
            options={[
              ['all', '全部 Boss 类型'],
              ...bossTypes.map((item) => [item, item] as const),
            ]}
          />

          <SelectField
            label="Build 标签"
            value={buildTag}
            onChange={setBuildTag}
            options={[
              ['all', '全部 Build 标签'],
              ...buildTags.map((item) => [item, item] as const),
            ]}
          />

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

          <div className="guide-grid">
            {results.map((guide) => (
              <GuideCard key={`${guide.gameId}/${guide.slug}`} guide={guide} />
            ))}
          </div>

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

function GuideCard({ guide, compact = false }: { guide: GuideEntry; compact?: boolean }) {
  const image = guide.images[0]
  return (
    <Link
      className={`guide-card ${compact ? 'compact-card' : ''}`}
      to={`/games/${guide.gameId}/guides/${guide.slug}`}
    >
      {image && <img className="card-image" src={image.url} alt={image.alt} />}
      <div className="card-topline">
        <span>{categoryLabels[guide.category]}</span>
        <strong>{contentStatusLabels[guide.contentStatus]}</strong>
      </div>
      <h3>{guide.title}</h3>
      <p>{guide.summary}</p>
      {!compact && (
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

export default App
