import { defineUserConfig } from 'vuepress'
import themeConfig from './themeConfig'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'J1angyue Docs',
  base: '/docs.github.io/',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig,
})
