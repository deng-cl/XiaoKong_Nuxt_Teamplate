import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { md1, md2, md3 } from "vuetify/blueprints";
import { VBtn } from "vuetify/components";

/* 主题类型 - 供其他地方使用有对应提示 */
export type XkThemeKeys = "xkLight" | "xkDark";
export default defineNuxtPlugin(app => {
    const vuetify = createVuetify({
        // 蓝图配置 : https://vuetify.nodejs.cn/en/features/blueprints/
        blueprint: md2,

        // 主题
        theme: {
            defaultTheme: "xkLight",
            /**
             * 自动生成对应颜色的 "变暗体" 与 "变亮体"
             * - colors: [...colorsKey]
             * - lighten: number → 生成变亮体数量 → using: `text-primary-[1,2,...] ...`
             * - darken: number → 生成变暗体数量
             */
            variations: {
                colors: ["primary", "secondary"],
                lighten: 1,
                darken: 2
            },
            /* 主题配置 */
            themes: {
                /* 自定义亮色主题 */
                xkLight: {
                    colors: {
                        /* 主色 */
                        primary: "#2979FF",
                        /* 次色 */
                        secondary: "#448AFF",
                        /* 强调色 */
                        accent: "#2962FF",
                        /* 信息色 */
                        info: "#82B1FF",
                        /* 错误色 */
                        error: "#EF5350",
                        /* 成功色 */
                        success: "#66BB6A",
                        /* 警告色 */
                        warning: "#FFA726"
                    }
                },
                /* 自定义暗色主题 */
                xkDark: {
                    colors: {
                        /* 主色 */
                        primary: "#D500F9",
                        /* 次色 */
                        secondary: "#E040FB",
                        /* 强调色 */
                        accent: "#AA00FF",
                        /* 信息色 */
                        info: "#EA80FC",
                        /* 错误色 */
                        error: "#EF5350",
                        /* 成功色 */
                        success: "#66BB6A",
                        /* 警告色 */
                        warning: "#FFA726"
                    }
                }
                // ...
            }
        },

        // 别名（别名映射）
        aliases: {
            VBtnPrimary: VBtn
        },

        // 组件默认值（配置默认组件风格 - 也可配置嵌套默认值）: https://vuetify.nodejs.cn/en/features/aliasing/#section-5d4c59579ed88ba4503c
        defaults: {
            // 全局配置 : https://vuetify.nodejs.cn/en/features/global-configuration/
            global: {},

            // ------- 配置组件默认值
            VBtn: {
                class: ["text-none", "text-white"] // !!! Vuetify VBtn 默认会将英文自动全部转换成大写，配置 `text-none` 类名样式禁止转换成大写 → 原因: VBtn 组件设置了 'text-transform: uppercase' CSS 属性，英文字符转换成大写
            },
            VBtnPrimary: {
                class: ["bg-primary", "text-white"]
            }
        },

        // Vue 3无法自动检测是否使用了SSR，因此nuxt、gridsome和其他SSR框架必须手动将SSR选项设置为true才能正确呈现应用程序。
        ssr: true
    });

    app.vueApp.use(vuetify);
});
