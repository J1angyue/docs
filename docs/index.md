---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "J1angyue 的随笔"

  tagline: 凡属金子不一定发光；并不是所有流浪的人都迷失；老骥伏枥志在千里；霜冻无法触及深根。 —— J. R. R.托尔金

  actions:
    - theme: brand
      text: 随便看看
      link: /pdf-viewer/

    - theme: alt
      text: GitHub
      link: https://github.com/J1angyue

features:
  - title: PDF Viewer
    link: /pdf-viewer/
    icon:
      src: pdf.svg
    details: 会在自己的服务器上搭建一套在线 PDF 预览服务

  - title: Jenkins
    link: /jenkins/
    icon:
      src: jenkins.svg
    details: 学会搭建、配置、使用一个自动化 CI/CD 服务

  - title: Sentry
    link: /sentry/
    icon:
      src: sentry.svg
    details: 前端救命稻草，拒绝后端同学甩锅

  - title: Vite && Vue
    link: /vite-vue/
    icon:
      src: vitejs.svg
    details: 一个字：快；两个字：省心

  - title: Nginx
    link: /nginx/
    icon:
      src: nginx.svg
    details: 神奇、好用，性能又高的服务器软件。学不好服务器的前端不是好厨子
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
}
</style>
