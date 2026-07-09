import type { WeaponEntry } from '../../types'

export const weaponCategoryOrder = [
  "axes",
  "bows",
  "clubs",
  "curved_great_swords",
  "curved_swords",
  "daggers",
  "double_daggers",
  "great_axes",
  "great_clubs",
  "great_hammers",
  "great_swords",
  "halberds",
  "hammers",
  "katanas",
  "maces",
  "rapiers",
  "scythes",
  "spears",
  "staves",
  "straight_swords",
  "wands"
] as const

export const weapons = [
  {
    "slug": "breaking-wave",
    "gameId": "no-rest-for-the-wicked",
    "name": "Breaking Wave",
    "category": "axes",
    "categoryLabel": "Axes",
    "categoryLabelZh": "斧",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/breaking-wave-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Breaking+Wave",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "单手斧。适合想要比直剑更重的削韧和爆发、但仍保留盾牌或副手灵活性的玩家。",
    "bestFor": [
      "新手过渡到中期的力量向近战。",
      "喜欢短窗口反击、每次只打一两下的 Boss 战打法。"
    ],
    "strengths": [
      "单手斧节奏比大斧更容易控制。",
      "适合配合盾牌、闪避反击和削韧词条。"
    ],
    "weaknesses": [
      "攻击距离不如长柄武器，打飞行或高速目标需要补位移/远程手段。",
      "来源页未给稳定数值，具体强度取决于掉落词条。"
    ],
    "recommendedRunes": [
      "Dropkick 或 Frontflip Kick：补近战爆发和削韧。",
      "Throw Axe：补中距离收割。"
    ],
    "buildTips": [
      "优先关注体力消耗、削韧和物理伤害词条。",
      "Boss 战不要打满连段，利用单手斧较短收招做安全反击。"
    ],
    "alternatives": [
      "Hunter’s Axe",
      "Jade Spined Axe",
      "Royal Hewn Axe"
    ],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "breaking wave axes 斧 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 单手斧。适合想要比直剑更重的削韧和爆发、但仍保留盾牌或副手灵活性的玩家。 新手过渡到中期的力量向近战。 喜欢短窗口反击、每次只打一两下的 boss 战打法。 单手斧节奏比大斧更容易控制。 适合配合盾牌、闪避反击和削韧词条。 攻击距离不如长柄武器，打飞行或高速目标需要补位移/远程手段。 来源页未给稳定数值，具体强度取决于掉落词条。 dropkick 或 frontflip kick：补近战爆发和削韧。 throw axe：补中距离收割。 优先关注体力消耗、削韧和物理伤害词条。 boss 战不要打满连段，利用单手斧较短收招做安全反击。 hunter’s axe jade spined axe royal hewn axe"
  },
  {
    "slug": "holy-felled",
    "gameId": "no-rest-for-the-wicked",
    "name": "Holy Felled",
    "category": "axes",
    "categoryLabel": "Axes",
    "categoryLabelZh": "斧",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/holy-felled-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Holy+Felled",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "holy felled axes 斧 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "hooked-yue",
    "gameId": "no-rest-for-the-wicked",
    "name": "Hooked Yue",
    "category": "axes",
    "categoryLabel": "Axes",
    "categoryLabelZh": "斧",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/hooked-yue-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Hooked+Yue",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "hooked yue axes 斧 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "hunter-s-axe",
    "gameId": "no-rest-for-the-wicked",
    "name": "Hunter's Axe",
    "category": "axes",
    "categoryLabel": "Axes",
    "categoryLabelZh": "斧",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/hunters_axe_one_handed_axe_no_rest_for_the_wicked_wiki_guide_100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Hunter's+Axe",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "hunter's axe axes 斧 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "jade-spined-axe",
    "gameId": "no-rest-for-the-wicked",
    "name": "Jade Spined Axe",
    "category": "axes",
    "categoryLabel": "Axes",
    "categoryLabelZh": "斧",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/jade-spined-axe-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Jade+Spined+Axe",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "jade spined axe axes 斧 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "lonely-labrys",
    "gameId": "no-rest-for-the-wicked",
    "name": "Lonely Labrys",
    "category": "axes",
    "categoryLabel": "Axes",
    "categoryLabelZh": "斧",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/lonely-labrys-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Lonely+Labrys",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "lonely labrys axes 斧 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "maelstrom-s-heart",
    "gameId": "no-rest-for-the-wicked",
    "name": "Maelstrom's Heart",
    "category": "axes",
    "categoryLabel": "Axes",
    "categoryLabelZh": "斧",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/maelstroms-heart-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Maelstrom's+Heart",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "maelstrom's heart axes 斧 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "piercing-beak",
    "gameId": "no-rest-for-the-wicked",
    "name": "Piercing Beak",
    "category": "axes",
    "categoryLabel": "Axes",
    "categoryLabelZh": "斧",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/piercing-beak-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Piercing+Beak",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "piercing beak axes 斧 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "ripper",
    "gameId": "no-rest-for-the-wicked",
    "name": "Ripper",
    "category": "axes",
    "categoryLabel": "Axes",
    "categoryLabelZh": "斧",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/ripper-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Ripper",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "ripper axes 斧 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "rivensong",
    "gameId": "no-rest-for-the-wicked",
    "name": "Rivensong",
    "category": "axes",
    "categoryLabel": "Axes",
    "categoryLabelZh": "斧",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/rivensong-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Rivensong",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "rivensong axes 斧 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "royal-hewn-axe",
    "gameId": "no-rest-for-the-wicked",
    "name": "Royal Hewn Axe",
    "category": "axes",
    "categoryLabel": "Axes",
    "categoryLabelZh": "斧",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/royal-hewn-axe-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Royal+Hewn+Axe",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "royal hewn axe axes 斧 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "the-remnant",
    "gameId": "no-rest-for-the-wicked",
    "name": "The Remnant",
    "category": "axes",
    "categoryLabel": "Axes",
    "categoryLabelZh": "斧",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-remnant-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/The+Remnant",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "the remnant axes 斧 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "tongue-splitter",
    "gameId": "no-rest-for-the-wicked",
    "name": "Tongue Splitter",
    "category": "axes",
    "categoryLabel": "Axes",
    "categoryLabelZh": "斧",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/tongue-splitter-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Tongue+Splitter",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "tongue splitter axes 斧 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "answered-prayer",
    "gameId": "no-rest-for-the-wicked",
    "name": "Answered Prayer",
    "category": "bows",
    "categoryLabel": "Bows",
    "categoryLabelZh": "弓",
    "handedness": "远程",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/answered-prayer-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Answered+Prayer",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "弓。用于远程消耗、拉怪和处理不适合贴身的目标。",
    "bestFor": [
      "想在探索中安全处理敌人的新手。",
      "需要远程补刀或引怪工具的近战 Build。"
    ],
    "strengths": [
      "可在安全距离处理目标。",
      "适合搭配弓专用符文形成爆发。"
    ],
    "weaknesses": [
      "不适合被敌人贴脸时硬用。",
      "需要管理弹药、Focus 或符文成本。"
    ],
    "recommendedRunes": [
      "Arrowstorm：对单体或群体补爆发。",
      "Cone Shot：近中距离扇形压制。"
    ],
    "buildTips": [
      "把弓当作副武器时，重点用于开怪和收残血。",
      "主弓玩法需要更多关注 Focus 续航和位移。"
    ],
    "alternatives": [
      "Laquered Bow",
      "Short Bow",
      "Yewn Longbow"
    ],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "answered prayer bows 弓 远程 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 弓。用于远程消耗、拉怪和处理不适合贴身的目标。 想在探索中安全处理敌人的新手。 需要远程补刀或引怪工具的近战 build。 可在安全距离处理目标。 适合搭配弓专用符文形成爆发。 不适合被敌人贴脸时硬用。 需要管理弹药、focus 或符文成本。 arrowstorm：对单体或群体补爆发。 cone shot：近中距离扇形压制。 把弓当作副武器时，重点用于开怪和收残血。 主弓玩法需要更多关注 focus 续航和位移。 laquered bow short bow yewn longbow"
  },
  {
    "slug": "glimmering-bolt",
    "gameId": "no-rest-for-the-wicked",
    "name": "Glimmering Bolt",
    "category": "bows",
    "categoryLabel": "Bows",
    "categoryLabelZh": "弓",
    "handedness": "远程",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/glimmering-bolt-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Glimmering+Bolt",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "弓类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "远程武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "远程类符文，例如 Arrowstorm、Cone Shot 等弓专用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "glimmering bolt bows 弓 远程 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 弓类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 远程武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 远程类符文，例如 arrowstorm、cone shot 等弓专用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "laquered-bow",
    "gameId": "no-rest-for-the-wicked",
    "name": "Laquered Bow",
    "category": "bows",
    "categoryLabel": "Bows",
    "categoryLabelZh": "弓",
    "handedness": "远程",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/lacquered-bow-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Laquered+Bow",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "弓。适合远程 Build 或近战角色的安全补刀位。",
    "bestFor": [
      "想降低探索风险的玩家。",
      "打不熟悉 Boss 前先观察招式的新手。"
    ],
    "strengths": [
      "远程容错高。",
      "可与弓专用符文配合打出高覆盖攻击。"
    ],
    "weaknesses": [
      "近身压力下输出环境差。",
      "遇到高速突进敌人时需要位移符文或副手近战。"
    ],
    "recommendedRunes": [
      "Arrowstorm",
      "Cone Shot",
      "Breakstep"
    ],
    "buildTips": [
      "用弓开局拉怪，近战武器处理贴脸目标。",
      "优先关注 Focus 续航、远程伤害和安全距离。"
    ],
    "alternatives": [
      "Answered Prayer",
      "Short Bow",
      "Twinned Recurve Bow"
    ],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "laquered bow bows 弓 远程 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 弓。适合远程 build 或近战角色的安全补刀位。 想降低探索风险的玩家。 打不熟悉 boss 前先观察招式的新手。 远程容错高。 可与弓专用符文配合打出高覆盖攻击。 近身压力下输出环境差。 遇到高速突进敌人时需要位移符文或副手近战。 arrowstorm cone shot breakstep 用弓开局拉怪，近战武器处理贴脸目标。 优先关注 focus 续航、远程伤害和安全距离。 answered prayer short bow twinned recurve bow"
  },
  {
    "slug": "pale-ash",
    "gameId": "no-rest-for-the-wicked",
    "name": "Pale Ash",
    "category": "bows",
    "categoryLabel": "Bows",
    "categoryLabelZh": "弓",
    "handedness": "远程",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/pale-ash-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Pale+Ash",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "弓类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "远程武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "远程类符文，例如 Arrowstorm、Cone Shot 等弓专用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "pale ash bows 弓 远程 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 弓类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 远程武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 远程类符文，例如 arrowstorm、cone shot 等弓专用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "patience",
    "gameId": "no-rest-for-the-wicked",
    "name": "Patience",
    "category": "bows",
    "categoryLabel": "Bows",
    "categoryLabelZh": "弓",
    "handedness": "远程",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/patience-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Patience",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "弓类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "远程武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "远程类符文，例如 Arrowstorm、Cone Shot 等弓专用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "patience bows 弓 远程 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 弓类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 远程武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 远程类符文，例如 arrowstorm、cone shot 等弓专用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "short-bow",
    "gameId": "no-rest-for-the-wicked",
    "name": "Short Bow",
    "category": "bows",
    "categoryLabel": "Bows",
    "categoryLabelZh": "弓",
    "handedness": "远程",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/short_bow_none_bow_no_rest_for_the_wicked_wiki_guide_100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Short+Bow",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "弓类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "远程武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "远程类符文，例如 Arrowstorm、Cone Shot 等弓专用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "short bow bows 弓 远程 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 弓类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 远程武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 远程类符文，例如 arrowstorm、cone shot 等弓专用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "siren-s-song",
    "gameId": "no-rest-for-the-wicked",
    "name": "Siren's Song",
    "category": "bows",
    "categoryLabel": "Bows",
    "categoryLabelZh": "弓",
    "handedness": "远程",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/sirens-song-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Siren's+Song",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "弓类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "远程武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "远程类符文，例如 Arrowstorm、Cone Shot 等弓专用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "siren's song bows 弓 远程 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 弓类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 远程武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 远程类符文，例如 arrowstorm、cone shot 等弓专用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "twinned-recurve-bow",
    "gameId": "no-rest-for-the-wicked",
    "name": "Twinned Recurve Bow",
    "category": "bows",
    "categoryLabel": "Bows",
    "categoryLabelZh": "弓",
    "handedness": "远程",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/twinned-recurve-bow-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Twinned+Recurve+Bow",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "弓类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "远程武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "远程类符文，例如 Arrowstorm、Cone Shot 等弓专用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "twinned recurve bow bows 弓 远程 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 弓类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 远程武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 远程类符文，例如 arrowstorm、cone shot 等弓专用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "woodland-protector",
    "gameId": "no-rest-for-the-wicked",
    "name": "Woodland Protector",
    "category": "bows",
    "categoryLabel": "Bows",
    "categoryLabelZh": "弓",
    "handedness": "远程",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/woodland-protector-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Woodland+Protector",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "弓类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "远程武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "远程类符文，例如 Arrowstorm、Cone Shot 等弓专用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "woodland protector bows 弓 远程 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 弓类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 远程武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 远程类符文，例如 arrowstorm、cone shot 等弓专用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "yewn-longbow",
    "gameId": "no-rest-for-the-wicked",
    "name": "Yewn Longbow",
    "category": "bows",
    "categoryLabel": "Bows",
    "categoryLabelZh": "弓",
    "handedness": "远程",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/yewn-longbow-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Yewn+Longbow",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "弓类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "远程武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "远程类符文，例如 Arrowstorm、Cone Shot 等弓专用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "yewn longbow bows 弓 远程 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 弓类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 远程武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 远程类符文，例如 arrowstorm、cone shot 等弓专用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "nail-laden-club",
    "gameId": "no-rest-for-the-wicked",
    "name": "Nail-Laden Club",
    "category": "clubs",
    "categoryLabel": "Clubs",
    "categoryLabelZh": "棍棒",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/nail-laden-club-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Nail-Laden+Club",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "棍棒类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "nail-laden club clubs 棍棒 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 棍棒类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "ogre-s-club",
    "gameId": "no-rest-for-the-wicked",
    "name": "Ogre's Club",
    "category": "clubs",
    "categoryLabel": "Clubs",
    "categoryLabelZh": "棍棒",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/ogres-club-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Ogre's+Club",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "棍棒类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "ogre's club clubs 棍棒 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 棍棒类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "death-s-shroud",
    "gameId": "no-rest-for-the-wicked",
    "name": "Death's Shroud",
    "category": "curved_great_swords",
    "categoryLabel": "Curved Great Swords",
    "categoryLabelZh": "曲刃大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/deaths-shroud-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Death's+Shroud",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲刃大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "death's shroud curved great swords 曲刃大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲刃大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "divine-scimitar",
    "gameId": "no-rest-for-the-wicked",
    "name": "Divine Scimitar",
    "category": "curved_great_swords",
    "categoryLabel": "Curved Great Swords",
    "categoryLabelZh": "曲刃大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/divine-scimitar-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Divine+Scimitar",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲刃大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "divine scimitar curved great swords 曲刃大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲刃大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "sunbeam",
    "gameId": "no-rest-for-the-wicked",
    "name": "Sunbeam",
    "category": "curved_great_swords",
    "categoryLabel": "Curved Great Swords",
    "categoryLabelZh": "曲刃大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/sunbeam-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Sunbeam",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲刃大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "sunbeam curved great swords 曲刃大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲刃大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "a-supple-end",
    "gameId": "no-rest-for-the-wicked",
    "name": "A Supple End",
    "category": "curved_swords",
    "categoryLabel": "Curved Swords",
    "categoryLabelZh": "曲剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/a-supple-end-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/A+Supple+End",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "a supple end curved swords 曲剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "etched-yatagan",
    "gameId": "no-rest-for-the-wicked",
    "name": "Etched Yatagan",
    "category": "curved_swords",
    "categoryLabel": "Curved Swords",
    "categoryLabelZh": "曲剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/bone-yatagan-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Bone+Yatagan",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "etched yatagan curved swords 曲剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "buried-shamshir",
    "gameId": "no-rest-for-the-wicked",
    "name": "Buried Shamshir",
    "category": "curved_swords",
    "categoryLabel": "Curved Swords",
    "categoryLabelZh": "曲剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/buried-shamshir-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Buried+Shamshir",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "buried shamshir curved swords 曲剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "cerulean-blade",
    "gameId": "no-rest-for-the-wicked",
    "name": "Cerulean Blade",
    "category": "curved_swords",
    "categoryLabel": "Curved Swords",
    "categoryLabelZh": "曲剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/cerulean-blade-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Cerulean+Blade",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "cerulean blade curved swords 曲剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "dark-tide",
    "gameId": "no-rest-for-the-wicked",
    "name": "Dark Tide",
    "category": "curved_swords",
    "categoryLabel": "Curved Swords",
    "categoryLabelZh": "曲剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/dark-tide-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Dark+Tide",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "dark tide curved swords 曲剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "demon-s-key",
    "gameId": "no-rest-for-the-wicked",
    "name": "Demon's Key",
    "category": "curved_swords",
    "categoryLabel": "Curved Swords",
    "categoryLabelZh": "曲剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/demons-key-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Demon's+Key",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "demon's key curved swords 曲剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "filleter",
    "gameId": "no-rest-for-the-wicked",
    "name": "Filleter",
    "category": "curved_swords",
    "categoryLabel": "Curved Swords",
    "categoryLabelZh": "曲剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/filleter-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Filleter",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "filleter curved swords 曲剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "giant-s-toothpick",
    "gameId": "no-rest-for-the-wicked",
    "name": "Giant's Toothpick",
    "category": "curved_swords",
    "categoryLabel": "Curved Swords",
    "categoryLabelZh": "曲剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/giants-toothpick-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Giant's+Toothpick",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "giant's toothpick curved swords 曲剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "malwoven-hook",
    "gameId": "no-rest-for-the-wicked",
    "name": "Malwoven Hook",
    "category": "curved_swords",
    "categoryLabel": "Curved Swords",
    "categoryLabelZh": "曲剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/malwoven-hook-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Malwoven+Hook",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "malwoven hook curved swords 曲剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "risen-blade",
    "gameId": "no-rest-for-the-wicked",
    "name": "Risen Blade",
    "category": "curved_swords",
    "categoryLabel": "Curved Swords",
    "categoryLabelZh": "曲剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/risen-blade-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Risen+Blade",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "risen blade curved swords 曲剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "rusty-arakh",
    "gameId": "no-rest-for-the-wicked",
    "name": "Rusty Arakh",
    "category": "curved_swords",
    "categoryLabel": "Curved Swords",
    "categoryLabelZh": "曲剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/rusty-arakh-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Rusty+Arakh",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "rusty arakh curved swords 曲剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "scimitar",
    "gameId": "no-rest-for-the-wicked",
    "name": "Scimitar",
    "category": "curved_swords",
    "categoryLabel": "Curved Swords",
    "categoryLabelZh": "曲剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/scimitar-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Scimitar",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "scimitar curved swords 曲剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "song-of-steel",
    "gameId": "no-rest-for-the-wicked",
    "name": "Song of Steel",
    "category": "curved_swords",
    "categoryLabel": "Curved Swords",
    "categoryLabelZh": "曲剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/song-of-steel-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Song+of+Steel",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "song of steel curved swords 曲剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "talwar",
    "gameId": "no-rest-for-the-wicked",
    "name": "Talwar",
    "category": "curved_swords",
    "categoryLabel": "Curved Swords",
    "categoryLabelZh": "曲剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/talwar-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Talwar",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "talwar curved swords 曲剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "tempered-cutlass",
    "gameId": "no-rest-for-the-wicked",
    "name": "Tempered Cutlass",
    "category": "curved_swords",
    "categoryLabel": "Curved Swords",
    "categoryLabelZh": "曲剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/tempered-cutlass-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Tempered+Cutlass",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "tempered cutlass curved swords 曲剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "tremble",
    "gameId": "no-rest-for-the-wicked",
    "name": "Tremble",
    "category": "curved_swords",
    "categoryLabel": "Curved Swords",
    "categoryLabelZh": "曲剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/tremble-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Tremble",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "tremble curved swords 曲剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 曲剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "a-singular-purpose",
    "gameId": "no-rest-for-the-wicked",
    "name": "A Singular Purpose",
    "category": "daggers",
    "categoryLabel": "Daggers",
    "categoryLabelZh": "匕首",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/a-singular-purpose-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/A+Singular+Purpose",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "a singular purpose daggers 匕首 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "barbtrader",
    "gameId": "no-rest-for-the-wicked",
    "name": "Barbtrader",
    "category": "daggers",
    "categoryLabel": "Daggers",
    "categoryLabelZh": "匕首",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/barbtrader-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Barbtrader",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "barbtrader daggers 匕首 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "butcher-s-work",
    "gameId": "no-rest-for-the-wicked",
    "name": "Butcher's Work",
    "category": "daggers",
    "categoryLabel": "Daggers",
    "categoryLabelZh": "匕首",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/butchers-work-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Butcher's+Work",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "butcher's work daggers 匕首 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "glimmering-bone",
    "gameId": "no-rest-for-the-wicked",
    "name": "Glimmering Bone",
    "category": "daggers",
    "categoryLabel": "Daggers",
    "categoryLabelZh": "匕首",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/glimmering-bone-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Glimmering+Bone",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "glimmering bone daggers 匕首 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "glory-s-bite",
    "gameId": "no-rest-for-the-wicked",
    "name": "Glory's Bite",
    "category": "daggers",
    "categoryLabel": "Daggers",
    "categoryLabelZh": "匕首",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/glorys-bite-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Glory's+Bite",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "glory's bite daggers 匕首 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "hunter-s-knife",
    "gameId": "no-rest-for-the-wicked",
    "name": "Hunter's Knife",
    "category": "daggers",
    "categoryLabel": "Daggers",
    "categoryLabelZh": "匕首",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/hunters_knife_one_handed_knife_weapons_no_rest_for_the_wicked_wiki_guide_100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Hunter's+Knife",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "hunter's knife daggers 匕首 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "jackknife",
    "gameId": "no-rest-for-the-wicked",
    "name": "Jackknife",
    "category": "daggers",
    "categoryLabel": "Daggers",
    "categoryLabelZh": "匕首",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/jackknife-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Jackknife",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "jackknife daggers 匕首 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "midnight-blade",
    "gameId": "no-rest-for-the-wicked",
    "name": "Midnight Blade",
    "category": "daggers",
    "categoryLabel": "Daggers",
    "categoryLabelZh": "匕首",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/midnight-blade-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Midnight+Blade",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "midnight blade daggers 匕首 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "scowling-dirk",
    "gameId": "no-rest-for-the-wicked",
    "name": "Scowling Dirk",
    "category": "daggers",
    "categoryLabel": "Daggers",
    "categoryLabelZh": "匕首",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/scowling-dirk-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Scowling+Dirk",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "scowling dirk daggers 匕首 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "serpent-s-tongue",
    "gameId": "no-rest-for-the-wicked",
    "name": "Serpent's Tongue",
    "category": "daggers",
    "categoryLabel": "Daggers",
    "categoryLabelZh": "匕首",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/serpents-tongue-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Serpent's+Tongue",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "serpent's tongue daggers 匕首 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "the-old-ways",
    "gameId": "no-rest-for-the-wicked",
    "name": "The Old Ways",
    "category": "daggers",
    "categoryLabel": "Daggers",
    "categoryLabelZh": "匕首",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-old-ways-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/The+Old+Ways",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "the old ways daggers 匕首 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "all-s-well",
    "gameId": "no-rest-for-the-wicked",
    "name": "All's Well",
    "category": "double_daggers",
    "categoryLabel": "Double Daggers",
    "categoryLabelZh": "双匕首",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/alls-well-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/All's+Well",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "all's well double daggers 双匕首 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "ash-soothed-daggers",
    "gameId": "no-rest-for-the-wicked",
    "name": "Ash Soothed Daggers",
    "category": "double_daggers",
    "categoryLabel": "Double Daggers",
    "categoryLabelZh": "双匕首",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/ash-soothed-daggers-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Ash+Soothed+Daggers",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "ash soothed daggers double daggers 双匕首 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "bleeder-s-delight",
    "gameId": "no-rest-for-the-wicked",
    "name": "Bleeder's Delight",
    "category": "double_daggers",
    "categoryLabel": "Double Daggers",
    "categoryLabelZh": "双匕首",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/bleeders-delight-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Bleeder's+Delight",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "bleeder's delight double daggers 双匕首 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "brothers-keepers",
    "gameId": "no-rest-for-the-wicked",
    "name": "Brothers Keepers",
    "category": "double_daggers",
    "categoryLabel": "Double Daggers",
    "categoryLabelZh": "双匕首",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/brothers_keepers_dual_wielding_double_dagger_weapons_no_rest_for_the_wicked_wiki_guide_100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Brothers+Keepers",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "brothers keepers double daggers 双匕首 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "chipped-daggers",
    "gameId": "no-rest-for-the-wicked",
    "name": "Chipped Daggers",
    "category": "double_daggers",
    "categoryLabel": "Double Daggers",
    "categoryLabelZh": "双匕首",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/chipped-daggers-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Chipped+Daggers",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "chipped daggers double daggers 双匕首 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "death-s-touch",
    "gameId": "no-rest-for-the-wicked",
    "name": "Death's Touch",
    "category": "double_daggers",
    "categoryLabel": "Double Daggers",
    "categoryLabelZh": "双匕首",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/deaths-touch-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Death's+Touch",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "death's touch double daggers 双匕首 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "grave-scrapers",
    "gameId": "no-rest-for-the-wicked",
    "name": "Grave Scrapers",
    "category": "double_daggers",
    "categoryLabel": "Double Daggers",
    "categoryLabelZh": "双匕首",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/grave-scrapers-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Grave+Scrapers",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "grave scrapers double daggers 双匕首 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "rogue-messer",
    "gameId": "no-rest-for-the-wicked",
    "name": "Rogue Messer",
    "category": "double_daggers",
    "categoryLabel": "Double Daggers",
    "categoryLabelZh": "双匕首",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/rogue-messer-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Rogue+Messer",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "rogue messer double daggers 双匕首 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "the-vizier-s-advice",
    "gameId": "no-rest-for-the-wicked",
    "name": "The Vizier's Advice",
    "category": "double_daggers",
    "categoryLabel": "Double Daggers",
    "categoryLabelZh": "双匕首",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-viziers-advice-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/The+Vizier's+Advice",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "the vizier's advice double daggers 双匕首 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "wavering-faith",
    "gameId": "no-rest-for-the-wicked",
    "name": "Wavering Faith",
    "category": "double_daggers",
    "categoryLabel": "Double Daggers",
    "categoryLabelZh": "双匕首",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/wavering-faith-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Wavering+Faith",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "wavering faith double daggers 双匕首 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "wolf-bane",
    "gameId": "no-rest-for-the-wicked",
    "name": "Wolf Bane",
    "category": "double_daggers",
    "categoryLabel": "Double Daggers",
    "categoryLabelZh": "双匕首",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/wolf-bane-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Wolf+Bane",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "wolf bane double daggers 双匕首 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 双匕首类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "bandit-s-cleaver",
    "gameId": "no-rest-for-the-wicked",
    "name": "Bandit's Cleaver",
    "category": "great_axes",
    "categoryLabel": "Great Axes",
    "categoryLabelZh": "大斧",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/bandits-cleaver-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Bandit's+Cleaver",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "bandit's cleaver great axes 大斧 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "broken-fang",
    "gameId": "no-rest-for-the-wicked",
    "name": "Broken Fang",
    "category": "great_axes",
    "categoryLabel": "Great Axes",
    "categoryLabelZh": "大斧",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/broken-fang-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Broken+Fang",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "broken fang great axes 大斧 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "cavalier",
    "gameId": "no-rest-for-the-wicked",
    "name": "Cavalier",
    "category": "great_axes",
    "categoryLabel": "Great Axes",
    "categoryLabelZh": "大斧",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/cavalier-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Cavalier",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "cavalier great axes 大斧 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "gavlan-s-great-axe",
    "gameId": "no-rest-for-the-wicked",
    "name": "Gavlan's Great Axe",
    "category": "great_axes",
    "categoryLabel": "Great Axes",
    "categoryLabelZh": "大斧",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/gavlans-great-axe-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Gavlan's+Great+Axe",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "gavlan's great axe great axes 大斧 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "gilded-twibill",
    "gameId": "no-rest-for-the-wicked",
    "name": "Gilded Twibill",
    "category": "great_axes",
    "categoryLabel": "Great Axes",
    "categoryLabelZh": "大斧",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/gilded-twibill-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Gilded+Twibill",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "gilded twibill great axes 大斧 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "mountain-eater",
    "gameId": "no-rest-for-the-wicked",
    "name": "Mountain Eater",
    "category": "great_axes",
    "categoryLabel": "Great Axes",
    "categoryLabelZh": "大斧",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/mountain-eater-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Mountain+Eater",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "mountain eater great axes 大斧 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "penelope",
    "gameId": "no-rest-for-the-wicked",
    "name": "Penelope",
    "category": "great_axes",
    "categoryLabel": "Great Axes",
    "categoryLabelZh": "大斧",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/penelope-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Penelope",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "penelope great axes 大斧 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "short-bardiche",
    "gameId": "no-rest-for-the-wicked",
    "name": "Short Bardiche",
    "category": "great_axes",
    "categoryLabel": "Great Axes",
    "categoryLabelZh": "大斧",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/short-bardiche-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Short+Bardiche",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "short bardiche great axes 大斧 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "spalled-axe",
    "gameId": "no-rest-for-the-wicked",
    "name": "Spalled Axe",
    "category": "great_axes",
    "categoryLabel": "Great Axes",
    "categoryLabelZh": "大斧",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/spalled-axe-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Spalled+Axe",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "spalled axe great axes 大斧 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "warlord-s-thirst",
    "gameId": "no-rest-for-the-wicked",
    "name": "Warlord's Thirst",
    "category": "great_axes",
    "categoryLabel": "Great Axes",
    "categoryLabelZh": "大斧",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/warlords-thirst-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Warlord's+Thirst",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "warlord's thirst great axes 大斧 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大斧类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "fetid-club",
    "gameId": "no-rest-for-the-wicked",
    "name": "Fetid Club",
    "category": "great_clubs",
    "categoryLabel": "Great Clubs",
    "categoryLabelZh": "大棍棒",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/fetid-club-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Fetid+Club",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大棍棒类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "fetid club great clubs 大棍棒 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大棍棒类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "the-voice-of-our-lord",
    "gameId": "no-rest-for-the-wicked",
    "name": "The Voice of Our Lord",
    "category": "great_clubs",
    "categoryLabel": "Great Clubs",
    "categoryLabelZh": "大棍棒",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-voice-of-ou-lord-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/The+Voice+of+Our+Lord",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大棍棒类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "the voice of our lord great clubs 大棍棒 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大棍棒类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "wretched-mace",
    "gameId": "no-rest-for-the-wicked",
    "name": "Wretched Mace",
    "category": "great_clubs",
    "categoryLabel": "Great Clubs",
    "categoryLabelZh": "大棍棒",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/wretched-mace-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Wretched+Mace",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大棍棒类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "wretched mace great clubs 大棍棒 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大棍棒类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "bud-of-the-everlasting-tree",
    "gameId": "no-rest-for-the-wicked",
    "name": "Bud of the Everlasting Tree",
    "category": "great_hammers",
    "categoryLabel": "Great Hammers",
    "categoryLabelZh": "大锤",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/bud-of-the-everlasting-tree-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Bud+of+the+Everlasting+Tree",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "bud of the everlasting tree great hammers 大锤 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "cinder-and-stone",
    "gameId": "no-rest-for-the-wicked",
    "name": "Cinder & Stone",
    "category": "great_hammers",
    "categoryLabel": "Great Hammers",
    "categoryLabelZh": "大锤",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/cinder-stone-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Cinder+&amp;+Stone",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "cinder & stone great hammers 大锤 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "eternal-companion",
    "gameId": "no-rest-for-the-wicked",
    "name": "Eternal Companion",
    "category": "great_hammers",
    "categoryLabel": "Great Hammers",
    "categoryLabelZh": "大锤",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/eternal-companion-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Eternal+Companion",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "eternal companion great hammers 大锤 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "festering-cleft",
    "gameId": "no-rest-for-the-wicked",
    "name": "Festering Cleft",
    "category": "great_hammers",
    "categoryLabel": "Great Hammers",
    "categoryLabelZh": "大锤",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/festering-cleft-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Festering+Cleft",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "festering cleft great hammers 大锤 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "night-protector",
    "gameId": "no-rest-for-the-wicked",
    "name": "Night Protector",
    "category": "great_hammers",
    "categoryLabel": "Great Hammers",
    "categoryLabelZh": "大锤",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/night-protector-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Night+Protector",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "night protector great hammers 大锤 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "pound-of-cadavers",
    "gameId": "no-rest-for-the-wicked",
    "name": "Pound of Cadavers",
    "category": "great_hammers",
    "categoryLabel": "Great Hammers",
    "categoryLabelZh": "大锤",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/pound-of-cadavers-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Pound+of+Cadavers",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "pound of cadavers great hammers 大锤 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "spliced-hammer",
    "gameId": "no-rest-for-the-wicked",
    "name": "Spliced Hammer",
    "category": "great_hammers",
    "categoryLabel": "Great Hammers",
    "categoryLabelZh": "大锤",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/spliced-hammer-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Spliced+Hammer",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "spliced hammer great hammers 大锤 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "the-ram",
    "gameId": "no-rest-for-the-wicked",
    "name": "The Ram",
    "category": "great_hammers",
    "categoryLabel": "Great Hammers",
    "categoryLabelZh": "大锤",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-ram-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/The+Ram",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "the ram great hammers 大锤 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "tooth-of-the-ancient-one",
    "gameId": "no-rest-for-the-wicked",
    "name": "Tooth of the Ancient One",
    "category": "great_hammers",
    "categoryLabel": "Great Hammers",
    "categoryLabelZh": "大锤",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/tooth-of-the-ancient-one-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Tooth+of+the+Ancient+One",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "tooth of the ancient one great hammers 大锤 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "weeping-earth",
    "gameId": "no-rest-for-the-wicked",
    "name": "Weeping Earth",
    "category": "great_hammers",
    "categoryLabel": "Great Hammers",
    "categoryLabelZh": "大锤",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/weeping-earth-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Weeping+Earth",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "weeping earth great hammers 大锤 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "baron-s-edge",
    "gameId": "no-rest-for-the-wicked",
    "name": "Baron's Edge",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/barons-edge-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Baron's+Edge",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "baron's edge great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "blister",
    "gameId": "no-rest-for-the-wicked",
    "name": "Blister",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/blister-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Blister",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "blister great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "burning-thorn",
    "gameId": "no-rest-for-the-wicked",
    "name": "Burning Thorn",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/burning-thorn-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Burning+Thorn",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "burning thorn great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "claymore",
    "gameId": "no-rest-for-the-wicked",
    "name": "Claymore",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/claymore_two_handed_weapons_no_rest_for_the_wicked_wiki_guide_100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Claymore",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "双手大剑。适合用较慢但更重的单击压制敌人，核心是读招后反击，不适合无脑连打。",
    "bestFor": [
      "喜欢重武器、削韧和高单击伤害的玩家。",
      "愿意提前站位、等 Boss 大硬直再输出的玩家。"
    ],
    "strengths": [
      "单击威力和范围优于多数单手武器。",
      "对普通敌人压制力强。"
    ],
    "weaknesses": [
      "收招慢，新手容易被 Boss 二段攻击抓住。",
      "体力管理要求更高。"
    ],
    "recommendedRunes": [
      "Blink 或位移类符文：弥补笨重。",
      "高削韧近战符文：强化爆发窗口。"
    ],
    "buildTips": [
      "只在明确硬直后打重击或短连段。",
      "搭配较高护甲或防御资源，提高失误容错。"
    ],
    "alternatives": [
      "Baron’s Edge",
      "Burning Thorn",
      "Corpse Smeared Blade"
    ],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "claymore great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 双手大剑。适合用较慢但更重的单击压制敌人，核心是读招后反击，不适合无脑连打。 喜欢重武器、削韧和高单击伤害的玩家。 愿意提前站位、等 boss 大硬直再输出的玩家。 单击威力和范围优于多数单手武器。 对普通敌人压制力强。 收招慢，新手容易被 boss 二段攻击抓住。 体力管理要求更高。 blink 或位移类符文：弥补笨重。 高削韧近战符文：强化爆发窗口。 只在明确硬直后打重击或短连段。 搭配较高护甲或防御资源，提高失误容错。 baron’s edge burning thorn corpse smeared blade"
  },
  {
    "slug": "corpse-smeared-blade",
    "gameId": "no-rest-for-the-wicked",
    "name": "Corpse Smeared Blade",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/blood-rusted_sword_one_handed_straight_sword_weapons_no_rest_for_the_wicked_wiki_guide_100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Corpse+Smeared+Blade",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "Boss 相关掉落大剑。更适合想围绕高单击伤害和 Boss 奖励武器构建的玩家。",
    "bestFor": [
      "击败 Warrick 后想尝试重武器路线的玩家。",
      "喜欢慢速高伤、等窗口爆发的玩家。"
    ],
    "strengths": [
      "来源页关联 Warrick 奖励，具有明确 Boss 掉落线索。",
      "大剑类型在清普通敌人时压制力强。"
    ],
    "weaknesses": [
      "慢武器通病明显，失误成本高。",
      "具体数值仍需进游戏复核。"
    ],
    "recommendedRunes": [
      "位移类符文补笨重。",
      "高伤害近战符文用于 Boss 大硬直。"
    ],
    "buildTips": [
      "不要用它和高速 Boss 换血；等硬直再打。",
      "搭配高防御护甲或减体力消耗词条提高容错。"
    ],
    "alternatives": [
      "Claymore",
      "Baron’s Edge",
      "Burning Thorn"
    ],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "corpse smeared blade great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 boss 相关掉落大剑。更适合想围绕高单击伤害和 boss 奖励武器构建的玩家。 击败 warrick 后想尝试重武器路线的玩家。 喜欢慢速高伤、等窗口爆发的玩家。 来源页关联 warrick 奖励，具有明确 boss 掉落线索。 大剑类型在清普通敌人时压制力强。 慢武器通病明显，失误成本高。 具体数值仍需进游戏复核。 位移类符文补笨重。 高伤害近战符文用于 boss 大硬直。 不要用它和高速 boss 换血；等硬直再打。 搭配高防御护甲或减体力消耗词条提高容错。 claymore baron’s edge burning thorn"
  },
  {
    "slug": "culvarie",
    "gameId": "no-rest-for-the-wicked",
    "name": "Culvarie",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/culvarie-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Culvarie",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "culvarie great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "falstead-s-fury",
    "gameId": "no-rest-for-the-wicked",
    "name": "Falstead's Fury",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/daraks-fury-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Falstead's+Fury",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "Falstead Darak 相关奖励武器。适合支线推进后围绕火弱点 Boss 和人形战继续优化装备。",
    "bestFor": [
      "完成 Of Rats and Raiders 线的玩家。",
      "想使用 Boss 相关武器做中期 Build 的玩家。"
    ],
    "strengths": [
      "来源页明确和 Falstead Darak 奖励相关。",
      "适合收藏和中期路线尝试。"
    ],
    "weaknesses": [
      "获取依赖支线 Boss。",
      "具体属性仍需实物复核。"
    ],
    "recommendedRunes": [
      "补位移或打断的通用符文。",
      "根据实际攻击模组选择近战爆发符文。"
    ],
    "buildTips": [
      "打 Falstead 前先准备火属性伤害。",
      "获得后比较当前主武器词条，不要只因 Boss 名称就替换。"
    ],
    "alternatives": [
      "Stag of Embers",
      "Falstead's Barricade"
    ],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "falstead's fury great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 falstead darak 相关奖励武器。适合支线推进后围绕火弱点 boss 和人形战继续优化装备。 完成 of rats and raiders 线的玩家。 想使用 boss 相关武器做中期 build 的玩家。 来源页明确和 falstead darak 奖励相关。 适合收藏和中期路线尝试。 获取依赖支线 boss。 具体属性仍需实物复核。 补位移或打断的通用符文。 根据实际攻击模组选择近战爆发符文。 打 falstead 前先准备火属性伤害。 获得后比较当前主武器词条，不要只因 boss 名称就替换。 stag of embers falstead's barricade"
  },
  {
    "slug": "deep-mind",
    "gameId": "no-rest-for-the-wicked",
    "name": "Deep Mind",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/deep-mind-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Deep+Mind",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "deep mind great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "festering-earth",
    "gameId": "no-rest-for-the-wicked",
    "name": "Festering Earth",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/festering-earth-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Festering+Earth",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "festering earth great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "freiheit",
    "gameId": "no-rest-for-the-wicked",
    "name": "Freiheit",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/freiheit-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Freiheit",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "freiheit great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "frost-bringer",
    "gameId": "no-rest-for-the-wicked",
    "name": "Frost Bringer",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/frost-bringer-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Frost+Bringer",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "frost bringer great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "gnarled-saw",
    "gameId": "no-rest-for-the-wicked",
    "name": "Gnarled Saw",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/gnarled-saw-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Gnarled+Saw",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "gnarled saw great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "icebreaker",
    "gameId": "no-rest-for-the-wicked",
    "name": "Icebreaker",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/icebreaker-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Icebreaker",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "icebreaker great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "keeper-s-mercy",
    "gameId": "no-rest-for-the-wicked",
    "name": "Keeper's Mercy",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/keepers-mercy-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Keeper's+Mercy",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "keeper's mercy great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "shattered-sun",
    "gameId": "no-rest-for-the-wicked",
    "name": "Shattered Sun",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/shattered-sun-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Shattered+Sun",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "shattered sun great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "sieger",
    "gameId": "no-rest-for-the-wicked",
    "name": "Sieger",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/sieger-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Sieger",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "sieger great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "solitude",
    "gameId": "no-rest-for-the-wicked",
    "name": "Solitude",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/solitude-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Solitude",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "solitude great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "summer-s-sting",
    "gameId": "no-rest-for-the-wicked",
    "name": "Summer's Sting",
    "category": "great_swords",
    "categoryLabel": "Great Swords",
    "categoryLabelZh": "大剑",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/summers-sting-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Summers'+Sting",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "summer's sting great swords 大剑 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 大剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "bolein-polearm",
    "gameId": "no-rest-for-the-wicked",
    "name": "Bolein Polearm",
    "category": "halberds",
    "categoryLabel": "Halberds",
    "categoryLabelZh": "戟",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/bolein-polearm-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Bolein+Polearm",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "bolein polearm halberds 戟 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "executioner-s-halberd",
    "gameId": "no-rest-for-the-wicked",
    "name": "Executioner's Halberd",
    "category": "halberds",
    "categoryLabel": "Halberds",
    "categoryLabelZh": "戟",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/executioners-halberd-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Executioner's+Halberd",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "executioner's halberd halberds 戟 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "god-s-reach",
    "gameId": "no-rest-for-the-wicked",
    "name": "God's Reach",
    "category": "halberds",
    "categoryLabel": "Halberds",
    "categoryLabelZh": "戟",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/gods-reach-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/God's+Reach",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "god's reach halberds 戟 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "gristleborn",
    "gameId": "no-rest-for-the-wicked",
    "name": "Gristleborn",
    "category": "halberds",
    "categoryLabel": "Halberds",
    "categoryLabelZh": "戟",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/gristleborn-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Gristleborn",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "gristleborn halberds 戟 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "ocean-sweeper",
    "gameId": "no-rest-for-the-wicked",
    "name": "Ocean Sweeper",
    "category": "halberds",
    "categoryLabel": "Halberds",
    "categoryLabelZh": "戟",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/ocean-sweeper-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Ocean+Sweeper",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "ocean sweeper halberds 戟 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "phoenix-crest",
    "gameId": "no-rest-for-the-wicked",
    "name": "Phoenix Crest",
    "category": "halberds",
    "categoryLabel": "Halberds",
    "categoryLabelZh": "戟",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/phoenix-crest-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Phoenix+Crest",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "phoenix crest halberds 戟 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "regal-cleft",
    "gameId": "no-rest-for-the-wicked",
    "name": "Regal Cleft",
    "category": "halberds",
    "categoryLabel": "Halberds",
    "categoryLabelZh": "戟",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/regal-cleft-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Regal+Cleft",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "regal cleft halberds 戟 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "seabed-scraper",
    "gameId": "no-rest-for-the-wicked",
    "name": "Seabed Scraper",
    "category": "halberds",
    "categoryLabel": "Halberds",
    "categoryLabelZh": "戟",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/seabed-scraper-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Seabed+Scraper",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "seabed scraper halberds 戟 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "serrated-cutter",
    "gameId": "no-rest-for-the-wicked",
    "name": "Serrated Cutter",
    "category": "halberds",
    "categoryLabel": "Halberds",
    "categoryLabelZh": "戟",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/serrated-cutter-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Serrated+Cutter",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "serrated cutter halberds 戟 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 戟类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "broken-forge",
    "gameId": "no-rest-for-the-wicked",
    "name": "Broken Forge",
    "category": "hammers",
    "categoryLabel": "Hammers",
    "categoryLabelZh": "锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/broken-forge-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Broken+Forge",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "broken forge hammers 锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "brutal-maul",
    "gameId": "no-rest-for-the-wicked",
    "name": "Brutal Maul",
    "category": "hammers",
    "categoryLabel": "Hammers",
    "categoryLabelZh": "锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/brutal-maul-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Brutal+Maul",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "brutal maul hammers 锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "climber-s-pick",
    "gameId": "no-rest-for-the-wicked",
    "name": "Climber's Pick",
    "category": "hammers",
    "categoryLabel": "Hammers",
    "categoryLabelZh": "锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/climbers_pick_one_handed_hammer_no_rest_for_the_wicked_wiki_guide_100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Climber's+Pick",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "climber's pick hammers 锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "crystalline-sledge",
    "gameId": "no-rest-for-the-wicked",
    "name": "Crystalline Sledge",
    "category": "hammers",
    "categoryLabel": "Hammers",
    "categoryLabelZh": "锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/crystalline-sledge-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Crystalline+Sledge",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "crystalline sledge hammers 锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "deadblow",
    "gameId": "no-rest-for-the-wicked",
    "name": "Deadblow",
    "category": "hammers",
    "categoryLabel": "Hammers",
    "categoryLabelZh": "锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/deadblow-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Deadblow",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "deadblow hammers 锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "grimacing-stone",
    "gameId": "no-rest-for-the-wicked",
    "name": "Grimacing Stone",
    "category": "hammers",
    "categoryLabel": "Hammers",
    "categoryLabelZh": "锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/grimacing-stone-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Grimacing+Stone",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "grimacing stone hammers 锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "oxen-s-vengeance",
    "gameId": "no-rest-for-the-wicked",
    "name": "Oxen's Vengeance",
    "category": "hammers",
    "categoryLabel": "Hammers",
    "categoryLabelZh": "锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/oxens-vengeance-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Oxen's+Vengeance",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "oxen's vengeance hammers 锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "rostock",
    "gameId": "no-rest-for-the-wicked",
    "name": "Rostock",
    "category": "hammers",
    "categoryLabel": "Hammers",
    "categoryLabelZh": "锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/rostock-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Rostock",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "rostock hammers 锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "singing-peal",
    "gameId": "no-rest-for-the-wicked",
    "name": "Singing Peal",
    "category": "hammers",
    "categoryLabel": "Hammers",
    "categoryLabelZh": "锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/singing-peal-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Singing+Peal",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "singing peal hammers 锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "splintered-wing",
    "gameId": "no-rest-for-the-wicked",
    "name": "Splintered Wing",
    "category": "hammers",
    "categoryLabel": "Hammers",
    "categoryLabelZh": "锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/splintered-wing-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Splintered+Wing",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "splintered wing hammers 锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "grass-cutter",
    "gameId": "no-rest-for-the-wicked",
    "name": "Grass Cutter",
    "category": "katanas",
    "categoryLabel": "Katanas",
    "categoryLabelZh": "武士刀",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/grass-cutter-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Grass+Cutter",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "武士刀类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "grass cutter katanas 武士刀 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 武士刀类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "hanzo-blade",
    "gameId": "no-rest-for-the-wicked",
    "name": "Hanzo Blade",
    "category": "katanas",
    "categoryLabel": "Katanas",
    "categoryLabelZh": "武士刀",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/hanzo-blade-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Hanzo+Blade",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "武士刀。定位是快节奏切入、短连段和高机动输出，适合熟悉闪避节奏后使用。",
    "bestFor": [
      "喜欢轻装、侧闪、绕背输出的玩家。",
      "愿意用操作换伤害窗口的熟练玩家。"
    ],
    "strengths": [
      "动作节奏快，适合在 Boss 招式后短时间补伤。",
      "比重武器更容易在危险招式前收手。"
    ],
    "weaknesses": [
      "容错低，贪刀会被高伤 Boss 反打。",
      "面对高削韧需求目标时需要符文或词条补强。"
    ],
    "recommendedRunes": [
      "Blink：用于切入或撤离。",
      "Throw Knife：补远程收割。",
      "Swipe Kick：补近战打断和后坐力。"
    ],
    "buildTips": [
      "优先轻中负重，保证连续闪避。",
      "词条优先考虑攻击速度、体力效率、背刺/暴击相关收益。"
    ],
    "alternatives": [
      "Katana",
      "Tachi",
      "Uchigatana"
    ],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "hanzo blade katanas 武士刀 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 武士刀。定位是快节奏切入、短连段和高机动输出，适合熟悉闪避节奏后使用。 喜欢轻装、侧闪、绕背输出的玩家。 愿意用操作换伤害窗口的熟练玩家。 动作节奏快，适合在 boss 招式后短时间补伤。 比重武器更容易在危险招式前收手。 容错低，贪刀会被高伤 boss 反打。 面对高削韧需求目标时需要符文或词条补强。 blink：用于切入或撤离。 throw knife：补远程收割。 swipe kick：补近战打断和后坐力。 优先轻中负重，保证连续闪避。 词条优先考虑攻击速度、体力效率、背刺/暴击相关收益。 katana tachi uchigatana"
  },
  {
    "slug": "katana",
    "gameId": "no-rest-for-the-wicked",
    "name": "Katana",
    "category": "katanas",
    "categoryLabel": "Katanas",
    "categoryLabelZh": "武士刀",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/katana-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Katana",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "武士刀类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "katana katanas 武士刀 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 武士刀类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "tachi",
    "gameId": "no-rest-for-the-wicked",
    "name": "Tachi",
    "category": "katanas",
    "categoryLabel": "Katanas",
    "categoryLabelZh": "武士刀",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/tachi-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Tachi",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "武士刀类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "tachi katanas 武士刀 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 武士刀类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "uchigatana",
    "gameId": "no-rest-for-the-wicked",
    "name": "Uchigatana",
    "category": "katanas",
    "categoryLabel": "Katanas",
    "categoryLabelZh": "武士刀",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/uchigatana-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Uchigatana",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "武士刀类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "uchigatana katanas 武士刀 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 武士刀类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "wakizashi",
    "gameId": "no-rest-for-the-wicked",
    "name": "Wakizashi",
    "category": "katanas",
    "categoryLabel": "Katanas",
    "categoryLabelZh": "武士刀",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/wakizashi-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Wakizashi",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "武士刀类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "wakizashi katanas 武士刀 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 武士刀类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "wind-of-death",
    "gameId": "no-rest-for-the-wicked",
    "name": "Wind of Death",
    "category": "katanas",
    "categoryLabel": "Katanas",
    "categoryLabelZh": "武士刀",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/wind-of-death-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Wind+of+Death",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "Echo Knight 相关概率掉落武器。适合已进入 Crucible 并能稳定处理高压 Boss 的玩家。",
    "bestFor": [
      "中后期挑战试炼的玩家。",
      "想围绕稀有 Boss 掉落做收藏和 Build 实验的玩家。"
    ],
    "strengths": [
      "来源页明确列为 Echo Knight 概率掉落。",
      "适合作为试炼阶段目标装备。"
    ],
    "weaknesses": [
      "获取门槛高，需要能打过 Echo Knight。",
      "词条和具体数值需要掉落实物复核。"
    ],
    "recommendedRunes": [
      "优先保留能补位移和爆发的符文。",
      "根据实际武器类型选择同类专用符文。"
    ],
    "buildTips": [
      "先把 Echo Knight 打法稳定下来，再刷掉落。",
      "拿到后先看词条是否支持当前属性路线。"
    ],
    "alternatives": [
      "同类 Boss 掉落武器",
      "当前高词条主武器"
    ],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "wind of death katanas 武士刀 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 echo knight 相关概率掉落武器。适合已进入 crucible 并能稳定处理高压 boss 的玩家。 中后期挑战试炼的玩家。 想围绕稀有 boss 掉落做收藏和 build 实验的玩家。 来源页明确列为 echo knight 概率掉落。 适合作为试炼阶段目标装备。 获取门槛高，需要能打过 echo knight。 词条和具体数值需要掉落实物复核。 优先保留能补位移和爆发的符文。 根据实际武器类型选择同类专用符文。 先把 echo knight 打法稳定下来，再刷掉落。 拿到后先看词条是否支持当前属性路线。 同类 boss 掉落武器 当前高词条主武器"
  },
  {
    "slug": "cleric-s-mace",
    "gameId": "no-rest-for-the-wicked",
    "name": "Cleric's Mace",
    "category": "maces",
    "categoryLabel": "Maces",
    "categoryLabelZh": "钉头锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/clerics_mace_one_handed_mace_no_rest_for_the_wicked_wiki_guide_100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Cleric's+Mace",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "钉头锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "cleric's mace maces 钉头锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 钉头锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "comet-fall",
    "gameId": "no-rest-for-the-wicked",
    "name": "Comet Fall",
    "category": "maces",
    "categoryLabel": "Maces",
    "categoryLabelZh": "钉头锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/comet-fall-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Comet+Fall",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "钉头锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "comet fall maces 钉头锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 钉头锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "malice",
    "gameId": "no-rest-for-the-wicked",
    "name": "Malice",
    "category": "maces",
    "categoryLabel": "Maces",
    "categoryLabelZh": "钉头锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/malice-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Malice",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "钉头锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "malice maces 钉头锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 钉头锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "savage-cathecism",
    "gameId": "no-rest-for-the-wicked",
    "name": "Savage Cathecism",
    "category": "maces",
    "categoryLabel": "Maces",
    "categoryLabelZh": "钉头锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/savage-catechism-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Savage+Cathecism",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "钉头锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "savage cathecism maces 钉头锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 钉头锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "shrike-tree",
    "gameId": "no-rest-for-the-wicked",
    "name": "Shrike Tree",
    "category": "maces",
    "categoryLabel": "Maces",
    "categoryLabelZh": "钉头锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/shrike-tree-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Shrike+Tree",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "钉头锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "shrike tree maces 钉头锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 钉头锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "tapestry-mender",
    "gameId": "no-rest-for-the-wicked",
    "name": "Tapestry Mender",
    "category": "maces",
    "categoryLabel": "Maces",
    "categoryLabelZh": "钉头锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/tapestry-mender-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Tapestry+Mender",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "钉头锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "tapestry mender maces 钉头锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 钉头锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "the-last-stitch",
    "gameId": "no-rest-for-the-wicked",
    "name": "The Last Stitch",
    "category": "maces",
    "categoryLabel": "Maces",
    "categoryLabelZh": "钉头锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-last-stitch-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/The+Last+Stitch",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "钉头锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "the last stitch maces 钉头锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 钉头锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "weave-eater",
    "gameId": "no-rest-for-the-wicked",
    "name": "Weave Eater",
    "category": "maces",
    "categoryLabel": "Maces",
    "categoryLabelZh": "钉头锤",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/weave-eater-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Weave+Eater",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "钉头锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "weave eater maces 钉头锤 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 钉头锤类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "estoc",
    "gameId": "no-rest-for-the-wicked",
    "name": "Estoc",
    "category": "rapiers",
    "categoryLabel": "Rapiers",
    "categoryLabelZh": "刺剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/estoc-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Estoc",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "estoc rapiers 刺剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "gentleman-s-gambit",
    "gameId": "no-rest-for-the-wicked",
    "name": "Gentleman's Gambit",
    "category": "rapiers",
    "categoryLabel": "Rapiers",
    "categoryLabelZh": "刺剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/gentlemans-gambit-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Gentleman's+Gambit",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "gentleman's gambit rapiers 刺剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "longnail",
    "gameId": "no-rest-for-the-wicked",
    "name": "Longnail",
    "category": "rapiers",
    "categoryLabel": "Rapiers",
    "categoryLabelZh": "刺剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/longnail-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Longnail",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "longnail rapiers 刺剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "moon-shaft",
    "gameId": "no-rest-for-the-wicked",
    "name": "Moon Shaft",
    "category": "rapiers",
    "categoryLabel": "Rapiers",
    "categoryLabelZh": "刺剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/moon-shaft-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Moon+Shaft",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "moon shaft rapiers 刺剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "odessa-s-saber",
    "gameId": "no-rest-for-the-wicked",
    "name": "Odessa's Saber",
    "category": "rapiers",
    "categoryLabel": "Rapiers",
    "categoryLabelZh": "刺剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/odessas-saber-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Odessa's+Saber",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "odessa's saber rapiers 刺剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "pig-sticker",
    "gameId": "no-rest-for-the-wicked",
    "name": "Pig Sticker",
    "category": "rapiers",
    "categoryLabel": "Rapiers",
    "categoryLabelZh": "刺剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/pig-sticker-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Pig+Sticker",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "pig sticker rapiers 刺剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "royal-rapier",
    "gameId": "no-rest-for-the-wicked",
    "name": "Royal Rapier",
    "category": "rapiers",
    "categoryLabel": "Rapiers",
    "categoryLabelZh": "刺剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/royal-rapier-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Royal+Rapier",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "royal rapier rapiers 刺剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "sinew",
    "gameId": "no-rest-for-the-wicked",
    "name": "Sinew",
    "category": "rapiers",
    "categoryLabel": "Rapiers",
    "categoryLabelZh": "刺剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/sinew-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Sinew",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "sinew rapiers 刺剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "siren-queen-s-horn",
    "gameId": "no-rest-for-the-wicked",
    "name": "Siren Queen's Horn",
    "category": "rapiers",
    "categoryLabel": "Rapiers",
    "categoryLabelZh": "刺剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/siren-queens-horn-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Siren+Queen's+Horn",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "siren queen's horn rapiers 刺剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "stitcher",
    "gameId": "no-rest-for-the-wicked",
    "name": "Stitcher",
    "category": "rapiers",
    "categoryLabel": "Rapiers",
    "categoryLabelZh": "刺剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/stitcher-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Stitcher",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "stitcher rapiers 刺剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "tucked-falcon",
    "gameId": "no-rest-for-the-wicked",
    "name": "Tucked Falcon",
    "category": "rapiers",
    "categoryLabel": "Rapiers",
    "categoryLabelZh": "刺剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/tucked-falcon-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Tucked+Falcon",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "tucked falcon rapiers 刺剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "winnick-s-rapier",
    "gameId": "no-rest-for-the-wicked",
    "name": "Winnick's Rapier",
    "category": "rapiers",
    "categoryLabel": "Rapiers",
    "categoryLabelZh": "刺剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/winnicks-rapier-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Winnick's+Rapier",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "winnick's rapier rapiers 刺剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 刺剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "hope-shorn",
    "gameId": "no-rest-for-the-wicked",
    "name": "Hope Shorn",
    "category": "scythes",
    "categoryLabel": "Scythes",
    "categoryLabelZh": "镰刀",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/hope-shorn-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Hope+Shorn",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "镰刀类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "hope shorn scythes 镰刀 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 镰刀类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "scythe-of-wretches",
    "gameId": "no-rest-for-the-wicked",
    "name": "Scythe of Wretches",
    "category": "scythes",
    "categoryLabel": "Scythes",
    "categoryLabelZh": "镰刀",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/scythe-of-wretches-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Scythe+of+Wretches",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "镰刀类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "scythe of wretches scythes 镰刀 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 镰刀类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "soul-thresher",
    "gameId": "no-rest-for-the-wicked",
    "name": "Soul Thresher",
    "category": "scythes",
    "categoryLabel": "Scythes",
    "categoryLabelZh": "镰刀",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/soul-thresher-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Soul+Thresher",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "镰刀类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "soul thresher scythes 镰刀 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 镰刀类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "assegai",
    "gameId": "no-rest-for-the-wicked",
    "name": "Assegai",
    "category": "spears",
    "categoryLabel": "Spears",
    "categoryLabelZh": "长矛",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/assegai-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Assegai",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "assegai spears 长矛 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "boar-spiker",
    "gameId": "no-rest-for-the-wicked",
    "name": "Boar Spiker",
    "category": "spears",
    "categoryLabel": "Spears",
    "categoryLabelZh": "长矛",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/boar-spiker-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Boar+Spiker",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "boar spiker spears 长矛 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "coral-piercer",
    "gameId": "no-rest-for-the-wicked",
    "name": "Coral Piercer",
    "category": "spears",
    "categoryLabel": "Spears",
    "categoryLabelZh": "长矛",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/coral-piercer-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Coral+Piercer",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "coral piercer spears 长矛 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "gnarled-harpoon",
    "gameId": "no-rest-for-the-wicked",
    "name": "Gnarled Harpoon",
    "category": "spears",
    "categoryLabel": "Spears",
    "categoryLabelZh": "长矛",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/gnarled-harpoon-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Gnarled+Harpoon",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "gnarled harpoon spears 长矛 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "needle-spear",
    "gameId": "no-rest-for-the-wicked",
    "name": "Needle Spear",
    "category": "spears",
    "categoryLabel": "Spears",
    "categoryLabelZh": "长矛",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/needle-spear-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Needle+Spear",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "needle spear spears 长矛 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "proud-lance",
    "gameId": "no-rest-for-the-wicked",
    "name": "Proud Lance",
    "category": "spears",
    "categoryLabel": "Spears",
    "categoryLabelZh": "长矛",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/proud-lance-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Proud+Lance",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "proud lance spears 长矛 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "sacrament-s-sin",
    "gameId": "no-rest-for-the-wicked",
    "name": "Sacrament's Sin",
    "category": "spears",
    "categoryLabel": "Spears",
    "categoryLabelZh": "长矛",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/sacraments-sin-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Sacrament's+Sin",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "sacrament's sin spears 长矛 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "talon-of-the-balak-taw",
    "gameId": "no-rest-for-the-wicked",
    "name": "Talon of the Balak Taw",
    "category": "spears",
    "categoryLabel": "Spears",
    "categoryLabelZh": "长矛",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/talon-of-the-balak-taw-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Talon+of+the+Balak+Taw",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "talon of the balak taw spears 长矛 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "the-cage",
    "gameId": "no-rest-for-the-wicked",
    "name": "The Cage",
    "category": "spears",
    "categoryLabel": "Spears",
    "categoryLabelZh": "长矛",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-cage-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/The+Cage",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "the cage spears 长矛 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "the-oldest-betrayal",
    "gameId": "no-rest-for-the-wicked",
    "name": "The Oldest Betrayal",
    "category": "spears",
    "categoryLabel": "Spears",
    "categoryLabelZh": "长矛",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-oldest-betrayal-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/The+Oldest+Betrayal",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "the oldest betrayal spears 长矛 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "the-shrieker",
    "gameId": "no-rest-for-the-wicked",
    "name": "The Shrieker",
    "category": "spears",
    "categoryLabel": "Spears",
    "categoryLabelZh": "长矛",
    "handedness": "双手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-shrieker-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/The+Shrieker",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "双手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "双手慢武器优先考虑能提供位移、打断或远程补刀的符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "the shrieker spears 长矛 双手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 长矛类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 双手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 双手慢武器优先考虑能提供位移、打断或远程补刀的符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "alsoc-s-ruined-staff",
    "gameId": "no-rest-for-the-wicked",
    "name": "Alsoc's Ruined Staff",
    "category": "staves",
    "categoryLabel": "Staves",
    "categoryLabelZh": "法杖",
    "handedness": "法器",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/alsocs-ruined-staff-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Alsoc's+Ruined+Staff",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "法器武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "alsoc's ruined staff staves 法杖 法器 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 法器武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "bear-slayer",
    "gameId": "no-rest-for-the-wicked",
    "name": "Bear Slayer",
    "category": "staves",
    "categoryLabel": "Staves",
    "categoryLabelZh": "法杖",
    "handedness": "法器",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/bear-slayer-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Bear+Slayer",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "法器武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "bear slayer staves 法杖 法器 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 法器武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "cursed-crone",
    "gameId": "no-rest-for-the-wicked",
    "name": "Cursed Crone",
    "category": "staves",
    "categoryLabel": "Staves",
    "categoryLabelZh": "法杖",
    "handedness": "法器",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/cursed-crone-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Cursed+Crone",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "法器武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "cursed crone staves 法杖 法器 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 法器武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "dried-hive",
    "gameId": "no-rest-for-the-wicked",
    "name": "Dried Hive",
    "category": "staves",
    "categoryLabel": "Staves",
    "categoryLabelZh": "法杖",
    "handedness": "法器",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/dried-hive-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Dried+Hive",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "法器武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "dried hive staves 法杖 法器 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 法器武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "falling-sky",
    "gameId": "no-rest-for-the-wicked",
    "name": "Falling Sky",
    "category": "staves",
    "categoryLabel": "Staves",
    "categoryLabelZh": "法杖",
    "handedness": "法器",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/falling-sky-staff-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Falling+Sky",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "法器武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "falling sky staves 法杖 法器 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 法器武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "false-truth",
    "gameId": "no-rest-for-the-wicked",
    "name": "False Truth",
    "category": "staves",
    "categoryLabel": "Staves",
    "categoryLabelZh": "法杖",
    "handedness": "法器",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/false-truth-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/False+Truth",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "法器武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "false truth staves 法杖 法器 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 法器武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "gnarled-staff",
    "gameId": "no-rest-for-the-wicked",
    "name": "Gnarled Staff",
    "category": "staves",
    "categoryLabel": "Staves",
    "categoryLabelZh": "法杖",
    "handedness": "法器",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/gnarled_staff_two_handed_weapons_no_rest_for_the_wicked_wiki_guide_100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Gnarled+Staff",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "法器武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "gnarled staff staves 法杖 法器 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 法器武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "pinwheel",
    "gameId": "no-rest-for-the-wicked",
    "name": "Pinwheel",
    "category": "staves",
    "categoryLabel": "Staves",
    "categoryLabelZh": "法杖",
    "handedness": "法器",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/pinwheel-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Pinwheel",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "法器武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "pinwheel staves 法杖 法器 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 法器武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "root-tender",
    "gameId": "no-rest-for-the-wicked",
    "name": "Root Tender",
    "category": "staves",
    "categoryLabel": "Staves",
    "categoryLabelZh": "法杖",
    "handedness": "法器",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/root-tender-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Root+Tender",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "法器武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "root tender staves 法杖 法器 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 法器武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "sinner-s-crown",
    "gameId": "no-rest-for-the-wicked",
    "name": "Sinner's Crown",
    "category": "staves",
    "categoryLabel": "Staves",
    "categoryLabelZh": "法杖",
    "handedness": "法器",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/sinners-crown-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Sinner's+Crown",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "法器武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "sinner's crown staves 法杖 法器 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 法器武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "spherin",
    "gameId": "no-rest-for-the-wicked",
    "name": "Spherin",
    "category": "staves",
    "categoryLabel": "Staves",
    "categoryLabelZh": "法杖",
    "handedness": "法器",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/spherin-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Spherin",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "法器武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "spherin staves 法杖 法器 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 法器武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "stag-head",
    "gameId": "no-rest-for-the-wicked",
    "name": "Stag Head",
    "category": "staves",
    "categoryLabel": "Staves",
    "categoryLabelZh": "法杖",
    "handedness": "法器",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/stag-head-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Stag+Head",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "法器武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "stag head staves 法杖 法器 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 法杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 法器武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "azure-blade",
    "gameId": "no-rest-for-the-wicked",
    "name": "Azure Blade",
    "category": "straight_swords",
    "categoryLabel": "Straight Swords",
    "categoryLabelZh": "直剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/azure-blade-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Azure+Blade",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "azure blade straight swords 直剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "backstabber",
    "gameId": "no-rest-for-the-wicked",
    "name": "Backstabber",
    "category": "straight_swords",
    "categoryLabel": "Straight Swords",
    "categoryLabelZh": "直剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/backstabber-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Backstabber",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "backstabber straight swords 直剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "blood-rusted-sword",
    "gameId": "no-rest-for-the-wicked",
    "name": "Blood-Rusted Sword",
    "category": "straight_swords",
    "categoryLabel": "Straight Swords",
    "categoryLabelZh": "直剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/blood-rusted_sword_one_handed_straight_sword_weapons_no_rest_for_the_wicked_wiki_guide_100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Blood-Rusted+Sword",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "blood-rusted sword straight swords 直剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "coiled-sword",
    "gameId": "no-rest-for-the-wicked",
    "name": "Coiled Sword",
    "category": "straight_swords",
    "categoryLabel": "Straight Swords",
    "categoryLabelZh": "直剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/coiled-sword-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Coiled+Sword",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "coiled sword straight swords 直剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "cronus",
    "gameId": "no-rest-for-the-wicked",
    "name": "Cronus",
    "category": "straight_swords",
    "categoryLabel": "Straight Swords",
    "categoryLabelZh": "直剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/cronus-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Cronus",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "cronus straight swords 直剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "governor-s-dagger",
    "gameId": "no-rest-for-the-wicked",
    "name": "Governor's Dagger",
    "category": "straight_swords",
    "categoryLabel": "Straight Swords",
    "categoryLabelZh": "直剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/governors-dagger-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Governor's+Dagger",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "governor's dagger straight swords 直剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "keeper-s-grace",
    "gameId": "no-rest-for-the-wicked",
    "name": "Keeper's Grace",
    "category": "straight_swords",
    "categoryLabel": "Straight Swords",
    "categoryLabelZh": "直剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/keepers-grace-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Keeper's+Grace",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "keeper's grace straight swords 直剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "nith-blade",
    "gameId": "no-rest-for-the-wicked",
    "name": "Nith Blade",
    "category": "straight_swords",
    "categoryLabel": "Straight Swords",
    "categoryLabelZh": "直剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/nith-blade-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Nith+Blade",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "nith blade straight swords 直剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "phalen-sliver",
    "gameId": "no-rest-for-the-wicked",
    "name": "Phalen Sliver",
    "category": "straight_swords",
    "categoryLabel": "Straight Swords",
    "categoryLabelZh": "直剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/phalen-sliver-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Phalen+Sliver",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "phalen sliver straight swords 直剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "sacrament-s-pride",
    "gameId": "no-rest-for-the-wicked",
    "name": "Sacrament's Pride",
    "category": "straight_swords",
    "categoryLabel": "Straight Swords",
    "categoryLabelZh": "直剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/sacraments-pride-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Sacrament's+Pride",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "sacrament's pride straight swords 直剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "weave-cutter",
    "gameId": "no-rest-for-the-wicked",
    "name": "Weave Cutter",
    "category": "straight_swords",
    "categoryLabel": "Straight Swords",
    "categoryLabelZh": "直剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/weave-cutter-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Weave+Cutter",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "weave cutter straight swords 直剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "wooden-sword",
    "gameId": "no-rest-for-the-wicked",
    "name": "Wooden Sword",
    "category": "straight_swords",
    "categoryLabel": "Straight Swords",
    "categoryLabelZh": "直剑",
    "handedness": "单手",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/wooden-sword-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Wooden+Sword",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "单手武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "wooden sword straight swords 直剑 单手 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 直剑类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 单手武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "flame-becomes-us",
    "gameId": "no-rest-for-the-wicked",
    "name": "Flame Becomes Us",
    "category": "wands",
    "categoryLabel": "Wands",
    "categoryLabelZh": "魔杖",
    "handedness": "法器",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/flame-becomes-us-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Flame+Becomes+Us",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "魔杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "法器武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "flame becomes us wands 魔杖 法器 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 魔杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 法器武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  },
  {
    "slug": "sanglier-staff",
    "gameId": "no-rest-for-the-wicked",
    "name": "Sanglier Staff",
    "category": "wands",
    "categoryLabel": "Wands",
    "categoryLabelZh": "魔杖",
    "handedness": "法器",
    "iconUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/sanglier-staff-weapon-no-rest-for-the-wicked-wiki-guide-100px.png",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Sanglier+Staff",
    "imageSourceNote": "Fextralife Weapons 页面公开展示的武器图标，本站远程引用并保留来源链接。",
    "tier": "页面未稳定标注",
    "scaling": "页面多处仍为 ???，以游戏内实际掉落词条为准",
    "requirements": "页面多处仍为 ???，以游戏内实际装备要求为准",
    "runeSlots": [
      "X：空槽或随机",
      "Y：空槽或随机",
      "B：空槽或随机",
      "A：空槽或随机"
    ],
    "acquisition": [
      "武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。",
      "具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。"
    ],
    "merchants": [
      "来源页面未稳定列出固定商人时，标记为随机或待复核。"
    ],
    "notes": [
      "0% 耐久时武器不可装备，可通过对应 NPC 或 Repair Powder 修理。",
      "常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。",
      "普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。"
    ],
    "role": "魔杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。",
    "bestFor": [
      "法器武器使用者。",
      "想先按武器类型筛选，再进游戏内对照词条的新手玩家。"
    ],
    "strengths": [
      "可作为同类武器的图鉴索引，先确认外观、类型和来源页。",
      "适合与符文、词条和属性需求一起复核后决定是否投入升级资源。"
    ],
    "weaknesses": [
      "Fextralife 多数武器详情页仍把 Scaling、Requirements 留为 ???，不能当作确定数值。",
      "获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。"
    ],
    "recommendedRunes": [
      "先选择低硬直、能补足武器短板的通用符文。",
      "单手快武器可优先考虑连段补伤或安全脱离符文。"
    ],
    "buildTips": [
      "先看武器动作模组和收招速度，再决定是否投入高价值材料。",
      "普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 Build。",
      "0% 耐久时不可装备，长线探索前要准备 Repair Powder 或回 NPC 修理。"
    ],
    "alternatives": [],
    "lastVerifiedAt": "2026-07-09",
    "searchText": "sanglier staff wands 魔杖 法器 页面多处仍为 ???，以游戏内实际掉落词条为准 页面多处仍为 ???，以游戏内实际装备要求为准 武器通常可从探索掉落、宝箱、敌人掉落或商人处获得。 具体词条、稀有度和符文槽会受随机掉落影响，拿到实物后需要以游戏内面板复核。 0% 耐久时武器不可装备，可通过对应 npc 或 repair powder 修理。 常见稀有度包括白色普通、蓝色稀有、紫色诅咒、金色独特。 普通武器更适合自定义；稀有、诅咒或独特装备可围绕词条和符文构建玩法。 魔杖类武器。当前来源更稳定地提供了分类与图标，具体数值会随掉落词条、稀有度和版本调整变化。 法器武器使用者。 想先按武器类型筛选，再进游戏内对照词条的新手玩家。 可作为同类武器的图鉴索引，先确认外观、类型和来源页。 适合与符文、词条和属性需求一起复核后决定是否投入升级资源。 fextralife 多数武器详情页仍把 scaling、requirements 留为 ???，不能当作确定数值。 获取方式可能受随机掉落、宝箱和商人库存影响，需要以当前存档实物为准。 先选择低硬直、能补足武器短板的通用符文。 单手快武器可优先考虑连段补伤或安全脱离符文。 先看武器动作模组和收招速度，再决定是否投入高价值材料。 普通白装更适合自定义；蓝装、紫装和金装需要围绕已有词条调整 build。 0% 耐久时不可装备，长线探索前要准备 repair powder 或回 npc 修理。"
  }
] satisfies WeaponEntry[]
