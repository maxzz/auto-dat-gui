<template>
    <li class="control-row color" ref="elColorRow">
        <label>
            <span class="ctrl-label" :title="title">{{ label }}</span>
            <div class="ctrl-value">
                <input
                    class="row-input"
                    type="text"
                    readonly
                    v-model="currentValue"
                > <!-- TODO: we set readonly bacause digestProp cannot handle validation of untrusted input -->

                <div
                    class="current-color"
                    :style="{ 'background-color': currentValue, color: inputColor }"
                    @click="onShowPopup">
                </div>

                <RowColorPicker
                    v-show="popupVisible"
                    ref="elPopup"
                    :color="currentValue"
                    @update:color="onColorChange"
                    @update:pickerdown="onColorSelectorDown"
                    @keydown="onKeyDown"
                />
                <!-- TODO: check popup position is inside viewport -->
                <!-- TODO: Check color contrast if background will show different colors -->
                <!-- TODO: show current and previous colors -->
            </div>
        </label>
    </li>
</template>

<script lang="ts">
    import { ComponentPublicInstance, computed, defineComponent, inject, onMounted, onUnmounted, Ref, ref, watch } from "vue";
    import RowColorPicker from "./RowColorPicker.vue";
    import { color4Background } from '../utils/colors';

    export type HidePickerFn = (onHidePopup: () => void | null) => void;

    export default defineComponent({
        name: "RowColor",
        props: {
            color: {
                type: String,
                default: '#00f' // TODO: handle color names like 'blue', 'red', and so on.
            },
            label: String,
            title: String,
        },
        components: { RowColorPicker },
        setup(props, { emit }) {
            const currentValue = ref(props.color);
            watch(() => props.color, () => currentValue.value = props.color);

            const pickColor = inject<HidePickerFn>('pickColor');
            const uiRoot = inject<Ref<HTMLElement>>('uiRoot');
            const elColorRow = ref<HTMLElement>(null);
            const elPopup = ref<ComponentPublicInstance>(null);
            const popupVisible = ref(false);
            let isColorSelectorDown = false;

            // function hidePopup(): void {
            //     popupVisible.value = false;
            //     window.removeEventListener('keydown', onKeyDown);
            // }

            // function showPopup(show: boolean): void {
            //     if (show) {
            //         window.addEventListener('keydown', onKeyDown);
            //         emit("update:selectColor", { testColorSelectEvent: 5 });
            //         pickColor(onHidePopup);
            //     } else {
            //         pickColor(null);
            //     }
            // }

            function onHidePopup() {
                popupVisible.value = false;
                window.removeEventListener('keydown', onKeyDown);
            }

            function onShowPopup() {

                console.log('\n------- onShowPopup before', popupVisible.value);
                popupVisible.value = !popupVisible.value;

                if (popupVisible.value) {
                    window.addEventListener('keydown', onKeyDown);
                    emit("update:selectColor", { testColorSelectEvent: 5 });
                    pickColor(onHidePopup);
                } else {
                    pickColor(null);
                }
                console.log('------- onShowPopup done', popupVisible.value);

            }

            function onKeyDown(event) {
                if (event.key === 'Enter' || event.key === 'Escape') {
                    pickColor(null);
                }
            }

            const onColorChange = (e) => {
                currentValue.value = e.hex;
                emit("update:color", currentValue.value);
            };

            function onColorSelectorDown(isDown: boolean) {
                isColorSelectorDown = isDown;
            }



            function pointInsideRect(pt: {x: number, y: number}, rc: {x: number, y: number, width: number, height: number}): boolean {
                return rc.x < pt.x && pt.x < rc.x + rc.width && rc.y < pt.y && pt.y < rc.y + rc.height;
            }

            function mouseup(evt: MouseEvent) {
                if (popupVisible.value) {
                    let pt = {x: evt.clientX, y: evt.clientY};
                    let outsideRoot = !pointInsideRect(pt, uiRoot.value.getBoundingClientRect());
                    let insidePopup = pointInsideRect(pt, elPopup.value.$el.getBoundingClientRect());
                    if (outsideRoot || !insidePopup) {
                        console.log('mouseup', popupVisible.value);
                        pickColor(null);
                    }
                }
            }

            window.addEventListener('mouseup', mouseup);
            onUnmounted(() => window.removeEventListener('mouseup', mouseup));



            // function onMouseOver() {
            //     popupVisible.value = true;
            //     window.addEventListener('keydown', onKeyDown);
            // }
            // function onMouseLeave() {
            //     if (!isColorSelectorDown) {
            //         popupVisible.value = false;
            //         window.removeEventListener('keydown', onKeyDown);
            //     }
            // }

            const inputColor = computed(() => { // TODO: does not work well with alpha close to 0.
                return color4Background(currentValue.value);
            });

            return {
                currentValue,
                onColorChange,
                popupVisible,
                // onMouseOver,
                // onMouseLeave,
                onKeyDown,
                inputColor,
                onColorSelectorDown,
                onShowPopup,
                elColorRow,
                elPopup,
            };
        },
    });
</script>

<style lang="scss">
    @import "../assets/scss/variables.scss";

    .current-color {
        //display: inline-block;
        width: $row-height - 6;
        height: $row-height - 6;
        border-radius: 5px;
        margin-left: .4em;
        border: 1px solid white;
        //flex: 1;
        //background-color: green;
    }
</style>