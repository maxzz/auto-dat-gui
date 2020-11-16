<template>
    <li class="control-row number">
        <label>
            <span class="ctrl-label" :title="title">{{ label }}</span>
            <div class="ctrl-value">
                <Slider 
                    class="slider"
                    v-show="hasSlider"
                    :min="minValue"
                    :max="maxValue"
                    :value="currentValue"
                    @update:value="sanitizeNumber"
                />
                <input
                    class="row-input"
                    type="number"
                    :min="minValue"
                    :max="maxValue"
                    :step="stepValue"
                    v-model="currentValue"
                    @change="handleChange"
                />
            </div>
        </label>
    </li>
</template>

<script lang="ts">
    import { defineComponent, ref, computed, watch } from "vue";
    import { clamp } from "../utils/colors";
    import Slider from "./RowNumberSlider.vue";

    export default defineComponent({
        name: "RowNumber",
        components: { Slider },
        props: {
            showSlider: {
                type: Boolean,
                default: true,
            },
            min: Number,
            max: Number,
            step: Number,
            value: {
                type: [Number, String],
                required: true,
            },
            label: String,
            title: {
                type: String,
                default: null
            }
        },
        setup(props, { emit }) {
            let minValue = typeof props.min === "number" ? props.min : Number.NEGATIVE_INFINITY;
            let maxValue = typeof props.max === "number" ? props.max : Number.POSITIVE_INFINITY;
            if (minValue > maxValue) {
                [minValue, maxValue] = [maxValue, minValue];
                process.env.NODE_ENV !== "production" && console.warn("vue-dat-gui: dat-number: min > max");
            }

            const currentValue = ref(+props.value || 0);

            const hasSlider = computed(() => props.showSlider && Number.isFinite(minValue) && Number.isFinite(maxValue));
            const stepValue = computed(() => {
                if (!props.step) {
                    const val = maxValue - minValue;
                    return 10 ** Math.floor(Math.log(Math.abs(val)) / Math.LN10) / 10;
                }

                return props.step;
            });

            watch(() => props.value, () => currentValue.value = +props.value || 0);

            function sanitizeNumber(number) {
                const [min, max, step] = [ minValue, maxValue, stepValue.value ];

                let safeNumber = clamp(+number || 0, min, max);

                if (step !== 0 && Number.isFinite(step)) {
                    safeNumber = Math.round(safeNumber / step) * step;
                }
                currentValue.value = safeNumber;
                emit("update:value", safeNumber);
            }
            function handleChange(evt: InputEvent) {
                sanitizeNumber((evt.target as HTMLInputElement).value);
            }

            return {
                currentValue,
                hasSlider,
                stepValue,
                minValue,
                maxValue,

                sanitizeNumber,
                handleChange,
            }
        },
    });
</script>

<style lang="scss">
    // OK: but so far defined in DatGui: DatGui.vue

    // .dat-gui .control-row.number {
    //     .control {
    //         display: inline-flex;

    //         .slider {
    //             flex: 3;
    //         }
    //         .input {
    //             flex: 1;
    //         }
    //     }

    //     input[type="number"] {
    //         -moz-appearance: textfield;


    //         &::-webkit-inner-spin-button,
    //         &::-webkit-outer-spin-button {
    //             -webkit-appearance: none;
    //             margin: 0;
    //         }
    //     }
    // }
</style>
