import { defineUserConfig } from 'vuepress'
import themeConfig from './themeConfig'

const BASE = '/docs/'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'J1angyue Docs',
  base: BASE,
  head: [
    ['link', { rel: 'icon', href: BASE + 'logo.png' }]
  ],
  theme: themeConfig,
})
