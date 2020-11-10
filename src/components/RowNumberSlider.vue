<template>
    <span
        ref="slider"
        class="slider"
        :style="{width: `${width}px`,'background-size': `${bgWidth}% 100%`}"
        @mousedown="handleMouseDown"
    />
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import toNumber from "lodash.tonumber";
    import clamp from "lodash.clamp";

    // function clamp(number: number | string, lower: number | string, upper: number | string): number {
    //     number = +number;
    //     lower = +lower;
    //     upper = +upper;
    //     lower = lower === lower ? lower : 0;
    //     upper = upper === upper ? upper : 0;
    //     if (number === number) {
    //         number = number <= upper ? number : upper;
    //         number = number >= lower ? number : lower;
    //     }
    //     return number;
    // }

    export default defineComponent({
        name: 'Slider',
        props: {
            value: [Number, String],
            min: Number,
            max: Number,
            width: Number,
        },
        data() {
            return {
                currentValue: toNumber(this.value) || 0,
            };
        },
        setup() {
            return {

            };
        },
        watch: {
            value(val) {
                this.currentValue = toNumber(val)
            },
        },
        computed: {
            bgWidth(): number {
                return clamp((this.currentValue - this.min) * 100 / (this.max - this.min), 0, 100);
            },
        },        
        methods: {
            handleMouseDown(evt: MouseEvent) {
                this.updateState(evt.pageX)
                window.addEventListener('mousemove', this.handleMouseMove)
                window.addEventListener('mouseup', this.handleMouseUp)
            },
            handleMouseMove(evt: MouseEvent) {
                this.updateState(evt.pageX)
            },
            handleMouseUp(evt: MouseEvent) {
                this.updateState(evt.pageX)
                window.removeEventListener('mousemove', this.handleMouseMove)
                window.removeEventListener('mouseup', this.handleMouseUp)
            },
            updateState(pageX: number) {
                const rect = this.$refs.slider.getBoundingClientRect()
                const x = pageX - rect.left
                const width = rect.right - rect.left
                const value = this.min + clamp(x / width, 0, 1) * (this.max - this.min)
                this.$emit('updateState', value)
            },
        },
      });
</script>

<style scoped>
</style>
