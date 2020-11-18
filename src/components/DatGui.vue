<template>
    <div ref="root" :class="['dat-gui', { closed: folded }]">
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
    import { computed, defineComponent, provide, readonly, ref } from 'vue';
    import "../assets/scss/datgui-default.scss";
    import { HidePickerFn } from './RowColor.vue';

    export default defineComponent({
        name: 'DatGui',
        props: {
            foldPosition: {
                type: String, // 'top' | buttom //TBD: add vertical 'right', 'left'.
                default: 'bottom'
            }
        },
        setup() {
            const root = ref<HTMLElement>(null);

            const folded = ref(false);
            const closeButtonText = computed(() => folded.value ? 'Show controls' : 'Hide controls');

            let activePicker: (() => void) | null = null;

            function closeActive() {
                if (activePicker) {
                    console.log('GUI: activePicker() before');
                    activePicker();
                    console.log('GUI: activePicker() done');
                    activePicker = null;
                }
            }

            const pickColor: HidePickerFn = (onHidePopup) => {
                closeActive();
                activePicker = onHidePopup;
            }

            provide('pickColor', pickColor);
            provide('uiRoot', readonly(root));

            return {
                root,
                folded,
                closeButtonText,
            };
        }
    });
</script>
