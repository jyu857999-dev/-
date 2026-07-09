import type { BossEntry } from '../../types'

export const bosses = [
  {
    "slug": "warrick-the-torn",
    "gameId": "no-rest-for-the-wicked",
    "categoryLabelZh": "主线 Boss",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Warrick+The+Torn",
    "notes": [],
    "lastVerifiedAt": "2026-07-09",
    "name": "Warrick The Torn",
    "category": "main_story",
    "bossType": "大型变异人形",
    "optional": "否",
    "location": [
      "Orban Glades，Sacrament 城门附近"
    ],
    "quest": [
      "序章通往 Sacrament 的主线推进"
    ],
    "weakness": [
      "火"
    ],
    "strongAgainst": [
      "瘟疫"
    ],
    "resistantTo": [
      "无稳定抗性记录"
    ],
    "immuneTo": [
      "无稳定免疫记录"
    ],
    "rewards": [
      "随机物品",
      "Corpse Smeared Blade 概率掉落",
      "Plague Ichor"
    ],
    "imageUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/warrick-the-torn-boss-no-rest-for-the-wicked-wiki-guide.jpg",
    "summary": "第一批主线 Boss。动作前摇清楚，主要考验玩家是否能等招式收尾后从侧面或背后反击。",
    "preparation": [
      "准备火属性或高爆发武器。",
      "保留体力用于连续闪避，不要在正面贪完整连段。"
    ],
    "strategy": [
      "下劈、360 度挥砍、突刺和双重挥砍都有明显蓄力；看到抬刀或身体前压时先横向闪避。",
      "低血量后会追加跳砸。Boss 起跳后目标点基本锁定在你原位置，立刻横移离开落点。",
      "多数攻击覆盖正面，真正安全的输出窗口在招式落空后的侧后方。"
    ],
    "attacks": [
      {
        "name": "下劈",
        "counter": "抬刀后横向闪避，落地硬直时侧面反击。"
      },
      {
        "name": "旋身挥砍",
        "counter": "等他贴近再翻滚或侧移，过早闪避容易被追到。"
      },
      {
        "name": "突刺",
        "counter": "蓄力时间较长，等刺出瞬间侧闪。"
      },
      {
        "name": "跳砸",
        "counter": "低血量阶段出现，起跳后立即离开原站位。"
      }
    ],
    "searchText": "warrick the torn 大型变异人形 主线 boss 第一批主线 boss。动作前摇清楚，主要考验玩家是否能等招式收尾后从侧面或背后反击。 orban glades，sacrament 城门附近 序章通往 sacrament 的主线推进 火 随机物品 corpse smeared blade 概率掉落 plague ichor 下劈、360 度挥砍、突刺和双重挥砍都有明显蓄力；看到抬刀或身体前压时先横向闪避。 低血量后会追加跳砸。boss 起跳后目标点基本锁定在你原位置，立刻横移离开落点。 多数攻击覆盖正面，真正安全的输出窗口在招式落空后的侧后方。 下劈 抬刀后横向闪避，落地硬直时侧面反击。 旋身挥砍 等他贴近再翻滚或侧移，过早闪避容易被追到。 突刺 蓄力时间较长，等刺出瞬间侧闪。 跳砸 低血量阶段出现，起跳后立即离开原站位。"
  },
  {
    "slug": "the-riven-twins",
    "gameId": "no-rest-for-the-wicked",
    "categoryLabelZh": "主线 Boss",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/The+Riven+Twins",
    "notes": [],
    "lastVerifiedAt": "2026-07-09",
    "name": "The Riven Twins",
    "category": "main_story",
    "bossType": "双子大型人形",
    "optional": "否",
    "location": [
      "The Nameless Pass"
    ],
    "quest": [
      "Servant of God"
    ],
    "weakness": [
      "火"
    ],
    "strongAgainst": [
      "瘟疫"
    ],
    "resistantTo": [
      "无稳定抗性记录"
    ],
    "immuneTo": [
      "无稳定免疫记录"
    ],
    "rewards": [
      "随机物品",
      "Laquered Bow 概率掉落",
      "Fetid Club 概率掉落",
      "Plague Ichor"
    ],
    "imageUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-riven-twins-boss-no-rest-for-the-wicked-wiki-guide.jpg",
    "summary": "用长柄武器压制空间的主线 Boss。难点在于大范围扫击、瘟疫球和地面瘟疫区会逐步限制走位。",
    "preparation": [
      "先清支线和探索提升等级，避免低等级硬打。",
      "火属性伤害收益较高。"
    ],
    "strategy": [
      "中近距离重点处理横扫和插地攻击。横扫可向内闪避抢反击，插地动作慢，可侧闪后输出。",
      "远距离会用纵向砸地、瘟疫球和连段推进；不要一直后退，避免被逼到场地边缘。",
      "后半段会制造瘟疫水泡并留下危险区域，应把水泡引到边缘再回到中心作战。"
    ],
    "attacks": [
      {
        "name": "长柄横扫",
        "counter": "熟悉节奏后向 Boss 内侧闪避，结束后立即短连段反击。"
      },
      {
        "name": "插地 / 砸地",
        "counter": "动作慢，侧向离开直线范围即可。"
      },
      {
        "name": "瘟疫球",
        "counter": "看准弹道横移，躲完后利用施法硬直靠近。"
      },
      {
        "name": "瘟疫水泡",
        "counter": "先引到场地边缘，避免安全区域被持续伤害区切碎。"
      }
    ],
    "searchText": "the riven twins 双子大型人形 主线 boss 用长柄武器压制空间的主线 boss。难点在于大范围扫击、瘟疫球和地面瘟疫区会逐步限制走位。 the nameless pass servant of god 火 随机物品 laquered bow 概率掉落 fetid club 概率掉落 plague ichor 中近距离重点处理横扫和插地攻击。横扫可向内闪避抢反击，插地动作慢，可侧闪后输出。 远距离会用纵向砸地、瘟疫球和连段推进；不要一直后退，避免被逼到场地边缘。 后半段会制造瘟疫水泡并留下危险区域，应把水泡引到边缘再回到中心作战。 长柄横扫 熟悉节奏后向 boss 内侧闪避，结束后立即短连段反击。 插地 / 砸地 动作慢，侧向离开直线范围即可。 瘟疫球 看准弹道横移，躲完后利用施法硬直靠近。 瘟疫水泡 先引到场地边缘，避免安全区域被持续伤害区切碎。"
  },
  {
    "slug": "the-caretaker-and-the-tusk",
    "gameId": "no-rest-for-the-wicked",
    "categoryLabelZh": "主线 Boss",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/The+Caretaker+and+the+Tusk",
    "notes": [],
    "lastVerifiedAt": "2026-07-09",
    "name": "The Caretaker and the Tusk",
    "category": "main_story",
    "bossType": "双目标 Boss",
    "optional": "是/否待复核",
    "location": [
      "Temple of Day and Night，Marin Woods"
    ],
    "quest": [
      "Marin Woods 主线推进"
    ],
    "weakness": [
      "来源未稳定标注"
    ],
    "strongAgainst": [
      "来源未稳定标注"
    ],
    "resistantTo": [
      "来源未稳定标注"
    ],
    "immuneTo": [
      "来源未稳定标注"
    ],
    "rewards": [
      "Basic Hide",
      "Boar Tusk",
      "The Caretaker's Habit",
      "Human Bone",
      "Plague Ichor"
    ],
    "imageUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-caretaker-the-tusk-boss-nrftw-wiki-guide-300px.jpg",
    "summary": "照看者与巨兽同时行动的双目标战。攻击源多，优先目标和场地观察比单纯输出更重要。",
    "preparation": [
      "使用机动性较好的武器，避免重武器长时间锁动画。",
      "保持视角能同时看到 Tusk 和 Caretaker。"
    ],
    "strategy": [
      "Tusk 冲撞可引向墙面，最后一刻闪开让它撞墙，争取输出窗口。",
      "Caretaker 会瞬移并接直线地波、范围震荡或召唤横穿场地的小怪；看到紫色提示先脱离范围。",
      "来源说明攻击 Caretaker 时会同时影响 Tusk，可根据当前安全窗口选择攻击 Caretaker 来间接压低 Tusk。"
    ],
    "attacks": [
      {
        "name": "Tusk 冲撞",
        "counter": "贴近墙边诱导，最后横向闪避。"
      },
      {
        "name": "连续踏地",
        "counter": "最多多次下砸，看到抬身后先拉开，别急着回头输出。"
      },
      {
        "name": "Caretaker 地波",
        "counter": "地波走直线，横向移动即可避开。"
      },
      {
        "name": "召唤穿场生物",
        "counter": "只沿短直线冲刺，观察路线后侧移。"
      }
    ],
    "searchText": "the caretaker and the tusk 双目标 boss 主线 boss 照看者与巨兽同时行动的双目标战。攻击源多，优先目标和场地观察比单纯输出更重要。 temple of day and night，marin woods marin woods 主线推进 来源未稳定标注 basic hide boar tusk the caretaker's habit human bone plague ichor tusk 冲撞可引向墙面，最后一刻闪开让它撞墙，争取输出窗口。 caretaker 会瞬移并接直线地波、范围震荡或召唤横穿场地的小怪；看到紫色提示先脱离范围。 来源说明攻击 caretaker 时会同时影响 tusk，可根据当前安全窗口选择攻击 caretaker 来间接压低 tusk。 tusk 冲撞 贴近墙边诱导，最后横向闪避。 连续踏地 最多多次下砸，看到抬身后先拉开，别急着回头输出。 caretaker 地波 地波走直线，横向移动即可避开。 召唤穿场生物 只沿短直线冲刺，观察路线后侧移。"
  },
  {
    "slug": "the-lost-huntress",
    "gameId": "no-rest-for-the-wicked",
    "categoryLabelZh": "主线 Boss",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/The+Lost+Huntress",
    "notes": [],
    "lastVerifiedAt": "2026-07-09",
    "name": "The Lost Huntress",
    "category": "main_story",
    "bossType": "兽型变异 Boss",
    "optional": "是/否待复核",
    "location": [
      "Lowland Meadows"
    ],
    "quest": [
      "The Weeping Sisters"
    ],
    "weakness": [
      "来源未稳定标注"
    ],
    "strongAgainst": [
      "来源未稳定标注"
    ],
    "resistantTo": [
      "来源未稳定标注"
    ],
    "immuneTo": [
      "来源未稳定标注"
    ],
    "rewards": [
      "False Noble Gauntlets",
      "Plague Ichor"
    ],
    "imageUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-lost-huntress-boss-nrftw-wiki-guide-300px.jpg",
    "summary": "被瘟疫侵蚀的兽型 Boss。前半段以冲锋、啃咬、拍击为主，半血后加入更大范围的地面爆发。",
    "preparation": [
      "优先准备能快速脱离的轻中型武器。",
      "保持场地外圈可用，避免被连续冲锋逼到死角。"
    ],
    "strategy": [
      "三连冲锋和多段啃咬都会在起手时锁定方向，看到起身或后缩时向侧面走位。",
      "半血后 Lara 会从怪物口中出现并制造蓝色地面爆点；爆点会跟随玩家，靠近 Boss 诱导后立刻闪出。",
      "直线爆发会沿线延伸，等第一段爆开后侧移，不要沿线后退。"
    ],
    "attacks": [
      {
        "name": "三连冲锋爪击",
        "counter": "起身锁定后横向跑或侧闪。"
      },
      {
        "name": "连续啃咬",
        "counter": "每次后缩都是提示，拉开或侧闪，不要贴脸硬拼。"
      },
      {
        "name": "单次砸地",
        "counter": "抬身后向侧面闪避。"
      },
      {
        "name": "地面爆点 / 爆发线",
        "counter": "引导到 Boss 附近后离开蓝点；直线爆发侧移处理。"
      }
    ],
    "searchText": "the lost huntress 兽型变异 boss 主线 boss 被瘟疫侵蚀的兽型 boss。前半段以冲锋、啃咬、拍击为主，半血后加入更大范围的地面爆发。 lowland meadows the weeping sisters 来源未稳定标注 false noble gauntlets plague ichor 三连冲锋和多段啃咬都会在起手时锁定方向，看到起身或后缩时向侧面走位。 半血后 lara 会从怪物口中出现并制造蓝色地面爆点；爆点会跟随玩家，靠近 boss 诱导后立刻闪出。 直线爆发会沿线延伸，等第一段爆开后侧移，不要沿线后退。 三连冲锋爪击 起身锁定后横向跑或侧闪。 连续啃咬 每次后缩都是提示，拉开或侧闪，不要贴脸硬拼。 单次砸地 抬身后向侧面闪避。 地面爆点 / 爆发线 引导到 boss 附近后离开蓝点；直线爆发侧移处理。"
  },
  {
    "slug": "the-winged-brood",
    "gameId": "no-rest-for-the-wicked",
    "categoryLabelZh": "主线 Boss",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/The+Winged+Brood",
    "notes": [],
    "lastVerifiedAt": "2026-07-09",
    "name": "The Winged Brood",
    "category": "main_story",
    "bossType": "飞行群体 Boss",
    "optional": "否",
    "location": [
      "Nameless Pass"
    ],
    "quest": [
      "Faith and Flames"
    ],
    "weakness": [
      "来源未稳定标注"
    ],
    "strongAgainst": [
      "来源未稳定标注"
    ],
    "resistantTo": [
      "来源未稳定标注"
    ],
    "immuneTo": [
      "来源未稳定标注"
    ],
    "rewards": [
      "Winged Brood Wing",
      "Plague Ichor",
      "Ashen Trousers"
    ],
    "imageUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/the-winged-brood-boss-nrftw-wiki-guide-300px.png",
    "summary": "三阶段飞行群体战。第一阶段是多只 Winged Brood，后续 Bile Wretch 和 Blood Wraith 会加入。",
    "preparation": [
      "准备能快速击杀单体的武器，减少多 Boss 同场时间。",
      "阶段转换时优先处理新出现的大型目标。"
    ],
    "strategy": [
      "第一阶段的小型飞行敌人攻击模式一致，俯冲、爪击、翼扫都能通过观察起飞高度和尖叫动作预判。",
      "第二阶段 Bile Wretch 下场后要尽快击杀，否则第三阶段 Blood Wraith 加入会形成双 Boss 压力。",
      "不要被飞行目标拖到场地边缘；每次躲完俯冲后回到开阔位置。"
    ],
    "attacks": [
      {
        "name": "俯冲",
        "counter": "飞高后会向当前位置俯冲，向前或侧面闪避。"
      },
      {
        "name": "爪击",
        "counter": "低空悬停是提示，向侧面闪避。"
      },
      {
        "name": "翼扫",
        "counter": "尖叫后准备后闪。"
      },
      {
        "name": "Bile Wretch 冲锋",
        "counter": "尖叫后横向闪避，避免被连续推进。"
      }
    ],
    "searchText": "the winged brood 飞行群体 boss 主线 boss 三阶段飞行群体战。第一阶段是多只 winged brood，后续 bile wretch 和 blood wraith 会加入。 nameless pass faith and flames 来源未稳定标注 winged brood wing plague ichor ashen trousers 第一阶段的小型飞行敌人攻击模式一致，俯冲、爪击、翼扫都能通过观察起飞高度和尖叫动作预判。 第二阶段 bile wretch 下场后要尽快击杀，否则第三阶段 blood wraith 加入会形成双 boss 压力。 不要被飞行目标拖到场地边缘；每次躲完俯冲后回到开阔位置。 俯冲 飞高后会向当前位置俯冲，向前或侧面闪避。 爪击 低空悬停是提示，向侧面闪避。 翼扫 尖叫后准备后闪。 bile wretch 冲锋 尖叫后横向闪避，避免被连续推进。"
  },
  {
    "slug": "falstead-darak",
    "gameId": "no-rest-for-the-wicked",
    "categoryLabelZh": "支线 Boss",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Falstead+Darak",
    "notes": [],
    "lastVerifiedAt": "2026-07-09",
    "name": "Falstead Darak",
    "category": "side_quest",
    "bossType": "人形首领",
    "optional": "是",
    "location": [
      "Mariner's Keep",
      "The Black Trench",
      "Orban Galdes"
    ],
    "quest": [
      "Of Rats and Raiders"
    ],
    "weakness": [
      "火"
    ],
    "strongAgainst": [
      "瘟疫"
    ],
    "resistantTo": [
      "无稳定抗性记录"
    ],
    "immuneTo": [
      "无稳定免疫记录"
    ],
    "rewards": [
      "随机物品",
      "Stag of Embers 概率掉落",
      "Falstead's Fury",
      "Falstead's Barricade",
      "Plague Ichor"
    ],
    "imageUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/falstead-derek-boss-no-rest-for-the-wicked-wiki-guide.jpg",
    "summary": "Risen 首领，支线中会多次交手。招式池不大，但连段有时会追加一两击。",
    "preparation": [
      "火属性有效。",
      "不要在他第一段连击后立刻贪刀，先确认是否有追加动作。"
    ],
    "strategy": [
      "第一次交手整体难度较低；核心是等连段完全结束再反击。",
      "黑沟重战时压力更高，要把每次攻击后的短暂停顿当成主要输出窗口。",
      "他会被固定连段锁住，玩家可以利用这一点绕侧面或背后输出。"
    ],
    "attacks": [
      {
        "name": "武器连击",
        "counter": "等最后一击落空后再进攻，避免被追加击打断。"
      },
      {
        "name": "前压攻击",
        "counter": "横向闪避，保持中距离观察。"
      },
      {
        "name": "重战阶段压制",
        "counter": "保留体力，优先处理生存而不是换血。"
      }
    ],
    "searchText": "falstead darak 人形首领 支线 boss risen 首领，支线中会多次交手。招式池不大，但连段有时会追加一两击。 mariner's keep the black trench orban galdes of rats and raiders 火 随机物品 stag of embers 概率掉落 falstead's fury falstead's barricade plague ichor 第一次交手整体难度较低；核心是等连段完全结束再反击。 黑沟重战时压力更高，要把每次攻击后的短暂停顿当成主要输出窗口。 他会被固定连段锁住，玩家可以利用这一点绕侧面或背后输出。 武器连击 等最后一击落空后再进攻，避免被追加击打断。 前压攻击 横向闪避，保持中距离观察。 重战阶段压制 保留体力，优先处理生存而不是换血。"
  },
  {
    "slug": "echo-knight",
    "gameId": "no-rest-for-the-wicked",
    "categoryLabelZh": "支线 Boss",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/Echo+Knight",
    "notes": [],
    "lastVerifiedAt": "2026-07-09",
    "name": "Echo Knight",
    "category": "side_quest",
    "bossType": "骑乘人形 Boss",
    "optional": "是",
    "location": [
      "Cerim Crucible"
    ],
    "quest": [
      "Spoken and Unspoken"
    ],
    "weakness": [
      "来源未稳定标注"
    ],
    "strongAgainst": [
      "来源未稳定标注"
    ],
    "resistantTo": [
      "来源未稳定标注"
    ],
    "immuneTo": [
      "来源未稳定标注"
    ],
    "rewards": [
      "随机物品",
      "Wind of Death 概率掉落",
      "Plague Ichor"
    ],
    "imageUrl": "https://norestforthewicked.wiki.fextralife.com/file/No-Rest-For-The-Wicked/echo-knight-boss-no-rest-for-the-wicked-wiki-guide.jpg",
    "summary": "试炼中的骑乘 Boss。长枪、冲锋、瘟疫球和蓝焰地面限制会不断压缩空间。",
    "preparation": [
      "保持耐心，优先规避冲锋和地面蓝焰。",
      "使用短硬直武器更容易抓四颗瘟疫球后的窗口。"
    ],
    "strategy": [
      "开局可能直接冲锋或投掷瘟疫球。若投球，向 Boss 两侧闪避，第四颗后通常有短暂输出机会。",
      "冲锋躲过后不要立刻贴近，转身时长枪也可能造成伤害。",
      "蓝色火焰会停留一段时间。可以把火焰引到场地边缘，避免核心区域被封锁。",
      "低血量时攻击频率增加，瘟疫球、践踏和蓝焰可能连续出现，必须减少贪刀。"
    ],
    "attacks": [
      {
        "name": "骑乘冲锋",
        "counter": "横向闪避，等转身动作结束后再靠近。"
      },
      {
        "name": "四连瘟疫球",
        "counter": "向两侧或斜前方闪避，第四颗后反击。"
      },
      {
        "name": "长枪快刺",
        "counter": "第一刺命中后立刻闪第二刺，不要硬直站桩。"
      },
      {
        "name": "连续践踏",
        "counter": "被第一下击倒也不要慌，起身前继续等节奏闪避。"
      },
      {
        "name": "蓝焰地面爆发",
        "counter": "离开脚下爆点，并把残留火焰引到场地边缘。"
      }
    ],
    "searchText": "echo knight 骑乘人形 boss 支线 boss 试炼中的骑乘 boss。长枪、冲锋、瘟疫球和蓝焰地面限制会不断压缩空间。 cerim crucible spoken and unspoken 来源未稳定标注 随机物品 wind of death 概率掉落 plague ichor 开局可能直接冲锋或投掷瘟疫球。若投球，向 boss 两侧闪避，第四颗后通常有短暂输出机会。 冲锋躲过后不要立刻贴近，转身时长枪也可能造成伤害。 蓝色火焰会停留一段时间。可以把火焰引到场地边缘，避免核心区域被封锁。 低血量时攻击频率增加，瘟疫球、践踏和蓝焰可能连续出现，必须减少贪刀。 骑乘冲锋 横向闪避，等转身动作结束后再靠近。 四连瘟疫球 向两侧或斜前方闪避，第四颗后反击。 长枪快刺 第一刺命中后立刻闪第二刺，不要硬直站桩。 连续践踏 被第一下击倒也不要慌，起身前继续等节奏闪避。 蓝焰地面爆发 离开脚下爆点，并把残留火焰引到场地边缘。"
  },
  {
    "slug": "the-unbreakable-egg",
    "gameId": "no-rest-for-the-wicked",
    "categoryLabelZh": "支线 Boss",
    "sourceUrl": "https://norestforthewicked.wiki.fextralife.com/The+Unbreakable+Egg",
    "notes": [
      "来源页未提供稳定 Boss 图片，后续需从其他可靠来源补图。"
    ],
    "lastVerifiedAt": "2026-07-09",
    "name": "The Unbreakable Egg",
    "category": "side_quest",
    "bossType": "人形镰刀 Boss",
    "optional": "是",
    "location": [
      "Marin Woods"
    ],
    "quest": [
      "支线 Boss"
    ],
    "weakness": [
      "来源未稳定标注"
    ],
    "strongAgainst": [
      "来源未稳定标注"
    ],
    "resistantTo": [
      "来源未稳定标注"
    ],
    "immuneTo": [
      "来源未稳定标注"
    ],
    "rewards": [
      "击败后不直接掉落 Boss 物品",
      "后续可开启宝箱：gold、Armor Shard、Crooked Key、Stallion Sentiel Shield、Saltstone、Legs of the Egg、Crown of the Egg、Champion of the Egg、Clutch of the Egg"
    ],
    "imageUrl": "",
    "summary": "羽毛装束、蛋壳头盔、使用镰刀的支线 Boss。招式数量少，但单次伤害高。",
    "preparation": [
      "保持横向移动，避免被远距离镰刀投掷贯穿。",
      "不要在四连挥砍中途反击。"
    ],
    "strategy": [
      "镰刀投掷覆盖距离很长，向侧面跑比后退更稳定。",
      "四连挥砍之间有短暂停顿，等完整四段结束后再输出。",
      "跳砸接旋身挥击需要整体躲开；看到跳到最高点时立刻向远端移动。"
    ],
    "attacks": [
      {
        "name": "双向镰刀投掷",
        "counter": "向侧面跑或闪，不要沿直线后退。"
      },
      {
        "name": "四连挥砍",
        "counter": "观察抬武器节奏，完整结束后再进场。"
      },
      {
        "name": "跳砸接旋身",
        "counter": "跳到高点时远离落点，继续避开后续挥击。"
      }
    ],
    "searchText": "the unbreakable egg 人形镰刀 boss 支线 boss 羽毛装束、蛋壳头盔、使用镰刀的支线 boss。招式数量少，但单次伤害高。 marin woods 支线 boss 来源未稳定标注 击败后不直接掉落 boss 物品 后续可开启宝箱：gold、armor shard、crooked key、stallion sentiel shield、saltstone、legs of the egg、crown of the egg、champion of the egg、clutch of the egg 镰刀投掷覆盖距离很长，向侧面跑比后退更稳定。 四连挥砍之间有短暂停顿，等完整四段结束后再输出。 跳砸接旋身挥击需要整体躲开；看到跳到最高点时立刻向远端移动。 双向镰刀投掷 向侧面跑或闪，不要沿直线后退。 四连挥砍 观察抬武器节奏，完整结束后再进场。 跳砸接旋身 跳到高点时远离落点，继续避开后续挥击。"
  }
] satisfies BossEntry[]
