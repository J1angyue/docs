import { defaultTheme } from "vuepress"

export default defaultTheme({
  logo: '/logo.png',
  navbar: [
    { text: "首页", link: "/" },
  ],
  sidebar: [
    {
      text: 'PDF 在线预览服务',
      link: '/pdf-viewer/'
    },
    {
      text: 'Sentry 监控平台',
      link: '/sentry/'
    },
    {
      text: 'Jenkins 与 CD',
      link: '/jenkins/'
    },
    {
      text: '使用说明文档',
      link: '/online-docs/'
    }
  ]
})