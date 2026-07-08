import type { GuideImage, GuideSource } from '../types'

export const sourceRegistry: GuideSource[] = [
  {
    title: 'No Rest for the Wicked 官网',
    url: 'https://www.norestforthewicked.com/',
    type: 'official',
    language: 'en',
  },
  {
    title: 'Steam 商店页面',
    url: 'https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/',
    type: 'official',
    language: 'en',
  },
  {
    title: 'Fextralife Wiki 总览',
    url: 'https://norestforthewicked.wiki.fextralife.com/No%2BRest%2BFor%2BThe%2BWicked%2BWiki',
    type: 'wiki',
    language: 'en',
  },
  {
    title: 'Fextralife Weapons',
    url: 'https://norestforthewicked.wiki.fextralife.com/Weapons',
    type: 'wiki',
    language: 'en',
  },
  {
    title: 'Fextralife Bosses',
    url: 'https://norestforthewicked.wiki.fextralife.com/Bosses',
    type: 'wiki',
    language: 'en',
  },
  {
    title: 'Fextralife Guides & Walkthroughs',
    url: 'https://norestforthewicked.wiki.fextralife.com/Guides%2B%26%2BWalkthroughs',
    type: 'guide',
    language: 'en',
  },
  {
    title: 'wiki.gg Equipment',
    url: 'https://nrftw.wiki.gg/wiki/Equipment',
    type: 'wiki',
    language: 'en',
  },
  {
    title: 'Moon Studios The Breach 官方展示',
    url: 'https://www.youtube.com/watch?v=CzAtYaSYZms',
    type: 'official',
    language: 'en',
  },
  {
    title: 'The Breach 官方预告',
    url: 'https://www.youtube.com/watch?v=mpoMEYnvA5Q',
    type: 'official',
    language: 'en',
  },
  {
    title: 'Steam 社区截图',
    url: 'https://steamcommunity.com/app/1371980/screenshots/',
    type: 'community',
    language: 'en',
  },
]

export const sourceShortcuts: Record<string, GuideSource> = {
  official: sourceRegistry[0],
  steam: sourceRegistry[1],
  fextralife: sourceRegistry[2],
  'fextralife-weapons': sourceRegistry[3],
  'fextralife-bosses': sourceRegistry[4],
  'fextralife-guides': sourceRegistry[5],
  'wikigg-equipment': sourceRegistry[6],
  'breach-showcase': sourceRegistry[7],
  'breach-trailer': sourceRegistry[8],
  'steam-community': sourceRegistry[9],
}

export const officialImages: GuideImage[] = [
  {
    url: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1371980/331de7e745f43867f0a220339153ac6019822ea4/header.jpg?t=1780442295',
    alt: 'No Rest for the Wicked Steam header',
    caption: '官方 Steam 商店头图',
    sourceUrl: 'https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/',
    licenseNote: 'Steam 商店公开媒体素材，保留来源链接。',
  },
  {
    url: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1371980/079327abaf4866604f9f77200ded37da18d7089e/ss_079327abaf4866604f9f77200ded37da18d7089e.1920x1080.jpg?t=1780442295',
    alt: 'No Rest for the Wicked combat screenshot',
    caption: '战斗场景参考图',
    sourceUrl: 'https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/',
    licenseNote: 'Steam 商店公开截图，保留来源链接。',
  },
  {
    url: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1371980/56066f44f29e8b042c482e0b0680bc101bf1ecd5/ss_56066f44f29e8b042c482e0b0680bc101bf1ecd5.1920x1080.jpg?t=1780442295',
    alt: 'No Rest for the Wicked exploration screenshot',
    caption: '区域探索参考图',
    sourceUrl: 'https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/',
    licenseNote: 'Steam 商店公开截图，保留来源链接。',
  },
  {
    url: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1371980/1163c9191d2261d845aa96cbc011ed6490182ae8/ss_1163c9191d2261d845aa96cbc011ed6490182ae8.1920x1080.jpg?t=1780442295',
    alt: 'No Rest for the Wicked town screenshot',
    caption: '圣城与城镇功能参考图',
    sourceUrl: 'https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/',
    licenseNote: 'Steam 商店公开截图，保留来源链接。',
  },
  {
    url: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1371980/ss_01a87d9ec6cef10244eb5dd8d3f55047060da954.1920x1080.jpg?t=1780442295',
    alt: 'No Rest for the Wicked boss arena screenshot',
    caption: 'Boss 战场景参考图',
    sourceUrl: 'https://store.steampowered.com/app/1371980/No_Rest_for_the_Wicked/',
    licenseNote: 'Steam 商店公开截图，保留来源链接。',
  },
]

export const imageShortcuts: Record<string, GuideImage> = {
  'steam-hero': officialImages[0],
  'steam-combat': officialImages[1],
  'steam-explore': officialImages[2],
  'steam-town': officialImages[3],
  'steam-boss': officialImages[4],
}
