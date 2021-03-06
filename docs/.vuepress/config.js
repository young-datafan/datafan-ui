module.exports = {
  theme: '',
  title: 'DataFan UI',
  description: '所有的伟大，都源于一个勇敢的开始',
  logo: '/logo.png',
  base: '/',
  port: '8080',
  themeConfig: {
    // 配置顶部导航栏
    nav: require('./nav'),
    // 配置侧边栏部分
    sidebar: require('./sidebar'),
    sidebarDepth: 2,
  },
  markdown: {
    extendMarkdown: (md) => {
      md.use(require('markdown-it-vuese'), { /* options */ })
    }
  },
  chainWebpack (config) {
    config.resolve.alias.set('core-js/library/fn', 'core-js/features');
  },
  head: [],
  // 配置插件
  plugins: ['demo-container'], 
  // less
  less: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
  // 文档库语言设置
  locales: {
    '/': {
      lang: 'zh-CN',
    }
  },
  markdown: {}
}
