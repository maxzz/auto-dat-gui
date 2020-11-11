<template>
    <li class="control-row number">
        <label ref="label">
            <span class="ctrl-label">{{ label }}</span>
            <div class="ctrl-value">
                <Slider 
                    class="slider"
                    v-show="hasSlider"
                    :min="minValue"
                    :max="maxValue"
                    :value="currentValue"
                    @updateState="sanitizeNumber"
                />
                <!-- <Slider v-model:value="currentValue" /> -->
                <input
                    class="ctrl-value"
                    type="number"
                    ref="input"
                    :min="minValue"
                    :max="maxValue"
                    :step="stepValue"
                    v-model="currentValue"
                    @change="handleChange"
                />
            </div>
            {{currentValue}}
        </label>
    </li>
</template>

<script lang="ts">
    import { defineComponent, ref, computed, watch } from "vue";
    import toNumber from "lodash.tonumber";
    import clamp from "lodash.clamp";
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
        },
        model: {
            prop: "value",
            event: "change",
        },
        setup(props, { emit }) {
            let minValue = typeof props.min === "number" ? props.min : Number.NEGATIVE_INFINITY;
            let maxValue = typeof props.max === "number" ? props.max : Number.POSITIVE_INFINITY;
            if (minValue > maxValue) {
                [minValue, maxValue] = [maxValue, minValue];
                process.env.NODE_ENV !== "production" && console.warn("vue-dat-gui: dat-number: min > max");
            }

            const currentValue = ref(toNumber(props.value) || 0);

            const hasSlider = computed(() => props.showSlider && Number.isFinite(minValue) && Number.isFinite(maxValue));
            const stepValue = computed(() => {
                if (!props.step) {
                    const val = maxValue - minValue;
                    return 10 ** Math.floor(Math.log(Math.abs(val)) / Math.LN10) / 10;
                }

                return toNumber(props.step);
            });

            watch(() => props.value, () => currentValue.value = toNumber(props.value));

            function sanitizeNumber(number) {
                const [min, max, step] = [ minValue, maxValue, stepValue.value ];

                let safeNumber = clamp(toNumber(number), min, max);

                if (step !== 0 && Number.isFinite(step)) {
                    safeNumber = Math.round(safeNumber / step) * step;
                }
                currentValue.value = safeNumber;
                emit("change", safeNumber);
            }
            function handleChange(evt) {
                this.sanitizeNumber(evt.target.value);
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
    .dat-gui .control-row.number {
        .control {
            display: inline-flex;

            .slider {
                flex: 3;
            }
            .input {
                flex: 1;
            }
        }

        input[type="number"] {
            -moz-appearance: textfield;


            &::-webkit-inner-spin-button,
            &::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
        }
    }
</style>