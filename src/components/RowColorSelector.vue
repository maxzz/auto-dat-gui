<template>
    <li class="control-row color">
        <label>
            <span class="ctrl-label" :title="title">{{ label }}</span>
            <div class="ctrl-value">
                <input type="checkbox" :checked="currentValue" @change="handleChange" />
            </div>
        </label>
    </li>
</template>

<script lang="ts">
    import { defineComponent, ref, watch } from "vue";

    function toPercent(n, precision = 3) {
        const num = (n * 100).toPrecision(precision | 0);
        return `${num}%`;
    }

    function getColorType(color) {
        if (color[0] === "#") {
            return "hex";
        }
        if (color.indexOf("rgb") === 0) {
            return "rgba";
        }
        if (color.indexOf("hsl") === 0) {
            return "hsla";
        }
        console.log(`${color} is not valid color value!`);
    }

    function simplifyHex(val) {
        return val.replace(/#([0-9a-f])\1([0-9a-f])\2([0-9a-f])\3([0-9a-f]?)\4$/, "#$1$2$3$4");
    }

    export default defineComponent({
        name: "RowColorSelector",
        props: {
            checked: Boolean,
            label: String,
            title: {
                type: String,
                default: null
            },
        },
        setup(props, { emit }) {
            const currentValue = ref(props.checked);

            watch(() => props.checked, () => currentValue.value = props.checked);

            const handleChange = () => {
                currentValue.value = !currentValue.value;
                emit("update:checked", currentValue.value);
            };

            return {
                currentValue,
                handleChange,
            };
        },
    });
</script>

<style lang="scss">
</style>
