import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Apartium Development",
  description: "Bringing scalable Java game development to the next level",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Products', link: '/products' },
      { text: 'Blog', link: '/blog' }

    ],

    sidebar: [
      {
        text: 'Products',
        items: [
          { text: 'Cocoa beans', link: '/products/cocoa-beans' },
          { text: 'Core', link: '/products/core' }
        ]
      }
    ],

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
