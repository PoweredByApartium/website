import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Apartium Development",
  description: "Bringing scalable Java game development to the next level",
  lastUpdated: true,
  head: [['link', { rel: 'icon', href: '/img/index-logo.png' }],],

  themeConfig: {
    logo: '/img/index-logo.png',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Products', link: '/products' },
      { text: 'Blog', link: '/blog' },
    ],

    notFound: '/404',

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PoweredByApartium/' }
    ],

    footer: {
      copyright: 'Copyright © 2021-present Apartium development'
    }
  }
})
