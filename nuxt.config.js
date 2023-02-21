 module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '仿掘金网站',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '基于NUXTJS及NodeJS开发' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '~/static/juejin.png' },
      {
        rel: "stylesheet",
        href: "//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/atom-one-light.min.css",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 全局引入样式
    // 针对elementui引入
    'element-ui/lib/theme-chalk/index.css',
    // 布局样式
    'element-ui/lib/theme-chalk/display.css',
    // 项目自定义全局样式
    '@/assets/css/scss/global.scss',
    // 系统重置样式
    '@/assets/css/main/reset.css',
    // 页面样式
    '@/assets/css/main/page-transition.css',
    // 黑白主题样式
    '@/assets/css/main/topic.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/element-ui.js',
    "~/plugins/axios.js",
    "~/plugins/request.js",
    "~/plugins/api.js",
    "~/plugins/vue-global.js",
    "~/plugins/i18n.js"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/eslint-module",
    "@nuxt/postcss8",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    "@nuxtjs/style-resources",
    "cookie-universal-nuxt",
  ],

  axios: {
  },

  serverMiddleware: [],

  styleResources: {
      scss: ["~/assets/css/scss/variable.scss"],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
     ** You can extend webpack config here
     */
    babel: {
      plugins: [
        [
          "component",
          {
            libraryName: "element-ui",
            styleLibraryName: "theme-chalk",
          },
        ],
      ],
    },
    extend(config, ctx) {},
  },

  server: {
    port: 3000,
    host: "127.0.0.1",
  },

  env: {
    baseUrl: "http://127.0.0.1:3000",
  },

  router: {
    middleware: ["i18n"],
    extendRoutes(routes, resolve) {
      routes.push({
        path: "/",
      });
    },
  },
  telemetry: false,

}

