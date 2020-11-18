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
                type: String, // 'top' | buttom TODO: add 'right', 'left'
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
                    activePicker();
                    activePicker = null;
                }
            }

            const pickColor: HidePickerFn = (onHidePopup) => {
                //console.log('makeColor', onHidePopup);
                closeActive();
                activePicker = onHidePopup;
            }

            /*
            function pointInsideRect(pt: {x: number, y: number}, rc: {x: number, y: number, width: number, height: number}): boolean {
                return rc.x < pt.x && pt.x < rc.x + rc.width && rc.y < pt.y && pt.y < rc.y + rc.height;
            }

            function mouseup(evt: MouseEvent) {
                if (activePicker) {
                    let pt = {x: evt.clientX, y: evt.clientY};
                    let rect = root.value.getBoundingClientRect();
                    let inside = pointInsideRect(pt, rect);
                    closeActive();

                    //console.log('mouseup', {inside, pt, evt, rect});
                }
            }

            window.addEventListener('mouseup', mouseup);
            onUnmounted(() => window.removeEventListener('mouseup', mouseup));
            */

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
