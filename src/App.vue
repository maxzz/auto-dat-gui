<template>
    <DatGui />
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import DatGui from "./components/DatGui.vue";

    export default defineComponent({
        name: "App",
        components: {
            DatGui,
        },
    });
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
