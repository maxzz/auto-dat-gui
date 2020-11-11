<template>
    <span ref="slider" class="slider" :style="{'background-size': `${progressWidth}% 100%`}" @mousedown="handleMouseDown" />
</template>

<script lang="ts">
    import { defineComponent, ref, watch, computed } from "vue";
    import toNumber from "lodash.tonumber";
    import clamp from "lodash.clamp";

    export default defineComponent({
        name: 'Slider',
        props: {
            value: {
                type: [Number, String],
                default: 0,
            },
            min: {
                type: Number,
                default: 0,
            },
            max: {
                type: Number,
                default: 100,
            }
        },
        setup(props) {
            let currentValue = ref(+props.value || 0);

            watch(() => props.value, () => currentValue.value = toNumber(props.value));
            let progressWidth = computed(() => clamp((currentValue.value - props.min) * 100 / (props.max - props.min), 0, 100));

            return {
                progressWidth,
            };
        },
        methods: {
            handleMouseDown(evt: MouseEvent) {
                if (evt.button !== 0) {
                    return;
                }

                this.updateState(evt.pageX);

                window.addEventListener('mousemove', this.handleMouseMove);
                window.addEventListener('mouseup', this.handleMouseUp);
            },
            handleMouseUp(evt: MouseEvent) {
                this.updateState(evt.pageX);

                window.removeEventListener('mousemove', this.handleMouseMove);
                window.removeEventListener('mouseup', this.handleMouseUp);
            },
            handleMouseMove(evt: MouseEvent) {
                this.updateState(evt.pageX);
            },
            updateState(pageX: number) {
                const rect = this.$refs.slider.getBoundingClientRect();
                const x = pageX - rect.left;
                const width = rect.right - rect.left;
                const value = this.min + clamp(x / width, 0, 1) * (this.max - this.min);
                this.$emit('update:value', value);
            },
        },
      });
</script>

<style lang="scss" scoped>
    $background-color: #1a1a1a;
    $input-background-color: lighten($background-color, 8.5%);
    $number-color: #2FA1D6;

    .slider {
        display: block;
        height: 25px;
        cursor: ew-resize;

        background-color: $input-background-color;
        background-image: linear-gradient(90deg, $number-color, $number-color);
        background-size: 0% 100%;
        background-repeat: no-repeat;

        border: 1px solid $background-color;
    }
</style>
