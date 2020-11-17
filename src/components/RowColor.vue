<template>
    <li class="control-row color">
        <label>
            <span class="ctrl-label" :title="title">{{ label }}</span>
            <div class="ctrl-value">
                <input
                    class="row-input"
                    type="text"
                    readonly
                    v-model="currentValue"
                > <!-- TODO: we set readonly bacause digestProp cannot handle validation of untrusted input -->

                <div class="current-color" :style="{ 'background-color': currentValue, color: inputColor }" @click="selectColor">
                </div>

                <RowColorPicker v-show="showPicker" :color="currentValue" @update:color="handleChange" @update:pickerdown="onDown" @keydown="onKeyDown" />
                <!-- TODO: check popup position is inside viewport -->
                <!-- TODO: Check color contrast if background will show different colors -->
                <!-- TODO: show current and previous colors -->

            </div>
        </label>
    </li>
</template>

<script lang="ts">
    import { computed, defineComponent, onMounted, ref, watch } from "vue";
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
        setup(props, ctx) {
            const currentValue = ref(props.color);
            watch(() => props.color, () => currentValue.value = props.color);

            let isPickerDown = false;

            const handleChange = (e) => {
                currentValue.value = e.hex;
                ctx.emit("update:color", currentValue.value);
            };

            const showPicker = ref(false);

            console.log('global', { parent });
            // parent is Window on JS global

            onMounted(() => {
                console.log("pp", ctx.attrs.parent);
                // undefined
                console.log({ parent });
                // parent is Window on JS global
            });

            // function onMouseOver() {
            //     showPicker.value = true;
            //     window.addEventListener('keydown', onKeyDown);
            // }
            // function onMouseLeave() {
            //     if (!isPickerDown) {
            //         showPicker.value = false;
            //         window.removeEventListener('keydown', onKeyDown);
            //     }
            // }
            function onKeyDown(event) {
                if (event.key === 'Enter' || event.key === 'Escape') {
                    showPicker.value = false;
                }
            }

            function onDown(isDown: boolean) {
                isPickerDown = isDown;
            }

            function selectColor() {
                showPicker.value = !showPicker.value;
                showPicker.value && ctx.emit("update:selectColor", { x: 5 });
            }

            const inputColor = computed(() => { // TODO: does not work well with alpha close to 0.
                return color4Background(currentValue.value);
            });

            return {
                currentValue,
                handleChange,
                showPicker,
                // onMouseOver,
                // onMouseLeave,
                onKeyDown,
                inputColor,
                onDown,
                selectColor,
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
        //flex: 1;
        //background-color: green;
    }
</style>