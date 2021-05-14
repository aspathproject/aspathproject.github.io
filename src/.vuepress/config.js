const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'ASPATH Project',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    [
        'script',
        {
            async: true,
            src: 'https://www.googletagmanager.com/gtag/js?id=G-5BV2X8V3P4',
        },
    ],
    [
        'script',
        {},
        [
            "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-5BV2X8V3P4');",
        ],
    ],
  ],

  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'aspathproject/aspathproject.github.io',
    editLinks: true,
    docsDir: 'src',
    docsBranch: 'main',
    editLinkText: 'Contribute to this page on Github',
    lastUpdated: true,
    displayAllHeaders: true,
    sidebarDepth: 3,
    nav: [
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Changelog',
        link: '/changelog/'
      },
      {
        text: 'ASPATH on Github',
        link: 'https://github.com/aspathproject'
      },
      {
        text: 'Newsletter',
        link: 'https://www.getrevue.co/profile/aspath'
      },
      {
        text: 'LACNIC 35',
        link: '/lacnic35-presentation/',
        target:'_blank'
      }
    ],
    sidebar: [
      {
        title: 'Guide',
        path: '/guide/',
        children: [
          '/guide/',
          '/guide/getting-started',
          '/guide/directory-structure',
          '/guide/known-issues'
        ]
      },
      {
        title: 'Contributors Wanted',
        path: '/contributors-wanted'
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    [
      '@vuepress/google-analytics',
      {
         'ga': 'G-5BV2X8V3P4'
      }
    ],  
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>'
    }]
  ],

}
