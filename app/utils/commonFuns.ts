import { useDisplay } from "vuetify";
import { useTheme } from "vuetify/lib/composables/theme.mjs";
import type { XkThemeKeys } from "~/plugins/vuetify";

/**
 * 返回 class 设置适配器函数 → 用于判断当前是否为 mobile 平台类型分别设置不同的类名
 * @returns classAdaptor
 * @using
 * - 1. const classAdaptor = useSetClassAdaptor()
 * - 2. classAdaptor(mobile-classnames, desktop-classnames)
 */
export const useSetClassAdaptor = () => {
    const { mobile } = useDisplay();
    return (_mobile: string, _desktop: string) => (mobile.value ? _mobile : _desktop);
};

/**
 * 返回 theme 主题修改函数与当前主题名称 → 用于切换主题
 * @returns `{ themeName, changeTheme }`
 * @using
 * - 1. const { themeName, changeTheme } = useChangeTheme()
 * - 2. changeTheme(themeKey: XkThemeKeys)
 */
export const useChangeTheme = () => {
    const theme = useTheme();
    const themeName = computed<XkThemeKeys>(() => theme.name.value as XkThemeKeys);
    return {
        themeName,
        changeTheme: (themeKey: XkThemeKeys) => theme.change(themeKey)
    };
};
