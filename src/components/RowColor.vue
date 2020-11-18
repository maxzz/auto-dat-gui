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
                    v-show="showPopup"
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
    import { computed, defineComponent, inject, onMounted, ref, watch } from "vue";
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
            const elColorRow = ref<HTMLElement>(null);
            const showPopup = ref(false);
            let isColorSelectorDown = false;

            function onHidePopup() {
                showPopup.value = false;
                window.removeEventListener('keydown', onKeyDown);
            }

            function onShowPopup() {
                showPopup.value = !showPopup.value;

                if (showPopup.value) {
                    window.addEventListener('keydown', onKeyDown);
                    emit("update:selectColor", { testColorSelectEvent: 5 });
                    pickColor(onHidePopup);
                } else {
                    pickColor(null);
                }
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

            // function onMouseOver() {
            //     showPopup.value = true;
            //     window.addEventListener('keydown', onKeyDown);
            // }
            // function onMouseLeave() {
            //     if (!isColorSelectorDown) {
            //         showPopup.value = false;
            //         window.removeEventListener('keydown', onKeyDown);
            //     }
            // }

            const inputColor = computed(() => { // TODO: does not work well with alpha close to 0.
                return color4Background(currentValue.value);
            });

            return {
                currentValue,
                onColorChange,
                showPopup,
                // onMouseOver,
                // onMouseLeave,
                onKeyDown,
                inputColor,
                onColorSelectorDown,
                onShowPopup,
                elColorRow,
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