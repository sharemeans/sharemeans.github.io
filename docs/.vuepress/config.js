module.exports = {
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
      { text: 'Blog', link: '/blogs/' }
    ],
    sidebar: {
      '/blogs/': [
        '/blogs/blog-history',
        '/blogs/meta',
        '/blogs/code-clean',
        '/blogs/flex-layout',
        '/blogs/save-base64',
        '/blogs/proxy',
        '/blogs/property-attribute'
      ]
    },
    activeHeaderLinks: false
  }
}
