<template>
    <div ref="slider" class="slider" :style="{'background-size': `${progressWidth}% 100%`}" @mousedown="handleMouseDown"></div>
</template>

<script lang="ts">
    import { defineComponent, ref, watch, computed } from "vue";
    import { clamp } from "../utils/colors";

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
        setup(props, { emit }) {
            const currentValue = ref(+props.value || 0);

            watch(() => props.value, () => currentValue.value = +props.value || 0);
            const progressWidth = computed(() => clamp((currentValue.value - props.min) * 100 / (props.max - props.min), 0, 100));

            const handleMouseDown = (evt: MouseEvent) => {
                if (evt.button === 0) {
                    updateState(evt.pageX);
                    window.addEventListener('mousemove', handleMouseMove);
                    window.addEventListener('mouseup', handleMouseUp);
                }
            }
            const handleMouseUp = (evt: MouseEvent) => {
                updateState(evt.pageX);
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
            }
            const handleMouseMove = (evt: MouseEvent) => {
                updateState(evt.pageX);
            }

            const slider = ref<HTMLSpanElement>(null);
            
            function updateState(pageX: number) {
                const rect = slider.value.getBoundingClientRect();
                const x = pageX - rect.left;
                const width = rect.right - rect.left;
                const value = props.min + clamp(x / width, 0, 1) * (props.max - props.min);
                emit('update:value', value);
            }

            return {
                slider,
                progressWidth,
                handleMouseDown,
            };
        }
      });
</script>

<style lang="scss" scoped>
</style>
