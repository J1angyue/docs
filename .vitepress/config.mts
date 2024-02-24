import { defineConfig } from "vitepress";

const BASE = "/docs/";

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "J1angyue 的随笔",
  srcDir: "docs",
  base: BASE,
  head: [["link", { rel: "icon", type: "image/png", href: "logo.png" }]],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: "logo.png",

    nav: [{ text: "首页", link: "/" }],

    sidebar: [
      {
        text: "PDF 在线预览服务",
        link: "/pdf-viewer/",
      },
      {
        text: "Jenkins 与 CD",
        link: "/jenkins/",
      },
      {
        text: "Sentry 监控平台",
        link: "/sentry/",
      },
      {
        text: "Vite && Vue",
        link: "/vite-vue/",
      },
      {
        text: "Nginx",
        link: "/nginx/",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/J1angyue" }],

    footer: { message: "做自己的自己，没有什么一定和不一定" },
  },
});
