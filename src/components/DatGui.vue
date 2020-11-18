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
    import { HidePickerFn } from './RowColor.vue';

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

            let activePicker: (() => void) | null = null;

            const pickColor: HidePickerFn = (onHidePopup) => {
                //console.log('makeColor', onHidePopup);
                if (activePicker) {
                    activePicker();
                    activePicker = null;
                }
                activePicker = onHidePopup;
            }

            provide('pickColor', pickColor);

            return {
                folded,
                closeButtonText,
            };
        }
    });
</script>
