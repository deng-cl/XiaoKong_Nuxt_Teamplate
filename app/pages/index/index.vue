<script setup lang="ts">
    import { useDisplay } from "vuetify";

    const { mobile } = useDisplay();
    // -- 样式设置方法
    const setClass = (_mobile: string, _desktop?: string) => {
        return mobile.value ? _mobile : _desktop;
    };
</script>

<template>
    <div>
        <h1 :class="setClass('text-red', 'text-green')">Index Page</h1>
        <v-btn color="red">Test</v-btn>
        <v-btn-primary>Test primary</v-btn-primary>
    </div>
</template>
