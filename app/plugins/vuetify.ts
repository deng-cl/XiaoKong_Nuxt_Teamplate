import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { md1, md2, md3 } from "vuetify/blueprints";
import { VBtn } from "vuetify/components";

export default defineNuxtPlugin(app => {
    const vuetify = createVuetify({
        // 蓝图配置 : https://vuetify.nodejs.cn/en/features/blueprints/
        blueprint: md2,

        // 别名（别名映射）
        aliases: {
            VBtnPrimary: VBtn
        },

        // 组件默认值（配置默认组件风格 - 也可配置嵌套默认值）: https://vuetify.nodejs.cn/en/features/aliasing/#section-5d4c59579ed88ba4503c
        defaults: {
            // 全局配置 : https://vuetify.nodejs.cn/en/features/global-configuration/
            global: {},

            // ------- 配置组件默认值
            VBtnPrimary: {
                class: ["bg-primary"]
            }
        },

        // Vue 3无法自动检测是否使用了SSR，因此nuxt、gridsome和其他SSR框架必须手动将SSR选项设置为true才能正确呈现应用程序。
        ssr: true
    });

    app.vueApp.use(vuetify);
});
