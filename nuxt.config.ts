// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // css: ['~/assets/styles/index.scss'],
  // Nuxt3的配置只能支持普通class的引入，类似于scss的混入、变量需要装一下sass的依赖，然后再写入vite的配置即可生效
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/index.scss";',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      themeVersion: process.env.NUXT_PUBLIC_THEME_VERSION,
    },
  },
  postcss: {
    plugins: {
      'postcss-px-to-viewport-8-plugin': {
        unitToConvert: 'px', // 要转化的单位
        viewportWidth: 375, // 设计稿宽度
        unitPrecision: 6, // 转换后的精度，即小数点位数
        propList: ['*'], // 指定转换的css属性的单位，“代表全部css属性的单位都进行转换
        viewportUnit: 'vw', // 指定不转换为视窗单位的类名，例如van-(vantUI组件）
        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
        replace: true, // 是否转换后直接更换属性值
        exclude: [/node_modules/], // 设置忽略文件,用正则做目录名匹配，最好不要排除node_modules，排除后再项目中发现字体不能跟随页面放大
        landscape: false, // 是否处理横屏情况
      },
    },
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore'],
      },
    ],
  ],
  imports: {
    dirs: ['./stores', './types', './enums'],
  },
});
