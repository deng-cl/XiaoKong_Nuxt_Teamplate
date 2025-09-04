import type { Preset } from "unocss";
import { defineConfig, presetMini, presetTypography, presetAttributify, transformerDirectives, transformerVariantGroup } from "unocss";

export default defineConfig({
    // -- 主题配置：在动态 rules、variants、shortcuts 的参数中都可以拿到该主题对象
    theme: {
        colors: {
            // -- 主题颜色配置
            veryCool: "#0000ff", // class="text-very-cool"
            brand: {
                primary: "hsl(var(--hue, 217) 78% 51%)", //class="bg-brand-primary"
                DEFAULT: "#942192" //class="bg-brand"
            }
        }
    },

    presets: [presetMini(), presetAttributify(), presetTypography(), xkPreset()]
});

// -- 配置预设
function xkPreset() {
    const HPreset: Preset = {
        name: "H_PRESET",

        // -- 预设类配置
        shortcuts: [
            /* 居中 */
            ["flex-c", "flex items-center justify-center"],
            /* x 居中 */
            ["flex-x-c", "flex justify-center"],
            /* y 居中 */
            ["flex-y-c", "flex items-center"],
            /* x 两端对齐 + y 居中 */
            ["flex-bt-c", "flex justify-between items-center"],
            /* x 均匀排列 + y 居中 */
            ["flex-ar-c", "flex justify-around items-center"],
            /* 换行 */
            ["flex-nowrap", "flex-wrap: wrap"],
            /* 不换行 */
            ["flex-nowrap", "flex-wrap: nowrap"],
            /* 宽高相同 */
            [/^wh-(.+)$/, ([, c]) => `w-${c}  h-${c}`],
            [/^pc-wh-(.+)$/, ([, c]) => `w-${c}  h-${c}`],
            [
                /^pc-h-(.*)$/,
                match => {
                    return `h-${match[1]}`;
                }
            ],
            /* ↓ 定义 pc 前缀映射预设（在 postcss-px-vw-8-plugin 插件配置 pc 前缀不进行 vw 转换） ↓ */
            [
                /^pc-line-height-(.*)$/,
                match => {
                    return `line-height-${match[1]}`;
                }
            ],
            [
                /^pc-w-(.*)$/,
                match => {
                    return `w-${match[1]}`;
                }
            ],
            [
                /^pc-max-w-(.*)$/,
                match => {
                    return `max-w-${match[1]}`;
                }
            ],
            [
                /^pc-max-h-(.*)$/,
                match => {
                    return `max-h-${match[1]}`;
                }
            ],
            [
                /^pc-min-w-(.*)$/,
                match => {
                    return `min-w-${match[1]}`;
                }
            ],
            [
                /^pc-min-h-(.*)$/,
                match => {
                    return `min-h-${match[1]}`;
                }
            ],

            // -- text
            [
                /^pc-text-(.*)$/,
                match => {
                    return `text-${match[1]}`;
                }
            ],
            [
                /^pc-left-(.*)$/,
                match => {
                    return `left-${match[1]}`;
                }
            ],
            [
                /^pc-right-(.*)$/,
                match => {
                    return `right-${match[1]}`;
                }
            ],
            [
                /^pc-top-(.*)$/,
                match => {
                    return `top-${match[1]}`;
                }
            ],
            [
                /^pc-rounded-(.*)$/,
                match => {
                    return `rounded-${match[1]}`;
                }
            ],
            [
                /^pc-gap-(.*)$/,
                match => {
                    return `gap-${match[1]}`;
                }
            ],
            [
                /^pc-backdrop-blur-(.*)$/,
                match => {
                    return `backdrop-blur-${match[1]}`;
                }
            ],
            [
                /^pc-b-(.*)$/,
                match => {
                    return `b-${match[1]}`;
                }
            ],
            // -- margin
            [
                /^pc-m-(.*)$/,
                match => {
                    return `m-${match[1]}`;
                }
            ],
            [
                /^pc-mt-(.*)$/,
                match => {
                    return `mt-${match[1]}`;
                }
            ],
            [
                /^pc-mb-(.*)$/,
                match => {
                    return `mb-${match[1]}`;
                }
            ],
            [
                /^pc-ml-(.*)$/,
                match => {
                    return `ml-${match[1]}`;
                }
            ],
            [
                /^pc-mr-(.*)$/,
                match => {
                    return `mr-${match[1]}`;
                }
            ],
            [
                /^pc-my-(.*)$/,
                match => {
                    return `my-${match[1]}`;
                }
            ],
            // -- padding
            [
                /^pc-p-(.*)$/,
                match => {
                    return `p-${match[1]}`;
                }
            ],
            [
                /^pc-py-(.*)$/,
                match => {
                    return `py-${match[1]}`;
                }
            ],
            [
                /^pc-px-(.*)$/,
                match => {
                    return `px-${match[1]}`;
                }
            ],
            [
                /^pc-pt-(.*)$/,
                match => {
                    return `pt-${match[1]}`;
                }
            ],
            [
                /^pc-pb-(.*)$/,
                match => {
                    return `pb-${match[1]}`;
                }
            ]
            /* ↑ 定义 pc 前缀映射预设（在 postcss-px-vw-8-plugin 插件配置 pc 前缀不进行 vw 转换） ↑ */
        ],

        // -- 规则配置
        rules: [
            // -- 文字行数显示
            [
                /^clamp-(\d+)$/,
                ([, d]) => ({
                    display: "-webkit-box",
                    "-webkit-box-orient": " vertical",
                    "-webkit-line-clamp": d,
                    overflow: "hidden"
                })
            ]
        ],

        /* -- 转换器配置
         * transformerVariantGroup:变体转换器 → `<div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>` TO `<div class="hover:bg-gray-400 hover:font-medium font-light font-mono"/>`
         * transformerDirectives:指令转换器 → 具体看文档 https://unocss.npmjs.net.cn/transformers/directives - !!!
         */
        transformers: [transformerDirectives(), transformerVariantGroup()]
    };

    return HPreset;
}
