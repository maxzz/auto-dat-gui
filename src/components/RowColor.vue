<template>
    <li class="control-row color" @mouseleave="onMouseLeave">
        <label>
            <span class="ctrl-label" :title="title">{{ label }}</span>
            <div class="ctrl-value" @mouseover="onMouseOver">
                <input
                    class="row-input"
                    type="text"
                    readonly
                    v-model="currentValue"
                    :style="{ 'background-color': currentValue, color: inputColor }"
                > <!-- TODO: we set readonly bacause digestProp cannot handle validation of untrusted input -->

                <RowColorPicker v-show="showPicker" :color="currentValue" @update:color="handleChange" @update:pickerdown="onDown" />
                <!-- TODO: check popup position is inside viewport -->
                <!-- TODO: Check color contrast if background will show different colors -->
                <!-- TODO: show current and previous colors -->
            </div>
        </label>
    </li>
</template>

<script lang="ts">
    import { computed, defineComponent, ref, watch } from "vue";
    import RowColorPicker from "./RowColorPicker.vue";
    import { color4Background } from '../utils/colors';

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

            let isPickerDown = false;

            const handleChange = (e) => {
                currentValue.value = e.hex;
                emit("update:color", currentValue.value);
            };

            const showPicker = ref(false);

            function onMouseOver() {
                showPicker.value = true;
                window.addEventListener('keydown', onKeyDown);
            }
            function onMouseLeave() {
                if (!isPickerDown) {
                    showPicker.value = false;
                    window.removeEventListener('keydown', onKeyDown);
                }
            }
            function onKeyDown(event) {
                if (event.key === 'Enter' || event.key === 'Escape') {
                    showPicker.value = false;
                }
            }

            function onDown(isDown: boolean) {
                isPickerDown = isDown;
            }

            const inputColor = computed(() => { // TODO: does not work well with alpha close to 0.
                return color4Background(currentValue.value);
            });

            return {
                currentValue,
                handleChange,
                showPicker,
                onMouseOver,
                onMouseLeave,
                inputColor,
                onDown,
            };
        },
    });
</script>
