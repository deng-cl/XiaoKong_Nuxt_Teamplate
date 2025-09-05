import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import postcssPxToVwPlugin from "postcss-px-to-viewport-8-plugin";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },

    // modules config
    modules: [
        "@unocss/nuxt",
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({ autoImport: true }))
            })
        },
    ],

    // build config
    build: {
        transpile: ['vuetify'],
    },

    // vite config
    vite: {
        css: {
            postcss: {
                plugins: [
                    postcssPxToVwPlugin({
                        unitToConvert: "px",            // 要转化的单位
                        viewportWidth: 750,             // UI设计稿的宽度
                        unitPrecision: 6,               // 转换后的精度，即小数点位数
                        propList: ["*"],                // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
                        viewportUnit: "vw",             // 指定需要转换成的视窗单位，默认vw
                        fontViewportUnit: "vw",         // 指定字体需要转换成的视窗单位，默认vw
                        selectorBlackList: ["pc-"],     // 指定不转换为视窗单位的类名,例如van-（vantUI组件），
                        minPixelValue: 1,               // 默认值1，小于或等于1px则不进行转换
                        mediaQuery: true,               // 是否在媒体查询的css代码中也进行转换，默认false
                        replace: true,                  // 是否转换后直接更换属性值
                        exclude: [/node_modules/],      // 设置忽略文件，用正则做目录名匹配，最好不要排除node_modules 文件，排除后在项目中会发现字体不能跟随页面放大
                        landscape: false                // 是否处理横屏情况
                    })
                ]
            }
        },

        vue: {
            template: {
                transformAssetUrls,
            },
        },
    }
});
