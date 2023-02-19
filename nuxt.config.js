 export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '仿掘金网站',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '基于NUXTJS及NodeJS开发' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/juejin.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 全局引入样式
    // 针对elementui引入
    'element-ui/lib/theme-chalk/index.css',
    // 自定义主题样式
    '@/assets/theme/index.css',
    // 布局样式
    'element-ui/lib/theme-chalk/display.css',
    // 项目自定义全局样式
    '@/assets/css/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/element-ui.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    proxy: true,//开启代理转发
    prefix: '/api'//请求接口添加前缀
  },

  proxy: {
    '/api': {
      target: 'https://mock.mengxuegu.com/mock/63f1cfe1c5a76a117cab10c9',
      pathRewrite: {'^/api': ''}
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
