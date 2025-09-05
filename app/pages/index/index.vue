<script setup lang="ts">
    import { useTheme, type ThemeInstance } from "vuetify";
    import type { XkThemeKeys } from "~/plugins/vuetify";

    const classAdaptor = useSetClassAdaptor();
    const { changeTheme, themeName } = useChangeTheme();
</script>
<template>
    <div>
        <h1 :class="classAdaptor('text-red', 'text-green')">Index Page</h1>
        <v-btn color="red">Test</v-btn>
        <v-btn-primary>Test primary</v-btn-primary>
        <v-btn @click="() => (themeName === 'xkLight' ? changeTheme('xkDark') : changeTheme('xkLight'))">Theme Toggle</v-btn>
    </div>
</template>
