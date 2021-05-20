module.exports = {
  lang: 'en-US',
  title: 'ASPATH Project',
  description: 'ASPATH project website',
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
  extendsMarkdown: (md) => {
    md.use(require('markdown-it-task-lists'))
  },
  themeConfig: {
    docsRepo: 'aspathproject/aspathproject.github.io',
    editLinks: true,
    docsDir: 'src',
    docsBranch: 'main',
    editLinkText: 'Contribute to this page on Github',
    lastUpdated: true,
    displayAllHeaders: true,
    sidebarDepth: 3,
    logo: null,
    navbar: [
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
        text: 'Guide',
        link: '/guide/',
        isGroup: true,
        children: [
          '/guide/getting-started.md',
          '/guide/directory-structure.md',
          '/guide/known-issues.md'
        ]
      },
      {
        text: 'Contributors Wanted',
        link: '/contributors-wanted.md'
      }
    ]
  }
}
