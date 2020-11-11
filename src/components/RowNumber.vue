<template>
    <div>
        <Slider v-model:value="sliderVal" />
    </div>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue";
    import Slider from "./RowNumberSlider.vue";

    export default defineComponent({
        components: { Slider },
        setup() {
            const sliderVal = ref(40);
            return {
                sliderVal,
            }
        },
    });
</script>

<style lang="scss" scoped>
</style>
