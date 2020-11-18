<template>
    <div :class="['dat-gui', { closed: folded }]">
        <div v-if="foldPosition === 'top'" class="fold-ui" @click="folded=!folded">{{closeButtonText}}</div>
        <div class="group--main group">
            <ul>
                <slot></slot>
            </ul>
        </div>
        <div v-if="foldPosition === 'bottom'" class="fold-ui" @click="folded=!folded">{{closeButtonText}}</div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, provide, ref } from 'vue';
    import "../assets/scss/datgui-default.scss";
    import { ColorPickerFn } from './RowColor.vue';

    export default defineComponent({
        name: 'DatGui',
        props: {
            foldPosition: {
                type: String, // 'top' | buttom TODO: add 'right', 'left'
                default: 'bottom'
            }
        },
        setup() {
            const folded = ref(false);
            const closeButtonText = computed(() => folded.value ? 'Show controls' : 'Hide controls');

            const pickColor: ColorPickerFn = (...args) => {
                console.log('makeColor', args);
            }

            provide('pickColor', pickColor);

            return {
                folded,
                closeButtonText,
            };
        }
    });
</script>
