import { defineUserConfig } from 'vuepress'
import themeConfig from './themeConfig'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'J1angyue Docs',
  base: '/docs/',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  theme: themeConfig,
})
