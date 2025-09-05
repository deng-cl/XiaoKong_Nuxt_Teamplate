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
            themes: {
                /* 自定义亮色主题 */
                xkLight: {
                    colors: {
                        /* 主色 */
                        primary: "#62d2a2",
                        /* 次色 */
                        secondary: "#9df3c4",
                        /* 强调色 */
                        accent: "#1fab89",
                        /* 信息色 */
                        info: "#d7fbe8",
                        /* 错误色 */
                        error: "#FF5252",
                        /* 成功色 */
                        success: "#4CAF50",
                        /* 警告色 */
                        warning: "#FFC107"
                    }
                },
                /* 自定义暗色主题 */
                xkDark: {
                    colors: {
                        /* 主色 */
                        primary: "#5e63b6",
                        /* 次色 */
                        secondary: "#a393eb",
                        /* 强调色 */
                        accent: "#27296d",
                        /* 信息色 */
                        info: "#f5c7f7",
                        /* 错误色 */
                        error: "#FF5252",
                        /* 成功色 */
                        success: "#4CAF50",
                        /* 警告色 */
                        warning: "#FFC107"
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
