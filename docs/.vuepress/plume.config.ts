import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, esNavbar } from './navbar'
import { enCollections } from './notes/en'
import { esCollections } from './notes/es'

export default defineThemeConfig({
  logo: '.vuepress/public/getty-fav.png',

  appearance: true,

  social: [
    { icon: 'github', link: 'https://github.com/gettyteam/getty' },
    { icon: 'twitter', link: 'https://x.com/getty_sh' },
  ],

  // copyright: true,

  // prevPage: true,
  // nextPage: true,
  // createTime: true,

  // transition: {
  //   page: true,
  //   postList: true,
  //   appearance: 'fade',
  // },

  locales: {
    '/': {
      profile: {
        avatar: '.vuepress/public/getty-fav.png',
        name: 'getty',
        description: 'Platform with tools for live streaming and Odysee creators. Includes overlays, tip alerts, chat, a giveaway system, creator analytics, and much more.',
        // circle: true,
        // location: '',
        // organization: '',
      },

  navbar: enNavbar,
  collections: enCollections,

      footer: {
        message: 'Copyright © λ 2025 <a target="_blank" href="https://github.com/gettyteam/getty">getty</a> - With love for Odysee ❤️ - Email: hello@getty.sh',
        copyright: '',
      },

      // bulletin: {
      //   layout: 'top-right',
      //   contentType: 'markdown',
      //   title: '',
      //   content: '',
      // },
    },
    '/es/': {
      profile: {
        avatar: '.vuepress/public/getty-fav.png',
        name: 'getty',
        description: 'La plataforma con herramientas para transmisiones en vivo y creadores en Odysee. Incluye overlays, alertas de propinas, chat, sistema de sorteos, analíticas de creador y mucho más.',
      },

  navbar: esNavbar,
  collections: esCollections,

      footer: {
        message: 'Copyright © λ 2025 <a target="_blank" href="https://github.com/gettyteam/getty">getty</a> - Con cariño para Odysee ❤️ - Email: hello@getty.sh',
        copyright: '',
      },
    },
  },
})
