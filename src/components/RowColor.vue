<template>
    <li class="control-row color" @mouseleave="onMouseLeave">
        <label>
            <span class="ctrl-label" :title="title">{{ label }}</span>
            <div class="ctrl-value" @mouseover="onMouseOver">
                <input type="text" v-model="currentValue" readonly :style="{ 'background-color': currentValue, color: inputColor }"> <!-- TODO: digestProp cannot handle validation of untrusted input -->
                <RowColorPicker v-show="showPicker" :color="currentValue" @update:color="handleChange" /> <!-- TODO: check popup position is inside viewport -->
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
            title: {
                type: String,
                default: null
            },
        },
        components: { RowColorPicker },
        setup(props, { emit }) {
            const currentValue = ref(props.color);

            watch(() => props.color, () => currentValue.value = props.color);

            const handleChange = (e) => {
                currentValue.value = e.hex;
                emit("update:color", currentValue.value);
            };

            const showPicker = ref(false);

            function onMouseOver() {
                showPicker.value = true;
                window.addEventListener('keydown', onKeyDown)
            }
            function onMouseLeave() {
                showPicker.value = false;
                //console.log('removed');
                window.removeEventListener('keydown', onKeyDown)
            }
            function onKeyDown(event) {
                if (event.key === 'Enter' || event.keyCode === 13) {
                    showPicker.value = false;
                }
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
            };
        },
    });
</script>

<style lang="scss">
    .control-row.color {
        .ctrl-value {
            //position: relative;
            // overflow: visible;
            // z-index: 1;
            display: block; // 'block' is to position color-picker with default 'top' position in flow but defined 'right'

            input[type="text"] {
                text-align: center;
                z-index: 1;
            }

            & > div {
                width: 218px; // to fit color picker numbers
                position: absolute;
                //top: 0;
                right: 1.4em;
                
                z-index: 2;
                //opacity: .8;

            }
        }
    }
</style>
