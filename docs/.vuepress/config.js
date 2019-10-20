module.exports = {
  base: '/',
  title: 'Sharemeans',
  description: 'share everything we knowns',
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //     }
  //   }
  // },
  themeConfig: {
    nav: [
      { text: 'Blog', link: '/blogs/' },
      { text: 'Vue', link: '/vue/' },
      { text: 'Think', link: '/think/' }
    ],
    sidebar: {
      '/blogs/': [
        '/blogs/meta',
        '/blogs/code-clean',
        '/blogs/flex-layout',
        '/blogs/save-base64',
        '/blogs/proxy',
        '/blogs/property-attribute',
        '/blogs/fiddler-debug-online',
        '/blogs/linux-command',
        '/blogs/print',
        '/blogs/define-property',
        // '/blogs/proxy-reflect',
        '/blogs/https',
        '/blogs/in-operator',
        '/blogs/charles-rewrite-header'
      ],
      '/vue/': [
        '/vue/mount-flow',
        '/vue/vue-runtime-compile',
        '/vue/vue-error'
      ],
      '/think/': [
        '/think/manage-time'
      ]
    },
    activeHeaderLinks: false
  }
}
