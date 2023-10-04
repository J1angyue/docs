import { defineUserConfig } from 'vuepress'
import themeConfig from './themeConfig'

const BASE = '/docs/'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '江月的文档',
  base: BASE,
  head: [
    ['link', { rel: 'icon', href: BASE + 'logo.png' }]
  ],
  theme: themeConfig,
})
