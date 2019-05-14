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
      { text: 'Vue', link: '/vue/' }
    ],
    sidebar: {
      '/blogs/': [
        '/blogs/meta',
        '/blogs/code-clean',
        '/blogs/flex-layout',
        '/blogs/save-base64',
        '/blogs/proxy',
        '/blogs/property-attribute'
      ],
      '/vue/': [
        '/vue/mount-flow'
      ]
    },
    activeHeaderLinks: false
  }
}
