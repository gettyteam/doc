import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, esNavbar } from './navbar'
import { enCollections } from './notes/en'
import { esCollections } from './notes/es'

export default defineThemeConfig({
  logo: '.vuepress/public/getty-fav.png',

  appearance: true,

  social: [
    { icon: 'github', link: 'https://github.com/gettyteam/' },
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
        description: 'Platform of tools for live streaming and channels on Odysee. This includes overlays, tip alerts, chat, giveaway system, creator analytics and more. ',
        // circle: true,
        // location: '',
        // organization: '',
      },

  navbar: enNavbar,
  collections: enCollections,

      footer: {
        message: 'Copyright © 2026 getty (λ) <a target="_blank" href="https://github.com/gettyteam/">Lambda Studio</a> - Email: hello@getty.sh',
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
        description: 'Plataforma de herramientas para transmisiones en vivo y canales en Odysee. Esto incluye overlays, alertas de propinas, chat, sistema de sorteos, analíticas de creador y más.',
      },

  navbar: esNavbar,
  collections: esCollections,

      footer: {
        message: 'Copyright © 2026 getty (λ) <a target="_blank" href="https://github.com/gettyteam/">Lambda Studio</a> - Email: hello@getty.sh',
        copyright: '',
      },
    },
  },
})
